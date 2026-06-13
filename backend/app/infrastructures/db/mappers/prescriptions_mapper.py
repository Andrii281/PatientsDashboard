from dataclasses import dataclass
from typing import final

from app.infrastructures.db.models.prescriptions import PrescriptionsModel
from app.domain.entities.prescriptions import PrescriptionsEntity
from app.domain.entities.patients import PatientsEntity
from app.domain.entities.admissions import AdmissionsEntity

@final
@dataclass(frozen=True, slots=True)
class PrescriptionsDBMapper():
    def to_entity(self, model: PrescriptionsModel):
        return PrescriptionsEntity(
            prescription_id=model.prescription_id,
            subject_id=model.subject_id,
            hadm_id=model.hadm_id,
            pharmacy_id=model.pharmacy_id,
            poe_id=model.poe_id,
            poe_seq=model.poe_seq,
            order_provider_id=model.order_provider_id,
            starttime=model.starttime,
            stoptime=model.stoptime,
            drug_type=model.drug_type,
            drug=model.drug,
            formulary_drug_cd=model.formulary_drug_cd,
            gsn=model.gsn,
            ndc=model.ndc,
            prod_strength=model.prod_strength,
            form_rx=model.form_rx,
            dose_val_rx=model.dose_val_rx,
            dose_unit_rx=model.dose_unit_rx,
            form_val_disp=model.form_val_disp,
            form_unit_disp=model.form_unit_disp,
            doses_per_24_hrs=model.doses_per_24_hrs,
            route=model.route,
            patient=PatientsEntity(
                subject_id=model.patient.subject_id,
                first_name=model.patient.first_name,
                last_name=model.patient.last_name,
                gender=model.patient.gender,
                anchor_age=model.patient.anchor_age,
                anchor_year=model.patient.anchor_year,
                anchor_year_group=model.patient.anchor_year_group,
                dod=model.patient.dod,
            ),
            admission=AdmissionsEntity(
                hadm_id=model.admission.hadm_id,
                subject_id=model.admission.subject_id,
                admittime=model.admission.admittime,
                dischtime=model.admission.dischtime,
                deathtime=model.admission.deathtime,
                admission_type=model.admission.admission_type,
                admit_provider_id=model.admission.admit_provider_id,
                admission_location=model.admission.admission_location,
                discharge_location=model.admission.discharge_location,
                insurance=model.admission.insurance,
                language=model.admission.language,
                marital_status=model.admission.marital_status,
                race=model.admission.race,
                edregtime=model.admission.edregtime,
                edouttime=model.admission.edouttime,
                hospital_expire_flag=model.admission.hospital_expire_flag,
            ),
        )
