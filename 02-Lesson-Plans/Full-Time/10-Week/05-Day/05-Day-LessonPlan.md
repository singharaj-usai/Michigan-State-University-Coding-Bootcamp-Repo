# 10.5 Full-Time Lesson Plan: React Styles, Conditional Rendering, and Testing

## Overview

In this lesson, you will teach students how to style React components, use conditional rendering, and test React components. All of these concepts will bring them closer to building their first React app.

## Instructor Notes

* In this lesson, students will complete activities `21-Ins_React-Style` through `28-Stu_Mini-Project`.

* Today's in-class activities will use `00-practice-app` once again. Be sure to copy the `/src` directory for each activity or use the `sswap` command to swap the directories.

* Remind students to do a `git pull` of the class repo and to have today's activities ready and open in VS Code.

* If you are comfortable doing so, live-code the solutions to the activities. If not, just use the solutions provided and follow the prompts and talking points for review.

* Let students know that the Bonus at the end of each activity is not meant to be extra coding practice, but instead is a self-study on topics beyond the scope of this module for those who want to further their knowledge.

* If the students struggle with the Everyone Do: GitHub Pages activity, walk through it with them using the talking points provided. Otherwise, support the students as they do the activity and do a brief review at the end.

## Learning Objectives

By the end of class, students will be able to:

* Style React components using inline styles and React's built-in options.

* Build dynamic components that conditionally render based on the state of their app.

* Test React components to ensure that their applications are resilient.

## Time Tracker

| Start   | #   | Activity Name                            | Duration |
| ------- | --- | ---------------------------------------- | -------- |
| 10:00AM | 1   | Instructor Do: Stoke Curiosity           | 0:10     |
| 10:10AM | 2   | Instructor Demo: React Style             | 0:05     |
| 10:15AM | 3   | Student Do: React Style                  | 0:15     |
| 10:30AM | 4   | Instructor Review: React Style           | 0:10     |
| 10:40AM | 5   | Instructor Demo: Conditional Rendering   | 0:05     |
| 10:45AM | 6   | Student Do: Conditional Rendering        | 0:15     |
| 11:00AM | 7   | Instructor Review: Conditional Rendering | 0:10     |
| 11:10AM | 8   | Instructor Demo: Testing                 | 0:05     |
| 11:15AM | 9   | Student Do: Testing                      | 0:15     |
| 11:30AM | 10  | Instructor Review: Testing               | 0:10     |
| 11:40AM | 11  | Everyone Do: Github Pages                | 0:20     |
| 12:00PM | 12  | BREAK                                    | 0:30     |
| 12:30PM | 13  | Instructor Demo: Mini Project            | 0:05     |
| 12:35PM | 14  | Student Do: Mini Project                 | 0:60     |
| 1:35PM  | 15  | Instructor Review: Mini Project          | 0:10     |
| 1:45PM  | 16  | Introduce Challenge                      | 0:05     |
| 1:50PM  | 17  | FLEX                                     | 0:40     |
| 2:30PM  | 18  | End                                      | 0:00     |

---

## Class Instruction

### 1. Instructor Do: Stoke Curiosity (10 min)

* Welcome students to class.

* Ask students if they have ever noticed that some websites behave differently based on whether or not they are logged in. This is called **conditional rendering**.

* A few examples include Netflix, Instagram, and Amazon. Students may have even built this functionality into one of their own apps.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What do you think is the purpose of this kind of conditional functionality? How might it benefit developers and users?

  * 🙋 Conditional rendering provides different views or functionality based on the state of the application. If a user is signed in, they might have more options available to them based on their location or their permissions. For example, in the case of Netflix, developers might want to conditionally render a set of movies based on whether the content is available in that user's country.

  * ☝️ What websites do you visit on a daily basis that use conditional rendering?

  * 🙋 A few examples include Twitter, Facebook, Reddit, and almost anything that requires an account to log in.

  * ☝️ Can you think of some other examples of where conditional rendering might be used inside an application?

  * 🙋 The most common example is having different views for authenticated and non-authenticated users. This will often dictate what options are available to the user in the navigation bar of an app.

* Explain to students that we will use conditional rendering in React apps so that they behave differently depending on whether the user is logged in or not.

* Reassure students that the syntax that they will use might look odd at first, but remind them that it is nothing more than a series of glorified `if` statements. The statements that they will use are **ternary operators**, which are not new but can look confusing within the context of JSX.

* Let students know that React is a lot to digest and it's perfectly okay if it doesn't make sense just yet. Just like everything else that we are learning about web development, we will explore one concept at a time and ensure that we are all on the same page.

  * We will delve into conditional rendering in a bit, but for now let's review ways to make apps look nice by styling React components.

### 2. Instructor Demo: React Style (5 min)

* Begin by deleting `00-practice-app/src` and replacing it with `21-Ins_React-Style/src`.

* Run `npm start` from the command line and demonstrate the following:

  * 🔑 This page has what appears to be different CSS styles applied to different elements.

  * Also, the folder structure for this app includes a `00-practice-app/src/styles` folder that contains style sheets for the `Header` and `Navbar` components.

* Open `00-practice-app/src/components/Header.js` in your IDE and demonstrate the following:

  * In this file, we are importing a `.css` file directly into the component by using an import statement:

    ```js
    import "../styles/Header.css";
    ```

  * This allows us to reference a class name in this style sheet in the `<header>` element.

  * 🔑 Remember that when dealing with JSX, we must reference CSS class names with the attribute `className` instead of the typical plain-JavaScript `class` attribute:

    ```js
    function Header() {
      return (
        <header className="header">
          <h1>Home</h1>
        </header>
      );
    }
    ```

