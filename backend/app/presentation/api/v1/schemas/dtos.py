from pydantic import BaseModel, ConfigDict
from typing import Optional

class DTOsSchema(BaseModel):
    model_config = ConfigDict(
        populate_by_name=False,
        frozen = True,
        extra = "forbid",
    )
    
    
class SendMesageProfileDTO(DTOsSchema):
    subjectId: int
    
    firstName: str
    
    lastName: str
    
    gender: str
    
    age: int
    
    language: Optional[str] = None
    
    maritalStatus: Optional[str] = None
    
    race: Optional[str] = None


class SendMessageLabEventsDTO(DTOsSchema):
    label: str
    
    value: Optional[str] = None
    
    valueuom: Optional[str] = None
    
    range: str
    
    fluid: str
    
    category: str
    
    
class SendMessagePrescriptionsDTO(DTOsSchema):
    drug: str
    
    prodStrength: str
    
    doseValRx: str
    
    doseUnitRx: str
    
    dosesPer24Hrs: Optional[str]
    
    route: str


class SendMessageMetadataDTO(DTOsSchema):
    profile: Optional[SendMesageProfileDTO] = None
    
    labEvents: Optional[list[SendMessageLabEventsDTO]] = None
    
    prescriptions: Optional[list[SendMessagePrescriptionsDTO]] = None
    

class SendMesageDTO(DTOsSchema):
    conversationId: str
    
    text: str
    
    author: str
    
    metadata: SendMessageMetadataDTO