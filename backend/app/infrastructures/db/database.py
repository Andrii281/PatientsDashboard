import logging
from sqlalchemy import create_engine
from contextlib import contextmanager

from typing import Generator
from sqlalchemy.orm import Session, sessionmaker
from sqlalchemy.exc import IntegrityError

logger = logging.getLogger(__name__)

class Database:
    def __init__(self, db_url: str):
        self.sync_engine = create_engine(db_url)
        
        self.sync_session_factory = sessionmaker(
            self.sync_engine,
            expire_on_commit=False,
            autoflush=False,
            future=True
        )
        
        
    @contextmanager
    def get_sync_session(self) -> Generator[Session, None, None]:
        session: Session = self.sync_session_factory()
        try:
            yield session
        except IntegrityError as exception:
            logger.error('Session rollback because of exception: %s', exception)
            session.rollback()
        finally:
            session.close