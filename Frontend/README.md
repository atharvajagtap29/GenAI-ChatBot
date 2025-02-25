# Chatbot Project

This project is a simple chatbot application that utilizes the Google Gemini API. It is a full-stack application with a React frontend and a Node.js backend. The application is containerized using Docker and managed with Docker Compose.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Architecture](#architecture)
- [Docker Setup](#docker-setup)
- [Contributing](#contributing)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo
   ```

2. Install dependencies for the backend:

   ```sh
   cd backend
   npm install
   ```

3. Install dependencies for the frontend:
   ```sh
   cd ../frontend
   npm install
   ```

## Usage

1. Start the backend server:

   ```sh
   cd backend
   npm start
   ```

2. Start the frontend server:

   ```sh
   cd ../frontend
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000` to use the chatbot.

## Architecture

- **Frontend**: Built with React, it provides a user-friendly interface for interacting with the chatbot.
- **Backend**: Built with Node.js, it handles API requests and communicates with the Google Gemini API.
- **Google Gemini API**: Provides the core chatbot functionality.

## Docker Setup

1. Build and run the containers using Docker Compose:

   ```sh
   docker-compose up --build
   ```

2. The application will be available at `http://localhost:3000`.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.
