import csv
from sqlalchemy.orm import Session
from app.infrastructures.db.models.prescriptions import PrescriptionsModel

PRESCRIPTIONS_PATH = "app/seeds/prescriptions.csv"

def seed_prescriptions(session: Session):
    prescriptions: list[PrescriptionsModel] = []
    
    with open(PRESCRIPTIONS_PATH, newline="", encoding="utf-8") as file:
        reader = csv.DictReader(file)
        
        for row in reader:
            prescriptions.append(PrescriptionsModel(
                subject_id=row["subject_id"],
                hadm_id=row["hadm_id"],
                pharmacy_id=row["pharmacy_id"],
                poe_id=row["poe_id"] or None,
                poe_seq=row["poe_seq"] or None,
                order_provider_id=row["order_provider_id"] or None,
                starttime=row["starttime"],
                stoptime=row["stoptime"] or None,
                drug_type=row["drug_type"],
                drug=row["drug"],
                formulary_drug_cd=row["formulary_drug_cd"],
                gsn=row["gsn"] or None,
                ndc=row["ndc"] or None,
                prod_strength=row["prod_strength"] or None,
                form_rx=row["form_rx"] or None,
                dose_val_rx=row["dose_val_rx"] or None,
                dose_unit_rx=row["dose_unit_rx"] or None,
                form_val_disp=row["form_val_disp"] or None,
                form_unit_disp=row["form_unit_disp"] or None,
                doses_per_24_hrs=row["doses_per_24_hrs"] or None,
                route=row["route"] or None,
            ))
            
    session.add_all(prescriptions)
    session.commit()