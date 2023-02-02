# 03.3 Full-Time Lesson Plan: Third-Party APIs and Server-Side APIs

## Instructor Notes

* In this lesson, students will complete activities `28-Stu_Mini-Project` in Module 05 through `08-Stu_Parse_JSON` in Module 06.

* Students will be using Fetch today to make requests to APIs. Take a few minutes before class to get familiar with the [MDN Web Docs on Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).

* The MDN Web Docs use ES6 in their Fetch API examples, but our activities will continue to use ES5 syntax, because that is what students will be familiar with. We will cover ES6 syntax in Module 09, so until then, our activities will continue to use ES5 syntax.

* GitHub's API is the only one we will make requests to, so familiarize yourself with the [GitHub documentation on the REST API](https://docs.github.com/en/rest). Students will rely heavily on it in class and might need help finding answers.

* Students will need to refer frequently to the GitHub documentation, so be sure to have the link on hand just in case.

* This is students' first exposure to server-side APIs.

### Learning Objectives

By the end of class students will be able to

* Explain the client-server model.

* Use `curl` to make a simple request to an API.

* Explain the Fetch API and why we use it.

* Use JavaScript to render data obtained with `fetch()` on the page.

* Explain the differences between Fetch, AJAX, and XHR. 

* Explain the structure of an API parameter.

## Slide Deck

