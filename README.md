# Social Media Task

## Objective
This project creates a system that allows users to submit their name, social media handle, and upload multiple images. The submitted data is displayed on an admin dashboard, showing each user's name, social media handle, and all images they have uploaded.

## Features Overview
1. **User Form:** Users can input their name, social media handle, and upload multiple images.
2. **Data Storage:** All information (name, social media handle, and images) is stored in a SQLite database.
3. **Admin Dashboard:** Displays a list of all users, showing their name, social media handle, and the images they submitted.

## Technology Stack
- Frontend: React.js
- Backend: Node.js with Express
- Database: SQLite

## Project Structure
```
project-root/
├── client/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── UserForm.js
│   │   │   ├── AdminDashboard.js
│   │   │   └── UserSubmission.js
│   │   ├── styles/
│   │   │   ├── UserForm.css
│   │   │   ├── AdminDashboard.css
│   │   │   └── UserSubmission.css
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   └── package.json
├── server/
│   ├── database/
│   │   └── database.sqlite
│   ├── uploads/
│   ├── server.js
│   └── package.json
└── README.md
```

## Setup and Installation

### Backend Setup
1. Navigate to the `server` directory:
   ```
   cd server
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Create the SQLite database and tables:
   ```
   sqlite3 database/database.sqlite
   ```
   Then, in the SQLite prompt, run:
   ```sql
   CREATE TABLE IF NOT EXISTS users (
     id INTEGER PRIMARY KEY AUTOINCREMENT,
     name TEXT NOT NULL,
     social_media TEXT NOT NULL
   );

   CREATE TABLE IF NOT EXISTS images (
     id INTEGER PRIMARY KEY AUTOINCREMENT,
     user_id INTEGER NOT NULL,
     filename TEXT NOT NULL,
     FOREIGN KEY (user_id) REFERENCES users (id)
   );

   .quit
   ```
4. Start the server:
   ```
   node server.js
   ```

### Frontend Setup
1. Navigate to the `client` directory:
   ```
   cd client
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the React development server:
   ```
   npm start
   ```

## Usage

### User Submission Form
- Navigate to `http://localhost:3000` in your web browser.
- Fill in your name and social media handle.
- Select multiple images to upload.
- Click the "Submit" button to send your information.

### Admin Dashboard
- The admin dashboard is available at the same URL: `http://localhost:3000`.
- It displays all user submissions, including names, social media handles, and uploaded images.
- The dashboard updates dynamically when new submissions are made.

## Contributing
Contributions to improve the project are welcome. Please follow these steps:
1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License.
