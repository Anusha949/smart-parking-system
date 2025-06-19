# smart-parking-system
Smart &amp; Effective Realtime Street Parking System
Smart Parking System 🅿️

A full-stack web application that provides real-time management of street parking spots, allowing users to view, reserve, and monitor parking availability on an interactive map.

🎯 Project Overview

Urban drivers often spend significant time searching for parking, contributing to congestion and frustration. The Smart Parking System addresses this by offering:

Real-time parking availability: Display available and occupied spots on a live map.

Spot reservation: Reserve a parking spot remotely.

Single-link deployment: Frontend and backend served from a single URL.

🚀 Live Demo

Frontend and backend are served together at:

https://<your-render-url>  

(Replace with your actual Render domain)

🛠️ Tech Stack & Libraries

Layer

Technology / Library

Purpose

Backend

Flask

RESTful API framework



Flask-CORS

Cross-Origin Resource Sharing



Gunicorn

WSGI HTTP server for production

Frontend

HTML, CSS, JavaScript

UI structure & interaction



Leaflet.js

Interactive map visualization

Deployment

Render

Hosting for backend and serving frontend

Versioning

Git, GitHub

Source control

🔧 Features

Interactive Map: Visualize parking spots with color-coded markers (green=available, red=occupied).

Live Data Fetch: Frontend polls backend every 10 seconds for updates.

Reserve Spot: Click on an available spot to reserve, updating status via API.

Home Route: Root URL serves the map-based UI and health check endpoint.

📁 Repository Structure

smart-parking-system/
├── server/                 # Flask backend
│   ├── server.py           # Main application file
│   ├── requirements.txt    # Python dependencies
│   └── templates/          # Jinja2 HTML templates
│       └── index.html      # Frontend UI
│       └── static/         # CSS & JS files
│           ├── style.css
│           └── app.js
│
├── render.yaml             # Render deployment config (optional)
└── README.md               # This file

⚙️ Installation & Local Setup

Clone the repository:

git clone https://github.com/<your-username>/smart-parking-system.git
cd smart-parking-system/server

Create a virtual environment (optional but recommended):

python -m venv venv
source venv/bin/activate      # macOS/Linux
venv\Scripts\activate       # Windows

Install dependencies:

pip install -r requirements.txt

Run the application:

python server.py

Access locally:

Open http://127.0.0.1:5000 in your browser.

☁️ Deployment on Render

Push code to your GitHub repository.

Create a new Web Service on Render:

Root Directory: server

Build Command: pip install -r requirements.txt

Start Command: gunicorn server:app

Deploy: Render will provide a public URL.

📝 API Endpoints

Method

Endpoint

Description

GET

/

Serve the frontend UI

GET

/api/parking

Retrieve all parking spots

POST

/api/parking/<spot_id>

Reserve a parking spot (mark as occupied)

⚙️ Usage

Navigate to the root URL to view and interact with the parking map.

Click on an available spot to reserve it; the map updates in real time.

🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.




