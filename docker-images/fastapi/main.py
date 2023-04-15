from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def hello_wolrd():
    return {"framework": "fastapi", "message": "Hello World!"}
