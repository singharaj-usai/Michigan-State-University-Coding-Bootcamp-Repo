# Preview

The goal for this lesson is to create HTML templates that will make the Just Tech News API not just functional but interactive. We'll use the Thymeleaf template engine for this purpose, along with the Thymeleaf Layout Dialect. This means that we'll create one main layout page, and then all additional templates and template-fragments will be displayed within the body of that main layout template—just like Handlebars.js!

Thymeleaf will allow us to receive and send Java objects so that we can directly make calls from within the template page to select endpoints, without incorporating asynchronous JavaScript function calls. However, we WILL use those JavaScript functions on some occasions, because as an HTML-based template engine, Thymeleaf only includes options for GET and POST requests. So when we need to send PUT or DELETE requests, we'll rely on those async JavaScript functions that we've used before.

See the following steps for an overview of the game plan for this lesson:

1. Create the main layout template.

2. Create the homepage template.

3. Create the post and comment template fragments.

4. Create the login page template.

5. Create the single-post page template.

6. Create the upvote file.

7. Create the edit post file.

8. Create the delete post file.

Now let's get into it and create the main template page with Thymeleaf!

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.