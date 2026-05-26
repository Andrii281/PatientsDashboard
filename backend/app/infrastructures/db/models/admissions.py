from app.infrastructures.db.models.base import BaseModel
from typing import Optional

from datetime import date

from sqlalchemy import Integer, String, DateTime, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship

class AdmissionsModel(BaseModel):
    __tablename__ = "admissions"
    
    hadm_id: Mapped[int] = mapped_column(Integer, primary_key=True)
    
    subject_id: Mapped[int] = mapped_column(Integer, ForeignKey("patients.subject_id"), nullable=False, index=True)
    
    admittime: Mapped[date] = mapped_column(DateTime, nullable=False)
    
    dischtime: Mapped[date] = mapped_column(DateTime, nullable=False)
    
    deathtime: Mapped[date] = mapped_column(DateTime, nullable=True)
    
    admission_type: Mapped[str] = mapped_column(String(40), nullable=False)
    
    admit_provider_id: Mapped[str] = mapped_column(String(10), nullable=False)
    
    admission_location: Mapped[str] = mapped_column(String(64), nullable=False)
    
    discharge_location: Mapped[Optional[str]] = mapped_column(String(64), nullable=True)
    
    insurance: Mapped[str] = mapped_column(String(32), nullable=False)
    
    language: Mapped[Optional[str]] = mapped_column(String(16), nullable=True)
    
    marital_status: Mapped[Optional[str]] = mapped_column(String(32), nullable=True)
    
    race: Mapped[Optional[str]] = mapped_column(String(64), nullable=True)
    
    edregtime: Mapped[Optional[date]] = mapped_column(DateTime, nullable=True)
    
    edouttime: Mapped[Optional[date]] = mapped_column(DateTime, nullable=True)
    
    hospital_expire_flag: Mapped[int] = mapped_column(Integer, nullable=False)
    
    patient: Mapped["PatientsModel"] = relationship(
        back_populates="admissions"
    )