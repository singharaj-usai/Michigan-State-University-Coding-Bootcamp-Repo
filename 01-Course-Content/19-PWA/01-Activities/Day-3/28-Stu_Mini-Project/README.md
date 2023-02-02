# Module 19 Mini-Project: Deploy Contact Directory App on Heroku with Script

In this mini-project, you are given a simple application that needs to be updated to use webpack, service workers, and IndexedDB. In addition, it must have PWA functionality in order to work properly. Once you have updated the application with these new features, you will deploy it to Heroku. Heroku is not new to you, but you will need to add a handful of special scripts so that it knows to deploy your bundled application.

## User Stories

Work with your group to resolve the following issues:

* As a user, I want to be able to install the web application as a PWA.

* As a user, I want to be able to add and remove my contact cards.

* As a developer, I want all my scripts to run from the root directory `package.json`.

* As a developer, I want to be able to run `npm run start` in the command line and have both my client and server start.

* As a developer, I want to be able to run `npm run start:prod` in the command line to run our build script and start our server.

* As a developer, I want to be able to run `npm run server` in the command line and have just our server start without the client.

* As a developer, I want to be able to run `npm run build` in the command line and have our client run the webpack build script.

* As a developer, I want to be able to run `npm run install` in the command line and have all of the client's dependencies installed.

* As a developer, I want to be able to run `npm run client` in the command line and have just our client start without the server.

## Acceptance Criteria

The mini-project is complete when the following criteria are met:

* The application uses webpack for bundling.

* The application uses a service worker to cache static assets.

* The application uses IndexedDB GET, ADD, and DELETE methods.

* The application uses object store for async/await.

* The application uses CSS loaders.

* Scripts are placed in the root and client directory's `package.json`.

* `npm run start` starts both the client and server.

* `npm run start:prod` runs the `build` script and starts the server.

* `npm run server` starts just the server and not the client.

* `npm run build` runs the webpack build script in the client.

* `npm run install` installs the dependencies for the client.

* `npm run client` starts the client without the server.

* The web application can be installed from the web address provided by Heroku.

* The web application is deployed using Heroku.

---

## 💡 Hints

* How do you navigate to different directories inside bash?

* What is the operator for "and"?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* Incorporate a way to edit information on the contact card using a PUT method with IndexedDB.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
