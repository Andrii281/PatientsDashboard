from app.domain.interfaces.hospitalizations_service import IHospitalizationsService

from app.domain.interfaces.patients_repository import IPatientsRepository
from app.domain.interfaces.admissions_repository import IAdmissionsRepository

class HospitalisationsService(IHospitalizationsService):
    def __init__(
        self, 
        patients_repository: IPatientsRepository, 
        admissions_repository: IAdmissionsRepository
    ):
        self.patients_repository = patients_repository
        self.admissions_repository = admissions_repository
    
    
    def get_all_patients_hospitalisations(self):
        patients = self.patients_repository.get_all()
        admissions = self.admissions_repository.get_all()
        
        