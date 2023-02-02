# 01.1 Full-Time Lesson Plan: HTML, CSS, and Git

## Overview

Today's lesson introduces students to the tools they need to succeed in the course and provides introductory activities to help familiarize students with the classroom environment. Students will also be introduced to HTML elements and attributes

## Instructor Notes

* In this lesson, students will complete activities `01-Ins_Command-Line` through `08-Stu_Attributes`.

* In addition, during the first 70 minutes of class, the university will lead introductory activities and provide important course-specific information to the students.

* Depending on the class size and information provided by the university, the `Everyone Do: Welcome` activity might run long or short of the expected time.

* For that reason, the `Setup and Installation` activity is designed to be flexible. Feel free to use any extra time to help students install the needed tools on their computers. If time is short, invite students with additional questions to attend office hours.

* Remind students that they can always refer to their prework for more detailed instructions on how to install the tools they need for this course. Most of the setup and command-line/Git commands have already been covered in their prework.

* It is recommended that students who use Windows 10 turn off OneDrive so that they can follow the class activities easily. Refer to [Microsoft docs on turning off OneDrive](https://support.microsoft.com/en-us/office/turn-off-disable-or-uninstall-onedrive-f32a17ce-3336-40fe-9c38-6efb09f944b0) for step-by-step instructions.

* Normally, each student will be expected to do a `git pull` of the class repository to have the day's activities ready and open in VS Code. However, for this first class, some students might not have access to the repository yet or know how to use `git pull`, which is introduced during today's activities. For that reason, instruct a TA to post the activity instructions on Slack, and if possible, share the instructions on the screen during the `Student Do` section of each activity.

* If you are comfortable doing so, live-code the solutions to the activities. If not, just use the solutions provided and follow the prompts and talking points for review.

* Let students know that the Bonus at the end of each activity is not meant to be extra coding practice, but instead is a self-study on topics beyond the scope of this module for those who want to further their knowledge.

## Learning Objectives

By the end of class, students will be able to:

* Understand classroom expectations and processes and how to seek out help.

* Apply computational thinking to coding challenges.

* Install the tools needed for classroom success, including VS Code and Slack.

* Implement basic terminal commands, including `cd`, `mkdir`, `touch`, and `ls`.

* Create and clone a remote repository using `git clone`.

* Perform a `git pull` to pull down the day's activities from the class repository prior to each class.

* Add structure and content to a webpage using HTML elements.

* Add attributes to configure or adjust behavior of specific elements.

## Slide Deck

* [Module 01 Slide Deck](https://docs.google.com/presentation/d/1eSjztw5kwQvDxH7DcX8CKF1z-45E2_a7CKh8PkKE3R0/edit?usp=sharing)

## Time Tracker

| Start   | #   | Activity Name                   | Duration |
| ------- | --- | ------------------------------- | -------- |
| 10:00AM | 1   | Everyone Do: Welcome            | 0:70     |
| 11:10AM | 2   | Instructor Do: Stoke Curiosity  | 0:10     |
| 11:20AM | 3   | Instructor Demo: Setup          | 0:05     |
| 11:25AM | 4   | Student Do: Setup Check         | 0:15     |
| 11:40PM | 5   | BREAK                           | 0:30     |
| 12:10PM | 6   | Instructor Demo: Command Line   | 0:10     |
| 12:20AM | 8   | Student Do: Command Line        | 0:15     |
| 12:35AM | 8   | Instructor Review: Command Line | 0:10     |
| 12:45PM | 9   | Instructor Demo: Git            | 0:05     |
| 12:50PM | 10  | Student Do: Git                 | 0:15     |
| 1:05PM  | 11  | Instructor Review: Git          | 0:10     |
| 1:15PM  | 12  | Instructor Do: Stoke Curiosity  | 0:10     |
| 1:25PM  | 13  | Instructor Demo: HTML           | 0:05     |
| 1:30PM  | 14  | Student Do: HTML                | 0:15     |
| 1:45PM  | 15  | Instructor Review: HTML         | 0:10     |
| 1:55PM  | 16  | Instructor Demo: Attributes     | 0:05     |
| 2:00PM  | 17  | Student Do: Attributes          | 0:15     |
| 2:15PM  | 18  | Instructor Review: Attributes   | 0:15     |
| 2:30PM  | 19  | END                             | 0:00     |

---

### 1. Everyone Do: Welcome (70 min)

* This first section will be led by the university team.

  * **Welcome and Attendance** (5 min): Welcome students to class and introduce attendance-taking procedure.

  * **Objectives** (3 min): University will present session objectives to class.

  * **Intros** (35 min): University, students, and instructional team intros. Instructor and TAs might be asked to provide a brief statement of coding background and a fun fact about themselves.

  * **Support Strategies** (5 min): Intro to support services, including tutoring and financial concerns.

  * **Landing Zones Activity** (10 min): Students will break up into groups for short activity.

  * **Classroom Requirements and Recap** (12 min): Recap of requirements and session objectives.

## Class Instruction

### 2. Instructor Do: Stoke Curiosity (10 min)

* Open the [Module 01 Slide Deck](https://docs.google.com/presentation/d/1eSjztw5kwQvDxH7DcX8CKF1z-45E2_a7CKh8PkKE3R0/edit?usp=sharing) and follow these prompts on their corresponding slides:

  * **What is computational thinking?**

    * **Computational thinking** is a way of logically breaking down a problem so that we can develop a step-by-step solution.

    * Key principles of computational thinking include the following:

      * Decomposition

      * Pattern recognition

      * Abstraction

      * Algorithms

  * **What is decomposition?**

    * We use **decomposition** to break down a problem down into smaller, more manageable parts.

  * **What is pattern recognition?**

    * Once a problem is broken down, we use **pattern recognition** to find similarities and patterns among the smaller parts. This helps us solve the problem more efficiently.

  * **What is abstraction?**

    * Once patterns are recognized, we use **abstraction** to focus on important and relevant information and filter out what is not needed to solve the problem.

  * **What is an algorithm?**

    * After the other steps are complete, it is time for a plan. An **algorithm** is a set of step-by-step instructions that provide a solution to the problem.

  * **How do we apply computational thinking to solve coding challenges?**

    * User stories and acceptance criteria help us clarify the scope of the problem and break it down into manageable parts.

  * A **user story** helps us identify the end goal and communicate how the solution will meet that goal. A user story follows a specific format: “As a **[user]**, I want to **[do something]**, so that I can **[realize a reward]**.”

  * The **[user]** is the end user or customer. The **[do something]** identifies the goal the solution must address. The **[realize a reward]** describes when the goal is met.

  * **Acceptance criteria** provide the conditions that must be met for the goal to be accomplished and the solution accepted by the user. Acceptance criteria define what specific tasks or functions must be done to solve the problem presented in the user story and have a clear pass or fail result. All criteria must pass for the solution to be accepted.

    * **For example:** It's done when there is a contact form that includes a text box for a visitor’s name and email.

  * The solution is a set of step-by-step instructions that address each of the acceptance criteria and clearly meet the user’s goal and reward as described in the user story.

* Navigate to `22-Stu_Mini-Project/Main/index.html` in your browser and demonstrate the following:

  * This week, we will work in groups to build a landing page using HTML and CSS.

  * This is an opportunity to apply computational thinking skills, practice breaking down a coding challenge into more manageable parts, and build the solution step-by-step.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are we building?

  * 🙋 We are building a landing page that allows visitors to enter their contact information.

  * ☝️ What tools can we use to apply computational thinking to this coding challenge?

  * 🙋 A user story will enable us to identify the user's goal, and acceptance criteria will help us define the criteria that we must meet to reach this goal. Then we can formulate a step-by-step solution that meets the goal.

  * ☝️ How does this project relate to your career goals?

  * 🙋 This project uses the fundamentals of web design&mdash;HTML and CSS&mdash;as well as the computational thinking skills that we will need to tackle complex coding problems in future development roles.

* Answer any questions before proceeding to the next activity.

### 3. Instructor Demo: Setup and Installation (5 min)

* This section is designed to be flexible. Feel free to use any extra time to help students install the needed tools on their computers. If time is short, invite students with additional questions to attend office hours.

* Explain the following:

  * For this class, we will use a number of tools to write and store code and communicate effectively as a group. To be successful in this course, it is important that we have all these tools installed and know how to effectively use them.

  * You can always refer to your prework for detailed instructions on how to install all the tools and programs you will need for this course.

* Open VS Code and demonstrate the following:

  * 🔑 We use a code editor to write the code locally.

  * VS Code runs on your desktop and comes with built-in support and extensions that allow you to create complex projects in the editor.

  * VS Code can be downloaded free and works on both Windows and macOS.

* Open Slack and demonstrate the following:

  * 🔑 We use Slack to communicate as a class. Look at Slack for important course announcements and information, and use it to communicate with the instructional team and fellow classmates.

  * To use the shared Slack workspace, you must accept the invitation sent to you via email by the university.

  * 🔑 We also use a Slack app called AskBCS to connect with the Learning Assistant team. To install AskBCS, open the Slack window and click on the plus sign (`+`) next to Apps, near the bottom of the lefthand navigation. Then search for and add AskBCS.

* Open [GitHub](https://github.com/) in your browser and demonstrate the following:

  * 🔑 We use GitHub to store versions of the code and collaborate with others. In GitHub, projects are stored in repositories.

  * To use GitHub, you will need to set up a free account.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What tools do we use in the classroom to write code and communicate and collaborate with others?

  * 🙋 We use VS Code, Slack, and GitHub.

* If time allows, break the students into small groups and proceed to `Student Do: Setup and Installation Check`.

* Otherwise, inform the students that if they need help installing any of the tools discussed, they can reach out to a TA or stay for office hours. Then proceed directly to the break.

* Answer any questions before proceeding to the next activity.

### 4. Student Do: Setup and Installation Check (15 min)

* During this time, the students will break into small groups to troubleshoot any installation issues and ensure that they have VS Code, Slack, and GitHub running on their machines.

* The instructional team should actively engage with each group and address any issues. If an individual's concerns can't be resolved during the time allotted, recommend that they stay for office hours.

* Resources:

  * [Download Visual Studio Code](https://code.visualstudio.com/download)

  * [Join a Slack Workspace](https://slack.com/help/articles/212675257-Join-a-Slack-workspace)

  * [Signing Up for GitHub](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/signing-up-for-github)

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 5. BREAK (30 min)

### 6. Instructor Demo: Command Line (10 min)

* Explain that commands are useful ways to navigate quickly and easily between folders, also called **directories**, in the CLI. The commands are entered into the CLI.

* Open your CLI and demonstrate the following:

  * 🔑 We use `ls` to list the contents of the current directory. In the home directory, we see a list of directories, including the `Desktop` directory:

    ```bash
    ls
    ```

  * 🔑 We use `cd` to change directories. We can change into the `Desktop` directory with the following command:

    ```bash
    cd Desktop
    ```

  * 🔑 To move back up to the previous directory, we use `cd ..`:

    ```bash
    cd ..
    ```

* Explain that in addition to navigating between files and directories, we can use commands to create and remove directories and files.

  * Let's create a new directory in `Desktop` with a new file.

  * 🔑 We start by checking the working directory with `pwd` (in other words, "print working directory"). When we use this command to print the working directory, it shows us the path:

    ```bash
    pwd
    ```

  * 🔑 Because we want to create the new folder inside the `Desktop` directory, we navigate down one layer into the `Desktop` directory, using `cd`:

    ```bash
    cd Desktop
    ```

  * 🔑 Then we use the `mkdir` command to create a new directory named `demo-folder`:

    ```bash
    mkdir demo-folder
    ```

  * 🔑 To add a file to the new directory, first we use `cd` to navigate into `demo-folder`:

    ```bash
    cd demo-folder
    ```

  * 🔑 Then we use `touch` to create a new file called `index.html` inside of `demo-folder`:

    ```bash
    touch index.html
    ```

  * 🔑 We can use `ls` to check that the new file has been successfully added to the directory:

    ```bash
    ls
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we use command-line commands to change directories?

  * 🙋 We use `cd` to go down and change to a new directory. We use `cd ..` to go back up to the previous directory.

  * ☝️ How would we use command-line commands to create a new file?

  * 🙋 We use `touch` and the name of the new file that we want to create.

  * ☝️ How would we use command-line commands to create a new directory?

  * 🙋 We use `mkdir` and the name of the new directory that we want to create.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `02-Stu_Command-Line/README.md`.

### 7. Student Do: Command Line (15 min)

* Direct students to the activity instructions found in `02-Stu_Command-Line/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📖 Use Command-Line Commands to Create Directory and File

  Work with a partner to implement the following user story:

  * As a developer, I want to use the command line to create a directory and file on my computer.

  ## Acceptance Criteria

  * It's done when a new directory named `first-day` has been created using command-line commands.

  * It's done when the `first-day` directory contains a file named `index.html`. The file should also be created using command-line commands.

  ## 📝 Notes

  Refer to the documentation:

  [MDN Web Docs on basic built-in terminal commands](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line#Basic_built-in_terminal_commands)

  ---

  ## 💡 Hints

  What command can you use to list the contents of a directory? How can you use this command to check your work?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * Which command do you use to copy or move files?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 8. Instructor Review: Command Line (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with the command line? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `cd`

  * ✔️ `mkdir`

  * ✔️ `touch`

  * ✔️ `ls`

* Open `02-Stu_Command-Line/README.md` in your IDE and explain the following:

  * The user story helps us to identify the goal and reward. The user, a developer, wants to use only the command line to make a new directory and file:

      ```md
      As a developer, I want to use the command line to create a directory and file on my computer.
      ```

  * We use the acceptance criteria to identify when the user's goal has been met. To meet the stated user goal, we need to create a new directory named `first-day`. Inside that directory, we need to create an `index.html` file:

      ```md
      * It's done when a new directory named `first-day` has been created using command-line commands.

      * It's done when the `first-day` directory contains a file named `index.html`. The file should also be created using command-line commands.
      ```

* Open your CLI and demonstrate the following:

  * The solution breaks down the steps to meet the goal.

  * 🔑 We use `cd` to navigate to `Desktop`:

    ```bash
    cd Desktop
    ```

  * 🔑 We use the `mkdir` command to create a new directory inside `Desktop` named `first-day`:

    ```bash
    mkdir first-day
    ```

  * 🔑 We use `cd` to navigate inside the `first-day` directory that we just created:

    ```bash
    cd first-day
    ```

  * 🔑 We use `touch` to create a new file named `index.html` inside `first-day`:

    ```bash
    touch index.html
    ```

  * 🔑 To test that the user's goal has been met, we use `cd ..` to navigate back to the `Desktop` and `ls` to list the contents of `Desktop`:

    ```bash
    cd ..

    ls
    ```

  * The `first-day` directory is listed among the contents of the `Desktop`.

  * To test that a file has been created in the folder, we use `cd` to navigate into the`first-day` directory:

    ```bash
    cd first-day
    ```

  * Then we use `ls` to list the contents of the directory:

    ```bash
    ls
    ```

  * We see that an `index.html` file is located inside the `first-day` directory.

  * The solution addresses all the conditions of the acceptance criteria and clearly meets the user's goal. Good work!

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What command can we use to create a directory in the command line?

  * 🙋 We use `mkdir` to create a directory.

  * ☝️ What command can we use to create a file in the command line?

  * 🙋 We use `touch` to create a file.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the MDN Web Docs on [basic built-in terminal commands](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line#Basic_built-in_terminal_commands), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 9. Instructor Demo: Git (5 min)

* Explain that developers need to be able to store and manage code as well as share it with others. In this class, we will be using a tool called GitHub for that purpose.

* Open [GitHub](https://github.com/) in your browser and demonstrate the following.

  * In this class, we will share code in repositories using GitHub.

  * Click on the green New button on the top left, or the plus sign `+` on the top right, to create a new repository.

  * 🔑 Type the name of the repository, `first-day-demo`, in the "Repository Name" box.

  * 🔑 We select Public because all of the repositories we create in this course will need to be public to deploy to GitHub Pages and get support from TAs on Challenges. It is possible to host private repositories with GitHub Pro, but a paid account is not necessary for this course.

  * 🔑 Select the "Add a README file" option to have GitHub create a new `README.md` file when creating the repository.

  * Finally, we click on the "Create repository" button.

  * 🔑 The remote repository has now been created, but we need to pull down the repository to the local machine.

* Navigate in the browser to the `first-day-demo` repository that we just created, and demonstrate the following:

  * To copy the URL, we click on the Code button and select the HTTPS option (or the SSH option if students have completed their prework and have set it up).

* Open your CLI and demonstrate the following:

  * 🔑 Use the command `cd` to navigate to the directory where we want the repository located. Ideally, you should have a parent directory to store all of your coding projects for this course. For an example, call the parent directory `Bootcamp`:

    ```bash
    cd Bootcamp
    ```

  * 🔑 We use the Git command `git clone`, followed by the URL copied from GitHub, to clone the repository to the local machine:

    ```bash
    git clone <the HTTPS or SSH URL ending in .git>
    ```

  * 🔑 The `git clone` command creates a new directory with the same name as the repository. We navigate into the new directory using `cd`:

    ```bash
    cd first-day-demo
    ```

  * 🔑 Let's create an HTML file in the local repository using the `touch` command:

    ```bash
    touch index.html
    ```

  * 🔑 Before we add the changes to commit them, let's run `git status` to check the status of the repository:

    ```bash
    git status
    ```

  * That will show us which files are being tracked and which are untracked.

  * 🔑 We use the command `git add` to add the changes. `git add -A` adds any untracked or modified files in the current git repository:

    ```bash
    git add -A
    ```

  * 🔑 If we run `git status` again, we will see that all of the files are being tracked and are ready to be committed.

  * 🔑 To commit the changes, we use the command `git commit -m` with a commit message, like "First commit":

    ```bash
    git commit -m "First commit"
    ```

  * 🔑 To push the changes back up to the repository that we created on GitHub, we use the command `git push`. The `git push` command sends any local commits to a remote location. In this case, the location is `origin` (GitHub), and we want to update the origin's `main` branch. For now, we only have one version of the codebase, called `main` by default:

    ```bash
    git push origin main
    ```

  * Historically, the most common name for the main body of a codebase has been `master`. However, recently `main` has been gaining in popularity. In fact, GitHub now uses `main` as the default name for its repositories&mdash;as do the projects in this course. Be aware that you might see instances of both throughout your development career, or you might hear experienced coders use the term "master branch" out of habit. You'll learn more during the `21-Evr_Git-Guide` activity.

  * 🔑 It is important that you keep the local repository up to date, especially when collaborating with others. Other collaborators might make changes to the repository that you don't have on your local repository yet.

  * 🔑 To pull down any changes from the remote repository on GitHub and update the local repository on the local machine, we use the command `git pull`. Just like when we did a `git push`, we use `origin` to represent the original directory&mdash;or more precisely, the original repository's URL&mdash;followed by the name of the branch, which is `main`:

    ```bash
    git pull origin main
    ```

  * You will be using this `git pull` command before every class to pull down that day's activities from the class repository.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we create a new repository on GitHub and clone it to the local machine?

  * 🙋 We go to [GitHub](www.github.com) and create a new repository. Then we use `git clone` to clone it to the local machine.

  * ☝️ How would we push changes to a remote repository so that we can see the changes on GitHub?

  * 🙋 We use `git add -A` to add all the changes. We use `git commit -m` to commit the changes and add a message that explains the changes made. Then, to push the changes, we use `git push origin main`.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `04-Stu_Git/README.md`.

### 10. Student Do: Git (15 min)

* Direct students to the activity instructions found in `04-Stu_Git/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📖 Create a New GitHub Repository

  Work with a partner to implement the following user story:

  * As a developer, I want to create a new GitHub repository and add an HTML file to it.

  ## Acceptance Criteria

  * It's done when I have created a new repository named `first-day-repo` using the GitHub user interface.

  * It's done when I have cloned the `first-day-repo` to my local machine.

  * It's done when I have used command-line commands to navigate into the `first-day-repo` directory.

  * It's done when I have used command-line commands to create an `index.html` file.

  * It's done when I add and commit my changes using Git commands.

  * It's done when I push the changes to the remote repository.

  ## 📝 Notes

  Refer to the documentation:

  [GitHub Docs on creating a repo](https://docs.github.com/en/github/getting-started-with-github/create-a-repo)

  [GitHub Docs on cloning a repository](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository)

  ---

  ## 💡 Hints

  What command can you use to list the contents of a directory? How can you use this command to check your work?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What are the `git fetch` and `git merge` commands?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 11. Instructor Review: Git (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with Git? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `git clone`

  * ✔️ `git add`

  * ✔️ `git commit`

  * ✔️ `git push`

* Open `04-Stu_Git/README.md` in your IDE and explain the following:

  * We read the user story to identify the user goal. The user, a developer, wants to create a new GitHub repository and add an HTML file to it:

    ```md
    As a developer, I want to create a new GitHub repository and add an HTML file to it.
    ```

  * We read the acceptance criteria to determine the conditions that must be met for the user's goal to be satisfied and the solution accepted:

    ```md
    * It's done when I have created a new repository named `first-day-repo` using the GitHub user interface.

    * It's done when I have cloned the `first-day-repo` to my local machine.

    * It's done when I have used command-line commands to navigate into the `first-day-repo` directory.

    * It's done when I have used command-line commands to create an `index.html` file.

    * It's done when I add and commit my changes using Git commands.

    * It's done when I push the changes to the remote repository.
    ```

  * The solution is a step-by-step plan that satisfies the user's goal and ensures that the conditions set out in the acceptance criteria are met.

* Open [GitHub](https://github.com/) in your browser and demonstrate the following:

  * Click the New button to create a new repository.

  * Name the new repository `first-day-repo`.

  * Select the "Add a README file" option to add a `README.md` file to the new repository that we are creating.

  * Click the Create Repository button.

  * Click the Code button and select the HTTPS or SSH option to copy the URL.

* Open the CLI and demonstrate the following:

  * We use the terminal command `cd` to navigate to the directory where we want the repository located:

      ```bash
      cd Bootcamp
      ```

  * 🔑 We use the Git command `git clone`, followed by the URL copied from GitHub, to clone the repository to the machine:

    ```bash
    git clone <the HTTPS or SSH URL ending in .git>
    ```

  * We navigate into the new directory using `cd`:

    ```bash
    cd first-day-repo
    ```

  * We add an HTML file to the repository using `touch`:

      ```bash
      touch index.html
      ```

  * We use `git status` to check the status of the files:

    ```bash
    git status
    ```

  * 🔑 We use `git add` to add the changes:

    ```bash
    git add -A
    ```

  * We use `git status` again to check that the files are being tracked.

  * 🔑 To commit the changes, we use `git commit -m` and add a commit message:

    ```bash
    git commit -m "First commit"
    ```

  * 🔑 To push the changes back up to the repository that we created on GitHub, we use `git push`:

    ```bash
    git push origin main
    ```

  * To confirm that we are done, we check that each part of the acceptance criteria is satisfied and that the user's goal is clearly met. When we open [GitHub](https://github.com/), we see a repository called `first-day-repository`. In that repository is a new file called `index.html`. Success!

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are the steps to create a repository using GitHub and then create a local copy?

  * 🙋 We create the repository in GitHub and then clone it to the local machine using `git clone` so thatt we get not only the files but also a copy of the history. This will ensure that this local copy is a functional Git repository.

  * ☝️ Why is it a good habit to use `git status` frequently?

  * 🙋 When you are dealing with large numbers of file, it is easy to lose track of which files are ready to be committed and which are not. Using `git status` will not only show you which files are being tracked but also which branch you're on. You can then choose which files to stage for commit.

  * ☝️ How do we update the repository in GitHub with the local version?

  * 🙋 We use `git add` to stage the changes and `git commit` to commit the changes. To push the changes to the remote repository, we use `git push`.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [GitHub Docs on creating a repo](https://docs.github.com/en/github/getting-started-with-github/create-a-repo) and the [GitHub Docs on cloning a repository](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 12. Instructor Do: Stoke Curiosity (10 min)

* Inform the students that as they take their first steps in web development by learning to use HTML and CSS to structure and style a webpage, they will also need to learn about an important tool of communication: a readme file.

* Explain that developers must be able to clearly communicate information in a readable format. One tool that we can use for this purpose is a **readme** file.

* Note that each activity in this course provides a readme file that includes a user story, acceptance criteria, and information about the task. The readme file is the first place students should look when starting an activity.

* In addition, we can use a readme file to provide other developers with information about the completed solution and the problem that it solves.

* Emphasize that for each project in this course, students will be required to write a readme that describes why they built the project, what problem it solves, and what they learned in developing a solution.

* A readme file can also help convey how the user goal identified in the user story and the acceptance criteria are clearly met by your solution.

* Open the [Professional README Guide](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide) in your browser and demonstrate the following:

  * While there is not a single right approach, this template provides an excellent guide to the information typically conveyed in a project readme.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do we use a readme file to communicate with other developers?

  * 🙋 A readme file conveys key information to other developers. For example, for each activity in this course, a readme file provides the information needed to complete the task. Project readme files explain why the project was built, the problem that was solved, and what was learned in the process.

* Transition to the next activity by reminding the students that each day's activities&mdash;including the readme file with information on how to complete the task&mdash;are found in the class repository and should be downloaded by performing a `git pull` before class.

### 13. Instructor Demo: HTML (5 min)

* Open `05-Ins_HTML/index.html` in your browser and demonstrate the following:

  * 🔑 HTML is a markup language that tells web browsers how to structure your page.

  * 🔑 HTML comprises various elements that provide structure and content.

  * Some common HTML elements include section headings, images, paragraphs, unordered lists, and links.

* Open `05-Ins_HTML/index.html` in your IDE and demonstrate the following:

  * We start every HTML document with a **document declaration**, which tells the browser that the content should be read as HTML:

    ```html
    <!DOCTYPE html>
    ```

  * 🔑 We begin and end an HTML document with an `<HTML>` element.

  * 🔑 The `<head>` element contains metadata. The content inside the `<head>` element is not displayed on the page:

    ```html
    <head>
      <meta charset="UTF-8">
      <title>Hello HTML!</title>
    </head>
    ```

  * 🔑 The `<body>` element contains all the content visible on the page.

  * Inside the `<body>` element, we define the different parts of a webpage using semantic elements like `<header>` and `<section>`. Semantic elements help make the code more readable and accessible.

  * HTML also includes a number of elements to display content like text and images on the page.

  * Section heading elements are used for headings or subheadings on your page. The `<h1>` element is reserved for the main title or heading, and the `<h6>` is used for the lowest-level subheading:

    ```html
    <h1>Hello World!</h1>
    <h2>Hello World!</h2>
    <h3>Hello World!</h3>
    <h4>Hello World!</h4>
    <h5>Hello World!</h5>
    <h6>Hello World!</h6>
    ```

  * We use an `<img>` element for images. Inside the `<img>` element, we specify a path to the image:

    ```html
    <img src="https://via.placeholder.com/200" alt="placeholder image"/>
    ```

  * We use a paragraph element (`<p>`) to contain text:

    ```html
    <p>This is a paragraph.</p>
    ```

  * A `<strong>` element marks important content. Text inside the `<strong>` element will be bolded:

    ```html
    <strong>BOLDED TEXT</strong>.
    ```

  * The `<ul>` element represents an unordered list of items:

    ```html
    <ul>
        <li>This is list item one</li>
        <li>This is list item two</li>
        <li>This is list item three</li>
    </ul>
    ```

  * The `<a>` element defines a link. Inside the `<a>` element, we specify the link's destination:

    ```html
    <a href="https://www.google.com">This is a link to Google.com</a>
    ```

  * Comments can make your code easier to read and are not visible to the user! To make a comment in HTML, we use the following format:

    ```html
    <!-- Headers -->
    ``

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do we build a webpage using HTML elements?

  * 🙋 HTML elements are the building blocks of a webpage. They define the different parts of the page and provide structure as well as visible content.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `06-Stu_HTML/README.md`.

### 14. Student Do: HTML (15 min)

* Direct students to the activity instructions found in `06-Stu_HTML/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🏗️ Create a Webpage Using HTML

  Work with a partner to implement the following user story:

  * As a student, I want to create a biography page that includes an image, a paragraph about me, and my contact information.

  ## Acceptance Criteria

  * It's done when the main header reads "Student Bio".

  * It's done when there is a section that includes a name, an image, and a paragraph.

  * It's done when there is a second section that includes a subheader labeled "Contact Info" and a list that includes links to my email, GitHub, and portfolio.

  * It's done when the finished page matches the mockup.

  ## Assets

  The following image demonstrates the web application's appearance and functionality:

  ![Webpage titled "Student Bio" features "Your Name" heading, a spot for an image and bio, and a "Contact Info" section.](./assets/image-1.png)

  You can use this [placeholder image](https://via.placeholder.com/200).

  ---

  ## 💡 Hints

  How can you use header elements to define the most important heading and the subheaders? How will using different header elements impact the size of the text?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What are the advantages of using semantic elements in your HTML?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 15. Instructor Review: HTML (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with HTML? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `<body>`

  * ✔️ `<header>`

  * ✔️ `<h1>` through `<h6>`

  * ✔️ `<img>`

  * ✔️ `<ul>`

  * ✔️ `<a>`

* Open `06-Stu_HTML/Solved/index.html` in your IDE and explain the following:

  * 🔑 We place all the visible content inside the `<body>` element.

  * 🔑 We use a semantic `<header>` element to define the area of the website that is used as the header. While not visible on their own, **semantic** elements make the structure of your webpage easily readable by the browser, as well as accessible.

  * 🔑 We add the content of the main heading in an `<h1>` element:

    ```html
    <header>
      <h1>Student Bio</h1>
    </header>
    ```

  * We use the semantic element `<section>` to define the two sections of the webpage.

  * Within each section, we will add heading elements. For the purpose of accessibility, it is important not to skip heading levels&mdash;so we will use `<h2>` for the section headings because we used `<h1>` for the main heading:

    ```html
    <h2>Your Name</h2>
    ```

  * 🔑 To add an image to the bio section, we will include an `<img>` element, using `src` to specify the path to the image:

    ```html
    <img src="https://via.placeholder.com/200" alt="Your Name">
    ```

  * We can use a `<p>` element to add a paragraph of text to the webpage:

    ```html
    <p>Write a short paragraph or two about yourself</p>
    ```

  * 🔑 The `<ul>` element allows us to create an unordered list:

    ```html
    <ul>
      <li><strong>Email:</strong> <a href="#">someplace@gmail.com</a></li>
      <li><strong>Github:</strong> <a href="#">sampleName</a></li>
      <li><strong>Portfolio:</strong> <a href="#">coming soon</a></li>
    </ul>
    ```

  * 🔑 We can use the `<a>` element to add a link to the list items in the preceding example. Inside this element, we specify the link's destination:

    ```html
    <a href="#">someplace@gmail.com</a>
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do we add structure to a webpage?

  * 🙋 We use semantic elements to define different areas of the webpage.

  * ☝️ How do we add content to a webpage?

  * 🙋 We use HTML elements to add content like images, headings, and lists to the page.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on HTML elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) and the [MDN Web Docs on HTML as a good basis for accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 16. Instructor Demo: Attributes (5 min)

* Open `07-Ins_Attributes/index.html` in your browser and demonstrate the following:

  * We use **attributes** to configure or adjust the behavior of specific elements.

  * Attributes are commonly used with link and image elements to provide important information.

  * We also use **global attributes** to identify elements for styling.

* Open `07-Ins_Attributes/index.html` in your IDE and demonstrate the following:

  * We include the `src` attribute with an image element to specify the image's absolute or relative path:

    ```html
    <img src="https://via.placeholder.com/200" alt="placeholder image"/>
    <img src="./assets/images/sample.jpg" alt="placeholder image"/>
    ```

  * Each image should also include an `alt` attribute. An `alt` attribute provides text that describes the image. This attribute makes your image accessible to users who cannot see it or use assistive technologies to browse the web:

    ```html
    <img src="https://via.placeholder.com/200" alt="placeholder image"/>
    ```

  * Within an `<a>` element, we use an `href` attribute to specify the URL of the page we want to link to:

    ```html
    <a href="https://www.google.com">This is a link to Google.com</a>
    ```

  * Now let's set up the HTML document to use CSS so that we can apply the rules written in the style sheet to the webpage. A **style sheet** is a list of CSS properties that defines how HTML elements will be displayed.

  * We will add a `<link>` element to connect the HTML page to an external CSS style sheet. Within that element, the `href` attribute specifies the relative path, and the `rel` attribute describes the relationship:

    ```html
    <link rel="stylesheet" href="./assets/css/style.css">
    ```

  * Global attributes can be used on any element. They are often used to identify elements and set up the HTML elements for styling.

  * A `class` attribute can be used to select and style one or more elements:

    ```html
    <section class="lesson">
    ```

  * The `id` attribute is used to select a single element for styling:

    ```html
    <p id="paragraph-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why do we add attributes to HTML elements?

  * 🙋 We add attributes to elements to provide additional information, identify the elements, and configure or adjust the behavior of specific elements.

  * ☝️ How do we use attributes to set up the HTML page so that we can apply CSS styling?

  * 🙋 We use the `<link>` element with an `href` attribute to connect the CSS to the HTML page. We use the `id` and `class` attributes to identify elements for styling.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `08-Stu_Attributes/README.md`.

### 17. Student Do: Attributes (15 min)

* Direct students to the activity instructions found in `08-Stu_Attributes/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🏗️ Add Global Attributes to HTML Elements for Use With CSS

  Work with a partner to implement the following user story:

  * As a developer, I want to add global attributes to my HTML elements so that I can add styling with CSS.

  ## Acceptance Criteria

  * It's done when the `<section>` elements are given a class attribute with a value of `lesson`.

  * It's done when the email list item is given a unique attribute with a value of `email`.

  * It's done when the GitHub list item is given a unique attribute with a value of `github`.

  * It's done when the portfolio list item is given a unique attribute with a value of `portfolio`.

  * It's done when the existing image's `src` attribute specifies the relative path to the `image-1.jpg` file found in the `assets` directory and the `alt` attribute describes the image.

  * It's done when the finished page matches the mockup.

  ## Assets

  The following image demonstrates the web application's appearance and functionality:

  ![The portfolio page features headings in blue text, rounded corners on the image placeholder, and various background colors.](./assets/image-1.png)

  ---

  ## 💡 Hints

  Why is it important that each global attribute is given a unique name?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What other attributes can be used with HTML elements?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 18. Instructor Review: Attributes (15 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with attributes? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `class`

  * ✔️ `id`

  * ✔️ `src`

* Open `08-Stu_Attributes/Solved/index.html` in your browser and explain the following:

  * We add global attributes to the HTML elements to allow them to be styled with CSS.

* Open `08-Stu_Attributes/Solved/index.html` in your IDE and explain the following:

  * 🔑 We assign all `<section>` elements a class attribute with the value of `lesson`:

    ```html
    <section class="lesson">
    ```

  * 🔑 We use a global `id` attribute to add a unique identifier to the email list item:

    ```html
    <li id="email"><strong>Email:</strong> <a href="#">someplace@gmail.com</a></li>
    ```

  * We use a global `id` attribute to add a unique identifier to the GitHub list item:

    ```html
    <li id="github"><strong>GitHub:</strong> <a href="#">sampleName</a></li>
    ```

  * We use a global `id` attribute to add a unique identifier to the portfolio list item:

    ```html
    <li id="portfolio"><strong>Portfolio:</strong> <a href="#">coming soon</a></li>
    ```

  * 🔑 We changed the value of the `src` attribute for the image to specify the relative path to the `image-1.jpg` that was in the `assets` directory. We also included a description of the image as the value for the `alt` attribute.

    ```html
    <img
      src="./assets/images/image-1.jpg"
      alt="Placeholder image with text 200 width and 200 height "
    />
    ```

  * Finally, remember to link to the external style sheet using a `<link>` element in the `<head>`. The `href` attribute specifies the relative path. Without this link and the `href` attribute pointing to the right path, the styles will not be displayed!

  ```html
  <link rel="stylesheet" href="./assets/css/style.css" />
  ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do we use global attributes to set up the HTML elements to connect with CSS?

  * 🙋 We use `class` and `id` attributes to identify elements that we want to style.

  * ☝️ How do we use the `href` attribute with a `<link>` element to connect the CSS style sheet?

  * 🙋 We use the `href` attribute to specify the relative path to the style sheet.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on HTML attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes), and stay for office hours to ask for help.

* Answer any questions before ending the class.

### 19. END (0 min)

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this [anonymous survey](https://forms.gle/RfcVyXiMmZQut6aJ6).

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
