from pydantic import BaseSettings


class Settings(BaseSettings):
    db_password: str
    db_url: str

    class Config:
        env_file = ".env"
