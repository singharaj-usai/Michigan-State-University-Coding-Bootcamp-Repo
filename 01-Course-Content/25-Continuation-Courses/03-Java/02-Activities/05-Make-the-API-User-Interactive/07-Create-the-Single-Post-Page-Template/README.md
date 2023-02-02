# Create the Single-Post Page Template

The next step is to create the `single-post.html` file directly within your `templates/` directory, shown in the following example:

```html
<!DOCTYPE html>
<html lang="en" xmlns:th="http://www.thymeleaf.org"
      xmlns:layout="http://www.ultraq.net.nz/thymeleaf/layout"
      layout:decorate="~{layout}">
<head>
  <title>Single-post</title>
</head>

<body>

<div layout:fragment="content">

  <div th:if="${notice}" class="flash-message">
    <h3>[[${notice}]]</h3>
  </div>

  <div th:insert="fragments/post-fragment :: post-fragment"></div>


  <form th:if="${loggedIn}" action="#" th:action="@{/comments}" th:object="${comment}" method="post" class="comment-form">
    <div>
      <input type="hidden" th:value="${post.id}" name="postId"/>
      <textarea name="comment-body" th:field="*{commentText}"></textarea>
    </div>

    <div>
      <button type="submit">add comment</button>
      <button type="button" class="upvote-btn">upvote</button>
    </div>
  </form>

  <div class="comments">
    <div th:insert="fragments/comment-fragment :: comment-fragment"></div>
  </div>
  <div th:if="${loggedIn}">
    <script src="/js/upvote.js"></script>
  </div>

</div>

</body>
</html>
```

We've discussed the structure and Thymeleaf attributes in the preceding code block, except for one new addition. The `<div>` at the bottom of the page includes a conditional to check whether the user is logged in (`th:if="${loggedIn}"`).

If the user is logged in, the JavaScript `<script>` element will be added, including some functionality that wouldn't exist had the conditional not been met. We'll discuss this in more detail later, when we incorporate Spring Session JPA functionality into the API.

Push all of your work to GitHub using the following Git workflow:

```console
git add .
git commit -m "message"
git push origin main
```

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.