from typing import Final
from fastapi import APIRouter, Query

router: Final = APIRouter(prefix="/lab-events")

@router.get("")
def get_lab_event_by_id(
    admission_id: int = Query(alias="admissionId")
):
    print("admission_id:", admission_id)
    return 1