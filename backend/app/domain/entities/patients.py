from typing import Optional
from datetime import date

from app.domain.entities.admissions import AdmissionsEntity
from app.domain.entities.base import BaseEntity

class PatientsEntity(BaseEntity):
    subject_id: int
    
    first_name: str
    
    last_name: str
    
    gender: str
    
    anchor_age: int
    
    anchor_year: int
    
    anchor_year_group: str
    
    dod: Optional[date] = None
    
    admissions: list[AdmissionsEntity] = []