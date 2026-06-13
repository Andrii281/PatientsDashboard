import csv
from sqlalchemy.orm import Session
from app.infrastructures.db.models.lab_events import LabEventsModel

LAB_EVENTS_PATH = "app/seeds/labevents.csv"

def seed_lab_events(session: Session):
    lab_events: list[LabEventsModel] = []
    
    with open(LAB_EVENTS_PATH, newline="", encoding="utf-8") as file:
        reader = csv.DictReader(file)
        
        for row in reader:
            lab_events.append(LabEventsModel(
                lab_event_id = row["labevent_id"],
                subject_id = row["subject_id"],
                hadm_id = row["hadm_id"] or None,
                specimen_id = row["specimen_id"],
                item_id = row["itemid"],
                order_provider_id = row["order_provider_id"] or None,
                charttime = row["charttime"],
                storetime = row["storetime"] or None,
                value = row["value"] or None,
                valuenum = row["valuenum"] or None,
                valueuom = row["valueuom"] or None,
                ref_range_lower = row["ref_range_lower"] or None,
                ref_range_upper = row["ref_range_upper"] or None,
                flag = row["flag"] or None,
                priority = row["priority"] or None,
                comments = row["comments"] or None,
            ))
    
    session.add_all(lab_events)
    session.commit()