from abc import ABC, abstractmethod

from app.domain.entities.chat_messages import ChatMessagesEntity

class IConversationsService(ABC):
    @abstractmethod
    def get_conversation(self, admission_id: int):
        pass
    
    @abstractmethod
    def create_message(self, message: ChatMessagesEntity):
        pass