from datetime import datetime
from typing import Optional
from app.infrastructures.db.models.base import Base

from sqlalchemy import Date, Integer, String
from sqlalchemy.orm import Mapped, mapped_column, relationship

class PatientsModel(Base):
    __tablename__ = "patients"
    
    subject_id: Mapped[int] = mapped_column(Integer, primary_key=True)
    
    first_name: Mapped[str] = mapped_column(String(100), nullable=False)
    
    last_name: Mapped[str] = mapped_column(String(100), nullable=False)
    
    gender: Mapped[str] = mapped_column(String(1), nullable=False)
    
    anchor_age: Mapped[int] = mapped_column(Integer, nullable=False)
    
    anchor_year: Mapped[int] = mapped_column(Integer, nullable=False)
    
    anchor_year_group: Mapped[str] = mapped_column(String(32), nullable=False)
    
    dod: Mapped[Optional[datetime]] = mapped_column(Date, nullable=True)
    
    admissions: Mapped[list["AdmissionsModel"]] = relationship(
        "AdmissionsModel",
        back_populates="patient",
    )