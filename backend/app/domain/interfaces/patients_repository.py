from abc import ABC, abstractmethod

class IPatientsRepository(ABC):
    @abstractmethod
    def get_all(self):
        pass