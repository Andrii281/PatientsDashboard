from typing import final

from app.domain.interfaces.patients_service import IPatientsService
from app.domain.interfaces.patients_repository import IPatientsRepository

@final
class PatientsService(IPatientsService):
    def __init__(self, patients_repository: IPatientsRepository):
        self.patients_repository = patients_repository
        
    
    def get_all(self):
        return self.patients_repository.get_all()