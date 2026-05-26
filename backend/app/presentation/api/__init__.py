from typing import Final
from fastapi import APIRouter

from app.presentation.api.v1 import router as v1_router

router: Final = APIRouter()

router.include_router(v1_router)