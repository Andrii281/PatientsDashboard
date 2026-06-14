def create_open_ai_message(message: str):
    return [{"role": "user", "content": message}]