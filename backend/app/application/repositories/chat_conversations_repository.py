from sqlalchemy import select
from sqlalchemy.exc import IntegrityError

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
            conversation = session.execute(
                select(ChatConversationsModel)
                .where(ChatConversationsModel.hadm_id == admission_id)
            ).scalars().one_or_none()

            if conversation:
                return self.mapper.to_entity(conversation)

            new_conversation = ChatConversationsModel(hadm_id=admission_id)
            session.add(new_conversation)

            try:
                session.commit()
                session.refresh(new_conversation)
                return self.mapper.to_entity(new_conversation)
            except IntegrityError:
                session.rollback()
                conversation = session.execute(
                    select(ChatConversationsModel)
                    .where(ChatConversationsModel.hadm_id == admission_id)
                ).scalars().one()
                return self.mapper.to_entity(conversation)
        