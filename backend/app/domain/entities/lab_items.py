from app.domain.entities.base import BaseEntity

class LabItemsEntity(BaseEntity):
    item_id: int
    
    label: str
    
    fluid: str
    
    category: str