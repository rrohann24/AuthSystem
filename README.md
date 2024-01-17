
# AuthSystem
Design and implemented a Role-based Authentication System using the MERN stack with two roles user and admin. The system includes user registration, login, and authorization based on user roles. Used JSON Web Tokens (JWT) for secure authentication.





## Features

- Created a registration endpoint that accepts user   details such as username, email, and password. Stored user information securely in a MongoDB database.
- Implement a login endpoint that validates user credentials and generates a JWT upon successful authentication.
- User password is stored in encryped form using Bcrypt library.
- Created protected routes which is only accessible to admin.
- Used middleware for authentication and authorization.
- Followed MVC architect that separates the application into three main logical components Model, View(Client), and Controller.
- role : 1 for admin
- role : 0 for user
- Credentials for test user : **email:** test@test.com , **password:** test123
- Credentials for test admin : **email:** admin@admin.com , **password:** admin123


## Installation
- Install VS Code
- Install NodeJS
- Install Git
- Clone the following git repository inside any folder: https://github.com/rrohann24/AuthSystem
- Open a terminal and make sure you are in the working directory folder(Authentication System) run **npm install** command to install the required project dependencies in both back-end and front-end folder.
- Run **npm install** in the client folder also.
- Now in the root directory (Authentication System) run the following command **npm run dev**
- Now you can access the app at this URL: http://localhost:3000


## Technologies used
- ReactJS for frontend
- Bootstrap for styling
- ExpressJS for backend
- MongoDB as Database
- Mongoose
## Snaps
![alt text](https://github.com/rrohann24/AuthSystem/blob/main/snaps/Screenshot%202024-01-17%20142833.png)
![alt text](https://github.com/rrohann24/AuthSystem/blob/main/snaps/Screenshot%202024-01-17%20143628.png)
![alt text](https://github.com/rrohann24/AuthSystem/blob/main/snaps/Screenshot%202024-01-17%20143735.png)
![alt text](https://github.com/rrohann24/AuthSystem/blob/main/snaps/Screenshot%202024-01-17%20143840.png)
![alt text](https://github.com/rrohann24/AuthSystem/blob/main/snaps/Screenshot%202024-01-17%20143922.png)
![alt text](https://github.com/rrohann24/AuthSystem/blob/main/snaps/Screenshot%202024-01-17%20143940.png)
