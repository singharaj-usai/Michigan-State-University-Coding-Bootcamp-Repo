# Prepare Local Files for Deployment

Before proceeding, make sure that you're on the `main` branch and that all your features are merged in. You'll deploy the `main` branch to Heroku, but you need to make a few adjustments first.

The Flask built-in web server, for instance, is great for development but not meant to run in a production environment. Flask can process only one request at a time, which would make your app feel slow if multiple users were simultaneously logged in. You need to install a separate library, called Gunicorn, to act as the web server.

## Install the Gunicorn Library

Start your project's virtual environment again and then run the following command:

```python
pip install gunicorn
```

The Gunicorn library won't entirely replace Flask, but it will become a server gateway between your existing Flask routes and the web. This means that you'll need to notify Heroku to now use Gunicorn instead of Flask to start your app.

In a Node.js project, you can add a script to your `package.json` file using Heroku-specific instructions. Heroku also has a mechanism called the **Procfile**, where you can specify the commands that Heroku should run on startup.

## Set Up the Procfile Startup Commands

In the root directory of your project, create a new file called `Procfile`, with no file extension. Then open `Procfile` and add the following line:

```python
web: gunicorn -w 4 "app:create_app()" -t 120
```

Recall that your Flask app is named `app` and has an internal function named `create_app()`. This line will inform Heroku to set up a web process, by using your Flask app's information to run `gunicorn`.

> Pause
>
> What else does Heroku need to know to run your app?
>
> Answer: The library dependencies.

In a Node.js project, we can maintain the dependencies by using a `package.json` file. When Heroku sees this file, it installs the listed dependencies. For this new version of Just Tech News, we've been installing the dependencies in a virtual environment. So where's the Python equivalent of a `package.json` file? Let's make one.

## Create a Requirements File for Dependencies

From the root directory, run the following command:

```python
pip freeze > requirements.txt
```

This creates a `requirements.txt` file based on what `pip` finds. Open the file. Its content should look like the following:

```console
bcrypt==3.1.7
cffi==1.14.0
click==7.1.2
cryptography==3.0
Flask==1.1.2
gunicorn==20.0.4
itsdangerous==1.1.0
Jinja2==2.11.2
MarkupSafe==1.1.1
pycparser==2.20
PyMySQL==0.9.3
python-dotenv==0.14.0
six==1.15.0
SQLAlchemy==1.3.18
Werkzeug==1.0.1
```

This file now lists all your app's dependencies, and Heroku will use the file to know what to install. Your app is now ready to deploy. In the next section, you'll configure the Heroku side of things.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
