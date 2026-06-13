from dataclasses import dataclass
from typing import final

from app.infrastructures.db.models.lab_events import LabEventsModel
from app.domain.entities.lab_events import LabEventsEntity
from app.domain.entities.patients import PatientsEntity
from app.domain.entities.admissions import AdmissionsEntity
from app.domain.entities.lab_items import LabItemsEntity

@final
@dataclass(frozen=True, slots=True)
class LabEventsDBMapper():
    def to_entity(self, model: LabEventsModel):
        return LabEventsEntity(
            lab_event_id=model.lab_event_id,
            subject_id=model.subject_id,
            hamd_id=model.hamd_id,
            specimen_id=model.specimen_id,
            item_id=model.item_id,
            order_provider_id=model.order_provider_id,
            charttime=model.charttime,
            storetime=model.storetime,
            value=model.value,
            valuenum=model.valuenum,
            valueuom=model.valueuom,
            ref_range_lower=model.ref_range_lower,
            ref_range_upper=model.ref_range_upper,
            flag=model.flag,
            priority=model.priority,
            comments=model.comments,
            patient=PatientsEntity(
                subject_id=model.patient.subject_id,
                first_name=model.patient.first_name,
                last_name=model.patient.last_name,
                gender=model.patient.gender,
                anchor_age=model.patient.anchor_age,
                anchor_year=model.patient.anchor_year,
                anchor_year_group=model.patient.anchor_year_group,
                dod=model.patient.dod
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
            lab_item=LabItemsEntity(
                item_id=model.lab_item.item_id,
                label=model.lab_item.label,
                fluid=model.lab_item.fluid,
                category=model.lab_item.category,
            )
        )