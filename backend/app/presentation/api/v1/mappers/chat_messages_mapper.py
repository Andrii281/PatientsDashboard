from app.presentation.api.v1.schemas.dtos import SendMesageDTO
from app.domain.entities.chat_messages import CreateChatMessageEntity

class ChatMessagesRequestMapper():
    def to_entity(self, dto: SendMesageDTO):
        return CreateChatMessageEntity(
            conversation_id = dto.conversationId,
            message = dto.message,
            author = dto.author
        )