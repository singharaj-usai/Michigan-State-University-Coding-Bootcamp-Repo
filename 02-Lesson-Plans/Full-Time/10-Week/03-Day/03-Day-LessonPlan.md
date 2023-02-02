# 10.3 Full-Time Lesson Plan: Introduction to React

## Overview

In today's lesson, you will introduce students to React. You'll start by guiding them through how to use the `create-react-app` utility to create a new React project. Then you'll teach them how to create React components and write JSX expressions to render elements to the page.

## Instructor Notes

* In this lesson, students will complete activities `28-Stu_Mini-Project` from Module 19 through `08-Stu_Props` in Module 20.

* The first activity for this module will use `npx create-react-app`. The `npx` command allows us to run an executable binary locally without needing to install it globally first. In the context of React, it also ensures that students use the latest version of the utility.

* When using the `create-react-app` utility to create a React app, the project directory will also automatically be created as part of the process. Students might be tempted to start by creating a directory for their project, which is not necessary and might actually cause some confusion. The name you provide to the command will be the directory name -- for example, `npx create-react-app my-app` creates a directory called `/my-app`. The name `my-app` will also be used as the name of the project inside the `package.json` file that is generated.

* The practice app will be called `00-practice-app`, but the name isn't as important as it's location. The `00-practice-app` directory will be created in the `01-Activities` directory.

* **Important**: `create-react-app` now automatically uses the latest release of React, version 18. Due to several conflicting packages with React version 18, follow the steps below to ensure that all activities work as intended.

  * Delete the `package-lock.json` file and `node_modules` folder from the `client` directory.

  * Downgrade `react` to 17.0.2 inside of the `package.json` file.

  * Downgrade `react-dom` to 17.0.2 inside of the `package.json` file.

  * Downgrade `@testing-library/react` to ^11.1.0 inside of the `package.json` file.

  * Your `package.json` file should look like the following:

    ```js
    "dependencies": {
        "@testing-library/jest-dom": "^5.16.4",
        "@testing-library/react": "^11.1.0",
        "@testing-library/user-event": "^13.5.0",
        "react": "17.0.2",
        "react-dom": "17.0.2",
        "react-scripts": "5.0.1",
        "web-vitals": "^2.1.4"
    },
    ```

  * Run `npm install` to ensure that your project is now running React version 17.

* **Important**: To avoid errors due to conflicting versions of ESLint in `fullstack-ground`, navigate to `00-practice-app` in the command line and run the following command:

   ```sh
   echo "SKIP_PREFLIGHT_CHECK=true" > .env
   ```

* Each activity will rely on this practice app existing inside the `01-Activities` directory. Be sure to copy all activities to the student repo, including the `swap_tool` utility.

* To save time in class, students are expected to copy the `Unsolved/src` directory from the activity folders to their practice React app. This can be done manually, or with `sswap`, a command line tool that is included in the activities directory. Simply navigate to the [`swap_tool`](../../../../01-Class-Content/20-React/01-Activities/swap_tool/README.md) directory, install the dependencies and run the `sswap` command.

* Shortly after you review the slide deck for Module 20, you'll demonstrate the mini-project. To prepare, make sure to run `yarn install` or `npm install` inside `01-Class-Content/20-React/01-Activities/28-Stu_Mini-Project/Main/bucket-list` before class begins.

* Several activities in this module require students to import Bootstrap into the `/src/index.js` file. If students ask why their activities do not match the solution, check whether they've done this.

* Remind students to do a `git pull` of the class repo and to have today's activities ready and open in VS Code.

* If you are comfortable doing so, live-code the solutions to the activities. If not, just use the solutions provided and follow the prompts and talking points for review.

* Let students know that the Bonus at the end of each activity is not meant to be extra coding practice, but instead is a self-study on topics beyond the scope of this module for those who want to further their knowledge.

## Learning Objectives

By the end of class, students will be able to:

* Explain and use the `create-react-app` command line utility to create new React projects.

* Explain and use JSX to render elements on the page.

* Isolate code into reusable components and explain the benefits of doing so.

* Explain and use Props to pass data to child React components.

## Slide Deck

