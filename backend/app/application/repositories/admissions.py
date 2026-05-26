from app.infrastructures.db.database import Database

from app.domain.interfaces.admissions_repository import IAdmissionsRepository

class AdmissionsRepository(IAdmissionsRepository):
    def __init__(self, db: Database):
        self.db: Database  = db
        
        
    def get_all(self):
        pass