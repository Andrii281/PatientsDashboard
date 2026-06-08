from abc import ABC, abstractmethod

class ILabEventsService(ABC):
    @abstractmethod
    def get_by_admission_id(self, admission_id: int):
        pass