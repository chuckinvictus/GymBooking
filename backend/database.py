from pymongo import MongoClient
from bson.objectid import ObjectId
from functools import lru_cache

from config import Settings


@lru_cache()
def get_settings ():
    return Settings()

client = MongoClient(get_settings().db_url)
database = client.misc
collection = database.news

# News page

async def fetch_all_articles():
    articles = []
    cursor = collection.find({}, {'_id': 0})
    for document in cursor:
        articles.append(document)
    return articles

async def fetch_article(id):
    document = collection.find_one({'_id': ObjectId(id)})
    return document

async def create_article(article):
    document = article
    collection.insert_one(document)
    return document

async def update_article(id, title, desc):
    collection.update_one({'_id': ObjectId(id)}, {'$set': {'title': title, 'desc': desc}})
    document = collection.find_one({'_id': ObjectId(id)})
    return document

async def remove_article(id):
    collection.delete_one({'_id': ObjectId(id)})
    return True

