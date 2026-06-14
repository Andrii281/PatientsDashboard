from fastapi import APIRouter, Query, Depends

from dependency_injector.wiring import inject, Provide

from app.config.ioc.containers import Container
from app.application.services.conversations import ConversationsService

from app.presentation.api.v1.schemas.dtos import SendMesageDTO

from app.presentation.api.v1.mappers.conversations_mapper import ConversationsMapper

router = APIRouter(prefix="/conversations")

@router.get("")
@inject
def get_conversation(
    admission_id: int = Query(alias="admissionId"), 
    conversation_service: ConversationsService = Depends(Provide[Container.get_conversations_service]),
    mapper: ConversationsMapper = Depends()
):
    conversation = conversation_service.get_conversation(admission_id)
    return mapper.get_conversation_to_response(conversation)


@router.post("/message")
@inject
def send_message(
    dto: SendMesageDTO,
    conversation_service: ConversationsService = Depends(Provide[Container.get_conversations_service]),
    mapper: ConversationsMapper = Depends()
):
    message = mapper.send_message_to_entity(dto)
    answer = conversation_service.create_message(message)
    
    return mapper.send_message_to_response(answer)