# Set Up the Git Workflow

Before we add any code, let's set up the project in Git and GitHub.

## Create a Repo and Add GitHub Issues
In GitHub, create a new repository called `python-newsfeed`. Then create the following GitHub issues to capture the work ahead:

```markdown
**Title:** Set up app to render templates

**User Stories**

* As a user, I want to be able to view the home and dashboard pages in the browser
```

```markdown
**Title:** Set up database and models

**User Stories**

* As a user, I need a database that can store my account, posts, comments, or upvotes
```

```markdown
**Title:** Finalize homepage views with data and filters

**User Stories**

* As a user, I want to be able to see my posts on the homepage

* I expect to see dates, URLs, and plural words properly formatted
```

```markdown
**Title:** Implement user logins and sessions

**User Stories**

* As a user, I want to be able to log in and have my session remembered if I refresh the page
```

```markdown
**Title:** Build and safeguard remaining routes

**User Stories**

* As a logged-in user, I want to be able to create new posts and comments and upvote other posts
```

```markdown
**Title:** Deploy the app

**User Stories**

* As a user, I want to be able to visit the app on a public URL
```

## Clone the Repo and Create Branches

On your computer, clone the repository using `git clone`. Then use the `git checkout -b` command to create and switch to the `develop` branch, so that you're not working directly in the main branch. Once in the `develop` branch, run `git checkout -b` again to create and switch to another branch called `feature/app-setup`, to match the first GitHub issue.

## Create a .gitignore File

For this project, we'll generate many files that we won't need to commit, so the first thing to do on the new feature branch is create a `.gitignore` file.

Open the `.gitignore` file and add the following lines:

```
venv/
.env

*.pyc
__pycache__/

instance/

.pytest_cache/
.coverage
htmlcov/

dist/
build/
*.egg-info/
```

We just added files and directories to the `.gitignore` file that the official Flask documentation recommends ignoring. We'll see some of these directories appear soon.

Now that we've set up the Git workflow, let's get started with some Python.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
