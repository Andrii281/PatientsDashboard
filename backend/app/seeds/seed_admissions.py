import csv
from sqlalchemy import select
from sqlalchemy.orm import Session
from app.infrastructures.db.models.admissions import AdmissionsModel

PATIENTS_PATH = "app/seeds/admissions.csv"

def seed_admissions(session: Session):
    existing_ids = set(session.scalars(select(AdmissionsModel.hadm_id)).all())
    admissions: list[AdmissionsModel] = []
    
    with open(PATIENTS_PATH, newline="", encoding="utf-8") as file:
        reader = csv.DictReader(file)
        
        for row in reader:
            hadm_id = int(row["hadm_id"])
            
            if hadm_id in existing_ids:
                continue
            
            admissions.append(AdmissionsModel(
                hadm_id=hadm_id,
                subject_id=int(row["subject_id"]),
                admittime=row["admittime"],
                dischtime=row["dischtime"],
                deathtime=row["deathtime"] or None,
                admission_type=row["admission_type"],
                admit_provider_id=row["admit_provider_id"],
                admission_location=row["admission_location"],
                discharge_location=row["discharge_location"],
                insurance=row["insurance"],
                language=row["language"] or None,
                marital_status=row["marital_status"] or None,
                race=row["race"] or None,
                edregtime=row["edregtime"] or None,
                edouttime=row["edouttime"] or None,
                hospital_expire_flag=int(row["hospital_expire_flag"])
            ))
        
        session.add_all(admissions)
        session.commit()
