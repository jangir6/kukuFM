### Project Description
This is a web application for browsing, viewing details, and submitting reviews and ratings for audiobooks. Users can view a list of audiobooks, filter them based on genre, author, or rating, and read and submit reviews for each audiobook.

### Features
- Display a list of audiobooks with title, author, and cover image.
- Filter and sort audiobooks by genre, author, or rating.
- View detailed information about each audiobook.
- Submit reviews and ratings for audiobooks.

### Technologies Used
- **Frontend**: React, Bootstrap
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Other**: Mongoose for MongoDB interactions

### Setup and Installation

#### Prerequisites
- Node.js and npm installed
- MongoDB instance

#### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/audiobook-app.git
   cd audiobook-app
   ```

2. Set up the backend:
   - Navigate to the backend directory:
     ```bash
     cd audiobook-backend
     ```
   - Create a `.env` file in the backend directory with the following content:
     ```env
     PORT=5000
     MONGO_URL='your-mongodb-connection-string'
     ```
   - Install dependencies and start the server:
     ```bash
     npm install
     node server.js
     ```

3. Set up the frontend:
   - Navigate to the frontend directory:
     ```bash
     cd ../frontend
     ```
   - Install dependencies and start the development server:
     ```bash
     npm install
     npm start
     ```
### Usage
1. Open your browser and go to `http://localhost:3000` to view the frontend of the application.
2. Browse the list of audiobooks, use the filters to sort and search, and click on any audiobook to view its details.
3. On the audiobook detail page, read reviews and submit your own review and rating.

### API Endpoints
- **GET /api/audiobooks**: Fetch the list of audiobooks.
