from typing import Optional
from datetime import datetime

from app.domain.entities.base import BaseEntity
from app.domain.entities.patients import PatientsEntity
from app.domain.entities.admissions import AdmissionsEntity

class PrescriptionsEntity(BaseEntity):
    prescription_id: int
    
    subject_id: int
    
    hadm_id: int
    
    pharmacy_id: int
    
    poe_id: Optional[str] = None
    
    poe_seq: Optional[int] = None
    
    order_provider_id: Optional[str] = None
    
    starttime: datetime
    
    stoptime: Optional[datetime] = None
    
    drug_type: str
    
    drug: str
    
    formulary_drug_cd: str
    
    gsn: Optional[str] = None
    
    ndc: Optional[str] = None
    
    prod_strength: Optional[str] = None
    
    form_rx: Optional[str] = None
    
    dose_val_rx: Optional[str] = None
    
    dose_unit_rx: Optional[str] = None
    
    form_val_disp: Optional[str] = None
    
    form_unit_disp: Optional[str] = None
    
    doses_per_24_hrs: Optional[int] = None
    
    route: Optional[str] = None
    
    patient: PatientsEntity
    
    admission: AdmissionsEntity
