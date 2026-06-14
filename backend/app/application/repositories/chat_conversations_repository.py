from sqlalchemy import select
from app.domain.interfaces.chat_conversations_repository import IChatConversationsRepository
from app.infrastructures.db.models.chat_conversations import ChatConversationsModel
from app.infrastructures.db.models.chat_messages import ChatMessagesModel # fix

from app.infrastructures.db.database import Database
from app.infrastructures.db.mappers.chat_conversations_mapper import ChatConversationsDBMapper

class ChatConversationsRepository(IChatConversationsRepository):
    def __init__(self, db: Database):
        self.db = db
        self.mapper = ChatConversationsDBMapper()
    
    def get_by_admission_id(self, admission_id: int):
        with self.db.get_sync_session() as session:
            query = (
                select(ChatConversationsModel)
                .where(ChatConversationsModel.hadm_id == admission_id)
            )
            
            result = session.execute(query)
            converstion = result.scalars().one_or_none()
            
            if converstion == None:
                new_conversation = ChatConversationsModel(hadm_id=admission_id)
                session.add(new_conversation)
                session.commit()
                session.refresh(new_conversation)
                
                return self.mapper.to_entity(new_conversation)
            
            return self.mapper.to_entity(converstion)
        
        