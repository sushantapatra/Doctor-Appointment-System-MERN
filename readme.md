# Doctor Appointment System - MERN

### `mkdir doctor_appointment_system`

### `cd doctor_appointment_system`

# Admin Part

### create a package.json file

### `npm init -y`

## Create a gitignore file

### `.gitignore`

## Install all required packages

### `npm install express morgan colors dotenv nodemon mongoose jsonwebtoken bcryptjs concurrently`

**https://www.npmjs.com/package/morgan**
**https://expressjs.com/en/starter/installing.html**
**https://www.npmjs.com/package/colors**
**https://www.npmjs.com/package/dotenv**
**https://www.npmjs.com/package/nodemon**
**https://www.npmjs.com/package/mongoose**
**https://www.npmjs.com/package/jsonwebtoken**
**https://www.npmjs.com/package/bcryptjs**
**https://www.npmjs.com/package/concurrently**

### Changes on package.json file

    "main": "server.js",
    "scripts": {
    	"test": "echo \"Error: no test specified\" && exit 1",
    	"start": "node server.js",
    	"server": "nodemon server.js"
    },
    "keywords": [],
    "author": "Sushanta Patra",
    "license": "MIT",

# Start the Server

### `npm run server`

### `brew services stop mongodb-community@6.0``

### `brew services start mongodb-community@6.0`

1- Setup Server using express
2-All the requirement details in .env file
3-Create a user model in mongo db
4-Create a user registration controller for user registarion
5-Create a Login controller for user login
i-Login with jwt token
ii-Create a middleware to validate/authorization jwt token

# Create React App for Client

### `npx create-react-app client`

** inside the client app nodemodules add in .gitignorefiles in rootpath **

### `cd client`

## Starts the development server.

### `npm start`

## Bundles the app into static files for production.

### `npm run build`

# Lets Start the Frontend part using REACT

## install all requiremt packages

### `npm i react-router-dom axios antd`

# Github Setup

**git init**
**git add README.md**
**git commit -m "first commit"**
**git branch -M main**
**git remote add origin https://github.com/sushantapatra/Doctor-Appointment-System-MERN.git**
**git push -u origin main**
