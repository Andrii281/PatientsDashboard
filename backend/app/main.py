from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.config.ioc.containers import container

from app.presentation.api import router

app_container_modules = [
    "app.config.settings",
    "app.presentation.api.v1"
]

app = FastAPI()

container.wire(packages=["app.presentation"])

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

app.include_router(router)