# 10.1 Full-Time Lesson Plan: Progressive Web Applications (PWA)

## Overview

In this class, you will introduce webpage performance and optimization, key aspects of a Progressive Webpage or PWA. Lighthouse, a PWA analysis tool, is used to introduce students to the key metrics needed to build a fast, performant PWA experience for users. Then using webpack, a static module bundler for JavaScript applications, students will learn to bundle JavaScript, CSS, and image files. Webpack plugins are also covered. Students will also learn about the client-server model.

## Instructor Notes

* In this lesson, students will complete activities `01-Ins_Lighthouse` through `14-Stu_Client-Server`.

* For the Lighthouse activity, you will use both DevTool's built-in Lighthouse audit tool and the Lighthouse Chrome extension. Please be sure to install the [Lighthouse Chrome extension](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=en) prior to class and add the Lighthouse icon to your toolbar to easily demonstrate generating an audit report.

* You will use webpack for the majority of today's activities. The activities only use the front end; there is no back end in any of the activities. If you are unfamiliar with webpack, please refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).

* **Important**: Today's activities take students through setting up webpack and bundling files step-by-step. As a result, for the first few Instructor Demo and Student activities, you will be required to manually insert the provided `index.html` file into the generated `dist` folder and update the script's src attribute to the output filename to run the build code. In the `09-Ins_Webpack-Plugin` activity, students will learn how to generate the `index.html` file with the `html-webpack-plugin` plugin.

