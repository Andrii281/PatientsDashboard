from pydantic import BaseModel, ConfigDict
from pydantic.alias_generators import to_camel

class DTOsSchema(BaseModel):
    model_config = ConfigDict(
        populate_by_name=False,
        frozen = True,
        extra = "forbid",
    )
    

class SendMesageDTO(DTOsSchema):
    conversationId: str
    
    message: str
    
    author: str