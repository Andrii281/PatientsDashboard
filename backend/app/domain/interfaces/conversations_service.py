from abc import ABC, abstractmethod

from app.domain.dtos.send_mesage_request import SendMesageRequestDTO

class IConversationsService(ABC):
    @abstractmethod
    def get_conversation(self, admission_id: int):
        pass
    
    @abstractmethod
    def create_message(self, message: SendMesageRequestDTO):
        pass