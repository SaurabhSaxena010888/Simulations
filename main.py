from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_credentials=True, allow_methods=["*"], allow_headers=["*"])
@app.get('/api/health')
async def health():
    return {'status':'ok'}
# Module endpoints
for i in range(1,12):
    async def placeholder(i=i):
        return {'module': i, 'message': f'Module {i} backend is running.'}
    app.get(f'/api/module{i}')(placeholder)
