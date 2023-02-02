# Create the Home View Routes

At this point, you've set up the app to serve more complete pages. Now you can turn your attention to the front end.

## Download the Front-End Code

Fortunately, you don't need to build the front end from scratch. [Download the front-end code](https://static-fullstack-bootcamp.s3-us-west-1.amazonaws.com/continuation-courses/python/python-templates.zip) and then unzip the content on your computer. Move the `static` and `templates` directories into the `app` directory of your project. Your directory structure should resemble the following example:

```
app/
  static/
  templates/
  __init__.py
venv/
.gitignore
```

## Jinja2 Templating

In a Node.js project, templating requires a separate library (like Handlebars.js), but Flask has templating built in. When you install Flask, the Jinja2 template engine is also installed. Like Handlebars.js, Jinja allows you to designate placeholders in your HTML content, to be filled in later with data.

The following example of a Jinja template creates an `<li>` element for every post object in an array:

```python
<ol>
  {% for post in posts %}
  <li>
    <a href="{{post.post_url}}">{{post.title}}</a>
  </li>
  {% endfor %}
</ol>
```

For more information, review the [Jinja documentation](https://jinja.palletsprojects.com/en/2.11.x/).

## Create the Routes

Next, we'll set up the routes that will render these templates. In the app directory, let's create another directory, called routes. In app/routes, create the following files:

* `__init__.py`

* `home.py`

The `routes` directory is now a package because of the presence of the `__init__.py` file. In contrast, because `home.py` is a standalone file, it's considered a module. More specifically, it's a module that belongs to the `routes` package.

Open `home.py` and add the following code:

```python
from flask import Blueprint, render_template

bp = Blueprint('home', __name__, url_prefix='/')

@bp.route('/')
def index():
  return render_template('homepage.html')

@bp.route('/login')
def login():
  return render_template('login.html')
```

As shown in the preceding example, we import the functions `Blueprint()` and `render_template()` from the Flask module.

`Blueprint()` lets us consolidate routes onto a single `bp` object that the parent app can register later. This corresponds to using the `Router` middleware of Express.js.

We then define two new functions: `index()` and `login()`. In each case, we add a `@bp.route()` decorator before the function to turn it into a route. Remember, whatever the function returns becomes the response. And this time, we use the `render_template()` function to respond with a template instead of a string.

Let's add one more route to finish this module. In `home.py`, add the following code:

```python
@bp.route('/post/<id>')
def single(id):
  return render_template('single-post.html')
```

This route uses a parameter. In the URL, `<id>` represents the parameter. To capture the value, we include it as a function parameter—specifically, `single(id)`. We don't use the parameter now, but it will soon prove useful.

Take a moment to celebrate. You just created a Python module!

## Import the Blueprint Object

Interestingly, you can import any variables or functions defined by Python modules into other modules. Thus, the `bp` object and the three route functions are all available for importing. We only care about `bp`, though, because the other functions are already attached to it—thanks to the `@bp.route()` decorator.

Open the `routes/__init__.py` file and add the following line:

``` python
from .home import bp as home
```

Let's review what's happening here. First, the `.home` syntax directs the program to find the module named `home` in the current directory. Next, we want to import the `bp` object, but we rename it `home` as part of the import process, for practicality's sake.

Next, revisit the `app/__init__.py` file and add the following `import` statement at the beginning:

```python
from app.routes import home
```

Note that you can import `home` directly from the `routes` package, because its `__init__.py` file imported (and renamed) the blueprint. Otherwise, you'd have to add `from app.routes.home import bp as home` and then repeat that line for any new modules that you added to `routes`. You could simplify this further by adding `.routes` instead of `app.routes` (which merely indicates that `routes` belongs to the parent `app` package).

Finally, update the `create_app()` function to register the `home` blueprint, as shown in the following example:

```python
@app.route('/hello')
def hello():
  return 'hello world'

# register routes
app.register_blueprint(home)

return app
```

## Test the Routes

Let's test it. Remember to start the virtual environment if it's not already active, then run the following command:

```
python -m flask run
```

In the browser, visit http://127.0.0.1:5000/. Something like the following image should appear:

![](../Images/200-homepage-preview%20(1).png)

```
The homepage displays a header and a footer but no content in between.
```

This results from the `homepage.html` template. No content exists yet, because we don't have a database, but the route works. We can also test the `/login` route, but the `/post/<id>` route will break, because the `single-post.html` template is missing crucial data.

We'll start adding data soon enough. First, though, we'll wrap up the remaining dashboard routes.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
