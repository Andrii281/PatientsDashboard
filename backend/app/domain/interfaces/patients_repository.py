from abc import ABC, abstractmethod

# from app.domain.entities.patients import PatientsEntity

class IPatientsRepository(ABC):
    @abstractmethod
    def get_all(self):
        pass    