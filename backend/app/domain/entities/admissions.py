from typing import Optional
from datetime import datetime

from app.domain.entities.base import BaseEntity

class AdmissionsEntity(BaseEntity):
    hadm_id: int

    subject_id: int

    admittime: datetime
    
    dischtime: datetime

    deathtime: Optional[datetime] = None

    admission_type: str
    
    admit_provider_id: str

    admission_location: str
    
    discharge_location: Optional[str] = None

    insurance: str
    
    language: Optional[str] = None
    
    marital_status: Optional[str] = None
    
    race: Optional[str] = None

    edregtime: Optional[datetime] = None
    
    edouttime: Optional[datetime] = None

    hospital_expire_flag: int
    