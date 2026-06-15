from dataclasses import dataclass
from typing import final

from app.domain.entities.chat_messages import ChatMessagesEntity
from app.infrastructures.db.models.chat_conversations import ChatConversationsModel
from app.domain.entities.chat_conversations import ChatConversationsEntity

@final
@dataclass(frozen=True, slots=True)
class ChatConversationsDBMapper():
    def to_entity(self, model: ChatConversationsModel):
        return ChatConversationsEntity(
            conversation_id=model.conversation_id,
            hadm_id=model.hadm_id,
            messages=[
                ChatMessagesEntity(
                    message_id=message.message_id,
                    conversation_id=message.conversation_id,
                    text=message.text,
                    author=message.author,
                ) for message in model.messages
            ]
        )