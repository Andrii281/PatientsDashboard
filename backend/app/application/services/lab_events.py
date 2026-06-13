from typing import final

from app.domain.interfaces.lab_events_service import ILabEventsService
from app.domain.interfaces.lab_events_repository import ILabEventsRepository

@final
class LabEventsService(ILabEventsService):
    def __init__(self, lab_events_repository: ILabEventsRepository):
        self.lab_events_repository = lab_events_repository
        
    
    def get_by_admission_id(self, admission_id):
        unique_lab_events = []
        unique_labels = []
        
        lab_events = self.lab_events_repository.get_by_admission_id(admission_id)
        
        for lab_event in lab_events:
            label = lab_event.lab_item.label
            if label in unique_labels:
                continue
            unique_lab_events.append(lab_event)
            unique_labels.append(label)

        return unique_lab_events
        
        