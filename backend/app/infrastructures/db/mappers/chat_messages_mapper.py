from typing import final
from dataclasses import dataclass

from app.domain.entities.chat_messages import ChatMessagesEntity, CreateChatMessageEntity
from app.infrastructures.db.models.chat_messages import ChatMessagesModel

@final
@dataclass(frozen=True, slots=True)
class ChatMessagesDBMapper():
    def to_model(self, entity: CreateChatMessageEntity):
        return ChatMessagesModel(
            conversation_id=entity.conversation_id,
            text=entity.text,
            author=entity.author
        )
        
    def to_entity(self, model: ChatMessagesModel):
        return ChatMessagesEntity(
            message_id=model.message_id,
            conversation_id=model.conversation_id,
            text=model.text,
            author=model.author
        )