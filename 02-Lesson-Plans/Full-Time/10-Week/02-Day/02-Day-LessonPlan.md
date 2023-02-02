# 10.2 Full-Time Lesson Plan: Workbox, Caching, and Service Workers

## Overview

In this class, students will learn how to use the workbox library to cache and serve static assets. Students will also become familiar with the different methods workbox provides to create a service worker and learn some of the caching strategies that workbox provides out of the box. In addition, students will be introduced to IndexedDB, which allows developers to store large amounts of data on the client side.  We have used `localStorage` in the past for client-side storage, but we were very limited in the amount and type of data we could store. IndexedDB can help us store more data in more complex data structures.

## Instructor Notes

* In this lesson, students will complete activities `15-Ins_Workbox-Service-Workers` through `27-Evr_Git-Hooks`.

* This module features activities that will require students to save and refresh the browser in order to see changes. The very nature of PWAs means that, by design, students will likely run into issues with cached assets interfering while debugging and testing.

  > **Important**: If you are having issues with cached assets, please use a private or incognito window to view the application.

* For Chrome users, you can open an incognito window by clicking the three dots in the top-right corner of the browser. From there, click the "New Incognito Window" button. You can also use hot keys to open an incognito window: on macOS, press Command + Shift + N; on Windows, press Control + Shift + N.

* In addition to using a private window, students can troubleshoot caching issues further by completely unregistering the service worker. This will allow the browser to cache the assets again. Details on how to do this will vary among browsers, but generally you can find the option to do this in the browser's developer tools.

* Some of these activities rely on a browser response. If you are not seeing the intended results, please close your browser entirely and restart to begin a new browser session. This will often clear any issues.

