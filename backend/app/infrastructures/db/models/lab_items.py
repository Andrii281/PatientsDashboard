from app.infrastructures.db.models.base import Base

from sqlalchemy import Integer, String
from sqlalchemy.orm import Mapped, mapped_column, relationship

class LabItemsModel(Base):
    __tablename__ = "d_lab-items"
    
    item_id: Mapped[int] = mapped_column(Integer, primary_key=True)
    
    label: Mapped[str] = mapped_column(String(200), nullable=False)
    
    fluid: Mapped[str] = mapped_column(String(32), nullable=False)
    
    category: Mapped[str] = mapped_column(String(32), nullable=False)
    
    lab_events: Mapped[list["LabEventsModel"]] = relationship(
        "LabEventsModel",
        back_populates="lab_item"
    )