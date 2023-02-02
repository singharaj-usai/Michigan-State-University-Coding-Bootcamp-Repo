# Create APIs to Add, Update, and Delete Posts

In the dashboard interface, users will be able to perform the following operations:

* Create a post.

* Update a post.

* Delete a post.

## Add a Route for Creating Posts

Let's start with the route for creating new posts—a process that closely follows the one that we created for new comments and upvotes.

In the `api.py` file, add the following route:

```python
@bp.route('/posts', methods=['POST'])
def create():
  data = request.get_json()
  db = get_db()

  try:
    # create a new post
    newPost = Post(
      title = data['title'],
      post_url = data['post_url'],
      user_id = session.get('user_id')
    )

    db.add(newPost)
    db.commit()
  except:
    print(sys.exc_info()[0])

    db.rollback()
    return jsonify(message = 'Post failed'), 500

  return jsonify(id = newPost.id)
```

You can test the "Create New Post" form in the `/dashboard` view if you want, but keep in mind that the new post won't appear in the dashboard, because the template isn't receiving data yet. For now, the newly created post will appear only on the homepage.

## Add the Route for Updating Posts

Next, let's create the API route that will update the details of a post. Updating differs from creating a new post, of course, so we'll step through this a bit more slowly.

First, use the following code to set up the PUT route in the `api.py` module:

```python
@bp.route('/posts/<id>', methods=['PUT'])
def update(id):
  data = request.get_json()
  db = get_db()
```

You'll use an `<id>` route parameter again and capture the parameter in the `update()` function. You'll use that `id` to perform the update. However, when you make updates, SQLAlchemy requires you to query the database for the corresponding record, update the record like you'd update a normal object, and then recommit it.

The following code shows the process:

```python
post = db.query(Post).filter(Post.id == id).one()
  post.title = data['title']
  db.commit()
```

>Rewind
>
>The `data` variable is a dictionary—hence, the bracket notation of `data['title']`. The `post` variable, contrastingly, is an object created from the `User` class—so it uses dot notation.

Add the missing functionality in the `update()` function so that the entire route looks like the following code:

```python
@bp.route('/posts/<id>', methods=['PUT'])
def update(id):
  data = request.get_json()
  db = get_db()

  try:
    # retrieve post and update title property
    post = db.query(Post).filter(Post.id == id).one()
    post.title = data['title']
    db.commit()
  except:
    print(sys.exc_info()[0])

    db.rollback()
    return jsonify(message = 'Post not found'), 404

  return '', 204
```

## Add the Route for Deleting Posts

We need the last API route for deleting posts. Like updating, deleting in SQLAlchemy requires us to first query for the corresponding record. We then pass the returned object to a `db.delete()` method before committing the change.

With that in mind, add the following code in `api.py` to fulfill the DELETE route:

```python
@bp.route('/posts/<id>', methods=['DELETE'])
def delete(id):
  db = get_db()

  try:
    # delete post from db
    db.delete(db.query(Post).filter(Post.id == id).one())
    db.commit()
  except:
    print(sys.exc_info()[0])

    db.rollback()
    return jsonify(message = 'Post not found'), 404

  return '', 204
```

You won't be able to test updating or deleting posts on the front end, because the dashboard templates are missing those datasets. In the next section, you'll revisit and finalize those pages.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
