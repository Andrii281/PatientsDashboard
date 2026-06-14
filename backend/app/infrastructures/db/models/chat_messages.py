import uuid
from sqlalchemy import Integer, ForeignKey, String, Text
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy.dialects.postgresql import UUID
from app.infrastructures.db.models.base import Base

class ChatMessagesModel(Base):
    __tablename__ = "chat-messages"
    
    message_id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    
    conversation_id: Mapped[uuid.UUID] = mapped_column(UUID, ForeignKey("chat-conversations.conversation_id"), nullable=False, index=True)
    
    text: Mapped[str] = mapped_column(Text, nullable=False)
    
    author: Mapped[str] = mapped_column(String(4), nullable=False)
    
    conversation: Mapped["ChatConversationsModel"] = relationship(
        "ChatConversationsModel",
        back_populates="messages"
    )