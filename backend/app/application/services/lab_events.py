from typing import final

from app.domain.interfaces.lab_events_service import ILabEventsService
from app.domain.interfaces.lab_events_repository import ILabEventsRepository

@final
class LabEventsService(ILabEventsService):
    def __init__(self, lab_events_repository: ILabEventsRepository):
        self.lab_events_repository = lab_events_repository
        
    
    def get_by_admission_id(self, admission_id):
        return self.lab_events_repository.get_by_admission_id(admission_id)