# GitHub Actions

At this point in the course, you are well aware that GitHub is a very powerful tool for collaborating with multiple users on the same project. Collaboration inevitably will cause some conflicts whether that be within the code itself or with your overall workflow. On occasion some errors will slip past a local linter and make their way into pull requests. Wouldn't it be nice to automate something like linting before each pull request?

GitHub Actions is a great solution to this problem. For example, you could create a GitHub action to automatically run a linter against every pull request to ensure the code meets your agreed upon standards. Today, we are going to create such an action.

* Before we begin, check out the [Introduction to GitHub Actions](https://docs.github.com/en/actions/learn-github-actions/introduction-to-github-actions) to get a grasp on some of the core concepts.

## Initial Project Setup

To begin, start by creating a boilerplate React application and putting it on Github. While you are probably already familiar with this process, let's go through it together.

1. Run `npx create-react-app gh-actions-demo` from your workspace directory.

2. Once the app has been created make sure to change into that directory.Additionally, let's add `eslint` as a dependency to our project:

    ```sh
    npm i eslint --save-dev
    ```

3. Open `package.json` and add a new script for linting called `eslint`:

    ```json
    "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test",
        "eject": "react-scripts eject",
        "eslint": "eslint src"
    },
    ```

4. Create a new repository on your personal GitHub and name it `gh-actions-demo` for consistency. Also, make sure to **not** initialize your repository with a `README.md` or `.gitignore`

5. Copy the first two lines of the snippet from GitHub for adding to an existing repo and paste it in the terminal:

    ```sh
    git remote add origin git@github.com:USERNAME/gh-actions-demo.git
    git branch -M main
    ```

6. Once we have added the remote to your local repository, we will add and commit all the files in the repository:

    ```sh
    git add -A
    git commit -m "Adding existing files"
    git push -u origin main
    ```

# Create the Workflow

Now that we have some code in our remote repository, let's create the workflow that will contain the actions we want to preform after each pull request.

1. In your terminal create a new directory called `.github`. GitHub will automatically look for this directory when it's pushed to your repository.

2. Create a `workflows` directory inside `.github`.

3. Finally, create a `main.yml` file inside your `workflows` directory

The folder structure should look something like this:

```
.github
└── workflows
    └── main.yml
```

# Actions

Our actions will be defined inside of our `main.yml` file. To begin, let's open up `main.yml` in our code editor. YAML is a recursive acronym that stands for "YAML Ain't Markup Language". YAML is human-readable syntax for data that is being stored or transmitted.

* Note that the first part of this file simply gives a name to our workflow. The `on` portion specifies what should trigger the workflow. We also want our actions to run whenever someone creates a pull request to the `dev` or `main` branches.

* Next we specify the `jobs` that can run sequentially or in parallel. We are specifying that we want our job `test` to run on a container that uses Ubuntu as it's operating system. This container will be spun up by GitHub when our workflow is invoked.

* The `steps` section contains what actions or tasks we want to run on our container. In our case we are checking out the branch, using node v12, installing dependencies, and finally running our `eslint` script.


```yml
#  Name of workflow
name: Lint workflow
# Trigger workflow on all pull requests
on:
    pull_request:
        branches:
            - dev
            - main
# Jobs to carry out
jobs:
    test:
        # Operating system to run job on
        runs-on: ubuntu-latest
        # Steps in job
        steps:
            # Get code from repo
            - name: Checkout code
              uses: actions/checkout@v1
            # Install NodeJS
            - name: Use Node.js 12.x
              uses: actions/setup-node@v1
              with:
                  node-version: 12.x
            # Build the app
            - name: 🧰 install deps
              run: npm install
            - name: Run lint
              run: npm run eslint

```

* Save the content of the snippet above to your `main.yml` file, then add and commit all your files and push them to Github on the main branch

```sh
git add .
git commit -m "Add workflow"
git push origin main
```

# Create a Pull Request

Now it's time to give our linter something to complain about! We will make some changes to our main `App` component and then create a pull request.

1. First let's make a new feature branch to create a pull request from:

```sh
git checkout -b feat/linting-test
```

2. Open `src/App.js` and add another variable called `App` just before our functional component of the same name is declared

```js
const App = 12
function App() { ... }
```

3. Add and commit your changes, then push them to our `feat/linting-test` branch

```
git add .
git commit -m "Creating a PR for testing"
git push origin feat/linting-test
```

4. Head to GitHub and click "Create pull request" next to the yellow indicator for our recent change to `feat/linting-test`.

![Pull Request](Images/01-pr.png)


5. Click "Create pull request" and then click on "details".

![PR details](Images/02-details.png)

6. In this view we can see the output of our workflow

![Workflow](Images/03-output.png)

1. The PR should be automatically marked as having failed checks, indicating the author needs to refactor some of the code.

![Failed checks](Images/04-failed.png)

## Conclusion

Congratulations on getting some experience with GitHub actions! This is a very powerful feature that extends all the way into your CI/CD pipeline if you so choose to implement it. While you might not make use of it for every project, it can be especially useful for group projects or large organizations.
