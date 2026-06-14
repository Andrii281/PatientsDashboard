from abc import ABC, abstractmethod

from app.domain.entities.chat_messages import CreateChatMessageEntity

class IChatMessagesRepository(ABC):
    @abstractmethod
    def create(
        self, 
        message: CreateChatMessageEntity
    ):
        pass