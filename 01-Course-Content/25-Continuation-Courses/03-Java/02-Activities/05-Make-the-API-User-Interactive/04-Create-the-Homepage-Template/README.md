# Create the Homepage Template

The homepage template will be the first we create that will be displayed within the `layout.html` file. To start building it, right-click the `templates` folder on the left-hand file system navigation. Select New, then select "HTML file", and name it `homepage.html`. Copy and paste the following code into your newly created `homepage.html` file:

```html
<!DOCTYPE html>
<html lang="en" xmlns:th="http://www.thymeleaf.org" xmlns:layout="http://www.ultraq.net.nz/thymeleaf/layout" layout:decorate="~{layout}">
<head>
  <title>Homepage</title>
</head>

<body>

  <div layout:fragment="content">
    <ol>
      <li th:each="post : ${postList}" class="post-list">
        <div th:insert="fragments/post-fragment :: post-fragment"></div>
      </li>
    </ol>
  </div>

</body>
</html>
```

Let's review the various pieces of the preceding code block:

* The last attribute definition in the `<html>` element, `layout:decorate="~{layout}`, designates that the homepage HTML file will be bound to `layout.html`.

* Next, in the `<div>` element, `layout:fragment="content`" defines which specific content from the `homepage.html` page will be displayed on `layout.html`. We'll use this content section in all of the template pages to be displayed in the `layout.html` page.

* Inside `<li>`, in the `<ol>` element, you'll see a Thymeleaf `for` loop. This states that Thymeleaf should iterate over each `post` inside of ${postList}, creating a list item (`<li>`) for each iteration and giving them all a class of `post-list`.

* The next line will make a bit more sense in the next section, but we've coded it ahead of time to save some effort. It designates where we'd import a **fragment**, a repeatable piece of code in Thymeleaf that can be used across templates.

You'll tackle your first Thymeleaf fragments in a moment—after you push your work to GitHub, using the following Git workflow:

```console
git add .
git commit -m "message"
git push origin main
```

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.