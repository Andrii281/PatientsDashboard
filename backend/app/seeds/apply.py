import os
from dotenv import load_dotenv
from pydantic import PostgresDsn

from app.seeds.seed_patients import seed_patients
from app.seeds.seed_admissions import seed_admissions
from app.infrastructures.db.database import Database
from app.infrastructures.db.models.base import BaseModel

load_dotenv()

db_username = os.getenv("DB_USERNAME")
db_password = os.getenv("DB_PASSWORD")
db_host = os.getenv("DB_HOST", "localhost")
db_port = int(os.getenv("DB_PORT"))
db_database = os.getenv("DB_DATABASE")

db_url = PostgresDsn.build(
    scheme="postgresql",
    username=db_username,
    password=db_password,
    host=db_host,
    port=db_port,
    path=db_database
)

db = Database(str(db_url))
BaseModel.metadata.create_all(db.sync_engine)

with db.get_sync_session() as session:
    seed_patients(session)
    seed_admissions(session)