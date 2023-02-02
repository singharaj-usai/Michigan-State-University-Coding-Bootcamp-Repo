## Static Assets Demo

This example includes two `server` files. The first file, `server_static.js`, is designed to show how we can create `GET` routes for individual files. In the second example, `server.js`, we can accomplish the same functionality by implementing static middleware.

* Make sure that you have nodemon installed globally. To check run `nodemon --version`. If the command isn't found, run `npm i -g nodemon`

1. First, we start `server_static.js` by running `nodemon server_static.js`.

    * In the code, we can see that a new route was made for each static file.

    * In the browser, navigate to <http://localhost:3001/image>. We can see that by using this approach, a new route is needed for each static file.

2. Next, we start `server.js` file by running `nodemon server.js`

    * In the code, point out the simplicity of the [static middleware](http://expressjs.com/en/4x/api.html#express.static) approach.

    * In the browser, navigate to <http://localhost:3001/images/cat.jpg> to show that we can accomplish the same thing
