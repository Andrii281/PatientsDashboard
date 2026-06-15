from app.presentation.api.v1.schemas.dtos import SendMesageDTO
from app.domain.entities.chat_messages import ChatMessagesEntity, CreateChatMessageEntity
from app.domain.entities.chat_conversations import ChatConversationsEntity
from app.presentation.api.v1.schemas.responses import ChatMessagesResponseSchema, ChatConversationsResponseSchema, SendMessageResponseSchema


class ConversationsMapper():
    def get_conversation_to_response(self, conversation: ChatConversationsEntity):
        return ChatConversationsResponseSchema(
            conversationId = conversation.conversation_id,
            messages = [
                ChatMessagesResponseSchema(
                    messageId=message.message_id,
                    text=message.text,
                    author=message.author
                ) 
                for message in conversation.messages
            ]
        )
        
    
    def send_message_to_response(self, message: ChatMessagesEntity):
        return SendMessageResponseSchema(
            conversationId=message.conversation_id,
            message=ChatMessagesResponseSchema(
                messageId=message.message_id,
                text=message.text,
                author=message.author
            )
        )
        
        
    def send_message_to_entity(self, dto: SendMesageDTO):
        return CreateChatMessageEntity(
            conversation_id = dto.conversationId,
            text = dto.text,
            author = dto.author
        )