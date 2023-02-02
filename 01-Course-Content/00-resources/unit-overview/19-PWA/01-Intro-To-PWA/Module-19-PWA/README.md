# Module 19: Progressive Web Applications (PWA)
In this module, you'll learn about progressive web apps (PWA), which blend the benefits of a traditional browser experience with those of a mobile application. PWAs use the Service Worker and Cache APIs to cache assets and API responses, ensuring that the application will continue to work without an internet connection.

Many of the tools and technologies used to create PWAs can be leveraged to help improve application performance and accessibility. For example, service workers can be used to cache static CSS, JavaScript, HTML files, images, and even API requests—allowing developers to reduce network bandwidth and improve overall load times.

You've learned previously that JavaScript runs on a single thread, which developers need to consider regarding performance. The good news is that **service workers** run on a completely different thread!

To unlock the power of service workers, you'll use webpack and Workbox. Workbox is a Google library that makes it much easier to set up a service worker. And by using webpack, you can deliver applications with optimized code, called **bundles**. Webpack also allows you to implement CSS loaders to make your CSS files more modular.

You'll also implement Babel, a transpiler that allows you to use ES6 syntax in the browser. Finally, you'll learn how to use webpack plugins.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.