# Creating a New Project

Assuming you have NodeJS installed just open up your IDE to an empty folder and do the following in terminal:

* Create a new node project **npm init -y**

* install dependencies **npm install express morgan dotenv**

* if you don't have nodemon installed globally, do so npm **install -g nodemon**

* create your initial server file, gitignore and env file **touch server.js .env .gitignore**

* put the following in the .gitignore file

```js
.env
/node_modules
```

* put the following in the .env file, this file is for defining variables you don't want in your code and not in public view (api keys, database credentials, sensitive stuff) or variables that should change depending on the context.

```js
PORT=5000
```

## package.json

Could of useful things we can do in the package.json:

* We can add scripts, you can add as many as you like but here is basics I'd recommend.

```js
"scripts: {
    "start": "node server.js",
    "dev": "nodemon server.js"
}
```

scripts can be run using the commands npm run **command name** for example we can run the dev script with npm run dev.

* We can also choose whether we will use commonjs or module syntax, commonjs will be the default if we do nothing, but if we add "type":"module" to the package.json then we can use module syntax. This effects how we import and export things.

| **Task** | **CommonJS** | **ES Module** |
|:--|:--|:--| 
| Importing Dependency/File | **const something = require("something")** | **import something from "something"** |
| Exporting from a file	 | **module.exports = something** | **export default something** |

Which you prefer is your own preference, just be aware you may not be able to import JSON files with ES Modules in older versions (or use ES Modules at all in really old versions) of node and use an experimental flag to do so in newer versions.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.