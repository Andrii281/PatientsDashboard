from dataclasses import dataclass
from typing import final

from app.domain.entities.patients import PatientsEntity

from app.presentation.api.v1.schemas.responses import PatientsResponseSchema
from app.presentation.api.v1.schemas.responses import AdmissionResponseSchema

@final
@dataclass(frozen=True, slots=True)
class PatientsResponseMapper:
    def to_response(seld, patients: list[PatientsEntity]):
        return [ 
            PatientsResponseSchema(
                subjectId = patient.subject_id,
                firstName = patient.first_name,
                lastName = patient.last_name,
                gender = patient.gender,
                anchorAge = patient.anchor_age,
                anchorYear = patient.anchor_year,
                anchorYearGroup = patient.anchor_year_group,
                dod = patient.dod,
                admissions = [
                    AdmissionResponseSchema(
                        hadmId = admission.hadm_id,
                        subjectId = admission.subject_id,
                        admittime = admission.admittime,
                        dischtime = admission.dischtime,
                        deathtime = admission.deathtime,
                        admissionType = admission.admission_type,
                        admitProviderId = admission.admit_provider_id,
                        admissionLocation = admission.admission_location,
                        dischargeLocation = admission.discharge_location,
                        insurance = admission.insurance,
                        language = admission.language,
                        maritalStatus = admission.marital_status,
                        race = admission.race,
                        edregtime = admission.edregtime,
                        edouttime = admission.edouttime,
                        hospitalExpireFlag = admission.hospital_expire_flag
                    ) for admission in patient.admissions
                ]
            ) for patient in patients]