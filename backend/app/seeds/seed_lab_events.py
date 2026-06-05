import csv
from sqlalchemy.orm import Session
from app.infrastructures.db.models.lab_events import LabEventsModel

LAB_EVENTS_PATH = "app/seeds/labevents.csv"

def seed_lab_events(session: Session):
    lab_events: list[LabEventsModel] = []
    
    with open(LAB_EVENTS_PATH, newline="", encoding="utf-8") as file:
        reader = csv.DictReader(file)
        
        for row in reader:
            raw_hadm_id = row["hadm_id"].strip()
            hamd_id = None if raw_hadm_id in ("", "NULL") else int(raw_hadm_id)

            raw_storetime = row["storetime"].strip()
            storetime = None if raw_storetime in ("", "NULL") else raw_storetime

            lab_events.append(LabEventsModel(
                lab_event_id = row["labevent_id"],
                subject_id = row["subject_id"],
                hamd_id = hamd_id,
                specimen_id = row["specimen_id"],
                item_id = row["itemid"],
                order_provider_id = row["order_provider_id"],
                charttime = row["charttime"],
                storetime = storetime,
                value = row["value"],
                valuenum = row["valuenum"],
                valueuom = row["valueuom"],
                ref_range_lower = row["ref_range_lower"],
                ref_range_upper = row["ref_range_upper"],
                flag = row["flag"],
                priority = row["priority"],
                comments = row["comments"],
            ))
    
    session.add_all(lab_events)
    session.commit()