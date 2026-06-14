from app.domain.interfaces.conversations_service import IConversationsService
from app.domain.interfaces.chat_conversations_repository import IChatConversationsRepository
from app.domain.interfaces.chat_messages_repository import IChatMessagesRepository
from app.domain.entities.chat_messages import CreateChatMessageEntity

class ConversationsService(IConversationsService):
    def __init__(
        self, 
        chat_conversations_repository: IChatConversationsRepository, 
        chat_messages_repository: IChatMessagesRepository
    ):
        self.chat_conversations_repository = chat_conversations_repository
        self.chat_messages_repository = chat_messages_repository
    
    def get_conversation(self, admission_id: int):
        chat_conversations = self.chat_conversations_repository.get_by_admission_id(admission_id)
        return chat_conversations
    
    def create_message(self, message: CreateChatMessageEntity):
        return self.chat_messages_repository.create(message)