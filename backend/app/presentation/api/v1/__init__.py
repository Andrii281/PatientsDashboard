from typing import Final
from fastapi import APIRouter

from app.presentation.api.v1.health import router as health_router
from app.presentation.api.v1.patients import router as patients_router

router: Final = APIRouter()

router.include_router(health_router)
router.include_router(patients_router)