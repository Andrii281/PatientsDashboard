from typing import Optional
from datetime import datetime

from app.domain.entities.base import BaseEntity
from app.domain.entities.patients import PatientsEntity
from app.domain.entities.admissions import AdmissionsEntity
from app.domain.entities.lab_items import LabItemsEntity

class LabEventsEntity(BaseEntity):
    lab_event_id: int
    
    subject_id: int
    
    hamd_id: Optional[int] = None
    
    specimen_id: int
    
    item_id: int
    
    order_provider_id: Optional[str] = None
    
    charttime: datetime
    
    storetime: Optional[datetime] = None
    
    value: Optional[str] = None
    
    valuenum: Optional[str] = None
    
    valueuom: Optional[str] = None
    
    ref_range_lower: Optional[str] = None
    
    ref_range_upper: Optional[str] = None
    
    flag: Optional[str] = None
    
    priority: Optional[str] = None
    
    comments: Optional[str] = None
    
    patient: PatientsEntity
    
    admission: AdmissionsEntity
    
    lab_item: LabItemsEntity