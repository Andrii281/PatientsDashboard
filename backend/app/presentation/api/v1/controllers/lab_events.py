from typing import Final
from dependency_injector.wiring import Provide, inject
from fastapi import APIRouter, Depends, Query

from app.domain.interfaces.lab_events_service import ILabEventsService

from app.config.ioc.containers import Container

from app.presentation.api.v1.mappers.lab_events_mapper import LabEventsResponseMapper

router: Final = APIRouter(prefix="/lab-events")

@router.get("")
@inject
def get_lab_event_by_id(
    admission_id: int = Query(alias="admissionId"),
    lab_events_service: ILabEventsService = Depends(Provide[Container.get_lab_events_service]),
    response_mapper: LabEventsResponseMapper = Depends()
):
    lab_events = lab_events_service.get_by_admission_id(admission_id)
    return response_mapper.to_response(lab_events)