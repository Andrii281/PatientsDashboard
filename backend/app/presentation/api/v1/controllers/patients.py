from typing import Final
from dependency_injector.wiring import Provide, inject
from fastapi import APIRouter, Depends

from app.domain.interfaces.patients_service import IPatientsService

from app.config.ioc.containers import Container
from app.presentation.api.v1.mappers.patients_mapper import PatientsResponseMapper

router: Final = APIRouter(prefix="/patients")

@router.get("")
@inject
def get_patients(
        patients_service: IPatientsService = Depends(Provide[Container.get_patients_service]),
        response_mapper: PatientsResponseMapper = Depends()
    ):
    patients = patients_service.get_all()
    return response_mapper.to_response(patients)