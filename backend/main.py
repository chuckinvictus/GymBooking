from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from model import Article

app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

from database import (
    fetch_all_articles,
    fetch_article,
    create_article,
    update_article,
    remove_article
)

@app.get("/")
async def root():
    return {"Ping": "Pong"}

@app.get("/api/news")
async def get_news():
    response = await fetch_all_articles()
    if response:
        return response
    raise HTTPException(404, f"There are no ARTICLES")

@app.get("/api/news{id}", response_model=Article)
async def read_article(id:str):
    response = await fetch_article(id)
    if response:
        return response
    raise HTTPException(404, f"There is no ARTICLE with ID ({id})")

@app.post("/api/news", response_model=Article)
async def post_article(article:Article):
    response = await create_article(article.dict())
    if response:
        return response
    raise HTTPException(400, "Something wrent wrong / Bad Request")

@app.put('/api/news{id}/', response_model=Article)
async def put_article(id: str, title: str, desc: str):
    response = update_article(id, title, desc)
    if response:
        return await response
    raise HTTPException(404, f"There is no ARTICLE with ID ({id})")

@app.delete('/api/news{id}/')
async def delete_article(id:str):
    response = await remove_article(id)
    if response:
        return "Succesfully removed article!"
    raise HTTPException(404, f"There is no ARTICLE with ID ({id})")