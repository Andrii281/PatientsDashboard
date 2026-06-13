from app.infrastructures.db.database import Database
from sqlalchemy import select
from app.domain.interfaces.prescriptions_repository import IPrescriptionsRepository

from app.infrastructures.db.models.prescriptions import PrescriptionsModel
from app.infrastructures.db.mappers.prescriptions_mapper import PrescriptionsDBMapper

class PrescriptionsRepository(IPrescriptionsRepository):
    def __init__(self, db: Database):
        self.db = db
        self.mapper = PrescriptionsDBMapper()
    
    def get_by_admission_id(self, admission_id: int):
        with self.db.get_sync_session() as session:
            query = (
                select(PrescriptionsModel)
                .where(PrescriptionsModel.hadm_id == admission_id)
            )
            
            result = session.execute(query)
            prescriptions = result.scalars().all()
            
            return [self.mapper.to_entity(prescription) for prescription in prescriptions]
            
            
            
            