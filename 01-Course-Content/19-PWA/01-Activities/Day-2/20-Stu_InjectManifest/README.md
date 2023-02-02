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

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
