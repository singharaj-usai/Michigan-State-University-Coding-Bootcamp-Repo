# Routes
Routes determine what is the servers response to in an incoming request. A route is created by using one of the following methods on the application object or a router:

* **.all** for requests of any method

* **.get** for GET requests

* **.post** for POST requests

* **.put** for PUT requests

* **.delete** for DELETE requests

All of these functions take two arguments:

* the endpoint

* a "action", "Controller" or "Route Handler" function that takes **req** and **res** as arguments

Here is an example:

```js
// writing pass an anonymous function
app.get("/endpoint", (req, res) =>  {
  res.send("The Response")
})

// using a named function
function routeHandler(req, res){
  res.send("the response")
}
app.get("/endpoint", routeHandler)
```

## The Request Object (req)
The request object represents the data from the incoming request and is passed to all middleware and route handlers.

-**req.headers** object with the headers of the incoming request

-**req.params** object with any route params

-**req.query** object with any key/values from a url query string

-**req.body** object key/values of the request body (parsed by the express.urlencoded or express.json middleware)

-**req.method** the method of the request as string

plus much more!

## The Response Object (res)
The response object is an object that is used to help author the response to the request. Primarily made up of helper functions for different types of responses.

-**res.send** will send a text, html or json request depending on what is passed to it

-**res.json** send a javascript object or array as a json response

-**res.render** renders an html response from a template

## Rendering Templates
Templates allow you to generate html responses dynamically, there are several templating engines that can be used, here are few articles to see how to use them.

* [Intro to Express Templating](https://tuts.alexmercedcoder.com/2021/3/expresstemplatingintro/)

* [Express Templating Cheatsheet](https://tuts.alexmercedcoder.com/2021/10/express_templating_cheatsheet/)
* 
To render a template we use the **res.render** function which takes two arguments:

* the name of the the file to locate in the views folder

* javascript object with data that can be used in the rendering of the template (each templating language should have its own way of using the data from the object in the template)

## Router Objects
You can group routes together using routers which can be used for organization and to apply middleware to a specific group of routes.

Creating a Router

```js
// create the router object
const router = express.Router()
// register it with the application for routes with a certain prefix
app.use("/prefex", router)
```

Just like the application object you can register middlewares routes with the router

```js
// router specific middleware
router.use(middlewareFunction)

// registering routes
router.get("/endpoint", routerHandler) // url is /prefix/endpoint
```

## Connecting to Databases
The following libraries can help you connect to different databases.

* [mongoose](https://www.npmjs.com/package/mongoose) for connecting to a mongo database [mongoose blog](https://tuts.alexmercedcoder.com/2020/ExpressMongo/)

* [sequalize](https://www.npmjs.com/package/sequelize) ORM for SQL databases (postgres, mysql, etc.)

* [objection](https://www.npmjs.com/package/objection) ORM for SQL databases (postgres, mysql, etc.)

* [waterline](https://www.npmjs.com/package/waterline) ORM for SQL databases (postgres, mysql, etc.)

## Making API Calls
Keep in mind you can't use fetch natively in node, and jQuery is only a frontend library. But you have some options.

* [node-fetch](https://www.npmjs.com/package/node-fetch) A library that replicates the browsers fetch function

* [Axios](https://www.npmjs.com/package/axios) A library for making API Calls

* [GOT](https://www.npmjs.com/package/got) a library for making api calls

* [needle](https://www.npmjs.com/package/needle) another http client library

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.