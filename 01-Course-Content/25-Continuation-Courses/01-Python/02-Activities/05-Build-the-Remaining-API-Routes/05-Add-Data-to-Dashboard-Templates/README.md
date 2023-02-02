# Add Data to Dashboard Templates

Earlier in the project, you created a `dashboard.py` module that defined routes for `/dashboard` and `/dashboard/edit/<id>`. Both routes rendered a template, as the following code demonstrates:

```python
return render_template('dashboard.html')
```

However, these templates are intended to receive data. Compare the `dashboard.py` file to the `home.py` file. What objects, classes, and functions does `home.py` require to complete the templates? You need to use those same tools to complete the dashboard.

At the beginning of `dashboard.py`, update the `import` statements as follows:

```python
from flask import Blueprint, render_template, session
from app.models import Post
from app.db import get_db
```

In the `dash()` route, add the following code to connect to the database and query it:

```python
db = get_db()
posts = (
  db.query(Post)
  .filter(Post.user_id == session.get('user_id'))
  .order_by(Post.created_at.desc())
  .all()
)
```

This lengthy query is more readable when broken up into multiple lines, but to do so, we have to wrap the query in parentheses. Remember that Python cares about spacing. Without the parentheses, this would throw an indentation error.

## Update the Return Statement

In the same route function, update the `return` statement to pass the `posts` and `session` data, as the following code demonstrates:

```python
return render_template(
  'dashboard.html',
  posts=posts,
  loggedIn=session.get('loggedIn')
)
```

## Test Your Work in the Browser

Restart the Flask app and test the dashboard page in the browser. As long as you're logged in, the "Create New Post" form will work, and the new posts will appear under the form. The following image demonstrates what you should see:

![](../Images/300-dashboard-preview.png)

`The dashboard page displays a form for creating a new post followed by a list of the user's existing posts.`

## Update the Edit Route

Next, you need to update the `edit()` route in `dashboard.py` to follow a similar pattern. The route function should now look like the following code:

```python
@bp.route('/edit/<id>')
def edit(id):
  # get single post by id
  db = get_db()
  post = db.query(Post).filter(Post.id == id).one()

  # render edit page
  return render_template(
    'edit-post.html',
    post=post,
    loggedIn=session.get('loggedIn')
  )
```

## Test Your Work in the Browser

Restart the Flask app, then test the functionality in the browser. On the dashboard page, you can click an "Edit post" link, which routes you to a new page that looks like the following image:

![](../Images/400-edit-post.png)

`The edit post page displays a form for editing the title or leaving a comment.`

On this page, you can change the title and then click either "save post" to save your changes or "delete post" to remove the article from the database. Both actions should work—thanks to the API endpoints that you set up earlier.

We have now finished the dashboard views. However, these routes assume that someone is logged in. If a user isn't logged in, accessing these pages or API endpoints will cause errors. In the next section, we'll add some logic to restrict their access.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
