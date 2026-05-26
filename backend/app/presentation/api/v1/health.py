import logging
from typing import Final
from fastapi import APIRouter, Depends
from dependency_injector.wiring import Provide, inject

from app.domain.interfaces.test import ITest

from app.config.ioc.containers import Container

logger = logging.getLogger(__name__)

router: Final = APIRouter(prefix="/test")

@router.get(path="")
@inject
async def health(
    health_service: ITest = Depends(Provide[Container.get_test_service])
):
    health = health_service.health()
    logger.info("health_router:", health)
    return health
    