from typing import Optional
from datetime import datetime

from sqlalchemy import DateTime, Integer, String, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.infrastructures.db.models.base import Base

class PrescriptionsModel(Base):
    __tablename__ = "prescriptions"
    
    prescription_id: Mapped[int] = mapped_column(Integer, primary_key=True)
    
    subject_id: Mapped[int] = mapped_column(Integer, ForeignKey("patients.subject_id"), nullable=False, index=True)
    
    hadm_id: Mapped[int] = mapped_column(Integer, ForeignKey("admissions.hadm_id"), nullable=False, index=True)
    
    pharmacy_id: Mapped[int] = mapped_column(Integer,  nullable=False)
    
    poe_id: Mapped[Optional[str]] = mapped_column(String(16), nullable=True)
    
    poe_seq: Mapped[Optional[int]] = mapped_column(Integer, nullable=True)
    
    order_provider_id: Mapped[Optional[str]] = mapped_column(String(10), nullable=True)
    
    starttime: Mapped[datetime] = mapped_column(DateTime, nullable=False)
    
    stoptime: Mapped[Optional[datetime]] = mapped_column(DateTime, nullable=True)
    
    drug_type: Mapped[str] = mapped_column(String(16), nullable=False)
    
    drug: Mapped[str] = mapped_column(String(128), nullable=False)
    
    formulary_drug_cd: Mapped[str] = mapped_column(String(32), nullable=False)
    
    gsn: Mapped[Optional[str]] = mapped_column(String(128), nullable=True)
    
    ndc: Mapped[Optional[str]] = mapped_column(String(16), nullable=True)
    
    prod_strength: Mapped[Optional[str]] = mapped_column(String(128), nullable=True)
    
    form_rx: Mapped[Optional[str]] = mapped_column(String(16), nullable=True)
    
    dose_val_rx: Mapped[Optional[str]] = mapped_column(String(32), nullable=True)
    
    dose_unit_rx: Mapped[Optional[str]] = mapped_column(String(32), nullable=True)
    
    form_val_disp: Mapped[Optional[str]] = mapped_column(String(16), nullable=True)
    
    form_unit_disp: Mapped[Optional[str]] = mapped_column(String(16), nullable=True)
    
    doses_per_24_hrs: Mapped[Optional[int]] = mapped_column(Integer, nullable=True)
    
    route: Mapped[Optional[str]] = mapped_column(String(16), nullable=True)
    
    patient: Mapped["PatientsModel"] = relationship(
        "PatientsModel",
        back_populates="prescriptions",
    )
    
    admission: Mapped["AdmissionsModel"] = relationship(
        "AdmissionsModel",
        back_populates="prescriptions",
    )
