# Git History 📜

Git is a powerful tool with tons of features that can handle projects spanning weeks, months, and even years. Today we will explore a collection of lesser-known commands that help us navigate, rewrite, reference, and clean up the history of a Git repository.

## Introduction to git log 📒

`git log` lists each commit made to the repo in reverse chronological order, with the most recent commits showing at the top. `git log` lists a hash for each commit, the author's name and email, and the date the commit took place -- like in the following example:

```bash
git log

commit db6d66bd1afe17fb51c9599847371aad99e2c70b
Author: Simon B <admin@example.com>
Date:   Thu Feb 25 14:06:02 2021 -0800

    Update travis matrix
```

You've likely heard the software development term **hash** before. A hash function employs an algorithm to allow you to convert an arbitrary amount of data into a unique string of characters that represent the data. Interestingly, the return value of the hashing function is also referred to as a hash. The length of the string depends on the algorithm that is used to create it. Git uses something called **SHA-1**, but there are others too, like **MD5**. Essentially, you can think of a hash as a unique identifier for a commit.

`git log` also provides a commit message that explains the changes being made to the codebase. So when you start your work again on a new day, `git log` can give you a quick peek at where you left off.

## Exploring git log Options ⚙️

When you run `git log` inside an established repository, you'll notice that you get a list of all commits on the current branch. This command includes all commits from users who are part of the same branch. But sometimes you might want to see the log for changes that took place inside a specific directory!

To test some of these commands, let's clone a repository that has almost 900 commits at the time of writing. In the workspace directory, run the following command:

```sh
git clone git@github.com:SBoudrias/Inquirer.js.git
cd Inquirer.js
```

First, let's restrict the `git log` output to only commits that affect a specific directory. This is especially useful when working with a large-scale app or an open source project. After running the following command, we will see only commits relevant to the `packages` directory:

```sh
git log packages
```

* 🔑 To exit the `git log` output, enter `q` in the terminal.

The next command allows you to view commits that happened on a different branch than the one you're currently checked out to. All you need to do is provide the branch name after the command `git log`. This is useful when you want to see what happened in a different branch without having to completely leave the branch you are on. In this case, you're viewing commits that happened inside `origin/typescript`, even though you're currently checked out to `master` -- as shown in the following example:

```sh
git log origin/typescript
```

* **Note**: By the time you read this, the branch `origin/typescript` might have been renamed or deleted, so feel free to run `git branch -r` and choose a different branch.

You might have noticed the first time you ran the `git log` command that a lot of the commit messages were typical merges. These kinds of commits can create a lot of noise in your repository and make it hard to see what was actually changed. Luckily, the `git log` command has a flag for this, called `--no-merges`, as shown in the following example:

```sh
git log --no-merges 
```

Let's say we want to get commit messages from a specific time frame. The `since` flag will allow us to filter commits that have happened after a specific time. This could be useful if we wanted to see only commits that happened since that morning. We can filter the results even further by using the `--author` flag.

In the following example, adding this flag to the command limits the results to not only commits that have happened since 8 o'clock in the morning but also solely those that were authored by someone named Simon:

```sh
git log --since=8am --author=Simon
```

We can add the `--before` flag to make the time frame even more specific. For instance, we could look at all the commits that happened between the years `2016` and `2020` with the `--before` and `--after` flags, as shown in the following example:

```sh
git log --before={2020-12-31} --after={2016-12-31}
```

You might recognize the `--grep` flag. This flag is based on a Unix command-line utility that searches for regular expressions in the body of the text. A **regular expression**, or **regex**, is a sequence of characters that specifies a search pattern. In this case, you can use the `--grep` flag to limit the log to commits that match the regular expression between the quotation marks. The following example will look for commit messages that include the word "prompts":

```sh
git log --grep="prompts"
```

With all these options available, you can find exactly what you need by using `git log` and creating your own kind of query. You might not use it every day, but it will definitely come in handy sometimes. Just another tool for your tool belt!

## Introduction to git blame 👉

