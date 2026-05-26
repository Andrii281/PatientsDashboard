from abc import ABC, abstractmethod

class ITest(ABC):
    @abstractmethod
    def health(self):
        pass