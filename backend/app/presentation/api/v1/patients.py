from typing import Final
from dependency_injector.wiring import Provide, inject
from fastapi import APIRouter, Depends

from app.domain.interfaces.patients_service import IPatientsService

from app.config.ioc.containers import Container


router: Final = APIRouter(prefix="/patients")

@router.get("")
@inject
def get_patients(patients_service: IPatientsService = Depends(Provide[Container.get_patients_service])):
    answer = patients_service.get_all()
    return {"status": "ok", "response": answer}