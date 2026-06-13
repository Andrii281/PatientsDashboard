from typing import Optional
from datetime import datetime
from sqlalchemy import DateTime, Integer, Float, String, ForeignKey, Text
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.infrastructures.db.models.base import Base

class LabEventsModel(Base):
    __tablename__ = "lab-events"
    
    lab_event_id: Mapped[int] = mapped_column(Integer, primary_key=True)
    
    subject_id: Mapped[int] = mapped_column(Integer, ForeignKey("patients.subject_id"), nullable=False, index=True)
    
    hadm_id: Mapped[Optional[int]] = mapped_column(Integer, ForeignKey("admissions.hadm_id"), nullable=True, index=True)
    
    specimen_id: Mapped[int] = mapped_column(Integer, nullable=False)
    
    item_id: Mapped[int] = mapped_column(Integer, ForeignKey("d_lab-items.item_id"), nullable=False, index=True)
    
    order_provider_id: Mapped[Optional[str]] = mapped_column(String(10), nullable=True)
    
    charttime: Mapped[datetime] = mapped_column(DateTime, nullable=False)
    
    storetime: Mapped[Optional[datetime]] = mapped_column(DateTime, nullable=True)
    
    value: Mapped[Optional[str]] = mapped_column(String(64), nullable=True)
    
    valuenum: Mapped[Optional[str]] = mapped_column(String(24), nullable=True)
    
    valueuom: Mapped[Optional[str]] = mapped_column(String(16), nullable=True)
    
    ref_range_lower: Mapped[Optional[str]] = mapped_column(String(24), nullable=True)
    
    ref_range_upper: Mapped[Optional[str]] = mapped_column(String(24), nullable=True)
    
    flag: Mapped[Optional[str]] = mapped_column(String(16), nullable=True)
    
    priority: Mapped[Optional[str]] = mapped_column(String(16), nullable=True)
    
    comments: Mapped[Optional[str]] = mapped_column(Text, nullable=True)
    
    patient: Mapped["PatientsModel"] = relationship(
        "PatientsModel", 
        back_populates="lab_events"
    )
    
    admission: Mapped[Optional["AdmissionsModel"]] = relationship(
        "AdmissionsModel", 
        back_populates="lab_events"
    )
    
    lab_item: Mapped["LabItemsModel"] = relationship(
        "LabItemsModel",
        back_populates="lab_events"
    )