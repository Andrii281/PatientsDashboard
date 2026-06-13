from fastapi import APIRouter, Query, Depends
from dependency_injector.wiring import Provide, inject

from app.application.services.prescriptions import PrescriptionsService

from app.config.ioc.containers import Container

from app.presentation.api.v1.mappers.prescriptions_mapper import PrescriptionsResponseMapper

router = APIRouter(prefix="/prescriptions")

@router.get("")
@inject
def get_prescriptions_by_id(
    admission_id: int = Query(alias="admissionId"),
    prescriptions_service: PrescriptionsService = Depends(Provide[Container.get_prescriptions_service]),
    response_mapper: PrescriptionsResponseMapper = Depends()
):
    prescriptions = prescriptions_service.get_by_admission_id(admission_id)
    return response_mapper.to_response(prescriptions)