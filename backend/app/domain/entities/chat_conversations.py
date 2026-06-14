from uuid import UUID
from app.domain.entities.base import BaseEntity
from app.domain.entities.chat_messages import ChatMessagesEntity

class ChatConversationsEntity(BaseEntity):
    conversation_id: UUID
    
    hadm_id: int 
    
    messages: list[ChatMessagesEntity]