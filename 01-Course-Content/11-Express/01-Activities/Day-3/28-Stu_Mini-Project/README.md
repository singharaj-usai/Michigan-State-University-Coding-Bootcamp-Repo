# 🏗️ Module 11 Mini-Project: Add Routes to Existing Application

In this mini-project, you will work with a group to add routes to an existing application. You will create one wildcard route for serving up a 404 page, as well as a diagnostics route for logging failed form validation.

* As a developer, I want to be able to add routes to an existing application.

* As a developer, I want to serve up a custom 404 page when the requested resource doesn't exist.

* As a developer, I want to log usage statistics from users of my site.

* As a developer, I want to be able to deploy my apps to Heroku.

## Acceptance Criteria

* It's done when I have created a wildcard route in `server.js` that will send the users to a 404 page.

* It's done when I have created a custom `404.html` page for my wildcard route to serve. 

* It's done when I have created a POST route for `/api/diagnostics` that will store information about the invalid form submissions.

* It's done when I have created a GET route for `/api/diagnostics` that will return the content of `db/diagnostics/json`.

* It's done when I have created a `fetch()` request on the front end that will send a POST request to `/api/diagnostics` every time a user attempts to submit an invalid form.

* It's done when I have tested my `/api/diagnostics` endpoint using Insomnia.

* It's done when I have tested the wildcard route by visiting any non-existent path, like `http://localhost/test`.

* It's done when I have deployed the finished application to Heroku.

---

## 💡 Hints

How can we declare a wildcard route in Express.js?

How will `fs.writeFile()` help us log usage stats?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* How else could we implement statistics logging without making a request from the front end?

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
