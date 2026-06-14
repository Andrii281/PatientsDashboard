from uuid import UUID
from app.domain.interfaces.chat_messages_repository import IChatMessagesRepository

from app.infrastructures.db.database import Database

from app.infrastructures.db.mappers.chat_messages_mapper import ChatMessagesDBMapper
from app.infrastructures.db.models.chat_messages import ChatMessagesModel
from app.domain.entities.chat_messages import CreateChatMessageEntity

class ChatMessagesRepository(IChatMessagesRepository):
    def __init__(self, db: Database):
        self.db = db
        self.mapper = ChatMessagesDBMapper()
        
        
    def create(
        self, 
        message: CreateChatMessageEntity
    ):
        with self.db.get_sync_session() as session:
            message_model = self.mapper.to_model(message)
            
            session.add(message_model)
            session.commit()
            session.refresh(message_model)
        
            return self.mapper.to_entity(message_model)
    
    
    def create_bot_message(
        self, 
        conversation_id: UUID, 
        text: str
    ):
        with self.db.get_sync_session() as session:
            message_model = ChatMessagesModel(                    
                conversation_id=conversation_id,
                text=text,
                author="BOT"
            )
            session.add(message_model)
            session.commit()
            session.refresh(message_model)
            
            return self.mapper.to_entity(message_model)
    