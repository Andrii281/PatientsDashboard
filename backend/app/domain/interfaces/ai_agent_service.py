from abc import ABC, abstractmethod

class IAiAgentService(ABC):
    @abstractmethod
    def get_response(self, message: str):
        pass