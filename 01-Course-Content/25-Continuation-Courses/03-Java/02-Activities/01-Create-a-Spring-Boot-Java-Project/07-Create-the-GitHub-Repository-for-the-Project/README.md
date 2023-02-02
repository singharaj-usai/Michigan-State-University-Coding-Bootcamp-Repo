# Create the GitHub Repository for the Project

The next step is to create a repository for the project. Open your browser, navigate to [GitHub](https://www.github.com/), and create a new repository. Be sure to match the name of new repository with the project that you created with Spring Initializr (`tech-news-java-api`).

After you've created the repo, copy the Git remote from the repository page on GitHub, as you've done for previous projects—you'll use this command in just a moment. This code should look like the following example:

```console
git remote add origin git@github.com:username/tech-news-java-api.git
```

Then open the command prompt and navigate into your project folder. Type the command `git init`, to initialize the folder as a Git repository.

**Important**

> Don't add any new files to the repository. That will come later.

Now that we've initiated the repository, we can apply the standard Git commit process, as follows:

```console
git status
git add -A
git commit "commitMessage"
```

If your default branch isn't named `main` already, run the following:

```console
git branch -M main
```

Finally, you need to add the proper Git remote. Paste the command that you copied from the GitHub website earlier, shown again as follows:

```console
git remote add origin git@github.com:username/tech-news-java-api.git
```

Now we can type `git push -u origin main` and press Enter.

Great! Now we have the GitHub repository all set up. Let's move on to manually adding some final dependencies that couldn't be added by Initializr.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.