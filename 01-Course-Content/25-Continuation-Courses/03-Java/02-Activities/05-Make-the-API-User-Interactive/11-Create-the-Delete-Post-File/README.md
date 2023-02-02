# Create the Delete Post File

Finally, you'll create one more JavaScript file inside the `static/js` folder. In the `js` folder, create a new file named `delete-post.js`. Copy and paste the following code into your newly created `delete-post.js` file:

```js
async function deleteFormHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  const response = await fetch(`/api/posts/${id}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    document.location.replace('/dashboard/')
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);
```

Here's another instance in the API where we'll use JavaScript to capture data from the user and make a call, passing that data to one of the API endpoints. The `edit-post.html` page allows users to click a button to delete a post. The post that will be deleted is determined by the `postId`. When a user clicks the Delete Post button, the `delete-post.js` file will be called to facilitate the deletion of the `Post` object from the corresponding table in the database. This works a lot like the code we used in the `upvote-post.js` file.

Now be sure to push all of your work to GitHub using the following Git workflow:

```console
git add .
git commit -m "message"
git push origin main
```

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.