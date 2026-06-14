from typing import final

from app.domain.interfaces.ai_agent_service import IAiAgentService
from openai import OpenAI

from app.shared.utils import create_open_ai_message

@final
class openAiService(IAiAgentService):
    def __init__(self, openai_api_key: str, openai_model: str):
        self.model = openai_model
        self.client = OpenAI(
                api_key=openai_api_key,
            )
        
        
    def get_response(self, message: str):
        response = self.client.chat.completions.create(
            model=self.model,
            messages=create_open_ai_message(message),
            temperature=0.0,
            top_p=0.1,
        )
        return response.choices[0].message.content