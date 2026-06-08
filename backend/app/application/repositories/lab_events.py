from app.domain.interfaces.lab_events_repository import ILabEventsRepository
from app.infrastructures.db.database import Database
from sqlalchemy import select
from sqlalchemy.orm import selectinload

from app.infrastructures.db.models.lab_events import LabEventsModel
from app.infrastructures.db.models.lab_items import LabItemsModel

class LabEventsRepository(ILabEventsRepository):
    def __init__(self, db: Database):
        self.db = db
        
    
    def get_by_admission_id(self, admission_id: int):
        with self.db.get_sync_session() as session:
            query = (
                select(LabEventsModel)
                .where(LabEventsModel.hamd_id == admission_id)
                .options(selectinload())
            )
            
            result = session.execute(query)
            return result.scalars().all()