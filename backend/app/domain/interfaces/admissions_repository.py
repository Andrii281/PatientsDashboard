from abc import ABC, abstractmethod

class IAdmissionsRepository(ABC):
    @abstractmethod
    def get_all(self):
        pass