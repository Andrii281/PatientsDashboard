from dataclasses import dataclass
from typing import final

from app.domain.entities.lab_events import LabEventsEntity

from app.presentation.api.v1.schemas.responses import LabEventsResponseSchema

@final
@dataclass(frozen=True, slots=True)
class LabEventsResponseMapper():
    def to_response(self, lab_events: list[LabEventsEntity]):
        return [LabEventsResponseSchema(
            labEventId=lab_event.lab_event_id,
            charttime=lab_event.charttime,
            storetime=lab_event.storetime,
            value=lab_event.value,
            valuenum=lab_event.valuenum,
            valueuom=lab_event.valueuom,
            refRangeLower=lab_event.ref_range_lower,
            refRangeUpper=lab_event.ref_range_upper,
            flag=lab_event.flag,
            priority=lab_event.priority,
            comments=lab_event.comments,
            label=lab_event.lab_item.label,
            fluid=lab_event.lab_item.fluid,
            category=lab_event.lab_item.category
        ) for lab_event in lab_events]