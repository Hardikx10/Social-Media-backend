# Social Media User Submissions Backend

### Description
This project is a backend API built with the MERN stack (MongoDB, Express, React, Node.js). It allows users to submit their name, social media handle, and upload multiple images. The submissions are stored in a MongoDB database, and images are saved on the server. Admins can view user submissions via a dashboard, where they can see the uploaded images, user details, and submission time.

### Project Setup
Prerequisites
Node.js and npm installed
MongoDB installed locally or MongoDB Atlas account
Git installed

Steps :

1. Clone the repository:

        git clone https://github.com/yourusername/social-media-backend.git
        cd social-media-backend

2. Install backend dependencies:

        npm install

3. Set up environment variables:

Create a .env file in the backend directory with the following content:

        MONGO_URI=your_mongo_db_connection_string
        PORT=5000
        Run the backend server:
        npm start

The backend server will run on http://localhost:5000.   