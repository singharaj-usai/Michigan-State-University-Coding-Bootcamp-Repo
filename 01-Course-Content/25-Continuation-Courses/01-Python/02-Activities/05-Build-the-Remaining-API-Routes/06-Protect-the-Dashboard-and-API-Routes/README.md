# Protect the Dashboard and API Routes

In a Node.js and Express.js project, you can create middleware functions that can be injected into the request-response cycle. One use case for a middleware function is to verify a session before calling the `next()` function in the cycle.

## Function Decorators

In Python, we can create similar functionality by using `decorators`. Function decorators aren't entirely new—we've been using them from the start. Consider the following example:

```python
@bp.route('/')
def index():
  return render_template('homepage.html')
```

The `index()` function is decorated (that is, wrapped) with another function called `@bp.route()`. The at-sign character (`@`) signifies that the function should be treated as a decorator—which passes the `index()` function to the `route()` function to be called at a later time.

> Connect the Dots
>
> You can think of Python decorators as similar to callback functions in JavaScript. If you re-created these functions in JavaScript, the syntax might look like the following:

```python
bp.route('/', function index() {
  return render_template('homepage.html');
});
```

Let's make our own decorator function to wrap and protect the routes.

## Create the Auth Module

In the `utils` directory, create a new file called `auth.py`.

In the `app/utils/auth.py` file, add the following `import` statements:

```python
from flask import session, redirect
from functools import wraps
```

The `functools` module contains several helper functions that we can use to change other functions. In fact, the `wraps()` function that we imported is a decorator itself! Let's find out exactly what that means.

In `auth.py`, add the following code:

```python
def login_required(func):
  @wraps(func)
  def wrapped_function(*args, **kwargs):
    print('wrapper')
    return func(*args, **kwargs)
  
  return wrapped_function
```

We define a function called `login_required()` that expects to receive another function as an argument (which it captures as the `func` parameter). When used, this looks like the following code:

```python
@login_required
def callback():
  print('hello')

callback() # prints 'wrapper', then 'hello'
```

A decorator is intended to return a new function—hence, we have the `wrapped_function()`. However, by returning a new function, we change the internal name of the original function. To clarify, printing `callback.__name__` prints `wrapped_function` instead of `callback`. That might not seem serious, but it can make debugging harder. Thankfully, the `@wraps(func)` decorator preserves the original name when creating the wrapped function.

We want to preserve not only the name but any arguments that the original function received. For example, `callback('data')` should translate to `func('data')` when called inside the decorator. The `*args` and `**kwargs` keywords ensure that no matter how many arguments are given (if any), the `wrapped_function()` captures them all.

Custom decorators are one of the trickier aspects of Python, so it's okay if this is a bit confusing. It might prove helpful to find the similarities with JavaScript callbacks, as the following example illustrates:

```python
function login_required(func) {
  function wrapped_function() {
    console.log('wrapper');

    // func(*args, **kwargs)
    return func(...arguments);
  }

  return wrapped_function;
}

// @login_required
// def callback():
const callback = login_required(() => {
  console.log('hello');
});

callback();
```

The ultimate goal of the Python decorator that we're building is to redirect a user who isn't logged in (that is, a user for whom no session exists) or to run the original route function for a user who is logged in.

To do that, update the `login_required()` function to look like the following code:

```python
def login_required(func):
  @wraps(func)
  def wrapped_function(*args, **kwargs):
    # if logged in, call original function with original arguments
    if session.get('loggedIn') == True:
      return func(*args, **kwargs)

    return redirect('/login')
  
  return wrapped_function
```

Return to the `dashboard.py` module, and use the following line of code to import the decorator:

```python
from app.utils.auth import login_required
```

Then update both dashboard routes to use the decorator, as the following code demonstrates:

```python
@bp.route('/')
@login_required
def dash():
  # other logic remains the same...

@bp.route('/edit/<id>')
@login_required
def edit(id):
  # other logic remains the same...
```

Yes, you can stack decorators! Just make sure that your `login_required()` decorator goes between the `route()` decorator and your function.

Next, open the `api.py` file and import `from app.utils.auth import login_required`. Next, you need to add the decorator to the following route functions:

* `create()`

* `update(id)`

* `delete(id)`

* `upvote()`

* `comment()`

## Test Your Work in the Browser

Restart the Flask app and then log out by clicking the "logout" link in the browser. Then try visiting the dashboard by going to http://127.0.0.1:5000/dashboard. The app should immediately redirect you to `/login`.

Now that you've made the app more secure, close the GitHub issue and merge the branch into `develop`. This was the last feature-related issue, because the next issue relates to deployment. So you can now merge `develop` into `main` too.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
