# Basic Server Setup
CommonJS Version

```js
// bring in environment variables from a .env file
require("dotenv").config()

// import express and morgan
const express = require("express")
const morgan = require("morgan")

// create an application object
const app = express()

// define a PORT variable from the environment with a default value
const PORT = process.env.PORT || 4000

/////////////////////////////////////
// ALL YOUR MIDDLEWARE AND ROUTES GO HERE
app.use(morgan("tiny")) // middleware for logging
app.use(express.urlencoded({extended: true})) //middleware for parsing urlencoded data
app.use(express.json()) // middleware for parsing incoming json
app.use("/static", express.static("static")) // to set a folder for static file serving
/////////////////////////////////////

// Server Listener
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
```

```js
// Bring in environmental variables
import dotenv from "dotenv"
dotenv.config()

// import express and morgan
import express from "express"
import morgan from "morgan"

// create an application object
const app = express()

// define a PORT variable from the environment with a default value
const PORT = process.env.PORT || 4000

/////////////////////////////////////
// ALL YOUR MIDDLEWARE AND ROUTES GO HERE
app.use(morgan("tiny")) // middleware for logging
app.use(express.urlencoded({extended: true})) //middleware for parsing urlencoded data
app.use(express.json()) // middleware for parsing incoming json
app.use("/static", express.static("static")) // to set a folder for static file serving
/////////////////////////////////////

// Server Listener
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
```

## Middleware
Middleware are just functions that receive three arguments:

* **req** the request object, more on this later

* **res** the response object, more on this later

* **next** a function that passes the req/res objects to the next middleware or route.
* 
Here is an example of the simplest middleware

```js
const middlewareFunction = (req, res, next) => {
 console.log("This is middleware")
}
```

The middleware functions can be registered using the **.use** method of the application object or routers.

```js
// using the middleware on all requests
app.use(middlewareFunction)
// using the middleware on certain urls
app.use("/endpoint", middlewareFunction)
```

Other popular middleware not in the previous code snippets include:

* [CORS](https://www.npmjs.com/package/cors) For setting cors settings for API's

* [Method Override](https://www.npmjs.com/package/method-override) To override the request method on form submissions
  
[express-session](https://www.npmjs.com/package/express-session) For setting up session cookies
And many others...

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.