from string import Template
from typing import Optional
from app.domain.dtos.send_mesage_request import SendMesageProfileDTO
from app.domain.dtos.send_mesage_request import SendMessageLabEventsDTO
from app.domain.dtos.send_mesage_request import SendMessagePrescriptionsDTO
    
def load_diagnostic_assessment_prompt(
    message: str,
    profile: Optional[SendMesageProfileDTO] = None,
    lab_events: Optional[list[SendMessageLabEventsDTO]] = None,
    prescriptions: Optional[list[SendMessagePrescriptionsDTO]] = None,
) -> str:
    with open(
        "./app/shared/prompts/diagnostic_assessment.md",
        "r",
        encoding="utf-8",
    ) as f:
        template = Template(f.read())

    prompt = template.substitute(
        message=message,
        profile=profile.model_dump_json(indent=2) if profile else "",
        lab_events="\n".join(
            f"- {e.label}: {e.value or 'N/A'}"
            for e in (lab_events or [])
        ),
        prescriptions="\n".join(
            f"- {p.drug}: {p.dose_val_rx} {p.dose_unit_rx}"
            for p in (prescriptions or [])
        ),
    )

    print(prompt)

    return prompt