* Open `00-practice-app/src/components/Navbar.js` in your IDE and demonstrate the following:

  * In this component, we are applying some styles -- but instead of importing a `.css` file directly into the component, we declare a `styles` object.

  * 🔑 When creating styles in `JSX`, we use camelCase for two-word property names.

  * 🔑 When creating style objects, we use strings for the value for attributes:

    ```js
    const styles = {
      card: {
        margin: 20,
        background: '#e8eaf6',
      },
      heading: {
        background: '#9a74db',
        minHeight: 50,
        lineHeight: 3.5,
        fontSize: '1.2rem',
        color: 'white',
        padding: '0 20px',
      },
    };
    ```

  * In code, we would refer to these styles with the `style` attribute set to the value of the specific property in the object. Here, we use curly braces to denote that we want to write some JavaScript inside the JSX. Next, we access those properties like a normal JavaScript object using dot notation:

    ```js
    function Navbar() {
      return (
        <div style={styles.card}>
          <div style={styles.heading}>Home</div>
        </div>
      );
    }
    ```

* Open `00-practice-app/src/components/Card.js` in your IDE and demonstrate the following:

  * In this component, we have a `styles` object similar to the one in the `Navbar` component:

    ```js
    const styles = {
      card: {
        margin: 20,
        background: '#e8eaf6',
      },
      heading: {
        background: '#3f51b5',
        minHeight: 50,
        lineHeight: 3.5,
        fontSize: '1.2rem',
        color: 'white',
        padding: '0 20px',
      },
      content: {
        padding: 20,
      },
    };
    ```

  * Again, we refer to the style that we wrote as an object using dot notation inside curly braces:

    ```js
    return (
      <div style={styles.card}>
        <div style={styles.heading}>Lorem ipsum dolor</div>
        <div style={styles.content}>
          `Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
          illo inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
          odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
          quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
          eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
          voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
          corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
          Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
          quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
          voluptas nulla pariatur?`
        </div>
      </div>
    )
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 We could style the React component by either importing a style sheet and referencing them by `className`, or we could write inline styles by referencing their properties in a JavaScript object.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `22-Stu_React-Style/README.md`.

### 3. Student Do: React Style (15 min)

* Direct students to the activity instructions found in `22-Stu_React-Style/README.md`.

* Break students into pairs that will work together on this activity.

  ```md
  # 📖 Implement React Styling

  ## Before We Begin

  Before you begin this activity, complete the following steps:

  1. Delete the `/src` folder in [00-practice-app](../00-practice-app/).

  2. Copy the `/src` folder from [Unsolved](./Unsolved/) and paste it into [00-practice-app](../00-practice-app/).

  ## Activity

  Work with a partner to implement the following user story:

  * As a developer, I want to know how to style a React component using built-in options.

  ## Acceptance Criteria

  * It's done when I have added inline styles to the `Header`, `Navbar`, and `Section` components.

  * It's done when I have updated each component so that the rendered page looks like the [inline styled example](Images/02-InlineStyled.png), using only inline styles and without altering any of the CSS files.

  ## 📝 Notes

  Refer to the documentation:

  * [React Docs on style](https://reactjs.org/docs/dom-elements.html#style)

  * [React Enlightenment guide to additional styling](https://www.reactenlightenment.com/react-jsx/5.6.html)

  ## Assets

  The following images demonstrates the web application's appearance and functionality:

  ### Before

  ![The original page features purple and pink backgrounds in different sections.](Images/01-InitialPage.png)

  ### After

  ![The newly styled page features green, red, and yellow backgrounds and buttons that have been aligned with each other.](Images/02-InlineStyled.png)

  ---

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What are some other ways that you can style a component in React?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 4. Instructor Review: React Style (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with styling components in React? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ Importing style sheets vs. inline styling

  * ✔️ Object styles

* Open `00-practice-app/src/components/Header.js` in your IDE and explain the following:

  * We want the header component to look like the final mockup. We also know, per the instructions, that we are only allowed to use inline styling.

  * First, we notice that the `background` color and the `fontSize` need to be changed, so we create a new object that contains the new style for those properties:

    ```js
    const styles = {
      headerStyle: {
        background: 'red',
      },
      headingStyle: {
        fontSize: '100px',
      },
    };
    ```

  * Next, we reference the style object in the `style` attribute in the element. Remember to wrap all JavaScript in curly braces when working with JSX:

    ```js
    function Header() {
      return (
        <header style={styles.headerStyle} className="header">
          <h1>Welcome</h1>
        </header>
      );
    }
    ```

* Open `00-practice-app/src/components/Navbar.js` in your IDE and explain the following:

  * In the `Navbar` component, we add some style to change the background to green and change `justifyContent` to `flex-end`:

    ```js
    const styles = {
      navbarStyle: {
        background: "green",
        justifyContent: "flex-end"
      }
    };
    ```

  * Next, we reference the style object in the `style` attribute in the `nav` element and reference the style in curly braces:

    ```js
    function Navbar() {
      return (
        <nav style={styles.navbarStyle} className="navbar">
          <a href="/">Welcome</a>
        </nav>
      );
    }
    ```

* Open `00-practice-app/src/components/Section.js` in your IDE and explain the following:

  * In the `section` component, we had to add some style to change the `background` to orange:

    ```js
    const styles = {
      sectionStyles: {
        background: 'orange',
      },
    };
    ```

  * Next, we reference the style object in the `style` attribute in the `section` element and reference the style in curly braces:

    ```js
    function Section() {
      return (
        <section style={styles.sectionStyles} className="section">
        ...
      )
    }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are the benefits of importing style sheets instead of declaring styles inline?

  * 🙋 Importing style sheets makes React apps render more quickly and efficiently, according to the official documentation. In most cases, `className` should be used to reference styles in an external style sheet.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [React Docs on styling and CSS](https://reactjs.org/docs/faq-styling.html), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 5. Instructor Demo: Conditional Rendering (5 min)

* Begin by deleting `00-practice-app/src` and replacing it with `23-Ins_Conditional-Rendering/src`.

* Run `npm start` from the command line and demonstrate the following:

  * 🔑 When we run the application, it displays a page with a message and login button.

  * 🔑 When the user clicks the login button, the button text changes from "log in" to "log out". Additionally, the message at the top of the page updates.

* Open `00-practice-app/src/App.js` in your IDE and demonstrate the following:

  * In the `App` component, we set the initial state using the `useState` Hook.

  * 🔑 We do this because we want the parent component to hold the state variables and any methods associated with it at the top level of the application and simply pass them to children as props.

  * We create a `loggedIn` variable and a function to update it, `setLoggedIn()`. We also give it an initial value of `false`:

     ```js
     const [loggedIn, setLoggedIn] = useState(false);
     ```

  * We import `Welcome` at the top of the `App` component. Also, to use the `useState` Hook, we must import it with React:

     ```js
     import React, { useState } from 'react';
     import Welcome from './components/Welcome';
     ```

  * The return statement for the `App` component contains a `Welcome` component as well as props for the state variable, `loggedIn`, and the function to update it, `setLoggedIn()`:

     ```js
     return <Welcome loggedIn={loggedIn} setLoggedIn={setLoggedIn} />;
     ```

* Open `00-practice-app/src/components/Welcome.js` in your IDE and demonstrate the following:

  * The `Welcome` component is another functional component, but this time it is being directly exported. This syntax looks a little different, but it is essentially the same as exporting it at the bottom like we typically do with components.

  * Also, we use object destructuring assignment to assign `loggedIn` and `setLoggedIn()` to their own variable names. This is an alternative to passing `props` and then referring to variables with dot notation:

     ```js
     export default function Welcome({ loggedIn, setLoggedIn }) { ... }
     ```

  * 🔑 This next bit of code is where conditional rendering becomes relevant. We want the component to behave differently if the user is logged in, so we set up a ternary operator to check whether the user is logged in.

  * If the value of `loggedIn` is truthy, we render a `div` with a message that says the user is signed in. Additionally, we change the button text to sign out.

  * If the value of `loggedIn` is falsy, we render a message that says "You are currently logged out". We also set the button text to "Log in":

     ```js
     return (
         <div>
           {loggedIn ? (
             <div>
               <span role="img" aria-label="tada">
                 🎉
               </span>
               <h3>You are signed in!</h3>
               <button type="button" onClick={() => setLoggedIn(!loggedIn)}>
                 Log out
               </button>
             </div>
           ) : (
             <div>
               <span role="img" aria-label="stopsign">
                 🛑
               </span>
               <h3>You are currently logged out</h3>
               <button type="button" onClick={() => setLoggedIn(!loggedIn)}>
                 Log in
               </button>
             </div>
           )}
         </div>
       );
     ```

  * We can also see that the `onClick` event listeners fire an anonymous function that inverts the value of `loggedIn` whenever the button is clicked by calling on the `setLoggedIn()` method:

     ```jsx
     <button type="button" onClick={() => setLoggedIn(!loggedIn)}>
     ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is the key piece of ES6 syntax that we use for conditional rendering in React?

  * 🙋 We would create a ternary operator inside the JSX to determine what to render.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `24-Stu_Conditional-Rendering/README.md`.

### 6. Student Do: Conditional Rendering (15 min)

* Direct students to the activity instructions found in `24-Stu_Conditional-Rendering/README.md`.

* Break your students into pairs that will work together on this activity.

   ```md
   # 📐 Add Comments to Implementation of Conditional Rendering

   ## Before We Begin

   Before you begin this activity, complete the following steps:

   1. Delete the `/src` folder in [00-practice-app](../00-practice-app/).

   2. Copy the `/src` folder from [Unsolved](./Unsolved/) and paste it into [00-practice-app](../00-practice-app/).

   3. This project uses Bootstrap, so don't forget to import it inside `index.js`:

     `import 'bootstrap/dist/css/bootstrap.min.css'`

   ## Activity

   Work with a partner to add comments that describe the functionality of the code found in the [PortfolioContainer](../00-practice-app/src/components/PortfolioContainer.js) and [NavTabs](../00-practice-app/src/components/NavTabs.js) components.

   ## 📝 Notes

   Refer to the documentation:

   * [React Docs on conditional rendering](https://reactjs.org/docs/conditional-rendering.html)

   ---

   ## 🏆 Bonus

   If you have completed this activity, work through the following challenge with your partner to further your knowledge:

   * Can you think of some scenarios where conditional rendering would be beneficial?

   Use [Google](https://www.google.com) or another search engine to research this.
   ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 7. Instructor Review: Conditional Rendering (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with conditional rendering in React? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ Ternary operators

  * ✔️ Object destructuring

* Open `00-practice-app/src/components/PortfolioContainer.js` in your IDE and explain the following:

  * This component, `PortfolioContainer`, imports a few other components that will be used in the return method.

  * Also, because we will use the `useState` Hook, we import it using React:

     ```js
     import React, { useState } from 'react';
     import NavTabs from './NavTabs';
     import Home from './pages/Home';
     import About from './pages/About';
     import Blog from './pages/Blog';
     import Contact from './pages/Contact';
     ```

  * We declare a state variable called `currentPage` that has an initial value of `Home`. We also provide a state management method as the second item in the array, called `setCurrentPage()`:

     ```js
     const [currentPage, setCurrentPage] = useState('Home');
     ```

  * The `renderPage()` method returns a component based on the value of `currentPage`:

     ```js
     const renderPage = () => {
       if (currentPage === 'Home') {
         return <Home />;
       }
       if (currentPage === 'About') {
         return <About />;
       }
       if (currentPage === 'Blog') {
         return <Blog />;
       }
       return <Contact />;
     };
     ```

  * We update the value of `currentPage` by passing an event handler `handlePageChange()` to the `NavTabs` component. This method accepts one argument (the current page) and then invokes the `setCurrentPage()` method:

     ```js
     const handlePageChange = (page) => setCurrentPage(page);
     ```

  * In the return method, we return the `NavTabs` component while passing `currentPage` and `handlePageChange()` as props. This will allow us to pass down the state variable and a function to update it to the child component:

     ```js
     return (
       <div>
         <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
         {renderPage()}
       </div>
     );
     ```

* Open `00-practice-app/src/components/NavTabs.js` in your IDE and explain the following:

  * 🔑 In the `NavTabs` component, first we use object destructuring to assign `currentPage` and `handleCurrentPage` to their own variable names:

     ```js
     function NavTabs({ currentPage, handlePageChange }) { ... }
     ```

  * In the `return()` method, we are rendering an ordered list and changing the style based on what the current tab is. To do this, we created a ternary statement inside the class attribute.

  * Remember that because we imported Bootstrap into this project, those `className` attributes reference classes that Bootstrap has created for us. We are simply referencing them:

     ```js
     return (
       <ul className="nav nav-tabs">
         <li className="nav-item">
           <a
             href="#home"
             onClick={() => handlePageChange('Home')}
             className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
           >
             Home
           </a>
         </li>
         ...
     )
     ```

  * First, we check whether the `currentPage` is strictly equal to a string, `Home`. If it is, we set the `className` to `nav-link active`. Otherwise, we set it to `nav-link`.

  * 🔑 `nav-link active` is a Bootstrap class and the reason that the selected tab appears with a blue outline.

  * We repeat this logic for every item in the unordered list.

     ```jsx
     className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
     ```

  * Now let's look at the functional components found in `00-practice-app/src/components/pages/`.

* Open `00-practice-app/src/components/pages/Home.js` in your IDE and explain the following:

  * Each of these components found in `components/pages` returns some static JSX.

  * Notice that they do not accept props or perform any sort of conditional rendering logic; they are simply there to return some JSX. This is by design so that we can keep the state and methods contained inside the parent components:

     ```js
     import React from 'react';

     function Home() {
       return (
         <div>
           <h1>Home Page</h1>
           <p>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed neque velit,
             lobortis ut magna varius, blandit rhoncus sem.Morbi lacinia nisi ac du
             fermentum, sed luctus urna tincidunt.Etiam ut feugiat ex.Cras non risu
             mi.Curabitur mattis rutrum ipsum, ut aliquet urna imperdiet ac.Sed ne
             nulla aliquam, bibendum odio eget, vestibulum tortor.Cras rutrum ligu in
             tincidunt commodo.Morbi sit amet mollis orci, in tristique ex.Don nec
             ornare elit.Donec blandit est sed risus feugiat porttitor.Vestibul
             molestie hendrerit massa non consequat.Vestibulum vitae lorem tortor.
             elementum ultricies tempus.Interdum et malesuada fames ac ante ipsum
             primis in faucibus.
           </p>
         </div>
       );
     }

     export default Home;
     ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is the anatomy of a ternary operator? How would you go about writing one?

  * 🙋 The first part is a condition to check for, denoted by the `?`. The second part is the return value if the condition is met. The last part, following the `:`, is the "else" portion. Everything after the `:` would be the return value if the condition wasn't met.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [React Docs on conditional rendering](https://reactjs.org/docs/conditional-rendering.html), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 8. Instructor Demo: React Testing (5 min)

* Begin by deleting `00-practice-app/src` and replacing it with `25-Ins_Testing/src`.

* Run `npm run test` from the command line. Then press `a` to indicate that you want to run all the available tests using a framework called `Jest`.

* The output from your terminal should look something like this:

     ```sh
      PASS  src/components/__tests__/index.test.js
       ✓ renders with or without a name or topic (30 ms)

     Test Suites: 1 passed, 1 total
     Tests:       1 passed, 1 total
     Snapshots:   0 total
     Time:        2.924 s
     Ran all test suites.

     Watch Usage: Press w to show more.
     ```

* Open `00-practice-app/package.json` in your IDE and demonstrate the following:

  * 🔑 Note that `create-react-app` adds a testing script to the `package.json` file. This means that if someone were to run `npm run test`, it will look in the `package.json` file and in turn run whatever is listed in the `scripts` section for `test`:

     ```json
     {
       "scripts": {
         "start": "react-scripts start",
         "build": "react-scripts build",
         "test": "react-scripts test",
         "eject": "react-scripts eject"
       },
     }
     ```

* Open `00-practice-app/src/components/__tests__` in your IDE and demonstrate the following:

  * 🔑 We can also see that we included a `__tests__` directory inside the component's directory. This naming convention is intentional, along with the file names, so that Jest can easily recognize which test files it should run.

  * If we wanted to write a test for a file called `index.js`, we would create a `__tests__` directory inside `/components` and name it using the following convention:

     ```sh
     index.test.js
     ```

* Open `00-practice-app/src/components/__tests__/index.test.js` in your IDE and demonstrate the following:

  * At the top of the test file, we first import some modules from `react-dom/test-utils`. These help us with some very specific tasks, such as rendering components and performing the Arrange-Act-Assert pattern, as well as cleaning up after we run the tests.

  * We also import the actual component that we want to test. In this case, that is the `Welcome` component:

     ```js
     import React from 'react';
     import { render, unmountComponentAtNode } from 'react-dom';
     import { act } from 'react-dom/test-utils';

     import Welcome from '../Welcome';
     ```

  * The first few methods will help us monitor specific events in the components.

  * We first create an empty container and set it as the target for the DOM elements:

     ```js
     let container = null;

     beforeEach(() => {
       container = document.createElement('div');
       document.body.appendChild(container);
     });
     ```

  * We also create a method that cleans up the DOM elements added to memory after the tests conclude, to avoid unnecessarily occupying memory if the test isn't running.

  * This also prevents previous tests from altering the results of current tests by cleaning up afterward:

     ```js
     afterEach(() => {
       unmountComponentAtNode(container);
       container.remove();
       container = null;
     });
     ```

  * Now let's check the actual logic in the tests. We start by creating an `it` block to describe what we are testing.

  * A nice thing about Jest is that most of the methods read like spoken English, which can make them easier to digest:

     ```js
     it('renders with or without a name or topic', () => {
       act(() => {
         render(<Welcome />, container);
       });
       expect(container.textContent).toBe('Hey there!');
       ...
     }
     ```

  * The React documentation recommends wrapping any code that renders or triggers updates to the components into `act()` calls.

  * Inside the `act()` method, we use the `render()` method. This will take a component to render as the first argument, and the target element as a second argument:

     ```js
     act(() => {
       render(<Welcome />, container);
     });
     ```

  * For the last part of this test, we use an `expect.toBe()` method built into Jest to check that the inner content of the component matches what we expect.

  * In this case, the logic of the `Welcome` component states that if no name attribute is provided, it should instead default to a specific message ("Hey there!"):

     ```js
     expect(container.textContent).toBe('Hey there!');
     ```

  * The rest of the test cases are different variations of this same test using the `name` and `topic` attribute passed to the welcome component.

  * As the `expect` statement makes apparent, the component should use the `name` and `topic` props to modify the inner content of the component. That is ultimately what we are testing here:

     ```js
     act(() => {
       render(<Welcome name="Xander" topic="React" />, container);
     });
     expect(container.textContent).toBe(
       'Welcome, Xander! We hope you learn a lot about React.'
     );
     ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 We would first create a `__tests__` folder in the components directory and make sure to use the correct naming convention. Then we would import the necessary testing utilities from `react-dom/test-utils`.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `26-Stu_Testing/README.md`.

### 9. Student Do: React Testing (15 min)

* Direct students to the activity instructions found in `26-Stu_Testing/README.md`.

* Break your students into pairs that will work together on this activity.

  ````md
  # 🏗️ Implement Tests to Ensure React Components Render Properly

  ## Before You Begin

  Before you begin this activity, be sure to add the following line of code to the head section in [00-practiceapp/public/index.html](../00-practice-app/public/index.html):

  ```html
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />
  ```

  ## Activity

  Work with a partner to implement the following user story:

  * As a developer, I want to check whether my components render properly so that I can be confident when I ship the code for production.

  ## Acceptance Criteria

  * It's done when I have run `npm install pretty` inside my practice React app directory.

  * It's done when I have imported the necessary component files into `*.test.js`.

  * It's done when I create a test to check that each component renders properly on the page.

  * It's done when I have created a test to see if each component matches the snapshot.

  ## 💡 Hints

  How can you use the official [React Docs on testing](https://reactjs.org/docs/testing-recipes.html#snapshot-testing) to assist in this exercise?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What types of pitfalls can you and your partner think of that testing can help you avoid in web development?

  Use [Google](https://www.google.com) or another search engine to research this.
  ````

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 10. Instructor Review: React Testing (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with testing React components? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ Arrange-Act-Assert pattern

  * ✔️ Test file/folder structure

* Open `00-practice-app/src/App.js` in your IDE and explain the following:

  * In the `App` component, the application first imports a few components that will be returned later in the component:

     ```js
     import React, { useState, useEffect } from 'react';
     import SearchBar from './components/SearchBar';
     import IssueList from './components/IssueList';
     ```

  * We also import both `useState` and `useEffect`, as these will both be used in the app to manage state and make some minor tweaks to the `document.title`:

     ```js
     const [issues, setIssues] = useState([]);

     useEffect(() => {
       document.title = 'GitHub issues';
     }, []);
     ```

  * This component also contains a method that helps us search for a given repository's current open issues:

     ```js
     const getRepoIssues = (repo) => {
       let issuesURL = `https://api.github.com/repos/${repo}/issues?direction=asc`;
       console.log('issuesURL', issuesURL);
       fetch(issuesURL)
         .then((res) => res.json())
         .then((response) => setIssues(response));
     };
     ```

  * The return method calls on `getRepoIssues()` and passes it down to the `SearchBar` component as a prop.

  * There is also an `IssueList` component that receives the `issues` array as a prop:

     ```js
       return (
         <div className="ui container">
           <SearchBar onFormSubmit={getRepoIssues} />
           <div className="ui grid">
             <div className="ui row">
               <div className="eleven wide column">
                 <IssueList issues={issues} />
               </div>
             </div>
           </div>
         </div>
       );
     ```

* Open `00-practice-app/src/components/SearchBar.js` and briefly review the code in this component.

  * The `SearchBar` component is responsible for rendering the search bar and also managing the current search term that the user enters:

    ```js
    import React, { useState } from 'react';

    function SearchBar({ onFormSubmit }) {
      const [term, setTerm] = useState('microsoft/vscode');
      console.log('SearchBar -> term', term);

      const sendTerm = (e) => {
        e.preventDefault();

        onFormSubmit(term);
      };

      return (
        <div className="search-bar ui segment">
          <form className="ui form" onSubmit={sendTerm}>
            <div className="field">
              <label>Retrieve GitHub Issues</label>
              <input
                type="text"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                placeholder="facebook/react"
              />
            </div>
          </form>
        </div>
      );
    }

    export default SearchBar;
    ```

* Open `00-practice-app/src/components/IssueList.js` and briefly review the code in this component.

  * The `IssueList` component is responsible for taking the array of issues that we received from the GitHub API and mapping over them to return an `IssueItem` component:

    ```js
    import React from 'react';
    import IssueItem from '../components/IssueItem';

    const IssueList = ({ issues }) => {
      console.log('IssueList -> issues', issues);
      const renderedList = issues.map((issue) => {
        return <IssueItem key={issue.id} issue={issue} />;
      });

      return <div className="ui relaxed divided list">{renderedList}</div>;
    };

    export default IssueList;
    ```

* Open `00-practice-app/src/components/IssueItem.js` and briefly review the code in this component.

  * The `IssueItem` component is responsible for taking the data passed down for each issue and rendering some JSX with the issue title:

    ```js
    import React from 'react';

    const IssueItem = ({ issue }) => {
      return (
        <div className="item">
          <i className="large github middle aligned icon"></i>
          <div className="content">
            <a
              className="header"
              href={issue.html_url}
              target="_blank"
              rel="noreferrer"
            >
              {issue.title}
            </a>
            <div className="description">{issue.description}</div>
          </div>
        </div>
      );
    };

    export default IssueItem;
    ```

* Open `00-practice-app/src/components/__tests__/SearchBar.test.js` and briefly review the code in this component.

  * The test component for the `SearchBar` component first requires us to import the testing framework and also the component that we are testing.

  * We also make use of a package called `pretty` with our test snapshots to make the output more readable.

     ```js
    import React from "react";
    import { render, unmountComponentAtNode } from "react-dom";
    import { act } from "react-dom/test-utils";
    import pretty from 'pretty';
    import SearchBar from "../SearchBar";
     ```

  * First we use the `render()` method to make sure that the component renders properly.

  * The second argument of the render method is the DOM node that we want to render the component to.

    ```js
    describe('SearchBar', () => {
      it('should render and match snapshot', () => {
        act(() => {
          render(<SearchBar />, container);
        });
    ```

  * Inside the same `it()` block, we format the rendered output using the `pretty` package and compare it to the snapshot.

  * 🔑 Snapshots are markups of how the DOM should look when the component is rendered. They are generated when the tests are run and are stored in a `snapshots` folder in the same directory as the test:

    ```js
    describe('SearchBar', () => {
      it('should render and match snapshot', () => {
        act(() => {
          render(<SearchBar />, container);
        });

        const html = pretty(container.innerHTML);

        expect(html).toMatchSnapshot();
      });
    });
    ```

* Open `00-practice-app/src/components/__tests__/IssueList.test.js` and briefly review the code in this component.

  * In the `IssueList.test.js` file, we first import the component we are testing, the testing framework, and the `pretty` package to make the output more readable.

    ```js
    import React from 'react';
    import { render, unmountComponentAtNode } from 'react-dom';
    import { act } from 'react-dom/test-utils';
    import pretty from 'pretty';
    import IssueItem from '../IssueItem';
    ```

  * First we render the component to our target container.

    ```js
    describe('IssueList', () => {
      it('should render', () => {
        act(() => {
          render(<IssueList issues={issues} />, container);
        });
    ```

  * Then we use the `pretty` package to format the output of the rendered component. We then assert that the output matches the snapshot.

  * Notice how we are passing the issues array as a prop to the `IssueList` component. This is because the `IssueList` component is responsible for mapping over the array of issues and rendering the `IssueItem` component.

  ```js
  describe('IssueList', () => {
  it('should render', () => {
    act(() => {
      render(<IssueList issues={issues} />, container);
    });

    const html = pretty(container.innerHTML);

    expect(html).toMatchSnapshot();
  });
  ```

* Open `00-practice-app/src/components/__tests__/IssueItem.test.js` and briefly review the code in this component.

  * We first import the `IssueItem` and `IssueList` component, our testing framework, and the `pretty` package to make the output more readable:

    ```js
    import React from 'react';
    import { render, unmountComponentAtNode } from 'react-dom';
    import { act } from 'react-dom/test-utils';
    import pretty from 'pretty';
    import IssueItem from '../IssueItem';
    ```

  * Using the sample issue provided in the testing component, we then check to see if the component contains the title text of the issue:

    ```js
    describe('IssueItem', () => {
      const issue = {
        url: 'https://api.github.com/repos/microsoft/vscode/issues/68',
        html_url: 'https://github.com/microsoft/vscode/issues/68',
        id: 117635943,
        node_id: 'MDU6SXNzdWUxMTc2MzU5NDM=',
        number: 68,
        title: 'Git: Support git history in VSCode',
      };

      it('should contain the expected text', () => {
        act(() => {
          render(<IssueItem key={issue.id} issue={issue} />, container);
        });
        expect(container.textContent).toBe('Git: Support git history in VSCode');
      });
    ```

  * Once again, we render the component to our target container and assert that the pretty output matches the snapshot.

    ```js
      it('should match snapshot', () => {
        act(() => {
          render(<IssueItem key={issue.id} issue={issue} />, container);
        });
        expect(pretty(container.innerHTML)).toMatchSnapshot();
      });
    });
    ```

* Navigate to `00-practice-app` in the terminal and demonstrate the following:

  * Finally, let's run the tests to check that everything works:

     ```sh
     npm run test
     ```

  * 🔑 After running this command, we can press the `a` key to tell Jest to run not just one but all the tests it finds in the project. We should see an output of something like this:

     ```sh
     Test Suites: 3 passed, 3 total
     Tests:       6 passed, 6 total
     Snapshots:   3 passed, 3 total
     Time:        4.358 s, estimated 5 s
     ```

  * It looks like all of the tests pass!

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why is it beneficial to create tests for the components?

  * 🙋 Building React tests helps us immediately notice whether we've accidentally broken something by adding a line of code. It also saves us time from having to manually check the app after each change.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [React Docs on testing](https://reactjs.org/docs/testing.html), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `27-Evr_Git-Deploy/README.md`.

### 11. Everyone Do: Git (20 min)

* Open the [GitHub Docs on GitHub Pages](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages) in your browser and explain the following:

  * GitHub Pages is a great way to host your React apps with just a few simple modifications to your `package.json` and the `gh-pages` npm package.

  * At the end of this exercise, you will be able to deploy your React apps on your personal GitHub project page with the following naming convention:

     ```sh
     <username>.github.io/<repository name>
     ```

* Direct students to the activity instructions found in `27-Evr_Git-Deploy/README.md`.

* While everyone is working on the activity, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be addressed. It's a good way for your team to prioritize students who need extra help.

* Answer any questions before proceeding.

### 12. BREAK (30 min)

### 13. Instructor Demo: Mini Project (5 min)

* Navigate to `01-Activities/28-Stu_Mini-Project/Main/bucket-list` in your terminal.

* Run `npm start` from the command line and demonstrate the following:

  * 🔑 When we run this React app, the bucket-list app loads on the screen.

  * 🔑 The app we will build will allow users to enter a bucket-list item, assign it a priority, and render a list of bucket-list items to the page.

  * We will use most of the React concepts that we've learned in this module in a fully functional app!

  * This exercise will reinforce your ability to use React to iterate through lists and keys.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What types of React concepts will help us to build this application?

  * 🙋 We can use the `useState` Hook to track the bucket-list items, and we can use the array method `map()` to help render the items to the page.

* Answer any questions before allowing students to start the mini project.

### 14. Student Do: Mini Project (60 min)

* Direct students to the activity instructions found in `01-Activities/28-Stu_Mini-Project/README.md`.

* Break your students into groups that will work together on this activity.

   ```md
   ## Module 20 Mini-Project: Bucket List

   In this mini-project, you are given starter code for a React Bucket List app. Some pieces of the application are not complete, and it is your mission to take what you have learned so far and complete the app.

   This project invites you to use most of the concepts you've learned in this module. You will manage state using the `useState` Hook, pass data as props to child components, and use lists and keys to render a list of bucket-list items.

   ## Activity

   Work with your group to resolve the following issues:

   * As a user, I want to be able to able to enter a bucket-list item.

   * As a user, I want to be able to set the eagerness level of a bucket-list item.

   * As a user, I want to see a list of all my bucket-list items after they are added, with colors that identify their eagerness level.

   * As a user, I want to be able to edit and delete bucket-list items.

   ## Acceptance Criteria

   * It's done when I write logic to add a bucket-list item in `components/BucketList.js`.

   * It's done when I write logic to mark a bucket-list item as complete or incomplete.

   * It's done when I write logic that will remove a bucket-list item from the list.

   * It's done when I write logic to update a bucket-list item in `components/Bucket.js`.

   * It's done when I write logic to render a list of bucket-list items using `map()`.

   * It's done when each bucket-list item has a color that corresponds to the priority or "eagerness" to complete.

   * It's done when each bucket-list item renders a button to edit and delete the item.

   ---

   ## 💡 Hints

   * How can we use string interpolation in `className` attributes to help change the color of the bucket-list items?

   ## 🏆 Bonus

   If you have completed this activity, work through the following challenge with your partner to further your knowledge:

   * Which React Hooks could we use in combination with local storage to make the bucket list persist after refreshes?

   Use [Google](https://www.google.com) or another search engine to research this.
   ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 15. Instructor Review: Mini Project (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with this mini-project? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help.

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `map()`

  * ✔️ Props and data flow

* Open `01-Activities/28-Stu_Mini-Project/Main/bucket-list/src/components/BucketList.js` in your IDE and explain the following:

  * We declared a state variable `bucket` and a function to update it, `setBucket()`, at the top of the component:

     ```js
     const [bucket, setBucket] = useState([]);
     ```

  * First, we have to write the logic for the `addBucketItem()` method that will eventually be passed to the `BucketForm` component:

     ```jsx
     <BucketForm onSubmit={addBucketItem} />
     ```

  * The `addBucketItem()` method accepts one argument, `item`, that will be used in updating the `bucket` state variable.

  * To avoid having empty entries in the list, we return out of this function if the `item.text` value is undefined.

  * Then we create a variable called `newBucket` that will include the content of the `bucket` variable in addition to the `item` that was passed to this method. At the end of the method, we call the state management Hook, `setBucket()`, to update the state:

     ```js
     const addBucketItem = (item) => {
       if (!item.text) {
         return;
       }

       const newBucket = [item, ...bucket];
       setBucket(newBucket);
     };
     ```

  * Next, the `Bucket` component passes some additional methods as props inside the return statement, including the `completeBucketItem()` method:

     ```js
     return (
       <div>
         <h1>What is on your bucket list?</h1>
         <BucketForm onSubmit={addBucketItem} />
         <Bucket
           bucket={bucket}
           completeBucketItem={completeBucketItem}
           removeBucketItem={removeBucketItem}
           editBucketItem={editBucketItem}
         ></Bucket>
       </div>
     );
     ```

  * `completeBucketItem()` will be called when a user clicks on a bucket-list item to mark it as complete. This function accepts one argument of `id`.

  * Inside the method, we create a variable called `updatedBucket` that is set to a new array of items, where the `item.isComplete` property is toggled to either true or false. This happens if the given `item.id` is equal to the `id` that was passed to the method.

  * After we get back the `updatedBucket`, we then update state by passing the new list to the `setBucket()` method:

     ```js
     const completeBucketItem = (id) => {

       let updatedBucket = bucket.map((item) => {
         if (item.id === id) {
           item.isComplete = !item.isComplete;
         }
         return item;
       });

       console.log(updatedBucket);
       setBucket(updatedBucket);
     };
     ```

  * The `removeBucketItem()` method accepts an `id` in a similar fashion. We also created another variable for the updated bucket list called `updatedBucket`.

  * `updatedBucket` is set to a new list that is returned after filtering out items that match the `id` that was passed to the function.

  * We then update the `bucket` state variable with the new list by calling `setBucket(updatedBucket)`:

     ```js
     const removeBucketItem = (id) => {
       const updatedBucket = [...bucket].filter((item) => item.id !== id);

       setBucket(updatedBucket);
     };
     ```

* Open `01-Activities/28-Stu_Mini-Project/Main/bucket-list/src/components/Bucket.js` and demonstrate the following:

  * `Bucket` is a functional component that accepts `props` as an argument.

  * In the `Bucket` component, we first declare a state variable called `edit` as well as a function to update it, called `setEdit()`. This will be used when a user wants to update one of their bucket-list entries.

  * The `edit` variable is an object that has three properties: an `id`, `value`, and `eagerness`. All of these are set to empty, or `null`, to start:

     ```js
     import React, { useState } from 'react';
     import BucketForm from './BucketForm';

     function Bucket(props) {
       const [edit, setEdit] = useState({
         id: null,
         value: '',
         eagerness: '',
       });
     ```

  * We need to create a method for users to update their entries when the update button is clicked. To accomplish this functionality, we created a `submitUpdate()` method that accepts one argument of `value`.

  * The `submitUpdate()` method calls the `editBucketItem()` method to update the bucket-list item. It also sets the `edit` state variable back to empty, or `null`, values in the event that a user wants to update a different entry:

     ```js
     const submitUpdate = (value) => {
       props.editBucketItem(edit.id, value);
       setEdit({ id: null, value: '', eagerness: '' });
     };
     ```

  * The return method first maps through the bucket list that was passed as a prop to the `Bucket` component. We also use the optional `i` variable made available by the `map()` method to track the index of each item in the array.

  * We then added some logic that renders a `div` for each bucket-list item. These elements are assigned a `className` based on their `isComplete` status and `eagerness` level.

  * 🔑 React requires that each item has a key property, so here we use the index variable, `i`, as the key value.

  * Finally, we render a child `div` that contains the text of the bucket-list item in addition to two `p` elements that act as edit and delete buttons. These elements, when clicked, invoke their respective `setEdit()` and `props.removeBucketItem()` methods:

     ```js
      return props.bucket.map((item, i) => (
        <div
          className={
            item.isComplete
              ? `bucket-row complete ${item.eagerness}`
              : `bucket-row ${item.eagerness}`
          }
          key={i}
        >
          <div key={item.id} onClick={() => props.completeBucketItem(item.id)}>
            {item.text}
          </div>
          <div className="icons">
            {console.log(item)}
            <p onClick={() => setEdit({ id: item.id, value: item.text, eagerness: item.eagerness })}> ✏️</p>
            <p onClick={() => props.removeBucketItem(item.id)}> 🗑️</p>
          </div>
        </div>
      ));
     ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why is it important to invoke some `onClick` events with an anonymous function?

  * 🙋 This is so that the function doesn't get called when the component loads. This can cause the app to crash.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [React Docs on lists and keys](https://reactjs.org/docs/lists-and-keys.html), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 16. Instructor Demo: Introduce Challenge (5 min)

* To demonstrate the Challenge, first create a new React app using `npx create-react-app` and transplant the `/public`, `/src`, and `package.json` from `01-Class-Content/20-React/02-Challenge/Main`.

* **Important**: `create-react-app` now automatically uses the latest release of React, version 18. Due to several conflicting packages with React version 18, follow the steps below to ensure that all activities work as intended.

  * Delete the `package-lock.json` file and `node_modules` folder from the `client` directory.

  * Downgrade `react` to 17.0.2 inside of the `package.json` file.

  * Downgrade `react-dom` to 17.0.2 inside of the `package.json` file.

  * Downgrade `@testing-library/react` to ^11.1.0 inside of the `package.json` file.

  * Your `package.json` file should look like the following:

    ```js
    "dependencies": {
        "@testing-library/jest-dom": "^5.16.4",
        "@testing-library/react": "^11.1.0",
        "@testing-library/user-event": "^13.5.0",
        "react": "17.0.2",
        "react-dom": "17.0.2",
        "react-scripts": "5.0.1",
        "web-vitals": "^2.1.4"
    },
    ```

  * Run `npm install` to ensure that your project is now running React version 17.

* After transplanting the files into the newly created React app, be sure to run `npm install`.

* Run `npm start` from the command line and demonstrate the following:

  * Now that you’ve completed multiple projects, your task is to create a portfolio using your new React skills. This will help set you apart from other developers whose portfolios don’t use the latest technologies.

  * Part of this assignment will be to deploy the application to GitHub Pages. To do this, be sure to reference the Git Guide or refer to the [Create React App Docs on GitHub Pages](https://create-react-app.dev/docs/deployment/#github-pages).

  * Demonstrate the application for the students to show how it works.

  * The application should have a single `Header` component that appears on multiple pages.

  * The application should have a single `Navigation` component within the header that will be used to conditionally render the various sections of your portfolio.

  * The application should have a single `Project` component that will be used multiple times in the Portfolio section.

  * The application should have a single `Footer` component that appears on multiple pages.

  * This app doesn't need to include a back end or connect to an API. We will add those features in the coming weeks.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are we learning?

  * 🙋 We are learning how to break the application's UI into components, manage component state, and respond to user events.

  * ☝️ How does this project build on or extend previously learned material?

  * 🙋 This project uses a combination of all the core React concepts that we have touched on in this module, including managing state, rendering JSX, and passing data from parent to child.

  * ☝️ How does this project relate to your career goals?

  * 🙋 Knowing how to build apps using React is key to remaining employer-competitive. This project gives you an opportunity to create a fully featured React app that can show off your projects and your proficiency with React.

* Ask TAs to direct students to the Challenge requirements in `01-Class-Content/20-React/02-Challenge/README.md`.

### 17. FLEX (40 min)

* This time can be utilized for reviewing key topics learned so far in this module or getting started on the Challenge.

* Check if students have any questions about this module. Allow students to get a head start on the Challenge.

* Answer any questions before ending the class.

### 18. END (0 min)

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this [anonymous survey](https://forms.gle/RfcVyXiMmZQut6aJ6).

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
