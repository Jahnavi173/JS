from fastapi import FastAPI, Depends, status, HTTPException
import models
import schemas
import hashing
import authorise
from database import engine, SessionLocal, Session


app = FastAPI()


models.Base.metadata.create_all(engine)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.post('/login_user')
def Login_User(r: schemas.userlogin, db: Session = Depends(get_db)):
    db_user = db.query(models.user_login).filter(
        models.user_login.User_email == r.User_email).first()
    if not db_user:
        raise HTTPException(status_code=401, detail="Invalid email")
    if (hashing.Hash.verify(r.Iser_password, db_user
                            .User_password) == False):
        raise HTTPException(status_code=401, detail="Wrong Password")
    access_token = authorise.create_access_token(
        data={"sub": db_user.User_email})
    return {"access_token": access_token, "token_type": "bearer", "message": "Logged in Sucessfully"}
