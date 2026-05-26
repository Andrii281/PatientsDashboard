import csv
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.infrastructures.db.models.patients import PatientsModel

PATIENTS_PATH = "app/seeds/patients.csv"

def seed_patients(session: Session):
    existing_ids = set(session.scalars(select(PatientsModel.subject_id)).all())
    patients: list[PatientsModel] = []

    with open(PATIENTS_PATH, newline="", encoding="utf-8") as file:
        reader = csv.DictReader(file)

        for row in reader:
            subject_id = int(row["subject_id"])
            if subject_id in existing_ids:
                continue

            patients.append(
                PatientsModel(
                    subject_id=subject_id,
                    first_name=row["first_name"],
                    last_name=row["last_name"],
                    gender=row["gender"],
                    anchor_age=int(row["anchor_age"]),
                    anchor_year=int(row["anchor_year"]),
                    anchor_year_group=row["anchor_year_group"],
                    dod=row["dod"] or None,
                )
            )

    session.add_all(patients)
    session.commit()