* When demoing the activities, please use `Live Server` to open the `index.html` file from the `dist` directory, unless specified otherwise. If you have not yet downloaded Live Server for VS Code, refer to these [instructions for downloading Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

* PWAs and IndexedDB can be frustrating at times, so take some time to familiarize yourself with the behavior of each activity. This is also a good opportunity for students to practice troubleshooting unexpected behaviors in their application.

* Some of these activities rely on a browser response. If you are not seeing the intended results, please close your browser entirely and restart to begin a new browser session. This will often clear any issues.

* When demoing the activities, please use `Live Server` to open the `index.html` file from the `dist` directory, unless specified otherwise. If you have not yet downloaded Live Server for VS Code, refer to these [instructions for downloading Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

* Remind students to do a `git pull` of the class repo and to have today's activities ready and open in VS Code.

* If you are comfortable doing so, live code the solutions to the activities. If not, just use the solutions provided and follow the prompts and talking points for review.

* Let students know that the Bonus at the end of each activity is not meant to be extra coding practice, but instead is a self-study on topics beyond the scope of this module for those who want to further their knowledge.

## Learning Objectives

* Leverage caching strategies to optimize performance.

* Execute a full-stack application with a server and client-side development server.

* Implement IndexedDB inside a JavaScript application.

* Implement CREATE, READ, UPDATE, and DELETE commands for an IndexedDB instance.

* Convert an existing application into a Progressive Web Application (PWA).

## Time Tracker

| Start  | #   | Activity Name                                     | Duration |
|---     |---  |---                                                |---       |
| 10:00AM| 1   | Instructor Demo: Cache CSS and JavaScript Files   | 0:05     |
| 10:05AM| 2   | Student Do: Cache CSS and JavaScript Files        | 0:15     |
| 10:20AM| 3   | Instructor Review: Cache CSS and JavaScript Files | 0:10     |
| 10:30AM| 4   | Instructor Demo: Caching Images                   | 0:05     |
| 10:35AM| 5   | Student Do: Caching Images                        | 0:15     |
| 10:50AM| 6   | Instructor Review: Caching Images                 | 0:10     |
| 11:00AM| 7   | Instructor Demo: Client-Server Model              | 0:05     |
| 11:05AM| 8   | Student Do: Client-Server Model                   | 0:15     |
| 11:20AM| 9   | Instructor Review: Client-Server Model            | 0:10     |
| 11:30AM| 10  | FLEX                                              | 0:30     |
| 12:00PM| 11  | BREAK                                             | 0:30     |
| 12:30PM| 12  | Instructor Do: Stoke Curiosity                    | 0:10     |
| 12:40PM| 13  | Instructor Demo: IndexedDB                        | 0:05     |
| 12:45PM| 14  | Student Do: IndexedDB                             | 0:15     |
| 1:00PM | 15  | Instructor Review: IndexedDB                      | 0:10     |
| 1:10PM | 16  | Instructor Demo: IndexedDB CRUD                   | 0:05     |
| 1:15PM | 17  | Student Do: IndexedDB CRUD                        | 0:15     |
| 1:30PM | 18  | Instructor Review: IndexedDB CRUD                 | 0:10     |
| 1:40PM | 19  | Instructor Demo: Manifest                         | 0:05     |
| 1:45PM | 20  | Student Do: Manifest                              | 0:15     |
| 2:00PM | 21  | Instructor Review: Manifest                       | 0:10     |
| 2:10PM | 22  | Everyone Do: Git                                  | 0:20     |
| 2:30PM | 23  | END                                               | 0:00     |

---

## Class Instruction

### 1. Instructor Demo: Workbox Service Workers (5 min)

* Welcome students to class.

* Navigate to `15-Ins_Workbox-Service-Workers` in your terminal, run `npm install` and `npm run dev` to demonstrate the following:

  * 🔑 When we run the application, the first thing you will notice is that unlike the previous activities, this one doesn't use or require webpack. Instead, we see a simple message that our server is running on port `3001`.

  * This demo is a very simple page that contains a card with a title, a description, and an image. It also features a service worker that is running in the background.

  * 🔑 This demo is very similar to other simple Express applications that we have created in the past, with one key distinction. This application uses a service worker written in plain Javascript to cache the application's assets.

  * **Important**: There are two ways to create a service worker. One is to create it manually using the steps found on MDN, and the other is to use the [workbox](https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin) plugin. While we will use workbox in the next activity, it is important that we take a look at how to create a service worker manually to understand how it works.

* Open `15-Ins_Workbox-Service-Workers/src/sw.js` in your IDE to demonstrate the following:

  * This is a service worker that runs in the background and caches the assets that we are using. Services respond to different events, much like a button or input field.

  * In the browser, we can navigate to Chrome DevTools and click on the Application tab and see that the service worker is running and what status it is in.

  * There are generally three stages in the service worker life cycle:

    1. Install: When the service worker is installed, it will cache the assets that we are using.

    2. Activate: The phase in which the service worker is activated. This is the phase in which the service worker is ready to handle events.

    3. Claim: The phase when the service worker is claiming the clients that are using it.

  * This particular service worker is also a cache-first strategy, meaning that it will first check to see if the assets are in the cache before trying to fetch them from the network. When we create a service worker, it is important to add logic that defines a caching strategy, as shown below:

    ```js
    self.addEventListener('fetch', (e) =>
      e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)))
    );
    ```

* Open `15-Ins_Workbox-Service-Workers/src/index.js` in your IDE to demonstrate the following:

  * Typically, all one needs to do in order to register a service worker is check to see if they are supported in the browser, and then use the `navigator.serviceWorker.register()` method to register the worker in the browser, as shown below:

    ```js
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('./sw.js')
        .then((register) => console.log(register));
    }
    ```

* Now that we have explored the fundamentals of how to build a service worker, in the next activity you will refer to the docs to build your own service worker using a simple library called workbox.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What do service workers do?

  * 🙋 Service workers are a way to cache assets that are used in the application, and are used to speed up the application's loading time.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `16-Stu_Workbox-Service-Workers/README.md`.

### 2. Student Do: Workbox Service Workers (15 min)

* Direct students to the activity instructions found in `16-Stu_Workbox-Service-Workers/README.md`, which are also shown below.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📖 Use Workbox to Generate a Service Worker

  * As an app user, I want to be able to precache assets and view my app even when offline.

  ## Acceptance Criteria

  * It’s done when logic is added to the `index.js` to register a service worker.

  * It's done when the `webpack.config.js` file is updated to use the GenerateSW class of the workbox webpack plugin.

  * It’s done when the app is started using `npm install` and `npm run start:dev` and a log from GenerateSW appears in the console with a message similar to the following: `“The service worker at service-worker.js will precache 5 URLs, totaling 35.1 kB.”`

  * It’s done when a `service-worker.js` file is generated in the build directory.

  * It’s done when the service worker is active and the app is still visible even when offline.

  ## 📝 Notes

  Refer to the documentation:

  * [Workbox docs on generating a service worker with webpack using GenerateSW](https://developers.google.com/web/tools/workbox/guides/generate-service-worker/webpack)

  * [Workbox docs on GenerateSW](https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-webpack-plugin.GenerateSW)

  * [Simulate offline behavior with Chrome DevTools](https://developers.google.com/web/ilt/pwa/tools-for-pwa-developers#simulate_offline_behavior)
  )

  * [Interact with service workers with Chrome DevTools](https://developers.google.com/web/ilt/pwa/tools-for-pwa-developers#interact_with_service_workers_in_the_browser)

  ## 💡 Hints

  * How can we use Chrome DevTools to test if our service worker is active and our app is still visible even when offline?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * Why don't JavaScript modules work inside service workers?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 3. Instructor Review: Workbox Service Workers (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with service workers in general? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use Office Hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `GenerateSW`

  * ✔️ `Workbox()`

* Open `16-Stu_Workbox-Service-Workers/Solved/client/webpack.config.js` in your IDE to demonstrate the following:

  * 🔑 To make workbox generate a service worker when the application is built, we will use the GenerateSW class to generate a pre-built service worker as part of the webpack build process.

  * 🔑 GenerateSW is a method that supports creating a new service worker file as part of the webpack build process.

  * 🔑 To use the GenerateSW class of the workbox webpack plugin, we need to import it and add it to our webpack configuration.

    ```js
    const WorkboxPlugin = require('workbox-webpack-plugin');
    ```

  * 🔑 In our exported object, we add a new entry to the `plugins` array that invokes the GenerateSW class. It is important this plugin is last!

    ```js
    new WorkboxPlugin.GenerateSW()
    ```

  * In terms of webpack configuration, this is all we need to do to generate a service worker.

  * The setup is so much easier than writing a plain JavaScript service worker from scratch in the previous activity. This is the benefit of using workbox, and this is just the beginning of what workbox can do!

* Open `16-Stu_Workbox-Service-Workers/Solved/client/src/js/register-sw.js` in your IDE to demonstrate the following:

  * Much like we did with the plain JavaScript service worker, we still need to register the service worker that gets created by `GenerateSW`.

  * 🔑 To register, we need to check to make sure service workers are supported in the browser. We can then use the window load event to register the service worker. When working with workbox, it is important to check the docs for this code!

    ```js
    export const registerSW = () => {
      // Check that service workers are supported
      if ('serviceWorker' in navigator) {
      // Use the window load event to keep the page load performant
        window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js');
       });
      }
    };
    ```

  * Now that we have reviewed the service worker, let's test our application in the browser.

* Navigate to `16-Stu_Workbox-Service-Workers/Solved` in your terminal and run `npm install` and `npm run start:dev`.

  * When we start our app, we see a message similar to this in the console, showing that our service worker is running and our files are being precached.

* Open `localhost:3001` in an incognito browser to demonstrate the following:

    ```text
    “The service worker at service-worker.js will precache 5 URLs, totaling 35.1 kB.”
    ```

* Navigate to `localhost:3001/` in an incognito browser to demonstrate the following:

  * When we open Chrome DevTools, click on the Application tab and select Service Worker, we see our service worker is activated and is running.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is the difference between using workbox and plain JavaScript service workers?

  * 🙋 The benefit of using workbox is that it is so much easier to understand and use. It's a great way to get started with service workers without having to write a plain JavaScript service worker from scratch.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Workbox docs on GenerateSW](https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-webpack-plugin.GenerateSW), and attend Office Hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 4. Instructor Demo: Caching Images (5 min)

* Navigate to `17-Ins_Caching-Images` and run `npm install` and `npm run start:dev` to demonstrate the following:

  * In the console, we see a log from GenerateSW indicating that our files have been precached similar to the following:

    ```md
    The service worker at service-worker.js will precache
    [0] 5 URLs, totaling 38.7 kB.
    ```

* Navigate to `localhost:3001` in an incognito window and open DevTools to demonstrate the following:

  * Working with a cache can be tricky especially during development. If you are running into issues, it is a good idea to do a hard refresh by holding down the refresh icon on the left side browser toolbar and clicking on "Empty Cache and Hard Reload" on a Mac or pressing `Ctrl + Shift + r` or `F5` on Windows. This will make sure you are seeing the latest changes to your app!

  * Once we have done a hard refresh, we can navigate to the Applications tab and click on the `Cache Storage` option under `Cache` to see our apps current cache. When we click on the cache, a clickable table of all cache's files should appear on the right.

  * The images will have names that contain a long string of numbers and letters due to the bundling process. To see our cached images and determine which images are cached, we can click on the Preview mode below the table.

  * In our cache table, it looks like we currently have two precached images even though we have four images in our app. To see why, we can click on the `index.html` file in the table and view it in preview mode.

  * In our `index.html`, it seems two of our images are actually external URL links. Remember, when we use GenerateSW only the images that are stored locally and bundled are included in the cache!

  * By default, when we use GenerateSW all images that have been bundled will be automatically precached when the service worker is installing. This is useful when building a simple app. However, this is often not the behavior we want and it may even slow your app's performance down when apps get larger.

  * That is when adding runtime caching strategy will help make your app more performant and give you more control over when images are cached. In the next activity, you will be adding a runtime strategy to an existing app so that images are only saved once they are used on the page. As usual. Don't forget to consult the documents!

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is precaching?

  * 🙋 When the service worker is installing, files are saved to the cache. This is referred to as "precaching". When using the GenerateSW, precaching is the default behavior.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `18-Stu_Caching-Images/README.md`.

### 5. Student Do: Caching Images (15 min)

* Direct students to the activity instructions found in `18-Stu_Caching-Images/README.md`, which are also shown below.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🐛 Images Are Not Using a Runtime Caching Strategy

  Work with a partner to resolve the following issue:

  * As a developer, I want to be able use runtime caching so that my images are cached as they are used and not automatically precached.

  ## Expected Behavior

  Images should not only be cached as they are used and not precached. In addition, the total number of cached images should be limited to 2.

  ## Actual Behavior

  All images are precached when the service worker is loaded.

  ## Steps to Reproduce the Problem

  To reproduce the problem, follow these steps:

  1. Navigate to the `Unsolved` folder and run `npm install` and `npm run start:dev`

  2. Open a new incognito browser tab and navigate to `http://localhost:3001/`.

  3. Open Chrome DevTools, click the Application tab and select Cache Storage to see the precached files. Note: You may need to do hard refresh!

  ## 📝 Notes

  Refer to the documentation:

  [Workbox docs on runtime caching](https://developers.google.com/web/tools/workbox/guides/generate-service-worker/webpack#adding_runtime_caching)

  ## 💡 Hints

  * How can we enable runtime caching when using the GenerateSW class of the workbox webpack plugin?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What is the Cache Storage API? How do we use it?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 6. Instructor Review: Caching Images (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with caching images? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use Office Hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `exclude`

  * ✔️ `runtimeCaching`

  * ✔️ `cacheFirst`

* Open `18-Stu_Caching-Images/Solved/client/webpack.config.js` in your IDE and explain the following:

  * The GenerateSW class precaches all images by default. However, that is often not the behavior that we want, especially when we have many images.

  * Runtime caching allows us to only cache images as we use them. When we use runtime caching, the request is only populated after a request is made for an asset, like an image.

  * To use runtime caching, we need to add parameters to our GenerateSW class in our `webpack.config.js`.

  * First we need to set the property to exclude our images from precaching.

    ```js
     exclude: [/\.(?:png|jpg|jpeg|svg)$/],
    ```

  * 🔑 Then, we enable `runtimeCaching` to match URLs that are images and use the `CacheFirst` strategy, so that the cache is checked for the URL before making a call on the network. The `CacheFirst` strategy is a perfect choice for optimizing repetitive requests, since it only reaches out to the network for "fresh" assets.

  * We also need to add a custom cache name and can select the maximum number of images we want to hold in the cache at one time. This allows us to control the size of our cache.

    ```js
    runtimeCaching: [{
        urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'images',
          expiration: {
            maxEntries: 2,
          },
        },
      }],
    ```

* Navigate to `18-Stu_Caching-Images/Solved/` in your terminal and run `npm install` and `npm run start` to demonstrate the following:

  * When we open `localhost:3001` in an incognito window and navigate to the Application Tab and view the cache storage, we see all our images are no longer precached.

  * When we click on the network tab and then click on the `Change Box Image` in our app, we can see that a network call is being used the first time our images are shown on the browser page.

  * If this doesn't work the first time, don't worry! Caches are notoriously tricky when using `localhost`. Try running a hard refresh to make sure the cache is cleared. Or, if that option fails, you can try changing the port in your `server.js` to a new port you have not yet used such as `3010`. Using these tricks will usually allow you to see the intended behavior!

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is runtime caching?

  * 🙋 When we use a runtime caching strategy, the files are not stored in the cache until they are actually used in the app. For larger apps, a successful runtime caching strategy can help prevent cache bloat and help make your apps perform better.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Runtime caching with workbox](https://web.dev/runtime-caching-with-workbox/), and attend Office Hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 7. Instructor Demo: InjectManifest (5 min)

> **Important**: The `dist` folder for both of these examples have been pre-generated for you.

* Open `19-Ins_InjectManifest/GenerateSWexample/client/dist/service-worker.js` in your IDE to demonstrate the following:

  * 🔑 When we use the GenerateSW class, a service worker is automatically generated for you in the `dist` folder. This is fine for simple configurations or when you do not want to customize your service worker.

  * However, since the service worker is autogenerated, the options for caching are limited and we cannot use our service worker with other APIs.

  * 🔑 When we need more control over our service worker, we can use another workbox webpack plugin class, InjectManifest.

* Open `19-Ins_InjectManifest/InjectManifestExample/client/src/sw.js` in your IDE to demonstrate the following:

  * Using InjectManifest we can build our own custom service worker with more advanced scripts and caching strategies and place the file in our `src` directory.

* Open `19-Ins_InjectManifest/InjectManifestExample/client/dist/service-worker.js` in your IDE to demonstrate the following:

  * When the build script is executed, InjectManifest creates a list -- or manifest -- of URLs that are to be precached and injects them into your existing service worker. This can appear as a separate file in your `dist` directory or injected directly into the bundled, custom service worker file.

    ```js
    /**
    * The precacheAndRoute() method efficiently caches and responds to
    * requests for URLs in the manifest.
    * See https://goo.gl/S9QRab.com
    */

    workbox.precacheAndRoute([{
      "url": "80551ea7ee802057b7d8.png",
      "revision": null
    }, {
      "url": "bundle.js",
      "revision": "5769c1b7478f9595223c2626a48d66b3"
    }, {
      "url": "fc083abf258238e3b7f5.png",
      "revision": null
    }, {
      "url": "index.html",
      "revision": "8e97463e73cce4383fab046b0911645f"
    }, {
      "url": "main.css",
      "revision": "985f2d9b63b6a02489442a56cbd104c8"
    }], {});
    ```

* Open `19-Ins_InjectManifest/InjectManifestExample/client/dist/sw.js` in your IDE to demonstrate the following:

  * When we use InjectManifest, our custom service worker including any specific configurations we need is bundled but otherwise unchanged. This allows us to add the custom scripts -- and control -- we need to our service worker.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why would we choose to use the InjectManifest class over GenerateSW?

  * 🙋 When we want to quickly generate a service worker and don't need service workers with other API's, GenerateSW is a great and easier choice. However for more complex configurations, or when you need to interact with an API like WebPush, InjectManifest is a better option because it allows us far more choices to customize how our service worker behaves.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `20-Stu_InjectManifest/README.md`.

### 8. Student Do: InjectManifest (15 min)

* Direct students to the activity instructions found in `20-Stu_InjectManifest/README.md`, which are also shown below.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📖 Implement InjectManifest to Generate a List of URLs to Add to Existing Service Worker

  Work with a partner to implement the following user story:

  * As a developer, I want to generate a list of URLs to precache and add that precache manifest to an existing service worker file.

  ## Acceptance Criteria

  * It is done when I have imported `injectManifest` class from the `workbox-webpack-plugin` inside the `webpack.config.js` file.

  * It is done when I have registered a new Workbox service worker inside the `src/index.js` file using the `Workbox` constructor.

  * It is done when I have added a new `InjectManifest` plugin to the `plugins` array in `webpack.config.js`.

  * It is done when I have specified the `swSrc` properties in the `InjectManifest` constructor in the `plugins` array in `webpack.config.js`.

  ## 📝 Notes

  Refer to the documentation:

  * [Workbox docs on InjectManifest](https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin#injectmanifest_plugin)

  ## 💡 Hints

  * What is the difference between the `GenerateSW` and `InjectManifest` class?

  * What are some different methods of matching files that we want to cache? How can we use the `destination` property on the `request` object to our advantage?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What are some different methods of matching files that we want to cache? How can we use the `destination` property on the `request` object to our advantage?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 9. Instructor Review: InjectManifest (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with using InjectManifest? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use Office Hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `InjectManifest`

  * ✔️ `swSrc`

* Open `20-Stu_InjectManifest/Solved/client/src/sw.js` in your IDE and explain the following:

  * When we use GenerateSW, a complete service worker is generated for us. When we use InjectManifest, we start by creating our own service worker in the `src` directory. This file was provided for us, but is a great resource to refer to when you want to build a custom service worker using InjectManifest on your own.

* Open `20-Stu_InjectManifest/Solved/client/webpack.config.js` in your IDE and explain the following:

  * 🔑 In our config file, we require the InjectManifest class of the workbox webpack plugin.

    ```js
    const {InjectManifest} = require('workbox-webpack-plugin');
    ```

  * 🔑 Next, we add InjectManifest last on our list of plugins and make sure to add the service worker source file, or `swSrc`. The `swDest` file provides the the path and filename of the service worker file that is generated during the build.

    ```js
    new InjectManifest({
      swSrc: './src/sw.js',
      swDest: 'service-worker.js',
    }),
    ```

  * Since we have already installed `workbox-webpack-plugin` as a dependency, that is all we need to do to get our service worker up and running.

* Navigate to `20-Stu_InjectManifest/Solved` and run `npm install` and `npm run start:dev`.

  * A log appears in the console indicating with a message similar to the following:

    ```text
    The service worker at sw.js will precache
    7 URLs, totaling 66.9 kB.
    ```

  * When we navigate to Chrome Dev Tools and click on Applications Tab and select Service Workers, we see our service worker is activated.

  * When we click on Cache Storage, we see that our files that have been injected into our existing service worker have been precached.

* Open `20-Stu_InjectManifest/Solved/client/dist/sw.js` in your IDE to demonstrate the following:

  * Except for the addition of the manifest, the existing service worker, as well as any custom configurations, are otherwise unchanged.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How does InjectManifest work differently than GenerateSW?

  * 🙋 GenerateSW offers only a limited number of options. With InjectManifest, we have a number of options to cache assets and can include our own custom scripts and service worker file. In addition, GenerateSW generates an entire service worker during the build process. InjectManifest, in contrast, injects a list of URLS to be cached into an existing service worker.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Workbox docs on InjectManifest](https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin) and attend Office Hours to ask for help.

* Answer any questions before proceeding.

### 10. FLEX (30 min)

* This time can be utilized for reviewing key topics learned so far in this module.

### 11. BREAK (30 min)

### 12. Instructor Do: Stoke Curiosity (10 min)

* Congratulate the class on learning how to implement new web technologies such as webpack and workbox. These tools can give our applications a performance boost and improve the user experience.

* Remind students that the React module is on the horizon and that much of what they've learned in this module can be applied to learning React.

* The rest of this class will be focused on making our application installable on users' devices!

* The web applications we create can be configured to act like a native application.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are some examples of native applications?

  * 🙋 Microsoft Word, Zoom . . . basically, any application that you need to install.

  * ☝️ What are some benefits of a native application?

  * 🙋 Native applications don't require an internet connection and desktop icon to work.

* We also will be taking a look at a new API called IndexedDB which will unlock a more advanced front-end data storage option.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How have we stored data on the front end in the past?

  * 🙋 Local storage!

* We will be able to run CRUD operations and process data much more efficiently with IndexedDB versus local storage.

* Answer any questions before proceeding to the next activity.

## 13. Instructor Demo: IndexedDB (5 min)

* Open `21-Ins_IndexedDB/assets/js/database.js` in your IDE and explain the following:

  * 🔑 We have to install the `idb` package as a regular dependency and import it into the `database.js` file.

    ```js
    import { openDB } from 'idb';
    ```

  * The `idb` package is a lightweight wrapper that takes care of some of the more messy parts of IndexedDB. The main reason we are using the `idb` package is that it allows us to take advantage of async/await.

  * We have created an asynchronous function called `initDB()`, which will immediately invoke the `OpenDB` method we imported earlier.

    ```js
    const initdb = async () =>
      openDB('demo-db', 1, {
    });
    ```

  * 🔑 The first argument is the name of the database we want, which is `demo-db`, followed by the version number.

  * The version number allows us to check if our user is using an old version of our schema. This will be our only schema, so we will not have to worry about changing versions.

  * A schema in IndexedDB is basically just a data store.

  * 🔑 Next, we set the correct schema using the `upgrade` method.

     ```js
      const initdb = async () =>
        openDB('demo-db', 1, {
          upgrade(db) {
          if (db.objectStoreNames.contains('demo-db')) {
            console.log('demo-db database already exists');
            return;
          }

          db.createObjectStore('demo-db', { keyPath: 'id', autoIncrement: true });
          console.log('demo-db database created');
        },
    });
    ```

  * 🔑 Check to see if the user already has the `demo-db` object. If not, create a new one called `demo-db` with the `createObjectStore()` method.

  * 🔑 We use the `keyPath` property to specify the name of the key field in the `demo-db` object and set it to auto-increment.

  * Finally, we call the `initDb()` function at the bottom of the `database.js` file.

    ```js
    initDb()
    ```

* Run `npm install` and `npm run start` and open up the `index.html` in the `dist` directory using Live Server.

* Navigate to the Application tab in Chrome DevTools and demonstrate the following:

  * 🔑 In the `IndexedDb` section, if we expand it, we can see the `demo-db` storage object.

  * 🔑 By clicking on the storage object, we can already see the id field even though we have zero records.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 By using the `OpenDB()` from the `idb` package.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `22-Stu_IndexedDB/README.md`.

### 14. Student Do: IndexedDB (15 min)

* Direct students to the activity instructions found in `22-Stu_IndexedDB/README.md`, which are also shown below.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📐 Add Comments to Implementation of IndexedDB

  Work with a partner to add comments that describe the functionality of the code found in the [database.js](./Unsolved/src/js/database.js) file.

  ## 📝 Notes

  This activity takes place in Chrome DevTools; we will hook up the UI in later activities.

  To launch the application and view the IndexedDB store in Chrome DevTools, follow these steps:

  1. In the command line, navigate to `22-Stu_IndexedDB/Unsolved`.

  2. Run `npm install`.

  3. To launch the application, run `npm run start`.

  4. Open the `index.html` file in the browser from the  `dist` directory.

  5. To view the IndexedDB store, visit the `Application` tab in Chrome DevTools.

  Refer to the documentation:

  * [NPM docs on IndexedDB](https://www.npmjs.com/package/idb)

  * [MDN Web Docs on the IndexedDB API](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)

  ---

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * How does an object store in IndexedDB compare to a table or collection in other databases?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 15. Instructor Review: IndexedDB (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with IndexedDB? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use Office Hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ Set up IndexedDB

  * ✔️ Create an object store

  * ✔️ Versions

* Open `22-Stu_IndexedDB/Solved/assets/js/database.js` in your IDE and explain the following:

  * We import in the `idb` package and create an asynchronous  `initDB()` function.

    ```js
    import { openDB } from 'idb';

    const initdb = async () =>
    ```

  * 🔑 The `idb` package allows us to make IndexedDB asynchronous and cleans up a lot of the messy syntax that IndexedDB has.

  * We call the `OpenDB()` method from the `idb` package.

    ```js
    const initdb = async () =>
    openDB('todos', 1, {
      upgrade(db) {
        if (db.objectStoreNames.contains('todos')) {
          console.log('todos database already exists');
          return;
        }

        db.createObjectStore('todos', { keyPath: 'id', autoIncrement: true });
        console.log('todos database created');
      },
    });
    ```

  * 🔑 For the `OpenDB()` method, we pass in the name of our database and the version we want to use.

  * 🔑 Next, we call the `upgrade()` function, which takes our database as an argument. Check to see if the object store already exists in the users' web browser.

  * 🔑 Finally, we create a new object store if one doesn't already exist. The object store will always have an `id keyPath` that auto-increments for us.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What does the `keyPath` do?

  * 🙋 It automatically creates a new key to identify data records that are stored in the database.

  * ☝️ On which tab in Chrome DevTools can we inspect our object store?

  * 🙋 The Application tab under `IndexedDB`.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API), and attend Office Hours to ask for help.

* Answer any questions before proceeding to the next activity.

## 16. Instructor Demo: IndexedDB CRUD (5 min)

* Open `23-Ins_IndexedDB-CRUD/assets/js/database.js` in your IDE and explain the following:

  * 🔑 To use the IndexedDB object store that we set up, we need to implement a CRUD operation.

  * We create and export an asynchronous function called `postDb()`.

    ```js
    export const postDb = async (content) => {
    };
    ```

  * The `postDb()` function will accept the `content` that we want to store in the database as an argument.

  * Next, we open a transaction with our database.

    ```js
    export const postDb = async (content) => {
      const todosDb = await openDB('todos', 1);

      const tx = todosDb.transaction('todos', 'readwrite');

      const store = tx.objectStore('todos');

      const request = store.add({ todo: content });

      const result = await request;
      console.log('🚀 - data saved to the database', result);
    };
    ```

  * 🔑 We store the connection to our database inside a variable called `todosDb`.

  * 🔑 Next, we create a new `transaction` that expects the database name and privileges. Because we are writing to the database, we need to set the privileges to `readwrite`.

  * 🔑 Create a variable that will hold a reference to the object store.

  * 🔑 Finally, we use the `add()` method that is attached to the object store and pass in the `contents`.

  * Once we have finished writing to the database, we expect a result to confirm the transaction.

  * Let's look at how we can retrieve all the data in the database.

    ```js
    // Export a function we will use to GET all from the database.
    export const getAllDb = async () => {
      // Create a connection to the database database and version we want to use.
      const todosDb = await openDB('todos', 1);

      // Create a new transaction and specify the database and data privileges.
      const tx = todosDb.transaction('todos', 'readonly');

      // Open up the desired object store.
      const store = tx.objectStore('todos');

      // Use the .getAll() method to get all data in the database.
      const request = store.getAll();

      // Get confirmation of the request.
      const result = await request;
      console.log('result.value', result);
      return result;
    };
    ```

  * 🔑 This is similar to earlier, but this time we are using `getAll()` on the object store.

  * Let's look at how we can retrieve a single record in the database.

    ```js
    export const getOneDb = async (id) => {
      console.log('GET from the database');

      // Create a connection to the database and version we want to use.
      const todosDb = await openDB('todos', 1);

      // Create a new transaction and specify the database and data privileges.
      const tx = todosDb.transaction('todos', 'readonly');

      // Open up the desired object store.
      const store = tx.objectStore('todos');

      // Use the .get() method to get a piece of data from the database based on the id.
      const request = store.get(id);

      // Get confirmation of the request.
      const result = await request;
      console.log('result.value', result);
      return result;
    };
    ```

  * 🔑 This is similar to what we did earlier, but this time we are using `get()` on the object store and pass in the `id`.

* Run `npm run dev` and open up the `localhost:8080` to demonstrate the following:

  * Add an item to the TODO list and open the Application tab in Chrome DevTools. Under the `IndexedDB` section, inspect the contents of the object store.

  * 🔑 We see that our data is now being stored and retrieved from the IndexedDB object store.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 We need to open a transaction with the desired object store, and use it to correct the method on our store.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `24-Stu_IndexedDB-CRUD/README.md`.

### 17. Student Do: IndexedDB CRUD (15 min)

* Direct students to the activity instructions found in `24-Stu_IndexedDB-CRUD/README.md`, which are also shown below.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🐛 The Delete Button Does Not Remove the List Item When Clicked

  Work with a partner to resolve the following issues:

  * As a user, I want to be able to delete a list item from a list when I click on the list item.

  * As a user, I want to be able to edit a list item when I click the Edit button.

  ## Expected Behavior

  When a user clicks on an item, it is removed from the list of tasks.

  When a user clicks on the Edit button, a text input is displayed with the list item to be edited. After pressing the Enter key, the list item is updated accordingly.

  ## Actual Behavior

  When a user clicks on the item, it is noy removed from the list of tasks.

  When a user clicks the Edit button, a text input does not appear with the list item to be edited. After pressing the Enter key, the list item is not updated properly.

  ## Steps to Reproduce the Problem

  To reproduce the problem, follow these steps:

  1. In the command line, navigate to `24-Stu_IndexedDB-CRUD/Unsolved`.

  2. Run `npm install`.

  3. To launch the application, run `npm run dev`.

  4. Navigate to `http://localhost:8080` in your browser.

  5. Create a new To Do item at the bottom of the page.

  6. Click on a list item to attempt to delete it.

  7. Click the Edit button to attempt to edit the list item.

  ## Assets

  The following image demonstrates the web application's appearance and functionality:

  ![Demo of the TODO list by adding, removing, and editing a list item.](./Assets/todo-list.gif)

  ---

  ## 💡 Hints

  What types of permissions do you need to alter data inside a database?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * How does the usage of CRUD operations with IndexedDB compare with their usage with SQL databases?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 18. Instructor Review: IndexedDB CRUD (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with CRUD in IndexedDB? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use Office Hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ IndexedDB CRUD

  * ✔️ `.delete()`

  * ✔️ `.put()`

* Open `24-Stu_IndexedDB-CRUD/Solved/assets/js/database.js` in your IDE and explain the following:

  * 🔑 Because we are altering a record in the database, we need to use `readwrite` privileges in our transaction.

    ```js
    export const deleteDb = async (id) => {
      console.log('DELETE from the database', id);
      const todosDb = await openDB('todos', 1);
      const tx = todosDb.transaction('todos', 'readwrite');
      const store = tx.objectStore('todos');
      const request = store.delete(id);
      const result = await request;
      console.log('result.value', result);
      return result;
    };
    ```

  * 🔑 We must use the `todos` database in the transaction for the proper data to be updated.

    ```js
    export const putDb = async (id, content) => {
      console.log('PUT to the database');
      const todosDb = await openDB('todos', 1);
      const tx = todosDb.transaction('todos', 'readwrite');
      const store = tx.objectStore('todos');
      const request = store.put({ id: id, todo: content });
      const result = await request;
      console.log('🚀 - data saved to the database', result);
    };
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is the name of the method to get all of the records in the database?

  * 🙋 `getAll()`

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API), and attend Office Hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 19. Instructor Demo: Manifest (5 min)

* Open `25-Ins_Manifest/manifest.json` in your IDE and explain the following:

  * 🔑 The `manifest.json` file is a JSON file that contains certain metadata about our web application that informs the user's browser or mobile device how to run the application.

  * 🔑 For our web application, we have to provide a `name` property inside the `manifest.json` file.

  * We can optionally provide a `short_name` for our web application.

    ```json
    "short_name": "Manifest",
    "name": "TODOs Manifest Example",
    ```

  * 🔑 Next, we provide our `icons` for all different types of screens.

    ```json
    "icons": [
      {
        "src": "./assets/images/icon_96x96.png",
        "type": "image/png",
        "sizes": "96x96",
        "purpose": "any maskable"
      },
      {
        "src": "./assets/images/icon_128x128.png",
        "type": "image/png",
        "sizes": "128x128",
        "purpose": "any maskable"
      },
      {
        "src": "./assets/images/icon_192x192.png",
        "type": "image/png",
        "sizes": "192x192",
        "purpose": "any maskable"
      },
      {
        "src": "./assets/images/icon_512x512.png",
        "type": "image/png",
        "sizes": "512x512",
        "purpose": "any maskable"
      }
    ],
    ```

  * 🔑 We have to provide an image that is 512px large so that our `manifest.json` file can create a loading screen for our application. We must have this icon for our app to be installable!

  * 🔑 The`orientation` allows us to define which angle our application is viewed in, while the  `display` property allows us to define preferred display mode.

    ```json
    "orientation": "portrait",
    "display": "standalone",
    ```

  * 🔑 Next, we define where we want our applications starting URL.

    ```json
    "start_url": "./",
    ```

  * 🔑 Finally, we give our application a description and some styling for the boarders of our application.

    ```json
    "description": "Keep track of important tasks!",
    "background_color": "#7eb4e2",
    "theme_color": "#7eb4e2"
    ```

* Open `25-Ins_Manifest/assets/js/install.js` in your IDE and explain the following:

  * 🔑 When we launch the application in our browser and our app is installable, we will see an install button inside of the address bar.

  * 🔑 We also can create our own install button, using the following:

    ```js
    const installBtn = document.getElementById('installBtn');
    const textHeader = document.getElementById('textHeader');

    window.addEventListener('beforeinstallprompt', (event) => {
      event.preventDefault();
      installBtn.style.visibility = 'visible';
      textHeader.textContent = 'Click the button to install!';

      installBtn.addEventListener('click', () => {
        event.prompt();
        installBtn.setAttribute('disabled', true);
        installBtn.textContent = 'Installed!';
      });
    });

    window.addEventListener('appinstalled', (event) => {
      textHeader.textContent = 'Successfully installed!';
      console.log('👍', 'appinstalled', event);
    });
    ```

* Open `25-Ins_Manifest/service-worker.js` in your IDE and explain the following:

  * 🔑 For the `manifest.json` file to work, we need to have, at the minimum, a service worker that registers, has scope, and has a fetch method in place.

    ```js
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function() {
        navigator.serviceWorker.register('./service-worker.js').then(function(registration) {
          // Registration was successful
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err) {
          // registration failed :(
          console.log('ServiceWorker registration failed: ', err);
        });
      });
    }

    this.addEventListener('fetch', function (event) {
      // This fetch function is required for the SW to be detected and is intentionally empty
      // For a more robust, real-world SW example see: https://developers.google.com/web/fundamentals/primers/service-workers
    });
    ```

* Open `25-Ins_Manifest/index.html` in your IDE and explain the following:

  * 🔑 For the `manifest.json` file to work, we also need to import it into our `index.html` file.

    ```html
    <link rel="manifest" href="./manifest.json">
    ```

* Open `25-Ins_Manifest/index.html` with Live Server and demonstrate the following:

  * Click the button that states "Click Me to Install!" on the webpage.

* Navigate to your computer's Launchpad (Mac) or Desktop (Windows) to demonstrate the following:

  * The app is installed and the icon appears.

  * When we click on the icon, the app launches.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What file do we need to create an installable PWA?

  * 🙋 A `manifest.json` file!

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `26-Stu_Manifest/README.md`.

### 20. Student Do: Manifest (15 min)

* Direct students to the activity instructions found in `26-Stu_Manifest/README.md`, which are also shown below.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📖 Implement a Manifest.json File with Webpack

  Work with a partner to implement the following user story:

  * As a developer, I want to be able to automatically generate a `manifest.json` file inside `dist` when I run my application.

  ## Acceptance Criteria

  * It is done when I can install my application as a Progressive Web App.

  * It is done when I can see my `manifest.json` file generated inside Chrome DevTools.

  ## 📝 Notes

  Refer to the documentation:

  [Webpack PWA Manifest plugin documentation.](https://www.npmjs.com/package/webpack-pwa-manifest)

  ---

  ## 💡 Hints

  How could our JSON be represented in a JavaScript object?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What is each key in a `manifest.json` file responsible for?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 21. Instructor Review: Manifest (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with `manifest.json`? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use Office Hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `manifest.json`

  * ✔️ Installable web applications

  * ✔️ `manifest.json` properties

* Open `26-Stu_Manifest/Solved/webpack.config.js` in your IDE and explain the following:

  * 🔑 Install the webpack plugin `webpack-pwa-manifest`.

    ```bash
    npm install --save-dev webpack-pwa-manifest
    ```

  * Import the `webpack-pwa-manifest` package into your `webpack.config.js` file.

    ```js
    const WebpackPwaManifest = require('webpack-pwa-manifest');
    ```

  * 🔑 Under the `plugins` property, declare a new plugin using `WebpackPwaManifest`.

    ```js
    plugins: [
        new HtmlWebpackPlugin({
          template: './index.html',
        }),

        new GenerateSW(),
        new WebpackPwaManifest({ }),

      ],
    ```

  * 🔑 Fill out the JavaScript object with the properties that we saw inside the `manifest.json` file earlier.

    ```js
    plugins: [
        new HtmlWebpackPlugin({
          template: './index.html',
        }),

        new GenerateSW(),
        new WebpackPwaManifest({
          name: 'TODOs',
          short_name: 'TODOs',
          description: 'Keep track of important tasks!',
          background_color: '#7eb4e2',
          theme_color: '#7eb4e2',
          start_url: './',
          publicPath: './',
          icons: [
            {
              src: path.resolve('assets/images/logo.png'),
              sizes: [96, 128, 192, 256, 384, 512],
              destination: path.join('assets', 'icons'),
            },
          ],
         }),

      ],
    ```

* 🔑 You can see most of the JSON coordinates to a key in the JavaScript object, but we have two properties that look different.

* 🔑 The `publicPath` tells webpack where to serve the bundled.

* 🔑 The `icons` now generate the properly sized icons for us based on one provided image.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is the name of the webpack plugin that we use to generate a `manifest.json` file?

  * 🙋 `webpack-pwa-manifest`

  * ☝️ Do we need a service worker for us to use a `manifest.json` file?

  * 🙋 Yes!

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on manifest.json](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json), and attend Office Hours to ask for help.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `27-Evr_Git-Hooks/README.md`.

## 22. Everyone Do: Git (20 min)

* Open the [Git Docs on Git hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) in your browser and explain the following:

  * When working with a team, we often have a certain set of practices that we want everyone to follow when using a repository. Git hooks provide a convenient way to execute custom scripts when a certain action is performed in order to remind the team of the established rules.

  * For example, if we want to add a reminder to our teammates about the way the commit message should be styled, we can set up a Git hook to listen for a commit event and then execute a script to send an automated reminder.

  * Each Git hook is local to a single repository, and we must install the hook in each repository where we want the script to execute.

  * To install a Git hook, we either start with a pre-written sample hook provided by Git or write a custom hook on our own.

* Direct students to the activity instructions found in `27-Evr_Git-Hooks/README.md`.

* While everyone is working on the activity, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be addressed. It's a good way for your team to prioritize students who need extra help.

* Open the command line and demonstrate the following:

  * 🔑 We initialize a new repository and enter `ls .git/hooks` to see a list of pre-written sample hooks that Git provides with each new repository.

    ```bash
    mkdir hook-test
    cd hook-test
    git init
    ls .git/hooks
    ```

  * Let's explore one of these hooks. We enter `code .git/hooks/pre-commit.sample` to open the `pre-commit` hook in VS Code.

  * 🔑 We see that Git hooks are written as shell hooks, and this hook is executed before a commit is made to check if files that use non-ASCII names are being used. To apply this hook to our repository, we simply rename it and remove the `.sample` extension.

    ```bash
    mv .git/hooks/pre-commit.sample .git/hooks/pre-commit
    ```

  * 🔑 We can also write our own custom hooks. To start, we add a new file in the `hooks` directory to hold our custom hook and set the permissions to execute.

    ```bash
    touch .git/hooks/post-checkout
    chmod +x .git/hooks/post-checkout
    code .git/hooks/post-checkout
    ```

  * We then add the shell script logic to set a safe list of issue/feature names, get the current branch, and check if the name matches a name in the safe list.

    ```bash
    #!/bin/sh
    safelist=("main", "develop", "staging")
    branch=$(git branch --show-current)
    if [[ ! ${safelist[*]} =~ "$branch" ]] && [[ ! "$branch" =~ ^(issue/|feature/).* ]]
    then
      echo "Warning!"
      echo 'If feature or issue branch, please use "issue/" or "feature/" prefix.'
    fi
    ```

  * We can now use our new Git hook to set a reminder to use the team's naming convention within the repository.

* Answer any questions before ending the class.

### 23. END (0 min)

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this [anonymous survey](https://forms.gle/RfcVyXiMmZQut6aJ6).

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
