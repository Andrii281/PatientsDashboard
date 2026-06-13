from app.domain.interfaces.prescriptions_service import IPrescriptionsService
from app.domain.interfaces.prescriptions_repository import IPrescriptionsRepository

class PrescriptionsService(IPrescriptionsService):
    def __init__(self, prescriptions_repository: IPrescriptionsRepository):
        self.prescriptions_repository = prescriptions_repository
        
    
    def get_by_admission_id(self, admission_id: int):
        unique_prescriptions = []
        unique_drugs = []
        
        prescriptions = self.prescriptions_repository.get_by_admission_id(admission_id)
        
        for prescription in prescriptions:
            drug = prescription.drug
            if drug in unique_drugs:
                continue
            
            unique_prescriptions.append(prescription)
            unique_drugs.append(drug)

        return unique_prescriptions