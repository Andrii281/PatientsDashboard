from uuid import UUID
from app.domain.entities.base import BaseEntity

class ChatMessagesEntity(BaseEntity):
    message_id: UUID
    
    conversation_id: UUID
    
    message: str
    
    author: str


class CreateChatMessageEntity(BaseEntity):
    conversation_id: UUID
    
    message: str
    
    author: str