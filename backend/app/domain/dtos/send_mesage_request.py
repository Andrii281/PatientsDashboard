from pydantic import Field
from typing import Optional

from app.domain.dtos.base import BaseDTO

class SendMesageProfileDTO(BaseDTO):
    subject_id: int = Field(alias="subjectId")

    first_name: str = Field(alias="firstName")

    last_name: str = Field(alias="lastName")

    gender: str

    age: int

    language: Optional[str] = None

    marital_status: Optional[str] = Field(default=None, alias="maritalStatus")

    race: Optional[str] = None


class SendMessageLabEventsDTO(BaseDTO):
    label: str

    value: Optional[str] = None

    valueuom: Optional[str] = Field(default=None, alias="valueuom")

    range: str

    fluid: str

    category: str


class SendMessagePrescriptionsDTO(BaseDTO):
    drug: str

    prod_strength: str = Field(alias="prodStrength")

    dose_val_rx: str = Field(alias="doseValRx")

    dose_unit_rx: str = Field(alias="doseUnitRx")

    doses_per_24_hrs: Optional[str] = Field(alias="dosesPer24Hrs")

    route: str


class SendMessageMetadataDTO(BaseDTO):
    profile: Optional[SendMesageProfileDTO] = None

    lab_events: Optional[list[SendMessageLabEventsDTO]] = Field(default=None, alias="labEvents")

    prescriptions: Optional[list[SendMessagePrescriptionsDTO]] = None


class SendMesageRequestDTO(BaseDTO):
    conversation_id: str = Field(alias="conversationId")

    text: str

    author: str

    metadata: SendMessageMetadataDTO