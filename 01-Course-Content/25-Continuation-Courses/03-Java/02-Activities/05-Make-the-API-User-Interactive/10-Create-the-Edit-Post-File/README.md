# Create the Edit Post File

We're getting close to done with this stage of the API build! Let's move on and create a file inside the `templates` folder called `edit-post.html`. Copy and paste the following HTML into this newly created file:

```html
<!DOCTYPE html>
<html lang="en" xmlns:th="http://www.thymeleaf.org"
      xmlns:layout="http://www.ultraq.net.nz/thymeleaf/layout"
      layout:decorate="~{layout}">
<head>
    <title>Edit Post</title>
</head>

<body>

<div layout:fragment="content">

  <div th:if="${notice}" class="flash-message">
      <h3>[[${notice}]]</h3>
  </div>

  <a th:href="@{/dashboard}"> &larr; Back to dashboard</a>
  <h2>
    Edit Post
  </h2>

  <form action="#" th:action="@{/posts/{id}(id=${post.id})}" th:object="${post}" method="post" class="edit-post-form">
    <div>
      <input type="text" th:field="*{title}"/>
      <span th:text="${#strings.replace(post.postUrl,'http://','')}"></span>
    </div>
    <div th:if="${post.voteCount == 1}" class="meta">
      [[${post.voteCount}]] point by [[${post.userName}]] on
      <span th:text="${#dates.format(post.postedAt, 'MM-dd-YY')}"></span>
      |
      <a th:href="@{/post/{id}(id=${post.id})}" th:if="${post.comments.size() == 1}">[[${post.comments.size()}]] comment</a>
      <a th:href="@{/post/{id}(id=${post.id})}" th:unless="${post.comments.size() == 1}">[[${post.comments.size()}]] comments</a>
    </div>
    <div th:unless="${post.voteCount == 1}" class="meta">
      [[${post.voteCount}]] points by [[${post.userName}]] on
      <span th:text="${#dates.format(post.postedAt, 'MM-dd-YY')}"></span>
      |
      <a th:href="@{/post/{id}(id=${post.id})}" th:if="${post.comments.size() == 1}">[[${post.comments.size()}]] comment</a>
      <a th:href="@{/post/{id}(id=${post.id})}" th:unless="${post.comments.size() == 1}">[[${post.comments.size()}]] comments</a>
    </div>
    <button type="submit">Edit post title</button>
    <button type="button" class="delete-post-btn">Delete post</button>
  </form>


  <form action="#" th:action="@{/comments/edit}" th:object="${comment}" method="post" class="comment-form">
    <div>
      <input type="hidden" th:value="${post.id}" name="postId"/>
      <textarea name="comment-body" th:field="*{commentText}"></textarea>
    </div>

    <div>
      <button type="submit">add comment</button>
    </div>
  </form>

  <div class="comments">
    <div th:insert="fragments/comment-fragment :: comment-fragment"></div>
  </div>

  <div th:if="${loggedIn}">
    <script src="/js/delete-post.js"></script>
  </div>
</div>


</body>
</html>
```

This code might appear complex—but once again, the Thymeleaf constraints contained within it should be familiar to you.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.