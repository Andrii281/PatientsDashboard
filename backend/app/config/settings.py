from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    db_port: str
    db_username: str
    db_password: str
    db_database: str
    db_host: str = "localhost"
    
    def get_db_url(self) -> str:
        return f"postgresql://{self.db_username}:{self.db_password}@{self.db_host}:{self.db_port}/{self.db_database}"
    
    class Config:
        env_file = ".env"