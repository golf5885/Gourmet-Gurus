from fastapi import FastAPI
import pymysql
from requestTest import getMenu
app = FastAPI()

# mysql connection
def get_db_connection():
    return pymysql.connect(
        # host='169-231-137-187.wireless.ucsb.edu',
        host = '127.0.0.1',
        user='Guru',
        password='GourmetGuru1234',
        db='test',
        cursorclass=pymysql.cursors.DictCursor
    )

# get items from mysql

@app.get("/items/")
def read_items():
    connection = get_db_connection()
    try:
        with connection.cursor() as cursor:

            sql = "SELECT * FROM info"
            cursor.execute(sql)

            result = cursor.fetchall()
            return result
    finally:
        connection.close()

@app.get("/")
def root():
    return {"message" : "Hello World"}

@app.get("/home")
def home():
    return {"message" : home}

@app.get("/menu") 
def printMenu():
    return {"message:" : getMenu()}