# Client Directory

The client directory holds the front-end application.

## Root-Level

At the root level is usually the following files:

* package.json (including scripts for build)

* webpack.config.js

* index.html

## src directory

The src contains the raw unbundled files and folders including JavaScript, CSS, and images

## dist directory

When the `dist` directory is generated with a build, the bundled files are found here inside the client file.

In our app, the `index.html` of the `dist` file will be served by our Express.js server.
