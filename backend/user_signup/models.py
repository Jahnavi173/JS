from sqlalchemy import Column, Integer, String
# from sqlalchemy.ext.declarative import declarative_base
# from datetime import date
from database import Base

class user_signup(Base):

    __tablename__='signup'

    User_id = Column(Integer,primary_key= True)
    User_name = Column(String(255))
    User_email = Column(String(255))
    User_password= Column(String(255))
    