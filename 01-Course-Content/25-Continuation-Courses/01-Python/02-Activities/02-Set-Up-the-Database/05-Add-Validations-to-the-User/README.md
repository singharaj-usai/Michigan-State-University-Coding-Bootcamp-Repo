# Add Validations to the User

ORMs like Sequelize allow you to validate data before inserting it into your database. And SQLAlchemy is no different—you can use the `validates()` function decorator of the `sqlalchemy` module.

In `User.py`, add the following `import` statement:

```python
from sqlalchemy.orm import validates
```

Next, update the `User` class to resemble the following code:

```python
class User(Base):
  __tablename__ = 'users'
  id = Column(Integer, primary_key=True)
  username = Column(String(50), nullable=False)
  email = Column(String(50), nullable=False, unique=True)
  password = Column(String(100), nullable=False)

  @validates('email')
  def validate_email(self, key, email):
    # make sure email address contains @ character
    assert '@' in email

    return email
```

We add a new `validate_email()` method to the class that a `@validates('email')` decorator wraps. The `validate_email()` method returns what the value of the `email` column should be, and the `@validates()` decorator internally handles the rest. This decorator is similar to the `@bp.routes()` decorator that we used previously to handle the route functions.

The `validate_email()` method uses the `assert` keyword to check if an email address contains an at-sign character `(@)`. The `assert` keyword automatically throws an error if the condition is false, thus preventing the `return` statement from happening.

Let's add another validation for the password. In the `User` class, add the following method:

```python
@validates('password')
def validate_password(self, key, password):
  assert len(password) > 4

  return password
```

Again, we use `assert` to check the length of the password and throw an error if it has fewer than four characters.

## Set Up Password Encryption

We should never store passwords as is in a database, however, because that's not very secure. For that reason, we need to encrypt every password during the insert process. Let's install more libraries to help accomplish that goal.

From the command line, run the following command:

```console
pip install bcrypt cryptography
```

In the `User.py` file, use the following code to import `bcrypt`:

```python
import bcrypt
```

We want to directly use the `bcrypt` module, so this time, the `import` syntax differs a bit. The first thing we need to do is create a salt to hash passwords against.

Before creating the `User` class, add the following line:

```python
salt = bcrypt.gensalt()
```

Then update the `validate_password()` method in the `User` class to resemble the following code:

```python
@validates('password')
def validate_password(self, key, password):
  assert len(password) > 4

  # encrypt password
  return bcrypt.hashpw(password.encode('utf-8'), salt)
```

The `validate_password()` function now returns an encrypted version of the password, if the `assert` doesn't throw an error.

## Test the Validation

Let's test it. Run the `seeds.py` script again, then check the table in the MySQL shell. It should look like the following image:

![](../Images/300-mysql-table.png)

`The command line displays a user table with id, username, email, and encrypted password fields.`

Passwords are now encrypted! Let's try the email validation next. In the `seeds.py` file, update one of the `User` models to the following code:

```python
User(username='alesmonde0', email='notvalid', password='password123')
```

Run the script again, and note the output in the command-line window. It should print something like the following example:

```console
assert '@' in email
AssertionError
```

Because `assert` threw an error, it stopped the rest of the script from running. But don't worry—we'll handle these errors later so that they won't break the app. In `seeds.py`, change the `User` model back to having a valid email address.

Now that users are all set, we can work on the next model.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
