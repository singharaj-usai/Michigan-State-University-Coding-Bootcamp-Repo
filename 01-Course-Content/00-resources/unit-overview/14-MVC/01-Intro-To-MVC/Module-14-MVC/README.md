# Module 14: Model-View-Controller (MVC)
In this module we'll modularize applications following the **Model-View-Controller (MVC)** paradigm. MVC is an architectural pattern that structures a codebase in three distinct sections, according to a software design philosophy known as the **separation of concerns.**

Rather than hardcode the HTML for many, many pages, we can dynamically generate the HTML using a template engine. In implementing a template engine, we are separating the concern of client-side rendering from other aspects of the application. This is the View layer in the MVC framework. The template engine we will learn and implement in this module is Handlebars.js.

The **Model** is the data layer of the application. It is concerned with the structure of the database and the logic used to retrieve that data. We'll implement Sequelize as the ORM for querying the database.

Last but not least is the **Controller**. Think of it as the intermediary between the View and the Model. The Controller handles input from the user, interacts with the Model to create, read, update, or delete data, and then returns the results of that query to the user via the View layer. We are already familiar with these operations in Express.js apps, but now we'll separate the client-side and server-side routes from each other.

Also in this module, we'll cover user authentication. We'll build on the password hashing we learned in the previous module and learn to authenticate application users by verifying their credentials. We'll then use sessions and cookies to keep users logged in and authorized to view the content of the app.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.