from pydantic import BaseModel, ConfigDict

class BaseDTO(BaseModel):
    model_config = ConfigDict(
        populate_by_name=True,
        extra="forbid",
        frozen=True,
    )