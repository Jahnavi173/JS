from fastapi import FastAPI, Depends, status, HTTPException
import models
import schemas
import hashing
from database import engine, SessionLocal, Session


app = FastAPI()


models.Base.metadata.create_all(engine)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.post('/signup_user')
def Signup_user(r: schemas.userreg, db: Session = Depends(get_db)):
    new_user = models.user_signup(User_name=r.User_name, User_email=r.User_email,
                                  User_password=hashing.Hash.bcrypt(r.User_password))
    db_user = db.query(models.user_signup).filter(
        models.user_signup.User_email == r.User_email).first()
    if db_user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail="Email already Registered")
    # elif "@gmail.com" not in r.User_email:
    #     return {"message": "Email format is wrong"}
    else:
        db.add(new_user)
        db.commit()
        db.refresh(new_user)
        return new_user
