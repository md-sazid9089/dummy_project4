# Bachelor Solution

Bachelor Solution is a beginner-friendly MERN stack application that helps students and bachelors find housing and local services.

## Project Structure

- `frontend` – React + Vite + Tailwind CSS client
- `backend` – Next.js + Express + MongoDB server

## Setup

### Frontend
1. `cd frontend`
2. `npm install`
3. `npm run dev`

### Backend
1. `cd backend`
2. `npm install`
3. Set `MONGO_URI` and `JWT_SECRET` in `.env` (optional)
4. `npm run dev`

The frontend expects the backend to be running on the same origin. Adjust API URLs in the code if needed.

## Features
- Browse housing listings
- View nearby shops and maids
- Google Maps integration
- JWT-based authentication

This project is intended for learning purposes and includes only minimal styling and validation.
