import uuid
from sqlalchemy import Integer, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy.dialects.postgresql import UUID
from app.infrastructures.db.models.base import Base

class ChatConversationsModel(Base):
    __tablename__ = "chat-conversations"
    
    conversation_id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    
    hadm_id: Mapped[int] = mapped_column(Integer, ForeignKey("admissions.hadm_id"), nullable=False, index=True)
    
    messages: Mapped[list["ChatMessagesModel"]] = relationship(
        "ChatMessagesModel",
        back_populates="conversation"
    )