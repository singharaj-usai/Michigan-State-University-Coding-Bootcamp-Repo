# Set Up a Database Connection in the Flask App

So far, you've created a `db` package that connected to a MySQL database, but a `seeds.py` script tested it independently from the Flask app. A bit more setup is required to prepare it for Flask.

First, switch to a new branch called `feature/homepage` (using the `git checkout` command).

In `app/db/__init__.py`, add the following function at the end of the file:

```python
def init_db():
  Base.metadata.create_all(engine)
```

We're using the same `Base.metadata.create_all()` method from the `seeds.py` file, but we won't call it until after we've called `init_db()`. So when would be a good time to call `init_db()`? When the Flask app is ready!

To that end, open `app/__init__.py` and add the following `import` statement:

```python
from app.db import init_db
```

In the `create_app()` function, before the final `return` statement, add the following line:

```python
init_db()
```

## Start the Virtual Environment and Activate the Flask Server

Make sure to start the virtual environment by running the `activate` script. Once the virtual environment activates, run the following command from the project root:

```console
python -m flask run
```

```console
2020-08-11 14:43:19,435 INFO sqlalchemy.engine.base.Engine {}
```

This note confirms that the `Base` class has connected to the database. However, you won't see any `CREATE TABLE` or similar commands, because the app doesn't yet reference the models. You'll add those references soon. But first you need to finish prepping the `db` package.

In `db/__init__.py`, add the following function:

```python
def get_db():
  return Session()
```

Whenever this function is called, it returns a new session-connection object. Other modules in the app can import `Session` directly from the `db` package, but using a function means that we can perform additional logic before creating the database connection.

For instance, if `get_db()` is called twice in the same route, we won't want to create a second connection. Rather, it will make more sense to return the existing connection. But how will we know if a connection has already been created per route?

## Implement Application Context in Flask

This is where the Flask **application context** helps. Flask creates a new context every time a server request is made. When the request ends, the context is removed from the app. These temporary contexts provide global variables, like the `g` object, that can be shared across modules as long as the context is still active.

For more information, refer to the [Flask documentation on the application context](https://flask.palletsprojects.com/en/1.1.x/appcontext/).

To implement this, you need to import the `g` object into the `db/__init__.py` script, as follows:

```python
from flask import g
```

Then update the `get_db()` function as follows:

```python
def get_db():
  if 'db' not in g:
    # store db connection in app context
    g.db = Session()

  return g.db
```

The `get_db()` function now saves the current connection on the `g` object, if it's not already there. Then it returns the connection from the `g` object instead of creating a new `Session` instance each time.

This will pay off once we start using these connections in the routes. Up next: we'll revisit the routes in `home.py`!

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
