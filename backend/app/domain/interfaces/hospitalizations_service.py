from abc import ABC, abstractmethod

class IHospitalizationsService(ABC):
    @abstractmethod
    def get_all_patients_hospitalisations(self):
        pass