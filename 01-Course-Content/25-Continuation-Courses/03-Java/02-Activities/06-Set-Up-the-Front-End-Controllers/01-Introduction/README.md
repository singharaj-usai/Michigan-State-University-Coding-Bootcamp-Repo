# Introduction

Nice job creating Thymeleaf templates and adding interactivity to your working API! Now you need to manage the front-end template flow in the application—which pages are displayed, which data is passed and received from those template pages, and which back-end processing will occur to support the transactions that are triggered by the user.

We'll create two additional controllers that will manage all of that. When we created controllers previously, we used annotations to designate them as `@RestControllers`. This time we'll use the `@Controllers` annotation, because the new controllers will manage flow rather than CRUD operations.

In this lesson, you'll learn how to do the following:

* Manage front-end flow by using the `@Controller` annotation.

* Track the logged-in status of the user.

* Manage the back-end processing of the API.

* Implement flow management controller calls to the CRUD service endpoints within the API.

* Facilitate the direct interaction of the database and the data.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.