* [Module 06 Slide Deck](https://docs.google.com/presentation/d/1-5nadf7eI4RgU5V_ymwD-NMWlwO20TDvkb3a4Xm80eM/edit?usp=sharing)

## Time Tracker

| Start  | #   | Activity Name                       | Duration |
|---     |---  |---                                  |---       |
| 10:00AM| 1   | Instructor Demo: Mini Project       | 0:05     |
| 10:40AM| 2   | Student Do: Mini Project            | 0:60     |
| 11:05AM| 3   | Instructor Review: Mini Project     | 0:10     |
| 11:15AM| 4   | Introduce Challenge                 | 0:05     |
| 11:20AM| 5   | Flex                                | 0:30     |
| 11:50PM| 6   | Instructor Do: Stoke Curiosity      | 0:10     |
| 12:00PM| 7   | BREAK                               | 0:30     |
| 12:30PM| 8   | Instructor Demo: curl Demo          | 0:05     |
| 12:35PM| 9   | Student Do: curl Debug              | 0:15     |
| 12:50PM| 10  | Instructor Review: curl Debug       | 0:10     |
| 1:00PM | 11  | Instructor Demo: Create Fetch       | 0:05     |
| 1:05PM | 12  | Student Do: Create Fetch            | 0:15     |
| 1:20PM | 13  | Instructor Review: Create Fetch     | 0:10     |
| 1:30PM | 14  | Instructor Demo: Different APIs     | 0:05     |
| 1:35PM | 15  | Student Do: Reverse APIs            | 0:15     |
| 1:50PM | 16  | Instructor Review: Reverse APIs     | 0:10     |
| 2:00PM | 17  | Instructor Demo: Parse JSON         | 0:05     |
| 2:05PM | 18  | Student Do: Parse JSON              | 0:15     |
| 2:20PM | 19  | Instructor Review: Parse JSON       | 0:10     |
| 2:30PM | 20  | END                                 | 0:00     |

- - -

### 1. Instructor Demo: Mini Project (5 mins)

* Open `28-Stu_Mini-Project/Solved/index.html` in your browser and demonstrate the following:

  * 🔑 We see a header with the title "Project Tracker" with the current time and date. On the left, we see instructions for adding a project to the project tracker.

  * 🔑 When we click Add Project, a modal pops up and we can add the information requested.

  * 🔑 Once we submit that form, we see the project listed in the table.

  * 🔑 When we click the "x", that project is deleted from the list. 

* Ask the class the following question (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this, working in groups of three to four?

  * 🙋 We will break up the different tasks amongst the group members and try to finish at least the first three tasks. We need to create an `index.html` file for the HTML and a `script.js` file for the JavaScript and jQuery. When in doubt, we can refer to the official documentation for Bootstrap, jQuery, jQueryUI, Moment, and Google Fonts.

* Answer any questions before allowing students to start the mini-project.

### 2. Student Do: Mini Project (60 mins)

* Direct students to the activity instructions found in `28-Stu_Mini-Project/README.md`.

* Break your students into groups that will work together on this activity.

```md

# Module 05 Mini-Project: Project Tracker

In this project, you will work with others to create a project tracker application using Bootstrap, jQuery, jQueryUI, Moment, and Google Fonts. Break up these phases amongst members of your team.

## Instructions

This mini-project is divided into four tasks. The first three tasks will get you to MVP, so focus on those first!

### Task 1: HTML Build

1. Create a header/hero area that welcomes users to the application and displays the current time and date using Moment.js with `setInterval()`.

2. Create a Bootstrap card component explaining the instructions of how to use the app and a button to open a [Bootstrap modal dialog](https://getbootstrap.com/docs/4.5/components/modal/).

3. The modal should contain a form asking users to fill in the following data:

  * The name of the project

  * The type of project (use a `<select>` drop-down)

  * The hourly wage for the project

  * The due date for the project (use jQuery UI's datepicker with a minimum date setting in place)

4. Include a Bootstrap table that the project's information can be printed to with columns for the following data:

  * Project name

  * Project type

  * Hourly wage

  * Due date

  * Days until the due date (use Moment.js to calculate)

  * Estimated total earned (hourly wage at 8 hours per day multiplied by the number of days until the due date)

While you build, remember the following guidelines:

  * Ensure that any elements you need to interact with using JavaScript/jQuery are properly identified (e.g., form elements, the table body, etc.).

  * Use different `<input>` element attributes to help enforce rules, like different `type` attribute values, minimum values, and required! See the [MDN Web Docs on the HTML input element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) for more guidance.

  * When in doubt, read the Bootstrap documentation.

---

### Task 2: Capture Form Data

1. Using jQuery, set up functionality to capture the form's input elements on submit and use that data to create a new table row on the page.

2. Select and save references to every DOM element we will interact with to a variable (i.e., `var projectFormEl = $("#project-form");`) so that we can use these elements later.

3. Attach a submit event listener to the `<form>` element using jQuery.

4. On submission, capture the four input values from the form and pass them to another function to handle printing project data. Having one function that captures the data and another that prints the data to the page's `<table>` element will improve code readability.

---

### Task 3: Print Project Data to Page

1. Create a function that will accept the four input fields' data as arguments.

2. Create a table row (`<tr>`) element and save it to a variable.

3. Create a table detail (`<td>`) element for each of the table columns created in Task 1.

4. For printing the days to the due date, use Moment.js to calculate the difference between the due date and the current time in days. 

5. For printing the estimated total earned amount, assume that you work an eight-hour day. So multiply the hourly rate by 8 to get the daily rate, then multiply that value by how many days until the project is due to get the estimated total earned. 

6. Append all `<td>` elements to the table row created, then append the entire row to the `<tbody>` element on the page.

7. Don't forget to close the modal when done!

---

### Task 4: Delete a Project From the Table

1. Update the table to accommodate one more column without a name.

2. When generating a new `<tr>` for a project, add one more `<td>` that holds a button for deleting a project from the list.

3. Use jQuery event delegation to attach an event listener to each of those buttons so that when clicked, the parent `<tr>` element will be removed from the page.
```

* While breaking everyone into groups, be sure to remind students and instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help.

### 3. Instructor Review: Mini Project (10 mins)

* Ask the class the following question (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with this mini-project? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points (✔️):

  * ✔️ Bootstrap modal

  * ✔️ Capture form content

  * ✔️ Moment.js time differences

  * ✔️ jQuery event delegation

* Open `28-Stu_Mini-Project/Solved/index.html` in your IDE and explain the following: 

  * We don't have time to review every part of this mini-project; however, we will review the key points.

  * 🔑 We can find the general code for the modal in the official documentation for Bootstrap modals. In the modal, we will put in a form. Notice the id for the input fields, shown in the following example:

    ```js
    <div class="form-group">
      <label for="project-name-input">Project Name</label>
      <input type="text" id="project-name-input" class="form-control" placeholder="Enter the project's name"
        required />
    </div>

    <div class="form-group">
      <label for="project-type-input">Project Type</label>
      <select class="form-control" id="project-type-input">
        <option selected disabled>Pick one...</option>
        <option value="Web Application (Front End)">Web Application (Front End)</option>
        <option value="Web Application (Back End)">Web Application (Back End)</option>
        <option value="Web Application (Full Stack)">Web Application (Full Stack)</option>
        <option value="Mobile Application">Mobile Application</option>
        <option value="Print Campaign">Print Campaign</option>
        <option value="Digital Marketing Campaign">Digital Marketing Campaign</option>
      </select>
    </div>

    <div class="form-group">
      <label for="hourly-rate-input">Hourly Rate ($)</label>
      <input type="number" id="hourly-rate-input" class="form-control" placeholder="$" min="0" required />
    </div>

    <div class="form-group">
      <label for="due-date-input">Due Date</label>
      <input type="text" min='1' id="due-date-input" class="form-control" placeholder="When is the project due?"
        required />
    </div>
    ```

  * 🔑 We can see how we capture the form content by looking at the function for handling the form submit in `script.js`:

    ```js
    var projectNameInputEl = $('#project-name-input');
    var projectTypeInputEl = $('#project-type-input');
    var hourlyRateInputEl = $('#hourly-rate-input');
    var dueDateInputEl = $('#due-date-input');

    function handleProjectFormSubmit(event) {
      event.preventDefault();

      var projectName = projectNameInputEl.val().trim();
      var projectType = projectTypeInputEl.val().trim();
      var hourlyRate = hourlyRateInputEl.val().trim();
      var dueDate = dueDateInputEl.val().trim();

      printProjectData(projectName, projectType, hourlyRate, dueDate);

      projectFormEl[0].reset();
    }
    ```

  * 🔑 We use Moment.js to format the time and calculate the difference between now and the due date:

    ```js
    function displayTime() {
      var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
      timeDisplayEl.text(rightNow);
    }

    var daysToDate = moment(dueDate, 'MM/DD/YYYY').diff(moment(), 'days');
    ```

  * 🔑 And finally, in Task 4, when we delete a project from the table, we are attaching an event listener to a button for each `<tr>`. When it is clicked, that `<tr>` element will be removed from the page:

    ```js
    // In printProjectData()
    var deleteProjectBtn = $('<td>').addClass('p-2 delete-project-btn text-center').text('X');

    // Remove <tr> when button is clicked
    function handleDeleteProject(event) {
      console.log(event.target);
      var btnClicked = $(event.target);
      btnClicked.parent('tr').remove();
    }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How are we printing the time to the page every second in the header?

  * 🙋 We are using `setInterval()` to call the function `displayTime()`, which uses Moment.js to format the current time and appends it to the page, every second. 

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on the HTML input element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) or the [Bootstrap documentation on components](https://getbootstrap.com/docs/4.5/components/modal/), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 4. Instructor Demo: Introduce Challenge (5 min)

* Open `02-Challenge/Main/index.html` in your browser and demonstrate the following:

  * We see a daily planner with the current day displayed on top and a calendar with timeblocks.

  * Each timeblock is color coded to indicate whether that hour is in the past, present, or future, according to the current time.

  * When we click on a timeblock, we can add an event and press Save.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are we learning?

  * 🙋 We are learning to use HTML and CSS powered by jQuery. We are also using Moment.js to work with the date and time.

  * ☝️ How does this project build off or extend previously learned material?

  * 🙋 It is using HTML, CSS, and JavaScript skills, as well as the newly learned Moment.js library and Bootstrap.

  * ☝️ How does this project relate to your career goals?

  * 🙋 We are creating interactive webpages that are dynamically updated using JavaScript. We are also learning to use different libraries that enhance the quality of our web apps.

* Ask TAs to direct students to the Challenge Requirements found in `02-Challenge/README.md`.

* Answer any questions before ending the class.

### 5. FLEX (30 mins)

* This time can be utilized for reviewing key topics learned so far in this module.

* If there were any activities that you needed to cut short due to time constraints, this is a perfect time to review them. 

* Ask the class if there is anything they would like to review before moving on to Module 06.

### 6. Instructor Do: Stoke Curiosity (10 min)

* Open the Module 6 [slide deck](https://docs.google.com/presentation/d/1-5nadf7eI4RgU5V_ymwD-NMWlwO20TDvkb3a4Xm80eM/edit?usp=sharing) and follow these prompts on their corresponding slides:

  * **Server-Side APIs**

    * This module is all about server-side APIs, which are APIs that help us more on the data side of applications than the functional side.

  * **The Big Picture**

    * Take a moment to have your class pause and reflect on where they are in the course as a whole. We are nearing the end of Phase 1, where they’ve learned many different foundational topics. 

  * **Boot Camp Pointers**

    * Students are routinely challenged during class and Challenge assignments. Remind them that they’re not alone through the grind! Ask them to rely on their support systems more readily as they start reaching the second phase of the program. 

  * **This Week: Server-Side APIs**

    * Walk through the learning objectives for the week with your class. These are the things they should expect to know by the end of the module. 

  * **This Week's Assignment**

    * Use the assignment description from the module overview to talk through the different requirements and how they align with the concepts learned throughout the module.

  * **Career Connection**

    * Use this slide to speak to you students will use the module's content in their careers going forward. It will help provide much-needed context. For many developers, server-side APIs are an integral piece of their day-to-day functions. Take a moment to talk about how you may have used them at work. 

    * Remember that students will also be using dynamically created HTML and CSS in their Challenge assignment this week, so you can feel free to talk about that as well. 

  * **Where do web applications live?**

    * Web applications live on servers.

    * Web servers are typically nothing more than specialized computers running software with the specific task of waiting for an internet request to come in and ask for data in return. 

  * **How are these requests made?**

    * On the web, data is transferred over **HTTP**, or **Hypertext Transfer Protocol**. HTTP is a set of rules and regulations for how data can be requested by a client and how a server can respond to that request.

    * Across all internet-connected devices, we constantly make HTTP requests to web servers for different types of data, like the following:
    
      * Visiting deployed applications at `<username>.github.io`.

      * A phone or watch automatically updating the weather forecast.

      * Using a media-streaming service.

      * Using HTML `<link>` and `<script>` tags to incorporate Bootstrap, jQuery, or any other third-party API into an application. 

  * **Can we use data from other servers in an application?**

    * Yes, we can! Just as we’ve used third-party APIs to make an application's functionality and design easier to maintain, we can use specific functionality to request data over HTTP and use that data in an application. This data usually comes in the form of a special type of JavaScript object known as **JSON** (JavaScript Object Notation).

    * With this data, we can do any of the following in an application:  
    
      * Retrieve weather data to display in an application.
      
      * Use Google Maps to help create a trip itinerary.
      
      * Manage Spotify or YouTube playlists.
      
      * Control lights, alarms, and other devices.
      
      * And much, much more!

  * **How can we learn to use and implement these types of APIs?**

    * Like other APIs we’ve used in the past, the implementation of server-side APIs depends on what solution that API provides. Some are very simple, while others are complex and powerful, so it’s up to us to determine which parts to use, if any.

    * You can try the following strategies to learn more about specific APIs:

      * Read the official documentation and practice with the provided examples.
      
      * Reverse-engineer finished code to see how something was accomplished.
      
      * Build something from scratch and debug it using the Chrome DevTools.
      
      * Ask questions!

* Navigate to `27-Stu_Mini-Project/Main/index.html` in your browser and demonstrate the following:

  * The mini-project for this module will use everything we've learned so far to build a search application that retrieves data from the Library of Congress.

  * We can search for something by filling out the form and selecting the form's submit button.

  * On form submission, we are directed to a second page, where search results appear.

  * We can also conduct more detailed searches by submitting the form again with a format selected.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Where does this data come from?

  * 🙋 It comes from a network request for data from the Library of Congress API.

  * ☝️ What are we learning?

  * 🙋 How to request data from server-side APIs to build data-driven applications.

  * ☝️ How does this project build off or extend previously learned material?

  * 🙋 We will need to put all of our knowledge in HTML, CSS, JavaScript, and APIs to use!

  * ☝️ How does this project relate to your career goals?

  * 🙋 Most large applications rely on data coming from a server, whether from a third-party service or from another server within the organization. There's no running from server-side APIs once you enter the professional development world!

* Answer any questions before proceeding.

### 7. BREAK (30 mins)

### 8. Instructor Demo: curl Demo (5 min)
  
* Open your command line, type `curl https://api.github.com/users`, and demonstrate the following:

  * GitHub returned a list of the last 30 users who made a profile!

* Ask the class the following questions (☝️) and call on students for the answers (🙋).

  * ☝️ What happened when I entered the `curl` command to GitHub?

  * 🙋 We asked GitHub for user information via the command line.

  * ☝️ What is the **root endpoint** in the preceding URL?

  * 🙋 `https://api.github.com`

  * ☝ What is the **path** that gives us `users`?

  * 🙋 `/users`

  * ☝️ What is a good use case for `curl`?

  * 🙋 We can use it to quickly confirm that an API URL is correct or working, without the need for JavaScript.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `02-Stu_Curl_Debug/README.md`.

### 9. Student Do: curl Debug (15 min)

* Direct students to the activity instructions found in `02-Stu_Curl_Debug/README.md`.

* Break your students into pairs that will work together on this activity.

    ```md
    # 🐛 curl Command to GitHub API Doesn't Work

    Work with a partner to resolve the following issue(s):

    * As a developer, I want to use `curl` to verify a connection to the GitHub API.

    ## Expected Behavior

    When the command `curl http://api.github.com` is run from the command line, the output includes the following data:

      ```json
      {
        "current_user_url": "https://api.github.com/user",
        "current_user_authorizations_html_url": "https://github.com/settings/connections/applications{/client_id}",
        "authorizations_url": "https://api.github.com/authorizations",
        "code_search_url": "https://api.github.com/search/code?q={query}{&page,per_page,sort,order}",
        "commit_search_url": "https://api.github.com/search/commits?q={query}{&page,per_page,sort,order}",
        "emails_url": "https://api.github.com/user/emails",
        "emojis_url": "https://api.github.com/emojis",
        "events_url": "https://api.github.com/events",
        "feeds_url": "https://api.github.com/feeds",
        "followers_url": "https://api.github.com/user/followers",
        "following_url": "https://api.github.com/user/following{/target}",
        "gists_url": "https://api.github.com/gists{/gist_id}",
        "hub_url": "https://api.github.com/hub",
        "issue_search_url": "https://api.github.com/search/issues?q={query}{&page,per_page,sort,order}",
        "issues_url": "https://api.github.com/issues",
        "keys_url": "https://api.github.com/user/keys",
        "label_search_url": "https://api.github.com/search/labels?q={query}&repository_id={repository_id}{&page,per_page}",
        "notifications_url": "https://api.github.com/notifications",
        "organization_url": "https://api.github.com/orgs/{org}",
        "organization_repositories_url": "https://api.github.com/orgs/{org}/repos{?type,page,per_page,sort}",
        "organization_teams_url": "https://api.github.com/orgs/{org}/teams",
        "public_gists_url": "https://api.github.com/gists/public",
        "rate_limit_url": "https://api.github.com/rate_limit",
        "repository_url": "https://api.github.com/repos/{owner}/{repo}",
        "repository_search_url": "https://api.github.com/search/repositories?q={query}{&page,per_page,sort,order}",
        "current_user_repositories_url": "https://api.github.com/user/repos{?type,page,per_page,sort}",
        "starred_url": "https://api.github.com/user/starred{/owner}{/repo}",
        "starred_gists_url": "https://api.github.com/gists/starred",
        "user_url": "https://api.github.com/users/{user}",
        "user_organizations_url": "https://api.github.com/user/orgs",
        "user_repositories_url": "https://api.github.com/users/{user}/repos{?type,page,per_page,sort}",
        "user_search_url": "https://api.github.com/search/users?q={query}{&page,per_page,sort,order}"
      }
      ```

    ## Actual Behavior

    The command `curl http://api.github.com` does not print any data to the command line.

    ## Steps to Reproduce the Problem

    1. Open a command-line window.

    2. Type `curl http://api.github.com`.

    3. Press the Enter key.

    ---

    ## 💡 Hints

    How might the official GitHub API documentation shed light on what the problem could be?

    ## 🏆 Bonus

    If you have completed this activity, work through the following challenge with your partner to further your knowledge:

      * If you wanted to save your `curl` response text to a file, how would you do so?

    Use [Google](https://www.google.com) or another search engine to research this.
    ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help.

### 9. Instructor Review: curl Debug (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with `curl`? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

  * ✔️ Typos preventing responses

* Open the [GitHub documentation on REST endpoints](https://docs.github.com/en/rest/overview/resources-in-the-rest-api#root-endpoint) and explain the following:

  * 🔑  Simple typos will prevent requests from hitting the proper endpoint, yielding no results. In the following example, when we examine the URL, we can see that it is using `http` instead of `https`:

    ```bash
    curl http://api.github.com
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What would we reference to know whether the API URL is correct?

  * 🙋 The API documentation.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [GitHub documentation on REST endpoints](https://docs.github.com/en/rest/overview/resources-in-the-rest-api#root-endpoint), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

## 10. Instructor Demo: Create Fetch (5 min)

* Open `03-Ins_Demo-Fetch/index.html` in your browser and demonstrate the following:

  * 🔑 When we press the Click Me button, a list of Node.js GitHub repositories appears.
  
* Open `03-Ins_Demo-Fetch/assets/js/script.js` in your IDE and demonstrate the following:
  
  * We set the request URL to a variable. This is the URL that the `fetch()` method will use to request data. The path we are making a request to here is `/orgs/nodejs/repos`, as shown in the following code:

    ```js
    var requestUrl = 'https://api.github.com/orgs/nodejs/repos';
    ```

  * 🔑 We pass the `requestUrl` variable as an argument to the `fetch()` method, as shown in the following example:

    ```js
    fetch(requestUrl)
    ```

  * 🔑 We then convert the response into JSON and return the formatted response, as follows:

    ```js
    .then(function (response) {
      return response.json();
    })
    ```

    * **JSON** stands for **JavaScript Object Notation**. It is nothing more than the use of simple JavaScript objects to exchange data between the client and server. This makes the data easier to read and understand.

  * The preceding code should return the following response:

      ```json
      {
        "firstName": "Lashawn",
        "lastName": "Williams",
        "age": 40,
        "email":"lashawnwilliams@example.com"
      }
      ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What do we need to pass through `fetch()` to get an API to send back data?

  * 🙋 We need a proper endpoint, as provided by the documentation.

  * ☝️ How is a request like this useful?

  * 🙋 It allows developers to quickly access all the data of a particular GitHub organization or consume all the data from any available endpoint.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `04-Stu_Create-Fetch/README.md`.

### 11. Student Do: Create Fetch (15 min) 

* Direct students to the activity instructions found in `04-Stu_Create-Fetch/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🏗️ Implement a fetch() Request to Display User Repositories

  Work with a partner to implement the following user story:

    * As a user, I want to see a list of my GitHub repositories.

  ## Acceptance Criteria

    * It's done when I click the "Fetch Your User Repos" button, and a list of my GitHub repositories displays on the page.

  ## Assets

  The following image demonstrates the web application's appearance and functionality:

  ![The web page shows a user's GitHub repositories when the button is selected.](./Images/01-solution-screenshot.png)

  ---

  ## 💡 Hints

  * How can we use the [GitHub API documentation on repositories](https://docs.github.com/en/rest/reference/repos#list-repositories-for-a-user) to support this implementation?

  * Where in the URL string is the repository endpoint added?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * In `fetch()` requests we use the URL. What is the difference between a URL and URI? 

  Use [Google](https://www.google.com) or another search engine to research this.

  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help.

### 12. Instructor Review: Create Fetch (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel creating a Fetch request? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

  * ✔️ Root endpoint + path  = endpoint

  * ✔️ `/users/octocat/repos`

* Open `04-Stu_Create-Fetch/Solved/assets/js/script.js` in your IDE and explain the following:

  * We create a function called `getApi`, as follows:

    ```js
    function getApi() {
    ```

  * 🔑 We save the full endpoint we would like to make a request to in a variable called `requestUrl`, replacing `octocat` with the username we want to search, as shown in the following example:

    ```js
    var requestUrl = 'https://api.github.com/users/octocat/repos';
    ```

  * We then pass the `requestUrl` variable as an argument to the `fetch()` method, like in the following code:

    ```js
    fetch(requestUrl)
    ```

  * We convert the response into JSON. Lastly, we `return` the JSON-formatted response, as follows:

    ```js
    .then(function (response) {
      return response.json();
    })
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do we build the `requestURL`?

  * 🙋 We attach the desired endpoint to the root endpoint.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [GitHub documentation on REST](https://docs.github.com/en/rest), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 13. Instructor Demo: Different APIs (5 min)

* Open `05-Ins_Different_APIs/assets/js/script.js` in your IDE and demonstrate the following:

  * There is more than one way to request data from a server-side API.
    
  * 🔑 An `XMLHttpRequest`, or XHR for short, was the predecessor to `fetch()`. XHR requests involve much more code than a simple `fetch()`, as shown in the following code: 

    ```js
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        console.log('XMLHttpRequest Response \n-------------');
        console.log(xhr.response);
      }
    };
    xhr.open('GET', requestUrl);
    xhr.send();
    ```

  * 🔑 AJAX is another alternative to the Fetch API. AJAX requests require the use of the third-party library jQuery to work, as shown in the following example:
  
    ```js
    $.ajax({
      url: requestUrl,
      method: 'GET',
    }).then(function (response) {
      console.log('Ajax Reponse \n-------------');
      console.log(response);
    });
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why are we only using `fetch()` if there are all these other options?

  * 🙋 `fetch()` is simple and fast, and it requires no third-party libraries&mdash;enabling us to get up and running quickly!

  * ☝️ How do we learn about these different methods of making API requests?

  * 🙋 We can read their documentation.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `06-Stu_Reverse_APIs/README.md`.

### 14. Student Do: Reverse API Calls (15 min)

* Direct students to the activity instructions found in `06-Stu_Reverse_APIs/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📐 Add Comments to Implementation of Different Request Methods

  Work with a partner to add comments describing the functionality of the code found in [Unsolved/assets/js/script.js](./Unsolved/assets/js/script.js).

  ---

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * Whenever we do a `fetch()` request, it goes through the DNS system. What is DNS?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help.

### 15. Instructor Review: Reverse API Calls (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with API calls? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

  * ✔️ Different API calls

  * ✔️ XHR

  * ✔️ AJAX

* Open `06-Stu_Reverse_APIs/Solved/assets/js/script.js` in your IDE and explain the following: 

  * 🔑 With XHR, we first check whether `xhr.readyState` equals `XMLHttpRequest.DONE`, as follows:

    ```js
    if (xhr.readyState === XMLHttpRequest.DONE) {
    ```

  * 🔑 When the preceding condition is met, we log the XHR response, as shown in the following example:

    ```js
      console.log('XMLHttpRequest Response \n-------------');
      .log(xhr.response);
    }
    ```

  * 🔑 XHR initializes the API call with `.open` and sends the request with `.send`, like in the following code:

    ```js
    xhr.open('GET', requestUrl);
    xhr.send();
    ```

  * 🔑 jQuery uses `.ajax` to send the request to the API. On completion, the response is returned, as shown in the following example:

    ```js
    $.ajax({
      url: requestUrl,
      method: 'GET',
    }).then(function (response) {
      console.log('Ajax Response \n-------------');
      console.log(response);
    });
    ```

  * 🔑 AJAX and `fetch()` are structured similarly but do not function exactly the same. `fetch()` would try to resolve the response with a 404 or 500 error, while AJAX would not, as shown in the following example:

    ```js
    fetch(requestUrl)
        .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log('Fetch Response \n-------------');
        console.log(data);
    });
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is the difference between AJAX and `fetch()`?

  * 🙋 `fetch()` will try to resolve the data even if there is a 404 or 500 error, and it is built into the browser.

  * ☝️ What can we do if we are working with an API method we aren't familiar with?

  * 🙋 Look up that method's documentation.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [jQuery documentation on AJAX](https://api.jquery.com/category/ajax/) or the [MDN Web Docs on XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 16. Instructor Demo: Parse JSON (5 min)

* Open `07-Ins_Demo_Parse/index.html` in your browser to the console. Expand the array under GitHub Organization Users, and demonstrate the following:

  * 🔑 We need to examine the API response to know how to access the data we want to extract.

  * 🔑 The response we receive is an array, meaning that we can loop through the data, accessing whatever specific data we want, as shown in the following code:

    ```js
    fetch('https://api.github.com/orgs/nodejs/repos')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        console.log(data[i].name);
      }
    });
    ```
  
* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How can we iterate over an array of data?

  * 🙋 We can use a `for` loop, just like always!

  * ☝️ What should we do before we use the data from an API response?

  * 🙋 We should examine the data so that we know which values we want from it.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `08-Stu_Parse_JSON/README.md`.

### 17. Student Do: Parse JSON (15 min) 

* Direct students to the activity instructions found in `08-Stu_Parse_JSON/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📖 Implement a `fetch()` Request to Log Repository Issues

  Work with a partner to implement the following user story:

    * As a developer, I want to log issues from Twitter's Chill repository.

  ## Acceptance Criteria

    * It's done when I open Chrome DevTools, and five issues from the Chill repository are logged in the console.

    * It's done when the issue's URL and username are logged in the DevTools console.

  ## 📝 Notes

  Refer to the documentation: 

  [GitHub API documentation on listing repository issues](https://docs.github.com/en/rest/reference/issues#list-repository-issues)

  ---

  ## 💡 Hints

  How do you add parameters to an API endpoint URL?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * We connect to these API servers through DNS, but they are attached to an IP address. How does this work?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help.

### 18. Instructor Review: Parse JSON (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with reading documentation? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points below to review the following key (🔑) points:

  * ✔️ Response limits

  * ✔️ Parameters dictate responses

  * ✔️ Documentation for parameters

* Navigate to the [GitHub documentation on listing repository issues](https://docs.github.com/en/rest/reference/issues#list-repository-issues), and explain the following:

  * Scroll to the parameters list. We can use the `per_page` parameter to limit the amount of data that comes back in the response.

* Open [script.js](./Solved/assets/js/script.js) in your IDE and explain the following: 

  * 🔑 We add the `per_page` parameter to the end of the `requestUrl` variable and set the parameter to `5`, as follows:

    ```js
    var requestUrl = 'https://api.github.com/repos/nodejs/node/issues?per_page=5';
    ```

  * 🔑 We pass the completed `requestUrl` variable as an argument to the `fetch()`. On completion of the request, we convert the response to JSON in the return, like in the following code:

    ```js
    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    ```

  * 🔑 We loop through the data and console log the properties from the API response. We use dot notation on the `data` iterator, logging the `.url` and `.user.login` properties, as follows:

    ```js
    .then(function (data) {
        for (var i = 0; i < data.length; i++) {
            .log('Github Repo Issues \n----------');
            console.log(data[i].url);
            console.log(data[i].user.login);
        }
    });
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Where are parameters added to an endpoint?

  * 🙋 They are normally chained on the end of the endpoint URL.

  * ☝️ Where do we find a list of parameters for a given endpoint?

  * 🙋 It can almost always be found on the documentation page.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [GitHub documentation on the REST API](https://docs.github.com/en/rest), and stick around for office hours to ask for help.

* Answer any questions before ending the class.

### 20. END (0 min)

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this [anonymous survey](https://forms.gle/RfcVyXiMmZQut6aJ6).

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
