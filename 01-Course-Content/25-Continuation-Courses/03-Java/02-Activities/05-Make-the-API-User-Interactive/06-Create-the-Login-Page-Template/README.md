# Create the Login Page Template

On the left-hand file navigation menu of IntelliJ, create a new HTML file called `login.html`, in the `templates` folder. Inside this newly created file, copy and paste the following code:

```html
<!DOCTYPE html>
<html lang="en" xmlns:th="http://www.thymeleaf.org"
      xmlns:layout="http://www.ultraq.net.nz/thymeleaf/layout"
      layout:decorate="~{layout}">
<head>
  <title>Login</title>
</head>

<body>

<div layout:fragment="content">

  <div th:if="${notice}" class="flash-message">
    <h3>[[${notice}]]</h3>
  </div>

  <form action="#" th:action="@{/users/login}" th:object="${user}" method="post" class="login-form">
    <div>
      <label>email:</label>
      <input type="text" th:field="*{email}"/>
    </div>
    <div>
      <label>password:</label>
      <input type="password" th:field="*{password}"/>
    </div>
    <div>
      <button type="submit">login</button>
    </div>
  </form>



  <form action="#" th:action="@{/users}" th:object="${user}" method="post" class="signup-form">
    <div>
      <label>username:</label>
      <input type="text" th:field="*{username}"/>
    </div>
    <div>
      <label>email:</label>
      <input type="text" th:field="*{email}"/>
    </div>
    <div>
      <label>password:</label>
      <input type="password" th:field="*{password}"/>
    </div>
    <div>
      <button type="submit">signup</button>
    </div>
  </form>
</div>

</body>
</html>
```

The structure of this HTML file closely resembles the homepage file. Let's review the following pieces:

* Just like `homepage.html`, we have a reference to `layout:decorate` and then a `<div>` element with a `content` attribute designation as well. Remember, the Thymeleaf attribute `layout:decorate="~{layout}"` specifies that this `login.html` page will be bound to the `layout.html` main template page. The `layout:fragment="content"` attribute defines which content we want to place in the content `<div>` of the layout page.

* In the `<form>` element, we provide a few Thymeleaf attributes. The `th:action="@{/users}"` attribute designates the API route for submitting this form; `th:object="${user}"` designates that the submitted form fields will comprise a `user` object; and lastly, the `method` attribute designates it as a `POST` request.

* The forms include three input fields, where we designate the `type` as either `text` or `password` and then give a name to the field, via `th:field`.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.