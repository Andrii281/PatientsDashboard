from typing import final

from app.domain.interfaces.conversations_service import IConversationsService
from app.domain.interfaces.chat_conversations_repository import IChatConversationsRepository
from app.domain.interfaces.chat_messages_repository import IChatMessagesRepository
from app.domain.entities.chat_messages import CreateChatMessageEntity
from app.domain.interfaces.ai_agent_service import IAiAgentService
from app.domain.dtos.send_mesage_request import SendMesageRequestDTO

@final
class ConversationsService(IConversationsService):
    def __init__(
        self, 
        chat_conversations_repository: IChatConversationsRepository, 
        chat_messages_repository: IChatMessagesRepository,
        ai_agent_service: IAiAgentService
    ):
        self.chat_conversations_repository = chat_conversations_repository
        self.chat_messages_repository = chat_messages_repository
        self.ai_agent_service = ai_agent_service
    
    
    def get_conversation(self, admission_id: int):
        chat_conversations = self.chat_conversations_repository.get_by_admission_id(admission_id)
        return chat_conversations
    
    
    def create_message(self, message: SendMesageRequestDTO):
        self.chat_messages_repository.create(
            CreateChatMessageEntity(
                conversation_id=message.conversation_id,
                text=message.text,
                author=message.author
            )
        )
        
        bot_message = self.ai_agent_service.get_response(message.text)
        
        return self.chat_messages_repository.create_bot_message(
            conversation_id=message.conversation_id,
            text=bot_message
        )