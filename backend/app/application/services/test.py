from typing import final

from app.domain.interfaces.test import ITest

@final
class TestService(ITest):
    def health(self):
        return {"success": True, "asd": 1}