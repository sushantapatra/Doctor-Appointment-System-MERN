# Doctor Appointment System - MERN

### `mkdir doctor_appointment_system`

### `cd doctor_appointment_system`

# Admin Part

### create a package.json file

### `npm init -y`

## Create a gitignore file

### `.gitignore`

## Install all required packages

### `npm install express morgan colors dotenv nodemon mongoose jsonwebtoken bcryptjs`

**https://www.npmjs.com/package/morgan**
**https://expressjs.com/en/starter/installing.html**
**https://www.npmjs.com/package/colors**
**https://www.npmjs.com/package/dotenv**
**https://www.npmjs.com/package/nodemon**
**https://www.npmjs.com/package/mongoose**
**https://www.npmjs.com/package/jsonwebtoken**
**https://www.npmjs.com/package/bcryptjs**

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

# Github Setup

**git init**
**git add README.md**
**git commit -m "first commit"**
**git branch -M main**
**git remote add origin https://github.com/sushantapatra/Doctor-Appointment-System-MERN.git**
**git push -u origin main**
