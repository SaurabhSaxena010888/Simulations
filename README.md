# AI Simulation Platform

This repository contains a frontend built with React and a backend built with FastAPI. The platform features 11 modules exploring various AI concepts, with interactive simulations implemented using Chart.js.

## Structure

- `backend/`: FastAPI server implementation with a simple API endpoint.
- `frontend/`: React application created with Create React App. The `src/components` folder contains Module1..Module11 components, each with an interactive simulation using sliders and Chart.js.

## Running

### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

### Frontend

```bash
cd frontend
npm install
npm start
```

Ensure that the proxy in `/frontend/package.json` points to the backend server when needed.
