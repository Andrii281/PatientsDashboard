from app.domain.interfaces.lab_events_repository import ILabEventsRepository
from app.infrastructures.db.database import Database
from sqlalchemy import select
from sqlalchemy.orm import selectinload

from app.infrastructures.db.models.lab_events import LabEventsModel
from app.infrastructures.db.models.lab_items import LabItemsModel #fix
from app.infrastructures.db.mappers.lab_events_mapper import LabEventsDBMapper

class LabEventsRepository(ILabEventsRepository):
    def __init__(self, db: Database):
        self.db = db
        self.mapper = LabEventsDBMapper()
        
    
    def get_by_admission_id(self, admission_id: int):
        with self.db.get_sync_session() as session:
            query = (
                select(LabEventsModel)
                .where(LabEventsModel.hamd_id == admission_id)
            )
            
            result = session.execute(query)
            lab_evcents = result.scalars().all()
            
            return [self.mapper.to_entity(lab_event) for lab_event in lab_evcents]