from app.infrastructures.db.database import Database
from sqlalchemy import select
from sqlalchemy.orm import selectinload

from app.infrastructures.db.models.patients import PatientsModel
from app.infrastructures.db.models.admissions import AdmissionsModel #fix

from app.domain.interfaces.patients_repository import IPatientsRepository
from app.infrastructures.db.mappers.patients_db_mapper import PatientsDBMapper

class PatientsRepository(IPatientsRepository):
    def __init__(self, db: Database):
        self.db = db
        self.mapper = PatientsDBMapper()
        
    
    def get_all(self):
        with self.db.get_sync_session() as session:
            query = (
                select(PatientsModel)
                .options(selectinload(PatientsModel.admissions))
            )
            result = session.execute(query)
            patients = result.scalars().all()
            
            return [self.mapper.to_entity(patient) for patient in patients]