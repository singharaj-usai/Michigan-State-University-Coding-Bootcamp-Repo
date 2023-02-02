# Create the Dashboard View Routes

The process for setting up the dashboard routes resembles that of setting up the homepage routes.

## Create the Dashboard Module

In the `routes` directory, create a `dashboard.py` file. In `dashboard.py`, add the following code:

```python
from flask import Blueprint, render_template

bp = Blueprint('dashboard', __name__, url_prefix='/dashboard')

@bp.route('/')
def dash():
  return render_template('dashboard.html')

@bp.route('/edit/<id>')
def edit(id):
  return render_template('edit-post.html')
```

This time, using the `url_prefix` argument, we prefix every route in the blueprint with `/dashboard`. The routes thus become `/dashboard` and `/dashboard/edit/<id>` when registered with the app.

Like `home.py`, this `dashboard.py` file is a module. Every variable or function belongs to the module and can be imported elsewhere.

> Rewind
>
> The ability to import every variable or function in a module contrasts with Node.js, which requires you to explicitly declare the properties you want to expose. Given the following code example, you can import only the `bp` object into other modules (the `hello()` function remains private):

```python
const bp = {};

const hello = () => {
 return 'hello world';
};

module.exports = { bp };
```

In `routes/__init__.py`, add the following `import` statement:

```python
from .dashboard import bp as dashboard
```

In `app/__init__.py`, update the `import` statement to include `dashboard`, as the following code shows:

```python
from app.routes import home, dashboard
```

Then register the dashboard routes alongside the homepage routes, as the following code shows:

```python
app.register_blueprint(home)
app.register_blueprint(dashboard)
```

## Test the Route

Restart the Flask server, then navigate to http://127.0.0.1:5000/dashboard. Something like the following image should appear:

![](../Images/300-dashboard-preview.png)

`The dashboard displays a form for creating a new post.`

The `/dashboard/edit/<id>` route will break, however, because of the missing data. Building that data is the next goal for this project. But first, commit and merge your feature branch, and close the GitHub issue.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
