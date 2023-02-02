# Add Error Handling

A signup error can occur in several situations, like any of the following examples:

* A user signs up with an email address that's already in use.

* A user's email address doesn't contain an at-sign character (`@`).

* A user's password is fewer than five characters in length.

Fortunately, the `User` model is set up to throw an error when these cases happen—thanks to the `unique=True` option on the `email` field and the validations that use `assert`.

For general error handling, we can wrap the user creation logic in a `try...except` statement, which resembles the JavaScript `try...catch` statement.

## Add a try...except Statement to the Signup Route

In the `api.py` file, update the `signup()` route as follows:

```python
@bp.route('/users', methods=['POST'])
def signup():
  data = request.get_json()
  db = get_db()

  try:
    # attempt creating a new user
    newUser = User(
      username = data['username'],
      email = data['email'],
      password = data['password']
    )

    db.add(newUser)
    db.commit()
  except:
    # insert failed, so send error to front end
    return jsonify(message = 'Signup failed'), 500

  return jsonify(id = newUser.id)
```

The `try` block now contains the user creation, and if it fails, the `except` block will send a JSON error message to the front end. At the same time, we set the response status code to 500 to indicate that a server error occurred.

## Test Your Error Handling in the Browser

Restart the Flask app, then try signing up with a duplicate or invalid email address. The command line still prints an `INSERT` statement, because SQLAlchemy tries to save the user, but the actual insertion fails. You won't see an error message, though, because the `try...except` statement suppresses it.

If you want to see the error messages for your own benefit, you can use the built-in `sys` module. Add the following `import` statement to the beginning of the `api.py` file:

```python
import sys
```

In the `except` block, add the following `print()` method above the return statement so it resembles the following:

```python
except:
  print(sys.exe_info()[0])
  return jsonify(message = 'Signup failed'), 500
```

Restart the app, then try a few more signups that you know will fail. Depending on what causes each error, the command line will print one of the following:

```python
<class 'AssertionError'>
<class 'sqlalchemy.exc.IntegrityError'>
```

An `AssertionError` is thrown when our custom validations fail. An `IntegrityError` is thrown when something specific to MySQL (like a `UNIQUE` constraint) fails.

In this case, we used a `try...except` statement to catch all types of errors. However, we can expand the statement to catch and handle errors in a more specific way. Consider the following code example, which runs different `print()` statements depending on which error is thrown:

```python
try:
  db.add(newUser)
  db.commit()
  print('success!')
except AssertionError:
  print('validation error')
except sqlalchemy.exc.IntegrityError:
  print('mysql error')
```

For more information, refer to the [Python documentation on errors and exceptions](https://docs.python.org/3/tutorial/errors.html).

## Address Pending Database Connections

Keep in mind that if `db.commit()` fails, the connection will remain in a pending state. This doesn't seem to have any negative effects during local testing. You can try to sign up again on the front end, and the next attempt will go through just fine. In a production environment, however, those pending database connections can result in app crashes.

To resolve this issue, you can roll back the last commit. Update the `except` block as follows:

```python
except:
  print(sys.exc_info()[0])

  # insert failed, so rollback and send error to front end
  db.rollback()
  return jsonify(message = 'Signup failed'), 500
```

Again, you won't see the benefits of calling `db.rollback()` in your local environment, but doing so ensures that the database won't lock up when deployed to Heroku. The good news is that this signup route is now completely resistant to failure.

Next we'll expand on this route by introducing persistent sessions!

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
