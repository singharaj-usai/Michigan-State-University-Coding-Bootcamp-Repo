# Establish a Database Connection

To start tackling the next GitHub issue, checkout to a new Git branch called `feature/models`.

## Access the MySQL Shell

Throughout this lesson, you should periodically log in to the MySQL shell to verify data. To access the shell, run the following command from the command line:

```console
mysql -u root -p
```

This prompts you for the password of the root user. After you enter your password, the prompt displays something like `mysql>` . This is where you can run SQL commands. However, the only command you need to run in the shell is to create the initial database.

## Create the Initial Database

While in the MySQL shell, run the following command:

```sql
CREATE DATABASE python_news_db;
```

You can now exit the shell by typing `exit` and then pressing Enter. You'll do the rest of the work through Python and an ORM called SQLAlchemy. Like Sequelize, you can use the SQLAlchemy ORM with any SQL database, so you need to install a secondary library to act as the MySQL connector.

> Pause
> 
> How can we make sure that we install these libraries only for this project and not globally?
>
> Answer: By activating the virtual environment.

## Start the Virtual Environment

In the root directory of your project, run the following command to tell Windows to start the virtual environment:

```console
.\venv\Scripts\activate
```

Or for macOS users, run the following command:

```console
. venv/bin/activate
```

## Install SQLAlchemy

Once the virtual environment activates, run the following command to install the necessary dependencies:

```console
pip install sqlalchemy pymysql python-dotenv
```

Next, create a `.env` file in the root directory of the project, and add the following line to it:

```
DB_URL=mysql+pymysql://root:<password>@localhost/python_news_db
```

Later, you'll use this `DB_URL` environment variable in a Python script to connect to the `python_news_db` database. This is a better practice than saving your credentials in the script itself. Just make sure to change `<password>` to the password of your root user.

## Create the Database Folders and Files

In the `app` directory of your project, create a new directory called `db`. In the `app/db` directory, create the following files:

* `__init__.py`

* `schema.sql`

> Pause
>
> What does the `__init__.py` file mean for the `db` directory?
>
> Answer: It means that `db` is now a package.

In `schema.sql`, add the following SQL statements for safekeeping:

```sql
DROP DATABASE IF EXISTS python_news_db;

CREATE DATABASE python_news_db;
```

In `db/__init__.py`, add the following code:

``` sql
from os import getenv
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv

load_dotenv()

# connect to database using env variable
engine = create_engine(getenv('DB_URL'), echo=True, pool_size=20, max_overflow=0)
Session = sessionmaker(bind=engine)
Base = declarative_base()
```

Note that the `getenv()` function is part of Python's built-in `os` module. But because we used a `.env` file to fake the environment variable, we need to first call `load_dotenv()` from the `python-dotenv` module. In production, `DB_URL` will be a proper environment variable.

We also use several imported functions from `sqlalchemy` to create the following three important variables:

* The `engine` variable manages the overall connection to the database.

* The `Session` variable generates temporary connections for performing create, read, update, and delete (CRUD) operations.

* The `Base` class variable helps us map the models to real MySQL tables.

Use the following command to directly run the `__init__.py` file and test the connection:

```console
python app/db/__init__.py
```

or

```console
python3 app/db/__init__.py
```
>Important
>
>Remember that you might need to run `python3` instead of `python` to force the correct version.

If the console doesn't print any errors, the connection succeeded. That means that we can move on to creating the models.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
