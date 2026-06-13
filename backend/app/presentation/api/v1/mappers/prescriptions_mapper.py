from dataclasses import dataclass
from typing import final

from app.domain.entities.prescriptions import PrescriptionsEntity
from app.presentation.api.v1.schemas.responses import PrescriptionsResponseSchema

@final
@dataclass(frozen=True, slots=True)
class PrescriptionsResponseMapper():
    def to_response(self, prescriptions: list[PrescriptionsEntity]):
        return [
            PrescriptionsResponseSchema(
                drugType=prescription.drug_type, 
                drug=prescription.drug, 
                prodStrength=prescription.prod_strength,
                doseValRx=prescription.dose_val_rx,
                doseUnitRx=prescription.dose_unit_rx,
                dosesPer24Hrs=prescription.doses_per_24_hrs,
                route=prescription.route
            ) for prescription in prescriptions
        ]