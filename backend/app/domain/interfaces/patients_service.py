from abc import ABC, abstractmethod

class IPatientsService(ABC):
    @abstractmethod
    def get_all(self):
        pass