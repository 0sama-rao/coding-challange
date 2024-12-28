Features:
- Asset Management: Users can add, edit, delete, and view assets.
- Frontend: A responsive UI designed with Tailwind CSS and React components.
- Backend: RESTful API with secure endpoints and Sequelize ORM for database operations.

Tech Stack:
Frontend
- React (typescript)
- Tailwind CSS
- Axios (for API requests)

Backend
- Node.js
- Express.js
- Sequelize ORM
- MySQL

SETUP:
Prerequisites
    Node.js installed
    MySQL database running
    Git installed

STEP 01:

Clone the Repository

git clone https://github.com/0sama-rao/coding-challange.git
- cd coding-challange

Frontend Setup:
- cd frontend
- npm install
- npm start

ADD ENV:

REACT_APP_API_BASE_URL=http://localhost:1600/api

Backend Setup:
- cd backend
- npm install

ADD ENV:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=coding_challenge
PORT=5000

