from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import *

database_url = "mysql+pymysql://root:Jahnavi123@localhost:3306/userreg"

engine = create_engine(database_url)
SessionLocal = sessionmaker(bind=engine, autocommit=False, autoflush=False,)

Base = declarative_base()