The commands `git log` and `git blame` both help developers gain insight on the changes that were made to a codebase, who made those changes, and when those changes occurred. The `git blame` command, though, can give developers insights into specific files -- as well as specific lines within those files.

For example, you might want to find out who exactly added a dependency to your project. You might also want to know why or what feature or bug was being fixed at the time.

The `git blame` command can show us exactly what revision was made to each line in a given file. To explore some of the uses for this command, let's first make sure that we're checked out to the `master` branch inside the Inquirer.js repository. Then we'll run `git blame` against one of the most important files in any web application -- `package.json`.

Run the following command:

```sh
git checkout master
git blame package.json
```

After running this command, you'll see the content of the `package.json` file annotated with the commit hash, a timestamp, and the user who made the change to that line. Refer to the `scripts` object inside the `package.json` file and look for a script called `bootstrap`. The name of the person who added this package (Daniel R.) will be displayed on the left, as shown in the following example:

```sh
f4ff7161 (Simon Boudrias   2016-03-12 16:29:44 -0800 22)   "scripts": {
c9b42859 (Daniel Ruf       2019-01-28 04:23:32 +0100 23)     "bootstrap": "lerna bootstrap --no-ci",
```

Bootstrap is a styling framework, but it is also a command-line utility for creating templates. We could use this information in conjunction with `git log` to find out more about what Daniel and maybe others were working on. Let's copy the commit hash, `c9b42859`, check out the commit, and then use `git log` to find commits that contain the term "ci".

Run the following command:

```sh
git checkout c9b42859
git log --grep "ci"
```

The commit logs tell a story, and that story gives us some context as to why Daniel modified this line in the `package.json`. We can deduce by looking at the commit messages that Dan was testing Node.js version 10 and might have encountered a situation where the `--no-ci` flag was needed to ensure proper functionality. The messages will look as follows:

```bash
commit c9b4285944200d8d4fde1f950a52fe389b4fe9e2 (HEAD)
Author: Daniel Ruf <DanielRuf@users.noreply.github.com>
Date:   Mon Jan 28 04:23:32 2019 +0100

    ci: use npm install (#772)

commit 32b10f3181e536088f3eb880d1280efe2f83e726
Author: Daniel Ruf <DanielRuf@users.noreply.github.com>
Date:   Mon Jan 28 04:23:00 2019 +0100

    ci: test Node.js 10 (#771)
```

While this is just an example, imagine a situation in which you want to know who was working on a feature before you joined a company. Maybe you want to get some insight into a developer's reason for adding something to the codebase. All of this is possible! Using the powerful `git log` and `git blame` commands just might make you feel like a detective.

## Other Useful Git Commands ⚒️

You might also find the following commands useful:

* `git diff` shows you which lines have been added or removed since your last commit. This can be especially useful if you notice a file was changed but you can't remember why you needed to change it. For example, if you have an app that appends to a JSON file when testing, you would be able to see the new lines added.

* `git reflog` shows you the **reference logs**, or **reflogs**, that denote when the tips of branches were updated in your local copy of the repository. For example, if you run `git reflog`, you can find out what happened two steps ago, at `HEAD@{2}`. You can also use these reflogs when you want to check out to the branch you were just on, as follows:
  
    ```sh
    git checkout HEAD@{-1}
    ```

* `git prune` works like a housecleaning or garbage collection utility. **Garbage collection** is the process that ensures that storage space that is no longer being used is made available for reuse. It cleans up unreachable, or **orphaned**, Git objects. Note that this command is rarely run in isolation and is usually invoked by another Git command.

* `git commit --amend` allows you to rewrite history. On the surface, this might seem counter to what Git was designed for in the first place: to track every single change in the repository, intentional or otherwise. However, Git also gives you complete control over your codebase and therefore enables you to modify your most recent commit. This is handy if you need to fix a mistake, like using a mixture of single and double quotes in a commit message. You can go back in time and rewrite your commit message.

## Conclusion 🎓

Today you learned how to navigate the expanse of Git History using commands like `git log` and `git blame`. As you continue growing as a developer and take on larger personal or professional projects, you'll begin to find opportunities to use these commands. Just knowing that these commands exist can make you a better developer!

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