* When demoing the activities, please use `Live Server` to open the `index.html` file from the `dist` directory, unless specified otherwise. If you have not yet downloaded Live Server for VS Code, refer to these [instructions for downloading Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

* This module features activities that will require students to save and refresh the browser in order to see changes. The very nature of PWAs means that, by design, students will likely run into issues with cached assets interfering while debugging and testing.

  > **Important**: If you are having issues with cached assets, please use a private or incognito window to view the application. For Chrome users, you can open an incognito window by clicking the three dots in the top-right corner of the browser. From there, click the "New Incognito Window" button. You can also use hot keys to open an incognito window: on macOS, press Command + Shift + N; on Windows, press Control + Shift + N.

* In addition to using an incognito window, students can troubleshoot caching issues further by completely unregistering the service worker. This will allow the browser to cache the assets again. Details on how to do this will vary among browsers, but generally you can find the option to do this in the browser's developer tools.

* Remind students to do a `git pull` of the class repo and to have today's activities ready and open in VS Code.

* If you are comfortable doing so, live code the solutions to the activities. If not, use the solutions provided and follow the prompts and talking points for review.

* Let students know that the Bonus at the end of each activity is not meant to be extra coding practice, but instead is a self-study on topics beyond the scope of this module for those who want to further their knowledge.

## Learning Objectives

By the end of class, students will be able to:

* Identify key Lighthouse metrics and how they impact an app's performance.

* Explain the role of entry points and output properties in webpack bundling.

* Configure webpack using webpack.config.js file.

* Bundle CSS and image assets

* Use webpack loader to add Babel to ensure compatibility with older browsers.

* Generate an `index.html` file and separate CSS file using webpack plugins.

* Incorporate Hot Module Reloading to a webpack app to improve the development experience.

* Identify the client-server model.

## Slide Deck

* [Module 19 Slide Deck](https://docs.google.com/presentation/d/1ygFpytpyJrXNxNbUs-eW0F996kgM-zi4a_WyxNlC2xs/edit?usp=sharing)

## Time Tracker

| Start  | #   | Activity Name                              | Duration |
|---     |---  |---                                         |---       |
| 10:00AM| 1   | Instructor Do: Stoke Curiosity             | 0:10     |
| 10:10AM| 2   | Instructor Demo: Lighthouse                | 0:05     |
| 10:15AM| 3   | Student Do: Lighthouse                     | 0:15     |
| 10:30AM| 4   | Instructor Review: Lighthouse              | 0:10     |
| 10:40AM| 5   | Instructor Demo: Webpack Intro             | 0:05     |
| 10:45AM| 6   | Student Do: Webpack Intro                  | 0:15     |
| 11:00AM| 7   | Instructor Review: Webpack Intro           | 0:10     |
| 11:10AM| 8   | Instructor Demo: Webpack Bundle            | 0:05     |
| 11:15AM| 9   | Student Do: Webpack Bundle                 | 0:15     |
| 11:30AM| 10  | Instructor Review: Webpack Bundle          | 0:10     |
| 11:40AM| 11  | Instructor Demo: Webpack Loader            | 0:05     |
| 11:45AM| 12  | Student Do: Webpack Loader                 | 0:15     |
| 12:00PM| 13  | BREAK                                      | 0:30     |
| 12:30PM| 14  | Instructor Review: Webpack Loader          | 0:10     |
| 12:40PM| 15  | Instructor Demo: Webpack Plugin            | 0:05     |
| 12:45AM| 16  | Student Do: Webpack Plugin                 | 0:15     |
| 1:00PM | 17  | Instructor Review: Webpack Plugin          | 0:15     |
| 1:15PM | 18  | Instructor Do: Stoke Curiosity             | 0:10     |
| 1:25PM | 19  | Instructor Demo: Hot Module Replacement    | 0:05     |
| 1:30PM | 20  | Student Do: Hot Module Replacement         | 0:15     |
| 1:45PM | 21  | Instructor Review: Hot Module Replacement  | 0:10     |
| 1:55PM | 22  | Instructor Demo: Client-Server Model       | 0:05     |
| 2:00PM | 23  | Student Do: Client-Server Model            | 0:15     |
| 2:15PM | 24  | Instructor Review: Client-Server Model     | 0:15     |
| 2:30PM | 25  | END                                        | 0:00     |

---

## Class Instruction

### 1. Instructor Do: Stoke Curiosity (10 min)

* Welcome students to class.

* Open the [slide deck](https://docs.google.com/presentation/d/1ygFpytpyJrXNxNbUs-eW0F996kgM-zi4a_WyxNlC2xs/edit?usp=sharing) and follow these prompts on their corresponding slides:

  * **What is a PWA?**: PWA is a design pattern.

    * A Progressive Web App (PWA) is a design pattern that uses web technologies to build a fast, flexible web application that will perform like a native app on any device.

  * **Are PWAs dependent on a specific technology?**

  * **PWAs are focused on optimizations, not specific tech.**

    * PWAs do not rely on a single, specific technology. Instead, they use a variety of tools to build and optimize web applications to take advantage of features already available on the user’s device and browser.

  * **A PWA Is an Optimized Web App**

    * A PWA is simply a web app built using standard technologies that works in a browser and is optimized to improve performance and user experience.

  * **What makes an app a PWA?**

  * **PWA Design Pattern Optimizations**

    * PWA are optimized to be fast.

    * PWAs are optimized to work offline.

    * PWAs are installable by users directly on their devices.

    * PWAs are secure.

  * **PWAs Are Fast**

    * To give the user the look and feel of a native app, assets are bundled. This gives users a faster, more performant app.

  * **PWAs Work Offline**

    * A PWA also uses a service worker, which allows a user to access visited pages even if the app is offline.

  * **PWAs Are Installable**

    * A PWA uses a special set of instructions for the browser called a manifest.json, which adds a splash screen and makes the app installable directly on the user’s device.

  * **PWAs Are Secure**

    * A PWA works on a secure connection to help keep users and their data safe.

  * **What are the key benefits of PWAs?**

  * **Key Benefits of PWAs**

    * PWA is an adaptable design pattern with principles that can be applied to any web application.

    * PWAs focus on optimizing web applications to be faster and more performant.

    * PWAs enhance web applications by taking advantage of the user’s browser capability to provide a native app experience on any device.

    * PWAs are cost effective! With PWAs, there is no need to build a separate mobile and desktop application. A single app works for all devices.

    * PWAs can be directly installed by the user. There is no need for costly app stores!

    * PWAs deliver the speed and features that users expect in a modern app.

  * **Mini-Project**: The mini-project for this module will be a contact directory app that uses service workers, IndexedDB, webpack, and has PWA functionality. We will also deploy the app to Heroku.

* Navigate to `28-Stu_Mini-Project/Main` in your command line and run `npm install` and `npm start`.

* Open `http://localhost:3000/` in the browser to demonstrate the following:

  * For the mini-project, we will build a contact directory app that allows us to create contact cards containing individuals' information.

  * When we add contact information to a form and click `submit`, a new card is created.

* Open Chrome DevTools in the browser and navigate to the `Network` tab to demonstrate the following;

  * Using Chrome DevTools, we can simulate an offline experience by setting the `Throttling` option to `Offline.`

  * We can then refresh the page to see what the app looks like when offline.

  * Since we added offline functionality using a service worker, even when offline, we can still see the contact card we just created.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are we learning?

  * 🙋 We are learning about PWAs, a design pattern that allows us to build apps that are reliable, installable, and have offline capabilities.

  * ☝️ How does this project build on or extend previously learned material?

  * 🙋 We will be using CRUD operations to persist and delete data using an in-browser database. We will set up an Express.js server to display the user interface.

  * ☝️ How does this project relate to your career goals?

  * 🙋 PWAs are used by companies both large and small to build a single apps that work for all devices --including mobile and desktop --  and have the capabilities and fast performance demanded by modern users.

* Answer any questions before proceeding to the next activity.

### 2. Instructor Demo: Lighthouse (5 min)

* In order to demonstrate the functionality of Lighthouse, you will use the `10-Stu_Webpack-Plugin` activity.

* Navigate to `10-Stu_Webpack-Plugin/Solved` in your terminal and run `npm install` and `npm run build` to create a `dist` folder.

* Open the `10-Stu_Webpack-Plugin/Solved/dist/index.html` in your browser using Live Server to demonstrate the following:

  * Today we will be working on this Webpack Color Changer app in all of our student class activities. To demonstrate how webpack will improve our app's speed and performance, let's take a look at how well our final student activity `10-Stu_Webpack-Plugin` will perform when we're done with it.

  * We can audit an app's performance using a tool called Lighthouse using either Chrome DevTools or the Chrome extension.

  * To use Chrome DevTools to inspect our app, we can open DevTools and click on the double arrows `>>` and select `Lighthouse`.

  * Lighthouse allows us to perform a number of audits aimed at providing metrics to help improve both overall performance and accessibility. For now, we will select `Performance` and run a test on the `Desktop` version.

  * We click `Generate Report` to start the audit. We'll need to wait a few minutes for Lighthouse to warm up and generate the report.

  * The report contains metrics that show how fast the page loads and users can interact with the app. It looks like our optimized app is performing well!

  * We can toggle the expanded view to see details and information about each metric as well as insights on how to improve the score. To get more information, we can follow the links.

  * When we scroll down the page to the `Passed Audits` section, we can also see that the improvements we will make during today's class will pay off. All audits are passing and bundling our files has reduced our payload and increased our app's speed.

  * DevTools is just one way of using Lighthouse. Lighthouse is also available as a Chrome extension and as a node module for use during development. During the first student activity, we will use the Lighthouse Chrome extension to explore metrics.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do we use Lighthouse to audit our app's performance?

  * 🙋 We use Lighthouse to generate an audit report that provides key metrics about how fast our page loads and how quickly it is interactive to the user. The audit report also provides an explanation of each metric as well as insights to help see where our app is performing well and where we may need to make improvements.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `02-Stu_Lighthouse/README.md`.

### 3. Student Do: Lighthouse (15 min)

* Direct students to the activity instructions found in `02-Stu_Lighthouse/README.md`, which are also shown below.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🏗️ Conduct a Lighthouse Audit of a PWA

  Work with a partner to implement the following user story:

  * As a developer, I want to review the performance metrics of a deployed PWA application using the Lighthouse Chrome extension.

  ## Acceptance Criteria

  * It's done when I have installed the [Lighthouse Chrome extension](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=en)

  * It's done when I have navigated to `https://mini-project-lighthouse.herokuapp.com/` in a Chrome browser.

  * It's done when I have used the Lighthouse Chrome extension to generate an audit report.

  * It's done when I have selected `Expand View` and have clicked on the link to each key metric and reviewed the provided information.

  * It's done when I have reviewed the key PWA optimizations.

  * It's done when I have noted the performance metrics and PWA optimizations in the [audit.md](./Unsolved/audit.md) file.

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * How can we run Lighthouse through the command line or install as a node module?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 4. Instructor Review: Lighthouse (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with Lighthouse? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use Office Hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ First Contentful Paint

  * ✔️ Time to Interactive

  * ✔️ PWA Optimization

* Navigate to `https://mini-project-lighthouse.herokuapp.com/` in your browser to explain the following:

  * The Lighthouse Chrome extension is another way of generating a performance audit report and is especially useful for auditing apps that have already been deployed.

  * This app is an example of the mini-project we will complete by the end of this module deployed to Heroku. Using the Lighthouse Chrome extension, we can take a look to see how our deployed app is performing and what improvements we may want to make.

* Open the Lighthouse extension by clicking on the icon in the toolbar and click on `Generate Report` to explain the following:

  * When we look at the performance metrics in our report, it looks like our app is performing well. Let's take a closer look at a few key metrics.

  * We click on `Expand View` to get more information about the metrics.

  * The `First Contentful Paint` is the time it takes before the first image or text to appear on our page. It is important a page 'paints' quickly so that the user does not lose interest in our app due to a slow load time.

  * The `Time to Interactive` is another key metric. It evaluates the time it takes for our app to be usable by our user. It is important our users can start doing things -- such a clicking a button -- quickly. Otherwise, users may get frustrated and decide not to use our app!

  * While our app is performing well, it looks like one performance metric is not passing. One great thing about Lighthouse is that by clicking on a failing metric -- such as the `Cumulative Layout Shift` -- we can gain insights into the metric as well as information that can help us implement improvements in our apps.

  * In addition to performance metrics, Lighthouse also audits how the app is functioning as a PWA.

  * When we scroll down further in the audit report, we see there is a section called `PWA` that lists key PWA optimizations.

  * It looks like our app has a functioning service worker and a detectable `manifest.json` making it installable. That's great because installability is a key feature of a PWA!

  * It also looks like most PWA optimizations are already in place. To make further improvements, we can click on an optimization shown as failing for further information.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why is conducting a Lighthouse audit important when building a PWA?

  * 🙋 A PWA must be fast! A Lighthouse audit provides key information on how our app is performing as well as identifying key areas that can help further improve our app. Lighthouse also provides an audit of how our app is functioning as a PWA, including if the app is installable and the PWA optimizations made.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Google docs on Lighthouse performance scoring](https://developers.google.com/web/tools/lighthouse), and attend Office Hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 5. Instructor Demo: Webpack Intro (5 min)

* Open `03-Ins_Webpack-Intro/src` in your IDE and demonstrate the following:

  * Webpack is a static module bundler that takes our raw code and bundles it to optimize performance in a web browser. The primary purpose of webpack is to bundle JavaScript modules, but we can also use it for other file types.

  * Before we set up webpack in our app, we first have to make a change to our code. Previously, we stored our images, CSS, and JavaScript in an `asset` folder. Now, we will place all our raw code into a source or **`src`** file.  Source files are used to store code that will be bundled. For now, this is just our JavaScript files.

* Open `03-Ins_Webpack-Intro/src/index.js` in your IDE and demonstrate the following:

  * It is also important to set up a primary `index.js` file to serve as an **entry point** into our app. This entry point is used to help webpack determine which other modules and libraries the app depends on to run and build a dependency graph, or map of all the dependencies needed for the app.

* Open `03-Ins_Webpack-Intro/package.json` in your IDE and demonstrate the following:

  * To install webpack, we need to initialize our app as a node project if we haven't already done so and add `webpack` and `webpack-cli` as a dev dependency using the script `npm install --save-dev webpack webpack-cli`. This will add it to the `package.json` as shown in the following code:

    ```js
    "devDependencies": {
      "webpack": "^5.64.4",
      "webpack-cli": "^4.9.1"
    }
    ```

  * We are also going to add a shortcut script so we can run webpack with the command `npm run build`.

    ```js
    "build": "webpack"
    ```

* Open `03-Ins_Webpack-Intro/src/webpack.config.js` in your IDE and demonstrate the following:

  * Once we have installed webpack and added our shortcut script to our `package.json`, we add a `webpack.config.js` file that will allow us to provide configuration and setup instructions for our app.

  * We set the **entry** to the `index.js` file we have included in our `src` directory and the **output** filename to `main.js` and the path to `dist`.

    ```js
    entry: './src/js/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
    },
    ```

  * Now, when the webpack `build` script is run, a `dist` folder will be created and the JavaScript files found in our `src` file will be bundled into a new file called `main.js`.

  * We also set the mode to `development` to optimize our build for the development environment. The `webpack.config.js` file should look like the following:

    ```js
    module.exports = {
      mode: 'development',
      entry: './src/js/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
      },
    };
    ```

* Navigate to `03-Ins_Webpack-Intro` from the command line and run `npm install` and `npm run build` to demonstrate the following:

  * We can now use our shortcut script `npm run build` to compile our JavaScript and generate a `dist` folder.

  * Before we can run our code though, we need to do one more thing. The `dist` folder currently contains only the `main.js` file. So for now, let's manually copy our `index.html` from the root of our project into the `dist` folder.

  * In the `09-Ins_Webpack-Plugin` activity, we will learn how to generate the `index.html` file so we won't need to do this.

* Copy the `03-Ins_Webpack-Intro/index.html` file into the `03-Ins_Webpack-Intro/dist/` folder.

* Open `03-Ins_Webpack-Intro/dist/index.html` in your IDE and demonstrate the following:

  * Now in our `dist/index.html` file, we need to update the `<script>` path so it looks for the script files at `main.js` instead of `./src/js/index.js`:

    ```js
    <script src="./main.js"></script>
    ```

* Open `03-Ins_Webpack-Intro/dist/index.html` in your browser using Live Server and demonstrate the following:

  * When we click on the button, we see the message "Webpack is Working!". Our compiled JavaScript is working!

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is the role of the `src` folder?

  * 🙋 The `src` or source folder contains the raw, source files that we want to bundle.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `04-Stu_Webpack-Intro/README.md`.

### 6. Student Do: Webpack Intro (15 min)

* Direct students to the activity instructions found in `04-Stu_Webpack-Intro/README.md`, which are also shown below.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📐 Add Comments to Implementation of webpack Setup

  Work with a partner to add comments describing the functionality of the code found in [Unsolved/index.html](./Unsolved/index.html), [Unsolved/src/index.js](./Unsolved/src/js/index.js), and [Unsolved/src/box.js](./Unsolved/src/js/box.js)

  ## 📝 Notes

  Refer to the documentation:

  [webpack docs on getting started](https://webpack.js.org/guides/getting-started/)

  ---

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What is a dependency graph? How can understanding a dependency graph help developers write leaner, more performant code?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 7. Instructor Review: Webpack Intro (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with setting up webpack?

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use Office Hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `webpack.config.js`

  * ✔️ `src`

  * ✔️ `index.js`

  * ✔️ `export`

  * ✔️ `main.js`

* Open `04-Stu_Webpack-Intro/Solved/webpack.config.js` in your IDE and explain the following:

  * 🔑 When we set up webpack, we need set an entry point and a output property. For our app, our entry point is the `index.js` file in our `src` folder, the directory where the files we want bundled are placed.

    ```js
    entry: './src/js/index.js',
    ```

  * Our files will be outputted to a `dist` directory. Inside the `dist` directory, our bundled JavaScript will be written in the `main.js` file.

    ```js
    output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    },
    ```

* Open `04-Stu_Webpack-Intro/Solved/src/js/index.js` in your IDE and explain the following:

  * 🔑 The `index.js` file in our `src` folder serves as webpack's entry point. The entry point is the first file that webpack will look to when creating a bundle. To make sure that our JavaScript modules are included in our bundle, we import them into the `index.js` file so they are a dependency of our entry point file.

    ```js
    import { boxClick } from './box';
    import { headerClick } from './header';
    ```

* Open `04-Stu_Webpack-Intro/Solved/src/js/box.js` in your IDE and explain the following:

  * In order to import a JavaScript function, we first have to export it using an `export` statement. An `export` statement allows the code in one file to be imported and used in another file as a dependency.

    ```js
    export const boxClick = () => {
    ```

* Open `04-Stu_Webpack-Intro/Solved/index.html` in your IDE and explain the following:

  * For now, we will need to manually copy the `index.html` to the `dist` folder after the build. In a later activity, we will learn how to generate the `index.html` file so we won't need to do this anymore.

  * Remember, we need to make one change after we copy this file over to the `dist` folder. The `src` attribute for the `<script>` must be updated to the output filename, or `main.js`.

  * Also, notice that the CSS is currently embedded in the HTML. In a different activity, we will learn how to give CSS a file of its own.

* Navigate to `04-Stu_Webpack-Intro/Solved` from the command line and run `npm install` and `npm run build` to demonstrate the following:

  * We use the script `npm run build` to compile our JavaScript and create a `dist` folder.

  * Then, we copy our `index.html` from the root of our project into the `dist` folder, making sure we updated the script's src attribute to `main.js`.

    ```js
    <script src="./main.js"></script>
    ```

* Open `04-Stu_Webpack-Intro/Solved/dist/index.html` in your browser using Live Server and demonstrate the following:

  * We can now click the buttons to see the header and box colors change in the app using the bundled JavaScript code.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is the role of the entry point?

  * 🙋 The entry point is the JavaScript file, usually named `index.js` that serves as place where webpack will look first to build out the bundle and find dependent modules and assets. To be included in the bundle, the module must be a dependency of our entry point!

  * ☝️ What is the role of the output property?

  * 🙋 The output property defines where on how and where webpack should output your JavaScript bundles and other assets. Typically, we output to a directory named `dist`. Inside the `dist` directory bundled files, such as a `main.js` will be outputted.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋  We can refer to supplemental material, read the [webpack docs on entry and output](https://webpack.js.org/concepts/#entry) and the [webpack docs on getting started](https://webpack.js.org/guides/getting-started/), and attend Office Hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 8. Instructor Demo: Webpack Bundle (5 min)

* Open `05-Ins_Webpack-Bundle/src/css/style.css` in your IDE and demonstrate the following:

  * 🔑 In the last activity, in order to add styling to our app, we had embedded CSS directly into our HTML file.

  * However, a better solution is to add a CSS stylesheet in the `src` folder and add the CSS rules in its own, separate file, as shown in this `src/css/style.css` file.

  * Simply adding the CSS file to the `src` folder, though, is not enough to include it in the bundle. We will also need to do some work to configure webpack to handle our CSS files.

* Navigate to `05-Ins_Webpack-Bundle` and run `npm install --save-dev css-loader style-loader` from the command line to demonstrate the following:

  * 🔑 We need to install two new devDependencies used to handle CSS files, `css-loader` and `style-loader`. Now the `devDependencies` in our `package.json` file should look like the following:

    ```js
    "devDependencies": {
      "css-loader": "^6.5.1",
      "style-loader": "^3.3.1",
      "webpack": "^5.64.4",
      "webpack-cli": "^4.9.1"
    }
    ```

  * For each file type we want to include in our bundle, a different loader or built-in asset module is used, so it is important to consult the official documentation to see what we need to install!

* Open `05-Ins_Webpack-Bundle/webpack.config.js` in your IDE and demonstrate the following:

  * Once the loaders are installed, we add a rule to our `webpack.config.js` file to instruct webpack to use these loaders to handle CSS.

    ```js
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    };
    ```

  * Since our output will now contain both JavaScript and CSS, we also change the name of our output file to `bundle.js`.

    ```js
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    ```

* Open `05-Ins_Webpack-Bundle/src/js/index.js` in your IDE and demonstrate the following:

  * For our CSS to be included in our JavaScript bundle, we must import the CSS file into our entry point file, `index.js`.

    ```js
    import '../css/style.css'
    ```

* Navigate to `05-Ins_Webpack-Bundle` from the command line and run `npm install` and `npm run build`.

* Open `05-Ins_Webpack-Bundle/dist/` in your IDE to demonstrate the following:

  * Notice that there is no separate CSS file. The CSS has been bundled with the JavaScript file in `bundle.js`.

  * To test if our CSS is working, we copy our `index.html` from the root of our project into the `dist` folder, making sure that the script's src attribute is updated to `bundle.js`.

    ```js
    <script src="./bundle.js"></script>
    ```

* Open `05-Ins_Webpack-Bundle/dist/index.html` in your browser using Live Server and demonstrate the following:

  * When we open the app in the browser, the app works and is styled as expected. The CSS rules are no longer in the HTML file but bundled with the JS in `bundle.js`.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How can we bundle non-JavaScript files using webpack?

  * 🙋 One of the key features of webpack is that not only JavaScript files can be bundled. Instead, any file with a loader or built-in asset module be added as dependencies and bundled. To bundle non-JavaScript resources, we can go to the official documentation, find the loader or built-in asset module and then add a rule to our config file to handle the file type. Finally, we add the file we want to bundle as an import into our entry point file.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `06-Stu_Webpack-Bundle/README.md`.

### 9. Student Do: Webpack Bundle (15 min)

* Direct students to the activity instructions found in `06-Stu_Webpack-Bundle/README.md`, which are also shown below.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📖 Bundle Images Using webpack

  Work with a partner to implement the following user story:

  * As a developer, I want to incorporate images into my webpack bundle so that they display on my app.

  ## Acceptance Criteria

  * It's done when I have updated the `webpack.config.js` file to handle image assets.

  * It's done when I have imported images into the `index.js` and `box.js` files as `Blue` and `Yellow`.

  * It's done when I have set the `#box` element's src to `Yellow` to provide a default image when the page loads.

  * It's done when I use `npm install` and `npm run build` to successfully build a `dist` folder and manually add the `index.html` file.

  * It's done when I open the `dist/index.html` in the browser using Live Server and the images are displayed in the app.

  ## 📝 Notes

  Refer to the documentation:

  [webpack docs on loading images](https://webpack.js.org/guides/asset-management/#loading-images)

  ## Assets

  The following images demonstrate the web application's appearance and functionality:

  ![Screenshot showing app displaying blue robot](./assets/displaying-blue-robot.png)

  ![Screenshot showing app displaying yellow robot](./assets/displaying-yellow-robot.png)

  ---

  ## 💡 Hints

  * When webpack bundles the asset it changes the asset name to a string of numbers and letters like this: `29822eaa871e8eadeaa4.png`. How do we access this bundled image in our project?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * How can we use webpack's asset management to bundle fonts and data?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 10. Instructor Review: Webpack Bundle (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with adding non-JavaScript assets to our webpack bundle?

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ Built-in Asset Module

  * ✔️ Image rules

  * ✔️ import alias

* Open `06-Stu_Webpack-Bundle/Solved/webpack.config.js` in your IDE and explain the following:

  * 🔑 To add images or icons to our bundle, we can use a built-in Asset Module. Since it is built-in, there are no packages to import.

  * 🔑 In the `webpack.config.js` file, we add a new set of rules to handle images using the Asset Module. This will allow webpack to handle images.

    ```js
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    }
    ```

* Open `06-Stu_Webpack-Bundle/Solved/src/js/index.js` in your IDE and explain the following:

  * 🔑 We import our images into the module where they will be used. Since we want to display the yellow robot image in the box when the page loads, we import the image into the `index.js` and give it an alias of `Yellow`.

    ```js
    import Yellow from '../images/yellow-robot.png';
    ```

  * 🔑 This alias `Yellow` is important because it is how we refer to the image path in our code. To set the image in the box to be the yellow robot, we simply the src to `Yellow`. This will allow webpack to find our image even after the code has been bundled.

    ```js
    document.getElementById("box").src = Yellow;
    ```

* Open `06-Stu_Webpack-Bundle/Solved/src/js/box.js` in your IDE and explain the following:

  * The exported function `boxClick` uses the image aliases `Yellow` and `Blue` to set the box's src attribute. This has been provided for us.

    ```js
    export const boxClick = () => {
      const box = document.getElementById("box");
      if (box.src === Yellow) {
        box.src = Blue;
      } else {
        box.src = Yellow;
      }
    }
    ```

  * We import the yellow and blue robot images with the aliases `Yellow` and `Blue` into the `box.js` file to make the images available to the function. Since this module is imported into the entry point as a dependent, the images will also be included in the bundle.

    ```js
    import Yellow from '../images/yellow-robot.png';
    import Blue from '../images/blue-robot.png';
    ```

* Navigate to `06-Stu_Webpack-Bundle/Solved` from the command line and run `npm install` and `npm run build`.

* Open `06-Stu_Webpack-Bundle/Solved/dist/` in your IDE to demonstrate the following:

  * Notice that there are now two new image files with names that are a long string of letters and numbers. We can click on the images in our IDE to see they are actually our yellow and blue robot images. By assigning these images `Yellow` and `Blue` aliases in our code, webpack assigns the final url of that image after processing to the aliases automatically.

  * To test our generated images are now working in our code, we copy our `index.html` from the root of our project into the `dist` folder, making sure that the script's src attribute is updated to `bundle.js`.

    ```js
    <script src="./bundle.js"></script>
    ```

* Open `06-Stu_Webpack-Bundle/Solved/dist/index.html` in your browser using Live Server and demonstrate the following:

  * When we open the app in the browser, the app works and our yellow and blue robots appear.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do we use webpack's built-in Asset Module to load images?

  * 🙋 We add rules in our config file to handle the images and then import the images -- using aliases -- into the modules where the images will be used. Webpack will automatically match the alias to the final url of the image after processing, making it easy to refer to the image's file path with just the alias in our code.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [webpack docs on loading images](https://webpack.js.org/guides/asset-management/#loading-images), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 11. Instructor Demo: Webpack Loader (5 min)

* Open `07-Ins_Webpack-Loader/package.json` in your IDE and demonstrate the following:

  * Loaders are for much more than loading filetypes or importing CSS directly from JavaScript modules. In webpack, loaders are used to transform code and even change it from one coding language to another.

  * We can even use loaders to make sure that older browsers can read our newer ES6 code by using a Babel loader to convert our ES6 JavaScript to ES5.

  * We start by adding the dev dependencies in our package.json using the script `npm install --save-dev babel-loader @babel/core @babel/preset-env`.

    ```js
    "devDependencies": {
    "@babel/core": "^7.16.0",
    "@babel/preset-env": "^7.16.4",
    "babel-loader": "^8.2.3",
    "css-loader": "^6.5.1",
    "style-loader": "^3.3.1",
    "webpack": "^5.64.4",
    "webpack-cli": "^4.9.1"
    }
    ```

* Open `07-Ins_Webpack-Loader/webpack.config.js` in your IDE and demonstrate the following:

  * Next, we set the rules needed for the webpack to transform our JavaScript. Since each loader has its own config settings, it is important to look at the official documentation, in our case the [webpack docs on babel-loader](https://webpack.js.org/loaders/babel-loader/)!

  * We use the `loader` property to instruct webpack to use the `babel-loader`. We also use `exclude` so that only our module code is compiled, not the node modules or other libraries that may cause an error if transpiled!

    ```js
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    },
    ```

* Navigate to `07-Ins_Webpack-Loader` from the command line and run `npm install` and `npm run build`.

* Open `07-Ins_Webpack-Loader/dist/bundle.js` in your IDE to demonstrate the following:

  * When we look at the compiled JavaScript for the `button.js` module, we see that the code has been transformed from the newer arrow syntax into ES5, similar to below:

    ```js
    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buttonClick\": () => (/* binding */ buttonClick)\n/* harmony export */ });\nvar buttonClick = function buttonClick() {\n  var header = document.getElementById(\"header1\");\n\n  if (header.textContent == \"\") {\n    header.textContent = \"Webpack is Working!\";\n  } else {\n    header.textContent = \"\";\n  }\n};\n\n//# sourceURL=webpack://03-ins_webpack-intro/./src/js/button.js?");
    ```

* Open `07-Ins_Webpack-Loader/dist/` in your IDE to demonstrate the following:

  * To test if our code is still working, we copy our `index.html` from the root of our project into the `dist` folder, making sure that the script's src attribute is updated to `bundle.js`.

    ```js
    <script src="./bundle.js"></script>
    ```

* Open `07-Ins_Webpack-Loader/dist/index.html` in your browser using Live Server and demonstrate the following:

  * When we open the app in the browser, our app still works as expected.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do we add a loader to transform our code using webpack?

  * 🙋 There are two things we need to do to add a loader. First, we need to install any needed dependencies as `devDependencies`. Then, we add new set of rules to handle the loader. Since each loader has its own specific configuration and optional properties, it is important to consult the official documentation!

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `08-Stu_Webpack-Loader/README.md`.

### 12. Student Do: Webpack Loader (15 min)

* Direct students to the activity instructions found in `08-Stu_Webpack-Loader/README.md`, which are also shown below.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🐛 Loader Returning 'Module Not Found' Error

  Work with a partner to resolve the following issue(s):

  * As a developer, when I run `npm run build`, the build should be successful.

  ## Expected Behavior

  When I run `npm run build`, the `dist` folder should be created and no errors should be displayed.

  ## Actual Behavior

  When I run `npm run build`, an error is displayed.

  ## Steps to Reproduce the Problem

  1. Navigate to `Unsolved` folder in terminal.

  2. Run `npm install` and `npm run build` in terminal.

  3. An error reading "Module not found: Error: path argument is not a string" is displayed in console and the `dist` folder is not created. The build is not successful.

  ---

  ## 💡 Hints

  How do you activate a loader in webpack?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * How can you create a custom loader?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 13. BREAK (30 min)

### 14. Instructor Review: Webpack Loader (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with webpack loaders? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use Office Hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `babel-loader`

  * ✔️ `loader`

* Open `08-Stu_Webpack-Loader/Solved/package.json` in your IDE to demonstrate the following:

  * When a loader is not working, a great place to check first is to make sure all the needed `devDependencies` have been installed.

  * One common error you may face is with `babel` you must install `@babel/core` and not just `babel`, since the Node.js API for `babel` has updated. It looks like our devDependencies, though, have been successfully installed and this is not the cause of our error.

    ```js
    "devDependencies": {
      "@babel/core": "^7.16.0",
      "@babel/preset-env": "^7.16.4",
      "babel-loader": "^8.2.3",
      "css-loader": "^6.5.1",
      "style-loader": "^3.3.1",
      "webpack": "^5.64.4",
      "webpack-cli": "^4.9.1"
    }
    ```

* Open `08-Stu_Webpack-Loader/Solved/webpack.config.js` in your IDE to demonstrate the following:

  * 🔑 Next, let's take a look at the configuration. A valid configuration should have a `loader` property identifying the loader used. It looks like this is missing from the configuration. We need to add a `loader` property and set it to `babel-loader`.

    ```js
    {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ```

* Navigate to `08-Stu_Webpack-Loader/Solved` from the command line and run `npm install` and `npm run build`.

  * The error message no longer appears in the console!

* Open `08-Stu_Webpack-Loader/Solved/dist/bundle.js` in your IDE to demonstrate the following:

  * When we look at the compiled JavaScript for the `box.js` module, we see that the code has been transformed from the newer arrow syntax into ES5, similar to below:

    ```js
    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"boxClick\": () => (/* binding */ boxClick)\n/* harmony export */ });\n/* harmony import */ var _images_yellow_robot_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/yellow-robot.png */ \"./src/images/yellow-robot.png\");\n/* harmony import */ var _images_blue_robot_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/blue-robot.png */ \"./src/images/blue-robot.png\");\n// Import files using Yellow and Blue aliases\n\n\nvar boxClick = function boxClick() {\n  var box = document.getElementById(\"box\");\n\n  if (box.src === _images_yellow_robot_png__WEBPACK_IMPORTED_MODULE_0__) {\n    box.src = _images_blue_robot_png__WEBPACK_IMPORTED_MODULE_1__;\n  } else {\n    box.src = _images_yellow_robot_png__WEBPACK_IMPORTED_MODULE_0__;\n  }\n};\n\n//# sourceURL=webpack://03-ins_webpack-intro/./src/js/box.js?");
    ```

  * This shows that the `babel-loader` is working properly.

* Open `08-Stu_Webpack-Loader/Solved/dist/` in your IDE to demonstrate the following:

  * To test our code is still working, we copy our `index.html` from the root of our project into the `dist` folder, making sure that the script's src attribute is updated to `bundle.js`.

    ```js
    <script src="./bundle.js"></script>
    ```

* Open `08-Stu_Webpack-Loader/Solved/dist/index.html` in your browser using Live Server and demonstrate the following:

  * When we open the app in the browser, our app still works as expected.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why would we want to use Babel to transform our code to older ES5?

  * 🙋 While newer browsers are capable of reading ES6 syntax, not all old browsers are. To make sure that your app can be used by the most users -- even those with older devices -- it is important to make your code compatible with both new and older technologies.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [webpack docs on babel-loader](https://webpack.js.org/loaders/babel-loader/), and attend Office Hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 15. Instructor Demo: Webpack Plugin (5 min)

* Navigate to `09-Ins_Webpack-Plugin` from the command line and run `npm install` and `npm run build` to demonstrate the following:

  * So far, we have been manually adding an `index.html` file into our `dist` folder. This is fine during development but it gets tedious fast! To automatically generate an `index.html` file, we can use a plugin, `html-webpack-plugin`.

* Open `09-Ins_Webpack-Plugin/dist/index.html` in your browser and demonstrate the following:

  * The generated `index.html` file is a copy of our root `index.html` file with the path to the bundle automatically added, as shown below:

    ```js
    <script defer src="bundle.js"></script>
    ```

  * If you have added a `<script>` manually to your root `index.html` you can delete it now. The plugin will do that work for us!

* Open `09-Ins_Webpack-Plugin/package.json` in your IDE and demonstrate the following:

  * To use the `html-webpack-plugin`, we first install it as `devDependency` by running `npm install --save-dev html-webpack-plugin` in our command line. Our `package.json` file should look like the following:

    ```js
    "devDependencies": {
      "@babel/core": "^7.16.0",
      "@babel/preset-env": "^7.16.4",
      "babel-loader": "^8.2.3",
      "css-loader": "^6.5.1",
      "html-webpack-plugin": "^5.5.0",
      "style-loader": "^3.3.1",
      "webpack": "^5.64.4",
      "webpack-cli": "^4.9.1"
    }
    ```

* Open `09-Ins_Webpack-Plugin/webpack.config.js` in your IDE and demonstrate the following:

  * To use the plugin, we first need to require it at the top of our config file.

    ```js
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    ```

  * We then add the plugin configuration, making sure to include the `index.html` as the template.

    ```js
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'Webpack Plugin'
      })
    ],
    ```

* Open `09-Ins_Webpack-Plugin/dist/index.html` in your browser using Live Server to demonstrate the following:

  * When we open our app using the generated `index.html` file, our app looks the same and functions as expected.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is a webpack plugin?

  * 🙋 A webpack plugin is a tool used by webpack to perform a function, like automatically adding an `index.html` file to our `dist` folder. Plugins are great for customizing our webpack configuration and adding functionality and they are easy to use. For most plugins, we simply need to install the plugin and update our configuration file.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `10-Stu_Webpack-Plugin/README.md`.

### 16. Student Do: Webpack Plugin (15 min)

* Direct students to the activity instructions found in `10-Stu_Webpack-Plugin/README.md`, which are also shown below.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📖 Implement webpack Plugin to Generate Separate CSS File

  Work with a partner to implement the following user story:

  * As a developer, I want to extract a separate CSS file that is visible in the `dist` folder.

  ## Acceptance Criteria

  * It's done when I have installed the `mini-css-extract-plugin`.

  * It's done when I run `npm install` and `npm run build` and a separate CSS file is displayed in my `dist` folder.

  ## 📝 Notes

  Refer to the documentation:

  [webpack docs on MiniCssExtractPlugin](https://webpack.js.org/plugins/mini-css-extract-plugin/#getting-started)

  ## Assets

  The following image demonstrates the web application's appearance and functionality:

  ![Image showing filetree with separate main.css file in dist folder.](./assets/file-tree.png)

  ---

  ## 💡 Hints

  * What loader works with the `mini-css-extract-plugin`?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What other plugins can we use to enhance our code and improve performance?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 17. Instructor Review: Webpack Plugin (15 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with webpack plugins? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use Office Hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `mini-css-extract-plugin`

  * ✔️ `require("mini-css-extract-plugin")`

  * ✔️ `template: ./index.html`

* Open `10-Stu_Webpack-Plugin/Solved/package.json` in your IDE and explain the following:

  * 🔑 In order to use the plugin, we must install `mini-css-extract-plugin` as a `devDependency` using the script `npm install --save-dev mini-css-extract-plugin`:

    ```js
    "devDependencies": {
      "@babel/core": "^7.16.0",
      "@babel/preset-env": "^7.16.4",
      "babel-loader": "^8.2.3",
      "css-loader": "^6.5.1",
      "html-webpack-plugin": "^5.5.0",
      "mini-css-extract-plugin": "^2.4.5",
      "style-loader": "^3.3.1",
      "webpack": "^5.64.4",
      "webpack-cli": "^4.9.1"
    }
    ```

* Open `10-Stu_Webpack-Plugin/Solved/webpack.config.js` in your IDE and explain the following:

  * Next, we require `mini-css-extract-plugin` at the top of our config file.

    ```js
    const MiniCssExtractPlugin = require("mini-css-extract-plugin");
    ```

  * 🔑 Then, we add `MiniCssExtractPlugin` as a plugin, making sure we refer to the [webpack docs on MiniCssExtractPlugin](https://webpack.js.org/plugins/mini-css-extract-plugin/#getting-started) to get the configuration right!

    ```js
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'Webpack Plugin',
      }),
      new MiniCssExtractPlugin(),
    ],
    ```

  * 🔑 We also need to make a change to our rules so that our CSS will be handled by our plugin. We set `MiniCssExtractPlugin` as the loader, so that our CSS will be generated into its own file. This plugin works best together with `css-loader`, so we will leave that in place.

    ```js
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
    ```

* Navigate to `10-Stu_Webpack-Plugin/Solved` from the command line and run `npm install` and `npm run build` to demonstrate the following:

  * A separate CSS file, `main.css`, is now generated in our `dist` folder.

* Open `10-Stu_Webpack-Plugin/Solved/dist/index.html` in your browser with Live Server and demonstrate the following:

  * When we run the app, the code still works as expected!

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why is it important to consult the official documentation when using plugins?

  * 🙋 Plugins are versatile tools in webpack and each one has its own set of options and configuration. By consulting the documents we can learn more about what plugins we may want to use as well as how to best configure the plugin for our app's needs.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [webpack docs on plugins](https://webpack.js.org/concepts/plugins/), and attend Office Hours to ask for help.

  * Answer any questions before proceeding to the next activity.

### 18. Instructor Do: Stoke Curiosity (10 min)

* Progressive Web Apps and service workers first appeared in the browser in 2015. However, the concept was first discussed by Steve Jobs in 2007 just 18 days before the first iPhone shipped. At the time, Steve Jobs envisioned a way to create web applications that look and behave like native apps. The idea was to leverage the browser's native APIs to create a web application that could run on any device. We now know that history played out differently with the advent of the app store, but the concept remains relevant today.

* You can get a glimpse of this moment in history by watching the following video: ["One Last Thing" by Steve Jobs at Worldwide Developer Conference 07'](https://youtu.be/ZlE7dzoD6GA)

* It wasn't until 2015 that Google took that concept and gave it some life. The first Progressive Web App (PWA) specification was introduced at the Chrome Dev summit in 2015. Shortly after, developers started to use the specification to create web applications. Some of the most notable examples of PWAs are Twitter, Uber, and Google Maps, which all tout reduced data consumption of about 70% or more.

* Today, creating a PWA is a lot easier than it was back then, and is usually a lot more cost-effective than developing a mobile application. Google has created an amazing set of tools, called workbox, to help developers create a service worker with minimal effort.

* In this module, you will learn about service workers and how to use them to cache assets, improve performance, and serve static assets. We will look at one that was made from scratch using plain Javascript, and another that was built on top of workbox.

* We will start with the project setup needed to replace modules on the fly, move on to learning how to generate a service worker using Workbox, and finally learn how to implement caching strategies that make your app faster, and if configured correctly, able to work offline.

### 19. Instructor Demo: Hot Module Replacement (5 min)

* In the terminal, navigate to `11-Ins_Webpack-HMR` and run `npm install` and `npm run dev`. This will install the dependencies, run the development server, and open the `index.html` in the browser.

  * 🔑 Previously when working with webpack, we ran `npm run build` to output our files to a `dist` file and manually opened the `index.html` using Live Server. When we run this application, however, the build is sent directly to the browser! This is because we are using a powerful development tool available with webpack: Hot Module Replacement.

  * 🔑 Hot Module Replacement or HMR is used during development to allow modules to be updated at runtime without the need for a full refresh. This saves development time because we can see our changes as we make them.

  * When we look at the opened app in the browser, we currently see content is being loaded by `module 1` and `module 2`.

* Open `11-Ins_Webpack-HMR/src/js/module1.js` in your IDE to demonstrate the following:

  * 🔑 The `module1.js` file is providing the content to our live page. To test hot reloading is working, let's update the appended HTML so that inside the span element, the text reads: `"THIS IS NEW CONTENT"`.

    ```js
    <div class="article-container">
      <div class="row">
        <div class="col s12">
          <div class="card darken-1">
            <div class="card-content dark-text">
                <span class="card-title">THIS IS NEW CONTENT</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    ```

  * We can then save the `module1.js` file and navigate back to our opened browser page to see the content changed. Sometimes, working with HMR can be tricky, so if this doesn't work for you right away, try refreshing or opening your app in an incognito window to see the new content appear.

* Open `11-Ins_Webpack-HMR/package.json` in your IDE to demonstrate the following:

  * 🔑 To install `webpack-dev-server` as a dev dependency, we use `npm install webpack-dev-server --save-dev`. Once installed, `webpack-dev-server` will appear in the `devDependencies` section of the `package.json` file, as seen below:

    ```js
    "devDependencies": {
      "css-loader": "^6.2.0",
      "html-webpack-plugin": "^5.3.2",
      "style-loader": "^3.2.1",
      "webpack": "^5.53.0",
      "webpack-cli": "^4.8.0",
      "webpack-dev-server": "^4.1.1"
    },
    ```

  * To add Hot Module Reloading to our own webpack app, we need to make sure that the script has been added to our package.json file to start our dev server and open up our app in the browser. We add the `--open` tag so that our app will open up in our browser automatically.

    ```js
    "dev": "webpack-dev-server --open"
    ```

  * Under the hood, in a development environment webpack calls the `webpack-dev-server` dependency when it parses the `devServer` object in the `webpack.config.js` file.

* Open `11-Ins_Webpack-HMR/webpack.config.js` in your IDE to demonstrate the following:

  * Next, in the `config` file we set the mode to `development`. webpack has three modes: `development`, `production` or `none`. By setting the mode, we enable webpack's built-in optimizations that correspond to each environment.

    ```js
    module.exports = {
      mode: 'development',
      entry: {
        index: './src/index.js',
      }
    ```

  * We also add a `devServer` option to our configuration. In our `devServer` object, we have added an attribute of `hot` and set it to `only`. This will reload the module without reloading the entire page.

    ```js
    devServer: {
       hot: 'only',
    },
    ```

* Open `11-Ins_Webpack-HMR/src/index.js` in your IDE to demonstrate the following:

  * 🔑 To accept and react to module updates, we add logic in our `index.js` to check if Hot Module Replacement is enabled and if it is accept and react to the changes. We also add error messaging which will fire if the HMR cannot update.

    ```js
    if (module.hot) {
      module.hot.accept((err) => {
        if (err) {
          console.error('Cannot apply HMR update.', err);
        }
      });
    }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 We make sure that `webpack-dev-server` is set up to use Hot Module Replacement by adding a `devServer` object to our webpack config and updating our JavaScript to Webpack to accept and react to the updated module.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `12-Stu_Webpack-HMR/README.md`.

### 20. Student Do: Hot Module Replacement (15 min)

* Direct students to the activity instructions found in `12-Stu_Webpack-HMR/README.md`, which are also shown below.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🏗️ Add Webpack Development Server to a Project Using Hot Module Replacement (HMR)

  Work with a partner to implement the following user story:

  * As a developer, I want to add a `webpack-dev-server` to my project so that I can use Hot Module Replacement (HMR) to update the page without a full page refresh.

  * As a developer, I want to learn how to configure `webpack-dev-server` so that it can test my project in a way that allows my work to continue without much downtime.

  ## Acceptance Criteria

  * It is done when I have installed `webpack-dev-server` as a `devDependency`.

  * It is done when I have a `webpack.config.js` file in my project that includes the `devServer` property.

  * It is done when I have added a `hot` property to the `devServer` object in `webpack.config.js` and set its value to `only`.

  * It is done when I have added a `dev` command to `package.json` that runs `webpack-dev-server --open`.

  * It is done when I have opened `Unsolved/src/js/index.js` and added logic to accept Hot Module Replacement (HMR), as shown in the documentation.

  * It is done when I have opened `Unsolved/src/js/header.js` and updated the code so that the header changes to `orange` instead of `blue` on the button click.

  ## 📝 Notes

  * If you encounter any issues with loading your most recent changes, refresh the page or try again in a private/incognito window. You may have to refresh a few times!

  ## 💡 Hints

  * What other options are available for the `devServer` property?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What is another way to run `webpack-dev-server` without needing to add it to our `package.json` file?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 21. Instructor Review: Hot Module Replacement (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with Hot Module Replacement and how it can help us during development? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use Office Hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `webpack-dev-server`

  * ✔️ `hot: 'only'`

  * ✔️ `module.hot.accept()`

* Open `12-Stu_Webpack-HMR/Solved/package.json` in your IDE and explain the following:

  * To use Hot Module Replacement, we first have to install `webpack-dev-server` as a development dependency. Once installed, it will appear as part of the `devDependencies` object. This object contains all of the dependencies that we need to run our development server.

    ```json
    "devDependencies": {
      "@babel/core": "^7.16.0",
      "@babel/preset-env": "^7.16.4",
      "babel-loader": "^8.2.3",
      "css-loader": "^6.5.1",
      "html-webpack-plugin": "^5.5.0",
      "mini-css-extract-plugin": "^2.4.5",
      "style-loader": "^3.3.1",
      "webpack": "^5.64.4",
      "webpack-cli": "^4.9.1",
      "webpack-dev-server": "^4.7.2"
    }
    ```

  * 🔑 In our scripts, we've also added a `dev` command to run `webpack-dev-server --open`. This command will run the `webpack-dev-server` and open the project in the browser. Optionally, if you don't want this behavior, you can use `--no-open` to prevent the browser from opening automatically.

    ```json
     "scripts": {
       "test": "echo \"Error: no test specified\" && exit 1",
       "build": "webpack",
       "dev": "webpack-dev-server --open"
    },
    ```

* Open `12-Stu_Webpack-HMR/Solved/webpack.config.js` in your IDE to demonstrate the following:

  * Now that we have our script to start the server and have installed the `webpack-dev-server` package, we add a `devServer` object to our `webpack.config.js` file. This object contains all of the configuration options for our development server, which gets invoked by the `dev` command.

  * 🔑 We add a `hot` property to the `devServer` object in `webpack.config.js` and set its value to `only` so that we can use HMR without a full page refresh, as shown below:

    ```js
    devServer: {
      hot: 'only',
    },
    ```

* Open `12-Stu_Webpack-HMR/Solved/src/index.js` in your IDE to demonstrate the following:

  * 🔑 Even though we have set up HMR, it is by default an opt-in feature. In order to take advantage of it, we need to update the `index.js` file to accept and react to the hot modules.

  * This code is added at the bottom of the `index.js` file, but it can be added anywhere in the file. We first check to see if `module.hot` property is defined. If it is, we accept hot modules by calling `module.hot.accept()` method, as shown in the following `index.js` snippet:

    ```js
    if (module.hot) {
      module.hot.accept((err) => {
        if (err) {
          console.error('Cannot apply HMR update.', err);
        }
      });
    }
    ```

  * We don't need to accept hot modules in every file. All the files that are imported into `index.js` will bubble up and be hot reloaded.

* Navigate to `12-Stu_Webpack-HMR/Solved` in your terminal and run `npm install` and `npm run dev` and demonstrate the following:

  * With the development server running, the page automatically opens in the browser.

* Open `12-Stu_Webpack-HMR/Solved/src/js/header.js` in your IDE to demonstrate the following;

  * In the `header.js` module, we can change the header's color attribute from `blue` to `orange` to see if we can view the changes without having to rebuild the entire app.

    ```js
    export const headerClick = () => {
      const header = document.getElementById('header');
      if (header.style.color === 'orange') {
        header.style.color = 'black';
      } else {
        header.style.color = 'orange';
      }
    };
    ```

  * When we navigate back to the opened app in the browser, we can see the header now changes from black to orange. If it doesn't work, try refreshing the page a few times or testing your app in an incognito window!

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why is knowing how to use Hot Module Replacement helpful when creating a webpack project?

  * 🙋 Using HMR prevents us from having to rebuild the entire project every time we make a change. It also allows us to make changes to the code without having to restart the server.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Webpack docs on Hot Module Replacement](https://webpack.js.org/guides/hot-module-replacement/#enabling-hmr), and attend Office Hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 22. Instructor Demo: Client-Server Model (5 min)

* Navigate to `13-Ins_Client-Server` in your terminal and run `npm install` and `npm run` to demonstrate the following:

  * When we enter `npm run` we can see a list of all the run scripts including `npm run start:dev`. This script uses an npm module called `concurrently` to start the client and server directories at the same time.

    ```json
    "start:dev": "concurrently \"cd client && npm run build\" \"cd server && npm run server\" "
    ```

  * The concurrently npm package is a great tool that will allow us to easily spin up our own Express.js server and serve up our bundled files in the `dist` folder.

* Navigate to `13-Ins_Client-Server` in your terminal and run `npm run start:dev` to demonstrate the following:

  * When we execute the `npm run start:dev` script, concurrently runs the client app's build script to create a `dist` directory that contains an `index.html`.  Concurrently also starts an Express.js server to serve up our `index.html` and the assets found in the `dist` directory at the same time.

* Open to `localhost:3001/` in your browser to explain the following:

  * Our app is now available at the main route `/` at `localhost:3001`, the route and port assigned by our Express.js server.

  * Using concurrently, instead of manually opening the `index.html` in the dist directory with Live Server like we did in earlier activities or relying on webpack's dev server to serve our build directly to the browser, we can use our own Express server to serve up the bundled app on the `localhost:3001` or whatever port we assign in our `server.js` file.

  * For concurrently to work, however, we have to make some changes to how we organize our app. We will be dividing our app into separate client and server directories, known as the client-server model.

* Open `13-Ins_Client-Server` in your IDE to demonstrate the following:

  * 🔑 When we take a look inside the `13-Ins_Client-Server` we see that there are two main directories: a client directory and a server directory.

  * The client directory contains the front-end files. In addition, when a `dist` file is generated during a build, it will also be located inside the client directory. Since we have been working with a front-end app, all of our current app files will be located in the client directory.

  * The server directory contains all the files needed to run a simple Express.js server with a route to serve up our bundled app's files in the client's `dist` folder.

  * Both the client directory and server directory are actually separate apps that function together thanks to the package.json in the root folder. This package.json contains our `npm run start:dev` script and the concurrently development dependency that allows the client and server to be spun up at the same time.

  * 🔑 Using the client-server model allows us to separate our front-end code from our back-end code in these two directories. This creates a more modular and reusable codebase and is especially important to understand when we start working with React or other front-end frameworks that use bundlers like webpack!

  * During the next activity, you will check out the client and server directories more on your own.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we use the client-server model to modularize our app?

  * 🙋 We would start by modularizing our front-end and back-end into two directories, the client and server folders. Since our app is a front-end app, all of our existing files will go in the client directory. The server directory contains a server and HTML route that allows the `dist/index.html` to be served up easily. Finally, we can start both our client and server apps at the same time using an npm module called `concurrently`.

  * ☝️ Why is it important to understand the client-server model?

  * 🙋 The client-server model is a common way for developers to modularize their app into reusable components. Understanding the client-server model will also give us a head start at understanding React and other front-end frameworks that use bundlers like webpack!

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `14-Stu_Client-Server/README.md`.

### 23. Student Do: Client-Server Model (15 min)

* Direct students to the activity instructions found in `14-Stu_Client-Server/README.md`, which are also shown below.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📐 Add Comments to Implementation of Client-Server Model

  Work with a partner to add comments describing the functionality of the code found in [Unsolved/package.json](./Unsolved/package.json), [Unsolved/server/routes/htmlRoutes.js](./Unsolved/server/routes/htmlRoutes.js), and [Unsolved/server/server.js](./Unsolved/server/server.js).

  In addition, in the [Unsolved/client/README.md](./Unsolved/client/README.md) and [Unsolved/server/README.md](./Unsolved/server/README.md), add comments describing the files and directories found in both folders.

  ## 📝 Notes

  Refer to the documentation:

  [NPM docs on concurrently](https://www.npmjs.com/package/concurrently)

  [MDN web docs client-server overview](https://expressjs.com/en/starter/installing.html)

  [Installing Express.js server](https://expressjs.com/en/starter/installing.html)

  [Express.js routing](https://expressjs.com/en/starter/basic-routing.html)

  [Installing Express.js server](https://expressjs.com/en/starter/installing.html)

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What is a proxy server?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 24. Instructor Review: Client-Server Model (15 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with the client-server model? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use Office Hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `concurrently`

  * ✔️ `npm run start:dev`

  * ✔️  `server` directory

  * ✔️  `app.use()`

  * ✔️  `app.get()`

  * ✔️  `client` directory

* Open `14-Stu_Client-Server/Solved/package.json` in your IDE to explain the following:

  * 🔑 To use concurrently, we install it as a dev dependency at the root level so that it can access both the client and server directories.

    ```json
    "devDependencies": {
      "concurrently": "^5.2.0"
    }
    ```

  * 🔑 We also add a script that when executed will navigate into the client directory to run the build script and navigate into the server directory to spin up the Express.js server to serve up our app. Note that order matters here! We first have to run the build and create the `dist` folder before the dist files can be served up by our server!

    ```json
    "start:dev": "concurrently \"cd client && npm run build\" \"cd server && npm run server\" "
    ```

* Open `14-Stu_Client-Server/Solved/server/README.md` in your IDE to explain the following:

  * The server directory holds the server-side application. At the root is the server's `package.json` that contains the dependencies and scripts needed for the server app to run.

  * The `server.js` file is also at the root level. This JavaScript file contains the code needed for our basic Express.js server. At the root level is also a directory containing the logic needed for our HTML route.

* Open `14-Stu_Client-Server/Solved/server/server.js` in your IDE to explain the following:

  * 🔑 The `server.js` file contains a basic Express server that runs on port `3001`.

  * 🔑 To use static files in the entire client's `dist` folder, we add the `app.use()` method. This will make sure all the bundled assets we need for our app to run are available for use!

    ```js
    app.use(express.static('../client/dist'))
    ```

  * We also require our HTML route. For smaller apps, the routes can sometimes also be placed directly in the `server.js` file. In our case, we modularized the code, by giving the HTML route its own file.

    ```js
    require('./routes/htmlRoutes')(app);
    ```

* Open `14-Stu_Client-Server/Solved/server/routes/htmlRoutes.js` in your IDE to explain the following:

  * We access our app through the `index.html` file. Previously, we had to open up the `dist` directory's `index.html` using the Live Server tool. Now, using a simple Express `GET` route, we can match requests to the root route `/` and serve up the `index.html` file in the client's `dist` folder using our own simple server app.

    ```js
    module.exports = (app) =>
      app.get('/', (req, res) =>
        res.sendFile(path.join(__dirname, '../client/dist/index.html'))
      );
    ```

  * Now, when we run the build script to create a `dist` directory and spin up the server, our app will appear in the browser at `localhost:3001/` or `localhost:3001`.

* Navigate to `14-Stu_Client-Server/Solved/client/README.md` in your IDE to explain the following:

  * The client directory holds our front-end app. Since our app is a front-end app, all these files will be found in the client directory.

  * At the root level of the client directory, we typically have the client's package.json that contains the scripts and dependencies needed to run the client app, the `index.html`, and configuration files such as `webpack.config.js`.

  * The `src` folder containing our raw JavaScript, CSS, and image files is also in the client folder.

  * When a build script is executed, the `dist` folder will be found in the client folder.

* Navigate to `14-Stu_Client-Server/Solved/` in your terminal and run `npm install` and `npm run start:dev` to explain the following:

  * When we open up the localhost on the port assigned in our Express server, or `localhost:3001`, we can see our Express server is now serving up the client app!

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How does concurrently help us use the client-server model?

  * 🙋 The idea is that we can run both the client and the backend server at the same time when developing, and when it comes time to deploy, we can run the build command for the client, and then the server command for the backend.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Open-CLI Docs on concurrently](https://github.com/open-cli-tools/concurrently), and attend Office Hours to ask for help.

* Answer any questions before ending the class.

### 25. END (0 min)

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this [anonymous survey](https://forms.gle/RfcVyXiMmZQut6aJ6).

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
