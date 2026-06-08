from dependency_injector.containers import DeclarativeContainer
from dependency_injector import providers

from app.config.settings import Settings
from app.infrastructures.db.database import Database

from app.application.repositories.patients import PatientsRepository
from app.application.services.patients import PatientsService

from app.application.repositories.lab_events import LabEventsRepository

from app.application.services.test import TestService

class Container(DeclarativeContainer):
    settings = providers.Singleton(Settings)

    db = providers.Singleton(
        Database,
        settings.provided.get_db_url.call()
    )
    
    get_test_service = providers.Singleton(
        TestService
    )
    
    get_patients_repository = providers.Factory(
        PatientsRepository, 
        db
    )
    
    get_patients_service = providers.Factory(
        PatientsService,
        get_patients_repository
    )
    
    get_lab_events_repository = providers.Factory(
        LabEventsRepository,
        db
    )

container = Container()