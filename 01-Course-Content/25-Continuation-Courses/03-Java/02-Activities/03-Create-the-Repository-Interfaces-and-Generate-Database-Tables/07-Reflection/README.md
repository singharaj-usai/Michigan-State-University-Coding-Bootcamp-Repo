# Reflection

We wrote a lot of code before we reached the testing stage, but that's the nature of a high-ceremony language like Java. Although it requires investing a lot of up-front work and writing a lot of extra code to achieve functionality, the result is a robust and powerful foundation. At this point, we've created a working Java API, connected it to the database, and even had it configure said database.

In this lesson, you've completed the following tasks:

* Created Java repository interfaces for the database entity models.

* Configured the data source, Spring Session, and port number to connect to external sources and allow for greater API functionality.

* Started up the API.

* Created database tables based on the Java entity model objects by using the Spring Data JPA.

Moving forward, we'll create the server-side CRUD controllers, which will be responsible for processing requests and responses for the application—equivalent to routes in Express.js. We're making fantastic progress!

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.