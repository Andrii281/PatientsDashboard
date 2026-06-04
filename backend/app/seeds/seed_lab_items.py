import csv
from sqlalchemy.orm import Session
from app.infrastructures.db.models.lab_items import LabItemsModel

PATIENTS_PATH = "app/seeds/d_labitems.csv"

def seed_lab_items(session: Session):
    lab_items: list[LabItemsModel] = []
    
    with open(PATIENTS_PATH, newline="", encoding="utf-8") as file:
        reader = csv.DictReader(file)
        
        for row in reader:
            lab_items.append(LabItemsModel(
                item_id = row["itemid"],
                label = row["label"],
                fluid = row["fluid"],
                category = row["category"]
            ))
    
    session.add_all(lab_items)
    session.commit()