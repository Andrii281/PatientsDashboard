from typing import final
from dataclasses import dataclass

from app.infrastructures.db.models.patients import PatientsModel
from app.domain.entities.admissions import AdmissionsEntity
from app.domain.entities.patients import PatientsEntity

@final
@dataclass(frozen=True, slots=True)
class PatientsDBMapper():
    def to_entity(self, model: PatientsModel):
        return PatientsEntity(
            subject_id=model.subject_id,
            first_name=model.first_name,
            last_name=model.last_name,
            gender=model.gender,
            anchor_age=model.anchor_age,
            anchor_year=model.anchor_year,
            anchor_year_group=model.anchor_year_group,
            dod=model.dod,
            admissions=[
                AdmissionsEntity(
                    hadm_id=admission.hadm_id,
                    subject_id=admission.subject_id,
                    admittime=admission.admittime,
                    dischtime=admission.dischtime,
                    deathtime=admission.deathtime,
                    admission_type=admission.admission_type,
                    admit_provider_id=admission.admit_provider_id,
                    admission_location=admission.admission_location,
                    discharge_location=admission.discharge_location,
                    insurance=admission.insurance,
                    language=admission.language,
                    marital_status=admission.marital_status,
                    race=admission.race,
                    edregtime=admission.edregtime,
                    edouttime=admission.edouttime,
                    hospital_expire_flag=admission.hospital_expire_flag,
                )
                for admission in model.admissions
            ],
        )