# Set Up the Project

Before we write any code, let's set up the project in AWS, Git, and GitHub.

## Set Up the GitHub Repository and Issues

In GitHub, create a new private repository called `aws-thought`. You will create a private repository because we'll be working with AWS credentials and we do not want our repository to be searchable or viewable by the public.

Then create the following GitHub issues to capture the work ahead:

```markdown
**Title:** Create an AWS account

**User Stories**

* As a developer, I want to be able to view the management console in AWS.

* As a developer, I want to manage my IAM role.

* As a developer, I want to set up a billing alert.
```

```markdown
**Title:** Set up API endpoints

**User Stories**

* As a developer, I need to create a route to query all the thoughts.

* As a developer, I need to create a route to query all the thoughts from a user.

* As a developer, I need to create a route to create a thought.
```

```markdown
**Title:** Integrate the database calls into the front end

**User Stories**

* As a user, I want to view all the thoughts.

* As a user, I want to be able to create a new thought.

* As a user, I want to view thoughts of a user
```

**Title:** Add Images to the Application

```markdown
**User Stories**

* As a user, I want to add an image to my thought.

* As a user, I want to see all images.

* As a user, I want to view images of a user
```

```markdown
**Title:** Deploy the app to an EC2 instance

**User Stories**

* As a user, I want to be able to visit the app on a public URL.
```

Next, we'll download the code for the front end.

## Download the Starter Code, and Add It to GitHub

Now let's download the starter code for the Deep Thoughts application by following these steps:

1. Download the [zipped project folder](https://static.fullstack-bootcamp.com/continuation-courses/aws/module-1/aws-thought.zip) that contains the starter code. Unzip the code and place it into your working directory. We'll add this to your GitHub repo next. Open the `starter` folder and check to see if there's a folder named `server` inside. If not, create a folder named `server`. Before moving on, confirm that you now have both `client` and `server` folders inside the `starter` directory.

*Note*

> The name of the unzipped project folder is `starter`. This `starter` folder will be the root folder in your project workspace as you work through this module.

2. In GitHub, copy the URL for the `aws-thought` repo.

3. Return to the project files on your computer and initialize Git in the working directory that contains the starter code.

4. Use the following command to connect the local directory and the GitHub repo:

```console
git remote add origin https://github.com/<githubname>/aws-thought.git
```

Replace `<githubname>` in the preceding statement with your GitHub username.

5. Now that we've established version control for the project, let's create a development branch to isolate the work. Checkout to the `develop` branch, then checkout to a branch called `feature/s3-setup`.

## Create a Gitignore File

We'll be generating a lot of files that don't need to be committed with Git, so the first thing you must do on your new feature branch is create a `.gitignore` file.

Open the `.gitignore` file and add the following lines:

```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
```

Make sure to also create the `.gitignore` file with the code above in both the "client" folder as well as the "server" folder. In total, you should have three `.gitignore` files in your repository.

Okay, now that we've completed the initial project setup, let's learn a bit more about cloud computing!

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.