* [Module 20 Slide Deck](https://docs.google.com/presentation/d/1LeJL4oLTOTTmKL_kKRMQBijRic4zTgBuk2bJ3el_Dn8/edit?usp=sharing)

## Time Tracker

| Start  | #   | Activity Name                        | Duration |
|---     |---  |---                                   |---       |
| 10:00AM| 1   | Instructor Demo: Mini-Project        | 0:05     |
| 10:05AM| 2   | Student Do: Mini-Project             | 0:60     |
| 11:05AM| 3   | Instructor Review: Mini-Project      | 0:10     |
| 11:15AM| 4   | Introduce Challenge                  | 0:05     |
| 11:20AM| 5   | FLEX                                 | 0:30     |
| 11:50PM| 6   | Instructor Do: Stoke Curiosity       | 0:10     |
| 12:00PM| 7   | BREAK                                | 0:30     |
| 12:30PM| 8   | Instructor Demo: Create React App    | 0:05     |
| 12:35PM| 9   | Student Do: Create React App         | 0:15     |
| 12:50PM| 10  | Instructor Review: Create React App  | 0:10     |
| 1:00PM | 11  | Instructor Demo: Render Elements     | 0:05     |
| 1:05PM | 12  | Student Do: Render Elements          | 0:15     |
| 1:20PM | 13  | Instructor Review: Render Elements   | 0:10     |
| 1:30PM | 14  | Instructor Demo: JSX Expressions     | 0:05     |
| 1:35PM | 15  | Student Do: JSX Expressions          | 0:15     |
| 1:50PM | 16  | Instructor Review: JSX Expressions   | 0:10     |
| 2:00PM | 17  | Instructor Demo: Props               | 0:05     |
| 2:05PM | 18  | Student Do: Props                    | 0:15     |
| 2:20PM | 19  | Instructor Review: Props             | 0:10     |
| 2:30PM | 20  | END                                  | 0:00     |

---

## Class Instruction

### 1. Instructor Demo: Mini-Project (5 min)

* Welcome students to class.

* Navigate to `28-Stu_Mini-Project/Main` in Module 19 from the command line and run `npm install` and `npm run start`.

* Open [http://localhost:3000](http://localhost:3000) in your browser and demonstrate the following:

  * The homepage is a simple form with contact information.

  * When we fill out the form and submit it, we create a new contact card.

* Open the Application tab in Chrome DevTools and demonstrate the following:

  * 🔑 We see that the cards are being saved and retrieved by the `contact` object store under the `IndexedDB` section.

  * 🔑 We can also see that we have a manifest file and active service worker caching assets.

  * We can also install our application via the button in the header or address bar.

* Open the `Elements` tab in Chrome DevTools, expand the `<head>` element, and demonstrate the following:

  * 🔑 We see that our files are being bundled with webpack.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 With webpack, workbox, and IndexedDB!

* Answer any questions before allowing students to start the mini-project.

### 2. Student Do: Mini-Project (60 min)

* Direct students to the activity instructions found in `28-Stu_Mini-Project/README.md`, which are also shown below.

* Break your students into groups that will work together on this activity.

  ```md
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
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 3. Instructor Review: Mini-Project (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with this mini-project? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use Office Hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ Deploy to Heroku

  * ✔️ Build scripts

  * ✔️ IndexedDB

* Open `28-Stu_Mini-Project/Main/package.json` in your IDE and explain the following:

  * We need to create a few basic scripts to get the application running.

    ```json
     "scripts": {
        "server": "cd server nodemon server.js --ignore client",
        "build": "cd client && npm run build",
        "install": "cd server && npm i && cd ../client && npm i",
        "client": "cd client && npm start"
    },
    ```

  * 🔑 `server` will start up only the server side of our application.

  * 🔑 `build` will change directories into the `client` and run the clients build script, which we will look at shortly.

  * 🔑 `install` will change directories into the `client` and install all the necessary packages.

  * 🔑 `client` will just start the client.

  * 🔑 We now have to install the `concurrently` package for our next script.

    ```json
     "scripts": {
        "start:dev": "concurrently \"cd server && npm run server\" \"cd client && npm run dev\"",
        "start": "npm run build && cd server && node server.js",
        "server": "cd server nodemon server.js --ignore client",
        "build": "cd client && npm run build",
        "install": "cd server && npm i && cd ../client && npm i",
        "client": "cd client && npm start"
    },
    ```

  * 🔑 `start:dev` will run our server and webpack server at the same time.

  * 🔑 `start` will run our server and webpack build the client for us.

* Open `28-Stu_Mini-Project/Main/client/package.json` in your IDE and explain the following:

  * For the root level `package.json` scripts to work, we need to set up the webpack scripts in the client `package.json` file.

    ```json
    "scripts": {
      "dev": "webpack-dev-server",
      "build": "webpack --mode production",
      "start": "webpack --watch"
    },
    ```

  * 🔑 Now the root level `package.json` can communicate with the client `package.json`.

* Open `28-Stu_Mini-Project/Main/client/src-sw.js` in your IDE and explain the following:

  * Now we create a simple service worker with a workbox to cache static assets for us.

    ```js
    const { StaleWhileRevalidate } = require('workbox-strategies');
    const { registerRoute } = require('workbox-routing');
    const { CacheableResponsePlugin } = require('workbox-cacheable-response');
    const { precacheAndRoute } = require('workbox-precaching/precacheAndRoute');

    precacheAndRoute(self.__WB_MANIFEST);

    // Set up asset cache
    registerRoute(
      ({ request }) => ['style', 'script', 'worker'].includes(request.destination),
      new StaleWhileRevalidate({
        cacheName: 'asset-cache',
        plugins: [
          new CacheableResponsePlugin({
            statuses: [0, 200],
          }),
        ],
      })
    );
    ```

  * 🔑 With workbox, we need to first specify our `precacheAndRoute(self.__WB_MANIFEST);`.

  * 🔑 Next, we use workbox routing with a caching strategy to set up a cache called `asset-cache`.

* Open `28-Stu_Mini-Project/Main/client/webpack.config.js` in your IDE and explain the following:

  * We have our `entry` files set up, so now we can specify the `output` files.

    ```js
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
      },
    ```

  * The files will be bundled and placed in the `dist` directory.

  * Next, we specify the `plugins` we want to use.

    ```js
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
      }),

      new InjectManifest({
        swSrc: './src-sw.js',
        swDest: 'src-sw.js',
      }),
      new WebpackPwaManifest({
        fingerprints: false,
        inject: true,
        name: 'Contact Cards',
        short_name: 'Contact',
        description: 'Never forget your contacts!',
        background_color: '#225ca3',
        theme_color: '#225ca3',
        start_url: './',
        publicPath: './',
        icons: [
          {
            src: path.resolve('src/images/logo.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('assets', 'icons'),
          },
        ],
      }),
    ],
    ```

  * `HtmlWebpackPlugin` helps us generate an `index.html` file inside the `dist` directory.

  * `InjectManifest` will inject our custom service worker into our webpack build.

  * `WebpackPwaManifest` will create a `manifest.json` file with the provided object.

  * Finally, we can add CSS loaders and Babel.

    ```js
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/transform-runtime'],
            },
          },
        },
      ],
    },
    ```

* Open `28-Stu_Mini-Project/Main/client/src/js/database.js` in your IDE and explain the following:

  * Here, we initialize the database and create an object store named `contacts`.

    ```js
    const initdb = async () =>
      openDB('contact', 1, {
        upgrade(db) {
          if (db.objectStoreNames.contains('contact')) {
            console.log('contact database already exists');
            return;
          }
          db.createObjectStore('contact', { keyPath: 'id', autoIncrement: true });
          console.log('contact database created');
        },
      });
    ```

  * Next, we create a POST function for our database.

    ```js
    export const postDb = async (name, home, cell, email)  => {
      const contactDb = await openDB('contact', 1);
      const tx = contactDb.transaction('contact', 'readwrite');
      const store = tx.objectStore('contact');
      const request = store.add({ name: name, home_phone: home, cell_phone: cell, email: email });
      const result = await request;
      console.log('🚀 - data saved to the database', result);
    };
    ```

  * We open a transaction in the `contact` database with `readwrite` privileges.

  * Once open, we use the `.add()` method on the `store` and pass in the appropriate parameters.

  * Next, we create a GET function for our database.

    ```js
    export const getDb = async () => {
      const contactDb = await openDB('contact', 1);
      const tx = contactDb.transaction('contact', 'readonly');
      const store = tx.objectStore('contact');
      const request = store.getAll();
      const result = await request;
      console.log('result.value', result);
      return result;
    };
    ```

  * This is the same as earlier, except that we are using the `.getAll()` method instead, which only requires `readonly` privileges.

  * Finally, we create a DELETE function for our database.

    ```js
    export const deleteDb = async (id) => {
      const contactDb = await openDB('contact', 1);
      const tx = contactDb.transaction('contact', 'readwrite');
      const store = tx.objectStore('contact');
      const request = store.delete(id);
      const result = await request;
      console.log('result.value', result);
      return result?.value;
    };
    ```

* This is the same as earlier, except that we are using the `.delete()` method with the appropriate `id`.

* Open `28-Stu_Mini-Project/Main/.npmrc` in your IDE and explain the following:

  * 🔑 This file tells Heroku to not purge our dev dependencies when we deploy to Heroku. We need webpack for our application to work properly, and webpack is a dev dependency.

  * 🔑 Run the following commands to deploy to Heroku:

    ```sh
    git init
    git add -A
    git commit -m "Ready to deploy!"
    heroku create
    git push heroku main
    ```

  * 🔑 After a couple of minutes, our PWA should be successfully deployed to Heroku!

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why do we want to deploy with the dev dependencies?

  * 🙋 We need access to webpack, which is a dev dependency!

  * ☝️ Why do we use `concurrently`?

  * 🙋 So that we can run both the webpack server and node server during development.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Heroku deployment guide](https://devcenter.heroku.com/articles/git), and attend Office Hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 4. Instructor Demo: Introduce Challenge (5 min)

* Navigate to `02-Challenge/Main` from the command line and run `npm install` and `npm run start`.

* Open [http://localhost:3000](http://localhost:3000) in your browser and demonstrate the following:

  * We are building a PWA text editor with JavaScript syntax highlighting.

* Try writing `console.log()` in the JavaScript syntax editor opened in the browser to demonstrate the following:

  * Click the install button, and demonstrate that even when we open and close the installed version of the app, the console.log() we have typed is saved.

* Open the Application tab in Chrome DevTools. Under the "Cache Storage" section, inspect the contents of the object store.

  * We are storing the contents of the editor in IndexedDB and saving `onBlur()` on the window.

  * We can also inspect the service worker, which is caching our static assets so the application can work offline.

  * All of this is bundled with the help of a webpack!

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are we learning?

  * 🙋 PWAs, webpack, workbook, and IndexedDB!

  * ☝️ How does this project build on or extend previously learned material?

  * 🙋 We get to apply the PUT method and we use a more complex `index.html` template.

  * ☝️ How does this project relate to your career goals?

  * 🙋 You get to flex some of your usual JavaScript skills with a hint of web performance!

* Ask TAs to direct students to the Challenge Requirements found in `02-Challenge/README.md`.

* Answer any questions before proceeding to the next activity.

### 5. FLEX (30 min)

* This time can be utilized for reviewing key topics learned so far in this module or getting started on the Challenge.

* Module 19 was a packed module with many new concepts. If your class ran out of time to cover any activities fully, take this time to review them.

* Ask students if they have any questions about PWA or Webpack before started a new module.

### 6. Instructor Do: Stoke Curiosity (10 min)

* Open the [slide deck](https://docs.google.com/presentation/d/1LeJL4oLTOTTmKL_kKRMQBijRic4zTgBuk2bJ3el_Dn8/edit?usp=sharing) and follow these prompts on their corresponding slides:

  * **React**:

    * This module is all about React, which is a powerful JavaScript library for building user interfaces.

  * **What Is React?**

    * React is one of the most powerful, in-demand front-end JavaScript libraries available today.

    * React is a library that helps you create complex and responsive single-page applications.

    * React is widely popular and well supported by the developer community.

    * Created by the developers at Facebook.

    * Makes code reusable and divides things into components.

  * **What Problem Does React Solve?**

    * DOM operations are quite expensive in terms of performance, so React creates a **virtual DOM (VDOM)**.

    * The VDOM is a representation of the page structure in memory. It tracks what needs to be updated and only updates those specific things.

    * React is not opinionated like many other frameworks. It gives the developer the freedom to use Javascript the way they want to use it.

  * **Can You Give Me an Example?**

    * Facebook’s UI is a great example of React in action.

    * Each section of the page is a component that has tons of real-time updates happening every second.

    * The component design pattern allows Facebook to add a search bar and messenger to nearly every page that the user visits.

  * **Facebook's UI Complexities**

    * Facebook buzzes with interactive options, live-updating data, and tightly interacting elements. This poses a challenge to simple DOM.

  * **Why Separate UI Components?**

    * Logically decompose a UI into unique parts.

    * Easily reuse these parts without rewriting code.

    * Separate components are easier to test.

    * Helps isolate bugs, saving time.

  * **What Are Props?**

    * **Props** are a specialized type of parameter passed into a React component that help define attributes in the user interface, similar to DOM attributes.

    * Props allow data to be passed from a parent component to a child component.

    * **Props** is short for **properties** and refers to an normal JavaScript object that contains key-value pairs.

  * **How Is This Different Than Regular DOM Manipulation?**

    * In JavaScript, the application’s state and UI are updated independently of each other.

    * With React, whenever the application’s state changes, the DOM updates to reflect it.

    * With React, the UI is a pure function of the application’s state.

  * **How Do We Handle Constant Data Changes?**

  * **Rapid Data Changes in Plain Vanilla Javascript**

    * JavaScript is fast, but whenever we update the DOM, the browser needs to recalculate the CSS, update the layout, and repaint the webpage. This can be a slow process.

  * **Rapid Data Changes in React**

    * React’s virtual DOM serves as an intermediary and avoids unnecessary trips to the DOM. It updates only what has been changed.

  * **What Is the Virtual DOM?**

    * The virtual DOM is an ideal representation of the user interface kept in memory. It is synced with the actual DOM through a process called **reconciliation**.

    * We tell React what state the UI should be in, and React ensures that the DOM matches the internal state.

    * We isolate the attribute changes, event handling, and other DOM manipulation that we would otherwise use when building an app.

  * **Can We Get a Visualization, Please?**

    * **Virtual DOM** is a JavaScript object that models the real DOM.

    * Whenever some part of the application’s state changes, the virtual DOM receives the UI updates first.

    * Then the virtual DOM is compared to the real DOM.

    * React then updates with the smallest number of changes.

  * **What Are the Pros and Cons?**

    * **Pros**

      * Reusable components.

      * UI updates in response to state change, reducing DOM manipulation code needed.

      * Can build applications on web, server, and native applications.

      * Easier to learn and more popular than other front-end JavaScript libraries and frameworks.

    * **Cons**

      * React is a view library concerned with rendering user interfaces. You have to pull in other libraries to accomplish things like HTTP requests.

      * Can require more configuration than other libraries.

  * **What Tooling Is Needed?**

    * Babel and Webpack

  * **What Is Webpack?**

    * Webpack lets you modularize front-end code the same way you do in Node with CommonJS modules (require, module.exports).

    * Webpack also lets you apply various transformations on your assets via plugins.

  * **What Is Babel?**

    * Babel lets you transpile next-generation JavaScript (ES6, ES7, ES8) into ES5 JavaScript that most browsers understand.

  * **How Do We Learn React?**

    * React was designed to help create snappy single-page applications, but learning it can be daunting at first. Don’t worry -- we will break it down into small digestible topics and take things one step at a time.

    * You can try the following to learn React:

      * Read the official documentation and practice with the provided examples.

      * Reverse-engineer finished code to see how something was accomplished.

      * Build something from scratch.

      * Debug a broken React app.

      * And most importantly, ask questions!

* After you run through the slides, preview the mini-project for the class. In the command line, navigate to `28-Stu_Mini-Project/Main/bucket-list` and demonstrate the following:

  * Run `npm install` and then `npm start` to begin the demonstration.

    * We will build a bucket-list app using React.

    * Building this app should be a fun exercise in using your newly acquired React skills.

    * You will be able to tell your friends and family about how you used React Hooks, components, state, and so many other cool React concepts!

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What will we learn as we work on the mini-project?

  * 🙋 We are learning how to create a bucket-list app using React. The app lets users create, update, and delete bucket-list items and assign them a priority level.

  * ☝️ How does this project build on or extend previously learned material?

  * 🙋 React represents a community-driven desire to make the web better and easier to use. It uses the latest JavaScript syntax and design patterns, which we have been introduced to in this course. With React, we are adding yet another tool to our developer tool kit.

  * ☝️ How does this project relate to your career goals?

  * 🙋 In recent years, React has become arguably the most sought-after skill by employers. It cannot be overstated how much value you can provide by knowing how to build single-page applications and create React apps from scratch.

* Answer any questions before proceeding to the next activity.

### 7. BREAK (30 min)

### 8. Instructor Demo: Create React App (5 min)

* It's time to introduce the very useful `create-react-app` utility. Let students know that this useful command-line utility will create the skeleton of a React app for them. The only downside is that running it can take some time. For this reason, in this first activity we'll use it to create a practice React app that we will then reuse for the rest of the module's activities. To make that work, we'll only need to swap out the `/src` file for each activity.

* In the command line, navigate to `01-Class-Content/20-React/01-Activities` and run the following command:

  ```sh
  npx create-react-app 00-practice-app
  ```

  * 🔑 When we run this command, the npm package runner, `npx`, will execute the latest version of the `create-react-app` utility.

  * 🔑 We can see that `create-react-app` runs a series of scripts to create a new directory, repository, and folder structure for a boilerplate React application.

  * We can deduce that the argument after `create-react-app` is the name of the application that we want to create.

  * This process might take some time to complete. When it's done, you will see a boilerplate application in the `00-practice-app` directory, with the following file structure (excluding `node_modules`):

    ```sh
    ├── README.md
    ├── package.json
    ├── public
    │   ├── favicon.ico
    │   ├── index.html
    │   ├── logo192.png
    │   ├── logo512.png
    │   ├── manifest.json
    │   └── robots.txt
    ├── src
    │   ├── App.css
    │   ├── App.js
    │   ├── App.test.js
    │   ├── index.css
    │   ├── index.js
    │   ├── logo.svg
    │   ├── reportWebVitals.js
    │   └── setupTests.js
    └── yarn.lock
    ```

  * **Important**: `create-react-app` now automatically uses the latest release of React, version 18. Due to several conflicting packages with React version 18, follow the steps below to ensure that all activities work as intended.

  * Delete the `package-lock.json` file and `node_modules` folder from the `client` directory.

  * Downgrade `react` to 17.0.2 inside of the `package.json` file.

  * Downgrade `react-dom` to 17.0.2 inside of the `package.json` file.

  * Downgrade `@testing-library/react` to ^11.1.0 inside of the `package.json` file.

  * Your `package.json` file should look like the following:

    ```js
    "dependencies": {
        "@testing-library/jest-dom": "^5.16.4",
        "@testing-library/react": "^11.1.0",
        "@testing-library/user-event": "^13.5.0",
        "react": "17.0.2",
        "react-dom": "17.0.2",
        "react-scripts": "5.0.1",
        "web-vitals": "^2.1.4"
    },
    ```

  * Run `npm install` to ensure that your project is now running React version 17.

  * If we change into `00-practice-app` and then run `npm start`, we can see that the application builds and automatically opens a browser window.

  * For each subsequent activity in this module, we will remove the `/src` directory in `00-practice-app` and replace it with the `/src` directory in the activity's `/Unsolved` folder. Let's practice that now.

* Open `01-Ins_Create-React-App` and replace your newly created `00-practice-app/src` directory with the one found in `01-Ins_Create-React-App`.

  * After we replace the `/src` directory, we can see the browser refresh and load the new content.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How will we build a new React app for each subsequent activity?

  * 🙋 We will delete the `00-practice-app/src` directory and replace it with the one found in `Unsolved/src` for each activity.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to direct students to the activity instructions found in `02-Stu_Create-React-App/README.md`.

### 9. Student Do: Create React App (15 min)

* Direct students to the activity instructions found in `02-Stu_Create-React-App/README.md`.

* Break students into pairs that will work together on this activity.

  ```md
  # 📐 Add Comments That Describe the Functionality of a React App

  ## Before We Begin

  Initializing a React application by using the `create-react-app` command-line utility can take some time. To save time throughout this module, we will create one React application and only replace the `/src` files for each subsequent activity as we work on them. Before you add comments to the code, you will practice the workflow for creating a React app and updating your practice app for subsequent activities.

  To do this, follow these steps:

  1. In the command line, navigate to `20-React/01-Activities`.

  2. Run the command `npx create-react-app 00-practice-app`.

  3. `create-react-app` now automatically uses the latest release of React, version 18. Due to several conflicting packages with React version 18, follow the steps below to ensure that all activities work as intended.

    * Delete the `package-lock.json` file and `node_modules` folder from the `client` directory.

    * Downgrade `react` to 17.0.2 inside of the `package.json` file.

    * Downgrade `react-dom` to 17.0.2 inside of the `package.json` file.

    * Downgrade `@testing-library/react` to ^11.1.0 inside of the `package.json` file.

    * Your `package.json` file should look like the following:

      ```js
      "dependencies": {
          "@testing-library/jest-dom": "^5.16.4",
          "@testing-library/react": "^11.1.0",
          "@testing-library/user-event": "^13.5.0",
          "react": "17.0.2",
          "react-dom": "17.0.2",
          "react-scripts": "5.0.1",
          "web-vitals": "^2.1.4"
      },
      ```

    * Run `npm install` to ensure that your project is now running React version 17.

  4. After `create-react-app` has completed (which can take a few minutes), run the command `npm install bootstrap dotenv axios --save` to add dependencies that we will need in later activities.

  5. Copy the `/src` folder from `02-Stu_Create-React-App` and paste it into the root of `00-practice-app`.

  6. Run `npm start` to ensure that the source files were transplanted successfully.

  ## Activity

  Work with a partner to add comments that describe the functionality of the code in [00-practice-app/src](../00-practice-app/src).

  ## 📝 Notes

  Refer to the documentation:

  [React Docs on Hello World](https://Reactjs.org/docs/hello-world.html)

  ---

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What are some other flags that you can use with the `create-react-app` utility?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be addressed. It's a good way for your team to prioritize students who need extra help.

### 10. Instructor Review: Create React App (10 min)

* Before you review the activity, make sure that you replace the `/src` directory with the one found in `02-Stu_Create-React-App`.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with `create-react-app` and swapping out the `/src` files? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that you will review the solution with them to help solidify their understanding. If questions remain, remind them to use office hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `/src`

  * ✔️ `index.js`

  * ✔️ `App.js`

* Open `00-practice-app/src/index.js` in your IDE and explain the following:

  * After we copy the `/src` directory, we notice that there are some comments in the `index.js` file for us to complete.

  * React is a JavaScript library that is used to build web application user interfaces.

  * 🔑 As of React version 17, the React library no longer requires us to add `import React from 'react` to transform JSX. However, most in-production React codebases still use them because this is a recent change, so in this module we include the import React statements in the activities:

     ```js
     import React from 'react';
     ```

  * 🔑  The `React` module is an entry point to the React library, while `react-dom` provides access to DOM-specific methods:

     ```js
     import ReactDOM from 'react-dom';

     import App from './App';
     ```

  * 🔑  `ReactDOM.render()` takes a React component or tree of React components and eventually renders them to the DOM.

  * The first argument is the component we want to render (`<App />`), and second is the target element to render to (`#root`):

     ```js
     ReactDOM.render(<App />, document.getElementById('root'));
     ```

* Open `00-practice-app/src/App.js` in your IDE and explain the following:

  * Here we see another file asking for comments regarding the `App` component.

  * 🔑  This function is a functional component that helps us split the UI into distinct parts.

  * In this case, we are returning another component, `<HelloReact/>`, from it:

     ```js
     import React from 'react';
     import HelloReact from './components/HelloReact';

     function App() {
       return <HelloReact />;
     }

     export default App;
     ```

* Open `00-practice-app/src/components/HelloReact.js` in your IDE and explain the following:

  * Here we have a component called `Hello`. Our task again is to provide comments that describe the functionality.

  * 🔑 Components are responsible for rendering some part of an application's UI.

  * Components let us split the UI into independent, reusable pieces and also think about each piece in isolation:

     ```js
     import React from 'react';

     function HelloReact() {
       const text = 'some text';

       return <p>Hello World! Here is {text}</p>;
     }

     export default HelloReact;
     ```

  * The curly braces allow us to pass values and expressions into the view. In this example, we are passing in the variable `text`.

  * JSX is a syntax extension to JavaScript that looks like HTML and is compiled to a widely supported ES5 syntax called Babel:

     ```jsx
     <p>Hello World! Here is {text}</p>
     ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do we make sure that each component has access to the React library?

  * 🙋 In each React component, we must first import React at the top of the file.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [React Docs](https://reactjs.org/docs/hello-world.html), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 11. Instructor Demo: Render Elements (5 min)

* Begin by deleting the `00-practice-app/src` directory and replacing it with `03-Ins_Render-Element/src`.

* Run `npm start` from the command line in `00-practice-app`and demonstrate the following:

  * 🔑 When we run the app, we see that the page renders with some elements like a header, a `p` tag, and an unordered list.

  * We also see that the `/src` directory contains an `index.js` file, an `App.js`file , and a components folder like the previous example.

* Open `00-practice-app/src/index.js` in your IDE and explain the following:

  * We see that `index.js` is the entry point for the application.

  * It imports `App` from `App.js` and uses `ReactDOM.render()` to render it to the element `#root`:

     ```js
     import React from 'react';
     import ReactDOM from 'react-dom';
     import App from './App';

     ReactDOM.render(<App />, document.getElementById('root'));
     ```

* Open `00-practice-app/src/App.js` in your IDE and explain the following:

  * Investigating `App.js` allows us to see that this component returns some JSX, including another component called `Welcome`, denoted by the `<Welcome />` tag:

     ```js
     import React from 'react';
     import Welcome from './components/Welcome';

     export default function App() {
       return (
         <div>
           <Welcome />
         </div>
       );
     }
     ```

* Open `00-practice-app/src/components/Welcome.js` in your IDE and explain the following:

  * If we open the `Welcome.js` file, we see that it is directly exporting a component called `Welcome`:

     ```js
     export default function Welcome() {
     ```

  * Because it is possible to export more than one component from a file, we use the `default` keyword to tell React that this component should be imported if none is specified.

  * We can see several elements inside the `Welcome` component's return statement:

     ```js
     return (
       <div className="container">
         <h1>Hello students!</h1>
         <p>Today we will be learning about the following:</p>
         <ul className="parent">
           <li>React</li>
           <li>Components</li>
           <li>Props</li>
           <li>Babel</li>
         </ul>
       </div>
     );
     ```

  * 🔑 Notice that the JSX elements are wrapped in a single `parent` element.

  * Also note that we use `className` instead of `class` inside JSX, to avoid namespace issues with JavaScript `class` keywords.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 We can start by creating a component, returning some JSX, and making sure that all the elements are enclosed in a single parent element.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `04-Stu_Render-Element/README.md`.

### 12. Student Do: Render Elements (15 min)

* Direct students to the activity instructions found in `04-Stu_Render-Element/README.md`.

* Break your students into pairs that will work together on this activity.

   ```md
   # 🐛 App Renders a Blank Page

   Work with a partner to resolve the following issue(s):

   * As a user, I want to be able to see something rendered to the page when I visit the site.

   ## Expected Behavior

   The page should render an `h1` heading tag that introduces the creator; for example, `<h1>Hello! My name is <insert name here></h1>`.

   There should also be an unordered list of interests following the heading.

   ## Actual Behavior

   The page loads with errors in the console and the page is empty.

   ## Steps to Reproduce the Problem

   Because this is a new activity, we need to swap out the `/src` folder. Follow these steps to reproduce the problem:

   1. Delete the `/src` folder in [00-practice-app](../00-practice-app/).

   2. Copy the `/src` folder from [Unsolved](./Unsolved/) and paste it into [00-practice-app](../00-practice-app/).

   3. Run `npm start` and navigate to the page.

   ## 💡 Hints

   Why do we need to import the React library in each component?

   ## 🏆 Bonus

   If you have completed this activity, work through the following challenge with your partner to further your knowledge:

   * Why is it important to wrap all JSX tags for a single component in a single parent tag?

   Use [Google](https://www.google.com) or another search engine to research this.
   ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be addressed. It's a good way for your team to prioritize students who need extra help.

### 13. Instructor Review: Render Elements (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with rendering elements in React? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ Parent elements

  * ✔️ `ReactDOM.render()`

  * ✔️ `export`

* Open `00-practice-app/src/App.js` in your IDE and explain the following:

  * First, as with all React components, we must import React at the top of the component.

  * As we open the `App` component, we can see that `HelloDiv` is exported and rendered inside `App`:

     ```js
     import React from "react";
     import HelloDiv from "./components/HelloDiv";

     function App() {
       return <HelloDiv />;
     }

     export default App;
     ```

  * 🔑 We can see when we open `index.js` that `App` is getting exported and then rendered as the first argument to the `ReactDOM.render()` method.

  * 🔑 Also, we can see that the second argument getting passed to `ReactDOM.render()` is the real DOM element that the React app should render to:

     ```js
     import React from 'react';
     import ReactDOM from 'react-dom';
     import App from './App';

     ReactDOM.render(<App />, document.getElementById('root'));
     ```

  * 🔑 Inside `HelloDiv.js`, similar to normal JavaScript functions, we want to have one return value. As a result, we need to wrap all the elements inside a parent element.

  * Again, we import React as with all other functional or class-based components:

     ```js
     import React from "react";

     function HelloDiv() {
       return (
         <div>
           <h1>Hey guys! Im a header!</h1>
           <h2>Things I like!</h2>
           <ul>
             <li>Peas</li>
             <li>Carrots</li>
             <li>Love</li>
           </ul>
         </div>
       );
     }

     export default HelloDiv;
     ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How can we avoid getting errors when rendering JSX elements from a component?

  * 🙋 We can wrap them in a single parent element or return an array of JSX elements with a key attribute.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [React Docs on JSX elements](https://reactjs.org/docs/introducing-jsx.html), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 14. Instructor Demo: JSX Expressions (5 min)

* Begin by deleting the `00-practice-app/src` directory and replacing it with `05-Ins_JSX-expressions/src`.

* Run `npm start` from the command line and demonstrate the following:

  * 🔑 When we run this React app, the browser loads a page with some basic styling and what appear to be some JSX variables.

  * 🔑 Open `src/components/JSXVariables.js`. The point of this exercise is writing JSX expressions inside the components.

  * **JSX** stands for **JavaScript XML**. JSX allows us to write HTML in React code. It is identical to HTML in almost every way, except for how it is processed: JSX elements are converted to React elements when the code is run.

  * Here is an example of some JSX code:

    ```js
    const awesomeElement = <span>JSX is the best!</span>

    ReactDOM.render(awesomeElement, document.getElementById('root'));
    ```

  * Here is an example of the same code without JSX:

    ```js
    const awesomeElement = React.createElement('span', {}, 'JSX is the best!')
    ```

  * The first option is familiar: it is much like normal HTML. JSX is an extension of JavaScript and is translated into normal JavaScript when the code runs.

  * One cool thing about JSX is that we can write comments in it by using single curly braces. This might look similar to the expressions we used in Handlebars.js, but we are using a set of single curly braces instead of double curly braces:

    ```js
    return (
      <div className="main-container">
        <div className="container">
          <div className="jumbotron">
            {/* JavaScript expressions can be escaped inside of curly braces */}
    ```

  * We use the `name`, `num1`, and `num2` variables inside the JSX code. If we were to update one of these variables with a new value, the value would be reflected on the page:

    ```jsx
    <h2>My cat's name is {name}. But you can call me...</h2>
    <h1>The JSX Boss!</h1>
    <hr />
    <h2>I can do math: {num1 + num2}.</h2>
    ```

  * We use these curly braces to get JavaScript variables inside the JSX view that React will ultimately render.

  * We can see that rendering variables like `name` is pretty straightforward, but we can also evaluate entire expressions that are inside JSX curly braces. Notice in the following code that we're producing random numbers and reversing `name` as well:

    ```jsx
    <h2>
      I can generate random numbers:
      {Math.floor(Math.random() * 10) + 1},
      {Math.floor(Math.random() * 10) + 1},
      {Math.floor(Math.random() * 10) + 1}.
    </h2>
    <h2>I can even reverse my name: {name.split('').reverse()}</h2>
    ```

  * Given these examples, we can deduce that an **expression** is any valid set of literals, variables, operators, or expressions that evaluates to a single value.

  * Any piece of data that we can assign to a variable is an **expression**. This doesn't include loops or conditionals, which we can deal with in various ways (which we'll cover later).

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 We would first create a set of variables that we know are likely to change with each view that gets rendered. Then we would add that data to the view by using expressions inside the view.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `06-Stu_JSX-expressions/README.md`.

### 15. Student Do: JSX Expressions (15 min)

* Direct students to the activity instructions found in `06-Stu_JSX-expressions/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🏗️ Implement JSX Expressions

  ## Before We Begin

  Before you begin this activity, complete the following steps:

  1. Delete the `/src` folder in [00-practice-app](../00-practice-app/).

  2. Copy the `/src` folder from [Unsolved](./Unsolved/) and paste it into [00-practice-app](../00-practice-app/).

  3. This project uses Bootstrap, so don't forget to import it inside `index.js`:

    `import 'bootstrap/dist/css/bootstrap.min.css'`

  ## Activity

  Work with a partner to implement the following user story:

  * As a developer, I want to be able to use JSX expressions to render variables in my components.

  ## Acceptance Criteria

  * It's done when I create the JavaScript variables requested in [JSXVariables.js](../00-practice-app/src/components/JSXVariables.js).

  * It's done when I render a `name` variable that will hold my name.

  * It's done when I render the number of letters in the `name` variable.

  * It's done when I create a variable called `thoughts` that contains a string regarding my thoughts on React.

  ## 💡 Hints

  How can we use the [React Docs on JSX](https://reactjs.org/docs/introducing-jsx.html) to help us while working with JSX?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What other array methods are available to use on the `name` variable?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be addressed. It's a good way for your team to prioritize students who need extra help.

### 16. Instructor Review: JSX Expressions (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with using JSX expressions? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ Curly braces

  * ✔️ Comments inside JSX

* Open `00-practice-app/src/index.js` in your IDE and explain the following:

  * First we need to open the `index.js` file and import Bootstrap for styling:

    ```js
    import 'bootstrap/dist/css/bootstrap.min.css';
    ```

* Next, open `00-practice-app/src/components/JSXVariables.js` in your IDE and explain the following:

  * First we add the requested variables near the top of the `JSXVariables.js` file:

    ```js
    const name = 'Christan';
    const thoughts = 'is amazing!!!';
    ```

  * We use these variables and methods inside the JSX expressions, using the curly braces:

    ```js
    function JSXVariables() {
      return (
        <div className="main-container">
          <div className="container">
            <div className="jumbotron">
              <h1>Hi! My name is ({name})</h1>
              <h2>My name has ({name.length}) letters</h2>
              <h2>I think React ({thoughts})</h2>
            </div>
          </div>
        </div>
      );
    }
    ```

  * 🔑 Notice how we can invoke methods directly inside the curly braces. We can also do things like reference the length of the name variable by using `{name.length}`.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How is React different from jQuery or vanilla JavaScript in rendering variables on the page?

  * 🙋 Unlike vanilla JavaScript, we don't have to use special methods to set the `innerText` or `innerHTML` of the page. We can simply refer to the variable in curly braces.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [React Docs on JSX](https://reactjs.org/docs/introducing-jsx.html), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 17. Instructor Demo: Props (5 min)

* Begin by deleting the `00-practice-app/src` directory and replacing it with `07-Ins_Props/src`.

* Run `npm start` from the command line and demonstrate the following:

  * 🔑 This example is using a Bootstrap alert that tells us that there is an invalid username or password.

  * 🔑 Components are independent and reusable bits of code. They are simply JavaScript functions that return a JSX expression that renders as HTML. Components can come in two types, Class components and Functional components. We will be dealing with Functional components in this course.

  * Inside `App.js`, we are returning a component `Alert` with a type attribute of `danger`.

  * `App.js` also has a variable called `message` that is getting passed as a prop to `Alert`:

    ```js
    const message = 'Invalid user id or password';
    const alertType = "danger"

    function App() {
      return <Alert type={alertType} message={message} />;
    }
    ```

  * If we look at `/components/Alert.js`, we can see that the component accepts something called `props` as an argument. We refer the data in `props` just like we would with any other JavaScript object:

    ```js
    function Alert(props) {
      console.log(props);

      return (
        <div className={`alert alert-${props.type || 'success'}`} role="alert">
          {props.message}
        </div>
      );
    }
    ```

  * 🔑 Props are a way to pass down data as objects to nested components as arguments. These are known as child components.

  * One of our props is `props.type`, which will be used to change the class of the element and therefore the way it looks.

  * Similarly, we have a `props.message` key, which contains a string, `"Invalid user id or password"`:

    ```js
    return (
      <div className={`alert alert-${props.type || 'success'}`} role="alert">
        {props.message}
      </div>
    );
    ```

  * 🔑 We can pass any type of data as a prop, including strings, numbers, arrays, functions, and even entire components!

  * 🔑 It is important to note that React uses a unidirectional data flow, meaning that data only flows in one direction: from the top down, parent to child.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ If a prop inside the component isn't what we expect it to be, where could we look to find out why?

  * 🙋 We would look at the parent component to see what kind of data is being passed.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `08-Stu_Props/README.md`.

### 18. Student Do: Props (15 min)

* Direct students to the activity instructions found in `08-Stu_Props/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🏗️ Pass Data Using Props

  ## Before We Begin

  Before you begin this activity, complete the following steps:

  1. Delete the `/src` folder in [00-practice-app](../00-practice-app/).

  2. Copy the `/src` folder from [Unsolved](./Unsolved/) and paste it into [00-practice-app](../00-practice-app/).

  3. This project uses Bootstrap, so don't forget to import it inside `index.js`:

    `import 'bootstrap/dist/css/bootstrap.min.css'`

  ## Activity

  Work with a partner to implement the following user story:

  * As a developer, I want to render a card by passing props.

  ## Acceptance Criteria

  * It's done when I have updated the return method in `src/components/Display.js` to render a card.

  * It's done when I have passed data for the dog's `name`, `description`, and `id` as props to the `Card` component.

  * It's done when I have modified to `Card` component to render the `canine` properties.

  ## 💡 Hints

  * How can we use the [React Docs on components and props](https://facebook.github.io/react/docs/components-and-props.html) to understand props better?

  * What is the term **props** short for?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * How could we use the [style tag](https://facebook.github.io/react/docs/dom-elements.html#style) to add additional style to React components?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be addressed. It's a good way for your team to prioritize students who need extra help.

### 19. Instructor Review: Props (15 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with props? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ props

  * ✔️ Unidirectional data flow

* Open `00-practice-app/src/index.js` in your IDE and explain the following:

  * First we need to open the `index.js` file and import Bootstrap to style the cards:

    ```js
    import 'bootstrap/dist/css/bootstrap.min.css';
    ```

* Open `00-practice-app/src/components/Display.js` in your IDE and explain the following:

  * The first thing we notice is that we are importing another component called `Card` at the top of the file. We will look more closely at this component later in the activity.

    ```js
    import Card from './Card';
    ```

  * Inside the `Display` component, we have an object called `canine`. Each object within that array contains the `name` and `description` of dogs:

    ```js
    const canine = {
      name: 'Spot',
      description: 'The best boy',
      id: 1,
    };
    ```

* Open `00-practice-app/src/components/Card.js` in your IDE and explain the following:

  * The `Card` component imports React at the top of the file:

    ```js
    import React from 'react';
    ```

  * We pass the props argument to the `Card` component so that we can reference the data passed from the parent:

    ```js
    export default function Card(props) {
    ```

  * In the return statement for the card, we take the `name`, `description`, and `id` that were passed as props and render them in the Bootstrap card:

    ```jsx
    return (
      <div className="container">
        <div className="card" style={cardStyle}>
          <img
            className="card-img-top"
            src={`http://placecorgi.com/${randomWidth()}`}
            alt="Card cap"
          />
          <div className="card-body">
          <h5 className="card-title">Name: {props.name}</h5>
            <p className="card-text">Description: {props.description}</p>
            <p className="card-text">ID: {props.id}</p>
            <a href="#" className="btn btn-primary">
              Adopt {props.name}
            </a>
          </div>
        </div>
      </div>
    );
    ```

* Open `00-practice-app/src/components/Display.js` in your IDE and explain the following:

  * Now that we've looked at the `Card` component and what it does, let's check what is happening in the return statement for `Display`.

  * A card is populated with the `canine` properties pass to the `Card` component as props -- specifically, the `name`, `description`, `id` props.

    ```js
    export default function Display() {
      return (
        <div>
            <Card name={canine.name} description={canine.description} id={canine.id} />
        </div>
      );
    }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are some different ways that we can pass props to a component?

  * 🙋 We can pass props to the child component by passing a `props` object as an argument, or we can use object destructuring assignment.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [React Docs on props](https://reactjs.org/docs/components-and-props.html), and stay for office hours to ask for help.

* Answer any questions before ending the class.

### 20. END (0 min)

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this [anonymous survey](https://forms.gle/RfcVyXiMmZQut6aJ6).

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
