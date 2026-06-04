from datetime import datetime
from typing import Optional
from pydantic.alias_generators import to_camel
from pydantic import BaseModel, ConfigDict

class ResponseSchema(BaseModel):
    model_config = ConfigDict(
        alias_generator = to_camel,
        frozen = True,
        extra = "forbid",
    )

        
class AdmissionResponseSchema(ResponseSchema):
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
    


class PatientsResponseSchema(ResponseSchema):
    subject_id: int
    
    first_name: str
    
    last_name: str
    
    gender: str
    
    anchor_age: int
    
    anchor_year: int
    
    anchor_year_group: str
    
    dod: Optional[datetime]
    
    admissions: list[AdmissionResponseSchema]
