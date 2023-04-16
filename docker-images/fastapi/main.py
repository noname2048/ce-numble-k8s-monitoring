from fastapi import FastAPI
from fastapi.responses import FileResponse

app = FastAPI()
favicon_path = "favicon.ico"


@app.get("/")
async def hello_world():
    return {"framework": "fastapi", "message": "Hello World!"}


@app.get("/favicon.ico", include_in_schema=False)
async def favicon():
    return FileResponse(favicon_path)
