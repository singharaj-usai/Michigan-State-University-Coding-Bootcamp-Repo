# 05.4 Full-Time Lesson Plan: Test-Driven Development

## Overview

Today's class introduces students to test-driven-development and unit testing JavaScript applications.

## Instructor Notes

* In this lesson, students will complete activities `09-Ins_Promise-All` through `20-Stu_Mock-Fs`.

* To refresh your memory of some of the specific methods often used by testing frameworks, consider creating a few failing tests before class&mdash;then write the code to make them pass. You might also benefit from installing the [Jest Snippets](https://marketplace.visualstudio.com/items?itemName=andys8.jest-snippets) plugin for VS Code.

* Remind students to do a `git pull` of the class repo to have today's activities ready and open in VS Code. 

* If you are comfortable doing so, live-code the solutions to the activities. If not, just use the solutions provided and follow the prompts and talking points for review.

* Let students know that the Bonus at the end of each activity is not meant to be extra coding practice, but instead is a self-study on topics beyond the scope of this module for those who want to further their knowledge.

## Learning Objectives

* Implement `Promise.all()` to wait for multiple API calls.

* Explain the benefits of test-driven development (TDD).

* Define code requirements for code that hasn't been written yet by using unit tests.

* Write unit tests for preexisting JavaScript functions.

* Test side effects like reading or writing to the file system, printing to the console, and AJAX requests by using mocks.

* Structure test code using the Arrange, Act, Assert pattern.

## Time Tracker

| Start  | #   | Activity Name                      | Duration |
|---     |---  |---                                 |---       |
| 10:00AM| 1   | Instructor Demo: Promise.all()     | 0:05     |
| 10:05AM| 2   | Student Do: Promise.all()          | 0:15     |
| 10:20AM| 3   | Instructor Review: Promise.all()   | 0:10     |
| 10:30AM| 4   | Instructor Do: Stoke Curiosity     | 0:10     |
| 10:40AM| 5   | Instructor Demo: TDD               | 0:05     |
| 10:45AM| 6   | Student Do: TDD                    | 0:15     |
| 11:00AM| 7   | Instructor Review: TDD             | 0:10     |
| 11:10AM| 8   | Instructor Demo: Pass Tests        | 0:05     |
| 11:15AM| 9   | Student Do: Pass Tests             | 0:15     |
| 11:30AM| 10  | Instructor Review: Pass Tests      | 0:10     |
| 11:40AM| 11  | FLEX                               | 0:20     |
| 12:00PM| 12  | BREAK                              | 0:30     |
| 12:30PM| 13  | Instructor Demo: Organizing Tests  | 0:05     |
| 12:35PM| 14  | Student Do: Organizing Tests       | 0:15     |
| 12:50PM| 15  | Instructor Review: Organizing Tests| 0:10     |
| 1:00PM | 16  | Instructor Demo: Mocks             | 0:05     |
| 1:05PM | 17  | Student Do: Mocks                  | 0:15     |
| 1:20PM | 18  | Instructor Review: Mocks           | 0:10     |
| 1:30PM | 19  | Instructor Demo: Mock fs           | 0:05     |
| 1:35PM | 20  | Student Do: Mock fs                | 0:15     |
| 1:50PM | 21  | Instructor Review: Mock fs         | 0:10     |
| 2:00PM | 22  | FLEX                               | 0:30     |
| 2:30PM | 23  | END                                | 0:00     |

- - -

## Class Instruction

### 1. Instructor Demo: Promise.all() (5 min)

* Welcome students to class.

* Navigate to `09-Ins_Promise-All` and run `node index.js` in your command line to demonstrate the following:

  * 🔑 We see the statuses of three Promises&mdash;one of which (`p1`) resolved right away while the other two (`p2` and `p3`) are pending, as shown in the following example:

    ```bash
    Status of p1: Promise { 'Resolved right away' }
    Status of p2: Promise { <pending> }
    Status of p3: Promise { <pending> }
    ```

  * 🔑 Then after a few seconds we see the returned array from `Promise.all()`, as follows:

    ```bash
    The returned array from our Promise.all() call:
    [
      'Resolved right away',
      'Resolved after 1 second',
      'Resolved after 3 seconds'
    ]
    ```

* Open `09-Ins_Promise-All/index.js` in your IDE and explain the following:
  
  * 🔑 Again, `p1` is a Promise that resolves right away, as shown in the following example: 

    ```js
    const p1 = new Promise((resolve, reject) => {
      const time = 0;
      if (time < 0) {
        reject(new Error('Something went wrong'));
      } else {
        resolve('Resolved right away');
      }
    });
    console.log('Status of p1:', p1);
    ```
  
  * 🔑 But `p2` and `p3` take a few seconds to resolve. Therefore, when we try to log each of them in the console, we are logging the output of a Promise that hasn't been fully resolved or rejected yet, as shown in the following example:

    ```js
    // Promise resolved after one second
    const p2 = new Promise((resolve, reject) => {
      const time = 1000;
      if (time < 0) {
        reject(new Error('Something went wrong'));
      } else {
        setTimeout(() => {
          resolve('Resolved after 1 second');
        }, time);
      }
    });
    console.log('Status of p2:', p2);

    // Promise resolved after three seconds
    const p3 = new Promise((resolve, reject) => {
      const time = 3000;
      if (time < 0) {
        reject(new Error('Something went wrong'));
      } else {
        setTimeout(() => {
          resolve('Resolved after 3 seconds');
        }, time);
      }
    });
    console.log('Status of p3:', p3);
    ```

  * 🔑 `Promise.all()` is useful when we have more than one Promise and we would benefit from knowing when the operations for each Promise have been resolved or completed. Imagine calling three different third-party APIs&mdash;it would be useful if we could wait for all of the results to come back before we do something else. That is where `Promise.all()` comes in handy.

  * 🔑 When all of the Promises are resolved (or rejected), we get a response from a `Promise.all()` being invoked. The results of `Promise.all()` include the results of all the Promises that we pass in as an array, as follows:

    ```js
    Promise.all([p1, p2, p3])
    .then((values) => {
      console.log('\nThe returned array from our Promise.all() call:');
      console.log(values);
    })
    .catch((err) => new Error(err));
    ```
  
  * 🔑 In this case, all three Promises that we passed into the `Promise.all()` call were resolved and not rejected. If one of these were to fail, `Promise.all()` would stop and return the result of the rejected Promise. 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How can we use `Promise.all()`?

  * 🙋 We can use `Promise.all()` to take in multiple Promises and return a single Promise that resolves to an array of the results of the input Promises.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `10-Stu_Promise-All/README.md`.

### 2. Student Do: Promise.all() (15 min)

* Direct students to the activity instructions found in `10-Stu_Promise-All/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📖 Implement Promise.all() to Wait for Multiple API Calls

  Work with a partner to implement the following user story:

  * As a developer, I want to be able to wait for the results of multiple API calls before I display the end result.

  ## Acceptance Criteria

  * It's done when the `callAPI` Promise is rejected if the request takes longer than the `maxDuration`.

  * It's done when the rejected Promise throws a new error stating `"This request timed out"`. 

  * It's done when the `callAPI` Promise is resolved if the request is made within the `maxDuration`.

  * It's done when the resolved Promise states `"Response received: #### ms"`, including the duration. 

  * It's done when `Promise.all()` is used to capture the array of Promises and return the responses in the console.

  ## 📝 Notes

  Refer to the documentation: 

  [MDN Web Docs on Promise.all()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)

  ## Assets

  The following output demonstrates the expected console logs after running `node index.js` in the command line:

  Promises array before the timeouts have finished:  [
    Promise { <pending> },
    Promise { <pending> },
    Promise { <pending> },
    Promise { <pending> }
  ]
  Response from Promise.all(): [
    'Response received: 3000ms',
    'Response received: 4000ms',
    'Response received: 5000ms',
    'Response received: 6000ms'
  ]

  ---

  ## 💡 Hints

  How are `then()` and `catch()` used in conjunction with Promises?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What is the state of each Promise after `setTimeout()` has begun but before it has ended?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students that need extra help.

### 3. Instructor Review: Promise.all() (15 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with `Promise.all()`? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `resolve()`
  
  * ✔️ `reject()`

  * ✔️ `Promise.all()`

  * ✔️ `then()`

* Open `10-Stu_Promise-All/Solved/index.js` in your IDE and explain the following: 

  * We have an array for different durations as well as a max duration, as shown in the following example:

    ```js
    const apiCallDurations = [3000, 4000, 5000, 6000];
    const maxDuration = 9999;
    ```

  * 🔑 The key to any Promise is implementing `resolve()` and `reject()`. First we set up a conditional statement to check whether the `duration` is greater than `maxDuration`. If so, we reject the Promise, as shown in the following example:
  
    ```js
    const callAPI = (duration) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (duration >= maxDuration) {
            reject(new Error(`This request timed out`));
          } 
    ```
  
  * 🔑 Otherwise we resolve the Promise, as follows:

    ```js
      else {
      resolve(`Response received: ${duration}ms`);
      }
    }, duration);
    ```

  * `Promise.all()` accepts an array as an argument. In preparation, we declare an empty array to hold the Promises, as follows:

    ```js
    const promises = apiCallDurations.map((duration) => callAPI(duration));
    ```

  * We also included a console log to peek at the `promises` array, as shown in the following example:

    ```js
    console.log('Promises array before the timeouts have finished: ', promises);
    ```

  * 🔑 Finally, we call `Promise.all()` with the `promises` array. If all of the Promises were resolved, we console log the response by chaining `then()`. If anything went wrong, we catch the errors in the `catch()`, as follows:

    ```js
    Promise.all(promises)
      .then((response) => console.log('Response from Promise.all():', response))
      .catch((err) => console.error(err));
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ At what point will the `Promise.all()` method reject a Promise?

  * 🙋 The `Promise.all()` method will reject immediately when any of the input Promises are rejected.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on Promise.all()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) and stick around for office hours to ask for help.

* Take a few minutes to answer any questions students may be before proceeding to the next activity.

### 4. Instructor Do: Stoke Curiosity (10 min)

* Explain to students that **test-driven development (TDD)** is a process and a methodology. Review the following TDD terms:

  * **Unit tests** ensure reliability and validate the expected behavior of things like functions or classes. Unit tests verify that the unit being tested returns the expected output.

  * **Integration tests** ensure the cooperation of units in your application. Integration tests might focus on an API, user input, or a user interface, which could involve subsequent actions like writing to a database or logging output.

  * **End-to-end tests** verify that the application will function as expected from the perspective of a user. These tests usually focus almost entirely on an application's user interface.

* Explain that in this class, we will create tests before we write code, because that is the core tenet of TDD. How we write the code is dictated by the need to make each test pass, setting up a contract-like expectation for ourselves and other developers and keeping the development process focused.

* We will focus first on the basic TDD workflow and eventually expand on each step, but for now we just need to know the following steps: 

  * Write a failing test.

  * Make the test pass.

  * Refactor the implementation.

### 5. Instructor Demo: TDD (5 min)

* Open `11-Ins_TDD/package.json` in your IDE and demonstrate the following:

  * We have included `jest` as a dependency in `package.json` and have also included a special test script defined with a value of `jest`, as shown in the following example:

  ```json
  "scripts": {
    "test": "jest"
  },
  ...
    "devDependencies": {
    "jest": "^26.5.2"
  }
  ```

* Run `npm install` and  `npm run test` from the command line to demonstrate the following: 

  * 🔑 When we run the test, it checks in `package.json` for a script with the key `test`. As we just noted, the test script is defined with a value of `jest`.

  * 🔑 When `jest` is invoked, it will look for files that match a specific pattern (`[filename].test.js`). It will find the one and only test in the `/tests` directory and run it.

  * We can see that everything is passing; now let's examine the actual tests.

* Open `11-Ins_TDD/tests/arithmetic.test.js` in your IDE and demonstrate the following:

  * We have created a `/tests/` folder and an `arithmetic.test.js` file that contains tests for `arithmetic.js`.
  
  * Notice the naming convention for the actual test files: `<filename_prefix>.test.js`

  * At the top of the file, we are importing an object called `Arithmetic` that connects the tests to `arithmetic.js`, as follows:

  ```js
  const Arithmetic = require('./arithmetic');
  ```
  
  * In the first test, we start with a `describe` statement that contains several other `describe` statements. The parent `describe` statement groups together the related tests for different methods, which also improves readability. See the following code for an example:

  ```js
  describe("Arithmetic", () => {
    describe("Initialization", () => {
    ...
    });
    describe("plus", () => {
    ...
    });
    describe("minus", () => {
    ...
    });
    describe("value", () => {
      ...
    });
  });
  ```

  * The `it` portion of this test describes how the function should behave in a successful test case. For example, the first `it` statement indicates that initialization `"should return an object containing a 'number' property when called with the 'new' keyword"`.

  * We then create a new instance of `Arithmetic` and test values using the `expect()` and `toEqual()` methods. In the following example, we are testing whether the key `number` has a truthy value in the newly created object:

    ```js
    describe("Arithmetic", () => {
      describe("Initialization", () => {
        it("should return an object containing a 'number' property when called with the 'new' keyword", () => {
        const obj = new Arithmetic();
        expect("number" in obj).toEqual(true);
    });
    ```

  * The other tests under the parent `describe` statement are formatted in the same way, but they test other methods in `arithmetic.js` called `plus()`, `minus()`, and `value()`.

  * If we right-click on the word `Arithmetic` at the top of the `arithmetic.js` file and select "Go to definition", we will be brought to the file that declares all the methods for which we saw tests in `arithmetic.test.js`.

  * 🔑 Remember, in a typical TDD cycle, we would write tests first and then write the code that we see here to help the tests pass.

  * The following example shows all of the methods that appeared in the tests in `arithmetic.test.js`: 

    ```js
    function Arithmetic(number = 0) {
      this.number = number;
    }

    Arithmetic.prototype.plus = function(num = 0) {
      const newNumber = this.number + num;

      return new Arithmetic(newNumber);
    };

    Arithmetic.prototype.minus = function(num = 0) {
      const newNumber = this.number - num;

      return new Arithmetic(newNumber);
    };

    Arithmetic.prototype.value = function() {
      return this.number;
    };
    ```

    * Remember, the first test expected `number` to be initialized with a value, and that is what the function `Arithmetic()` appears to accomplish, as follows:

      ```js
      function Arithmetic(number = 0) {
        this.number = number;
      }
      ```
  
  * Before we check whether the tests are working, let's examine `index.js`.

* Open `11-Ins_TDD/index.js` in your IDE and explain the following:

  * We see that `index.js` is importing `arithmetic.js` at the top of the file just like in `arithmetic.test.js`, as shown in the following example:

    ```js
    const Arithmetic = require('./arithmetic');
    ```

  * In `index.js`, the methods that were declared in `arithmetic.js` are chained together, performing specific operations one by one and finally logging the value&mdash;as shown in the following example:

    ```js
    const value = new Arithmetic(4)
      .plus(8)
      .plus(15)
      .minus(16)
      .minus(23)
      .plus(42)
      .plus(108)
      .value();

    console.log(value);
    ```

  * If we run `node index.js`, we see the value `138` logged in the console.
  
  * 🔑 Now that we understand how the tests are written, let's run the tests, as follows:

      ```bash
      npm run test
      ```
  
  * We should see the output in the command line from the testing framework, `jest`. All the passing tests will appear in green, and all failing tests will appear in red.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 We would first build the tests, then create the code to make the tests pass.

  * ☝️ What is the significance of the `expect()`, `it()`, and `toEqual()` methods in the testing framework?

  * 🙋 These methods each tell the testing framework what output to expect from the functions. You can learn more about how to use these by reading the [Jest documentation on methods](https://jestjs.io/docs/en/expect#expectvalue).

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `12-Stu_TDD/README.md`.

### 6. Student Do: TDD (15 min)

* Direct students to the activity instructions found in `12-Stu_TDD/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📖 Write Tests for Algorithms

  Work with a partner to implement the following user story:

  * As a developer, I want to create tests to define the expectations for algorithms that haven't been implemented yet. 

  ## Acceptance Criteria

  * It's done when the `reverse()` test expects the string `"Hello World!"` to become `"!dlroW olleH"` after calling `new Algo().reverse()`.

  * It's done when the `isPalindrome()` test expects the string `"racecar"` to return `true` and the string `"neon"` to return `false` after calling `new Algo().isPalindrome()`.

  * It's done when the `capitalize()` test expects the string `"capitalize every first word of the string."` to become `"Capitalize Every First Word Of The String."` after calling `new Algo().capitalize()`.

  * It's done when the tests fail, because no code should be added to the `algo.js` file to fulfill the tests yet.

  ## 📝 Notes

  Refer to the documentation: 

  [Jest API documentation](https://jestjs.io/docs/en/api)

  ---

  ## 💡 Hints

  How can we use the `describe()`, `it()`, and `expect()` functions in Jest to check for expected behavior?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * Where can you find examples of well-written tests? 

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 7. Instructor Review: TDD (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with TDD? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `describe()`

  * ✔️ `it()`

  * ✔️ `expect()`

  * ✔️ `toEqual()`

* Open `12-Stu_TDD/Solved/test/algo.test.js` in your IDE and explain the following: 

  * First we run `require()` for the file that contains the functions we want to test, as shown in the following example:

    ```js
    const Algo = require("../algo");
    ```

  * 🔑 The tests are wrapped in a parent `describe()` function for `Algo`, as follows:

    ```js
    describe("Algo", () => {
      ...
    }
    ```

  * 🔑 Now we can build tests for specific functionality, starting with `reverse()`. The `it()` method allows us to describe what the function should do in plain language.

  * Next, we define `str` as the starting string, `reversed` as `str` backwards, and `result` as the actual result of the `reverse()` function.

  * 🔑 Finally, we pass `result` as an argument into `expect()` and compare it to the value of `reversed` using the `toEqual()` method&mdash;meaning that we expect the value of `result` to equal the value of `reversed`! See the following code for an example:

    ```js
    describe("reverse", () => {
      it("should reverse a given string", () => {
        const str = "Hello World!";
        const reversed = "!dlroW olleH";

        const result = new Algo().reverse(str);

        expect(result).toEqual(reversed);
      });
    });
    ```

  * In each case, we're checking what the method returns given a certain input. We set up the same testing for `isPalindrome()` and `capitalize()`.
  
  * 🔑 The `describe()` statement for `isPalindrome()` contains two tests because we needed to use `it()` twice&mdash;once to test that `isPalindrome()` returns true when a string is a palindrome and once to return false when it isn't, as shown in the following example:

    ```js
    describe("isPalindrome", () => {
      it("should return true if a string is a palindrome", () => {
        const str = "racecar";

        const result = new Algo().isPalindrome(str);

        expect(result).toEqual(true);
      });

      it("should return false if a string is not a palindrome", () => {
        const str = "neon";

        const result = new Algo().isPalindrome(str);

        expect(result).toEqual(false);
      });
    ```

  * We follow the same format for the test for `capitalize()`. Notice again how Jest allows us to write readable, intuitive tests, as shown in the following example:

    ```js
    describe("capitalize", () => {
      it("should take a string and return a new string with the first letter of each word capitalized", () => {
        const str = "capitalize every first word of the string.";
        const capitalized = "Capitalize Every First Word Of The String.";

        const result = new Algo().capitalize(str);

        expect(result).toEqual(capitalized);
      });
    });
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ When should we use the `describe()` method?

  * 🙋 When we have several related tests that we want to group together.

  * ☝️ What is the TDD cycle?

  * 🙋 First we write tests that describe how the code should work. Then we write code, run tests, debug the code, and repeat this part of the process until the tests pass.

* Answer any questions before proceeding to the next activity.

### 8. Instructor Demo: Pass Tests (5 min)

* Open `13-Ins_Pass-Tests/tests/fizz.test.js` in your IDE and demonstrate the following:

  * We are importing `fizz.js`, so the tests in this file should correspond to the code in `fizz.js`.

  * Just like in the previous activity, we have a group of tests bundled in a `describe()` method, as follows:

    ```js
    const fizzBuzz = require('../fizz');
  
      describe('fizzBuzz', () => {
        ...
      }
    ```

  * The first test indicates that if a number in a given array is not a multiple of three or five, that number will be returned, as shown in the following code:

    ```js
      it('should return the number if not a multiple of three or five', () => {
      expect(fizzBuzz([1])).toBe('1');
      expect(fizzBuzz([1, 2])).toBe('1, 2');
    });
    ```

  * The second and third tests indicate that if a number in a given array is a multiple of three or five, the strings `Fizz` and `Buzz` should be returned, respectively.

  * The fourth test indicates that if a number is a factor of both three and five, the string `FizzBuzz` should be returned.

  * Finally, all of the tests expect the final result to be returned as a string, as follows:

    ```js
    it('should return Fizz if multiple of 3', () => {
      expect(fizzBuzz([3])).toBe('Fizz');
      expect(fizzBuzz([3, 6, 12])).toBe('Fizz, Fizz, Fizz');
    });

    it('should return Buzz if multiple of 5', () => {
      expect(fizzBuzz([10])).toBe('Buzz');
      expect(fizzBuzz([10, 20, 25])).toBe('Buzz, Buzz, Buzz');
    });

    it('should return FizzBuzz if a multiple of both 3 and 5', () => {
      expect(fizzBuzz([15])).toBe('FizzBuzz');
      expect(fizzBuzz([15, 30, 45])).toBe('FizzBuzz, FizzBuzz, FizzBuzz');
    });
    ```

  * 🔑 Now we need to write the code that will make these tests pass!

* Open `13-Ins_Pass-Tests/fizz.js` in your IDE and demonstrate the following:

  * Based on the code in `fizz.js`, `fizzBuzz` will map over an array of numbers provided as an argument and examine each of them individually, using the variable `singleNum`.

  * Next we check whether `singleNum` is divisible by three and five and set the Boolean result as the value of the variables `multipleOf3` and `multipleOf5`, as shown in the following example: 

    ```js
    num.map((singleNum) => {
        const multipleOf3 = singleNum % 3 === 0;
        const multipleOf5 = singleNum % 5 === 0;
    ```

  * Then we see a string of `if` statements that use `multipleOf3` and `multipleOf5` as conditions. 

  * 🔑 The first conditional checks whether the number is divisible by three and five. It will return `fizzBuzz` if the condition is truthy&mdash;passing the fourth test in `fizz.test.js`, as shown in the following example:

    ```js
    if (multipleOf3 && multipleOf5) {
      return 'FizzBuzz';
    }
    ```

  * 🔑 The second conditional checks whether the number is divisible by three. It will return `Fizz` if the condition is truthy&mdash;passing the second test in `fizz.test.js`, as shown in the following example:
  
    ```js
    if (multipleOf3) {
      return 'Fizz';
    }
    ```

  * 🔑 The third conditional checks whether the number is divisible by three. It will return `Buzz` if the condition is truthy&mdash;passing the third test in `fizz.test.js`, as shown in the following example:
  
    ```js
    if (multipleOf5) {
      return 'Buzz';
    }
    ```

  * 🔑 If none of the conditions are met, `singleNumber` is returned&mdash;passing the first test in `fizz.test.js`, as shown in the following example:
  
    ```js
    return singleNumber
    ```

  * 🔑 Remember, the tests expected the results to be returned as a string, but doesn't `map()` return a new array? That's where `join()` comes in, as shown in the following example:

    ```js
    const fizzBuzz = (num) =>

      num.map((singleNum) => {
        ...
        return singleNum;
      })
      .join(', ');
    ```

* Run `npm install` and  `npm run test` from the command line and note the following: 

  * As expected, all of the tests are passing.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 Use the tests that we have written (or that are provided for us) to guide us as we write the code.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `14-Stu_Pass-Tests/README.md`

### 9. Student Do: Pass Tests (15 min)

* Direct students to the activity instructions found in `14-Stu_Pass-Tests/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🏗️ Implement Code to Pass Tests

  Work with a partner to implement the following user story:

  * As a developer, I want to write code that will pass my tests.

  ## Acceptance Criteria

  * It's done when I have written code for the function in `algo.js`.

  * It's done when I can run `npm run test` in the command line before I move on, to verify that I correctly implemented each method.

  * It's done when the tests in `tests/algo.test.js` pass.

  ---

  ## 💡 Hints

  What clues can we glean from `tests/algo.test.js` about how to write the function?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * How are ATDD and BDD similar to or different from TDD?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 10. Instructor Review: Pass Tests (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with writing code to pass tests? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ TDD cycle

  * ✔️ `algo.test.js`

  * ✔️ `npm run test`

* Open `14-Stu_Pass-Tests/Solved/test/algo.test.js` in your IDE and explain the following: 

  * 🔑 We will follow the TDD cycle and review the tests to determine what we need to build. 
  
  * 🔑 The first test in `algo.test.js` should look familiar. We need to build a function called `reverse()` that takes in a string as an argument, reverses it, and returns the reversed string, as follows:

    ```js
    describe("reverse", () => {
      it("should reverse a given string", () => {
        const str = "Hello World!";
        const reversed = "!dlroW olleH";
        const result = new Algo().reverse(str);
        expect(result).toEqual(reversed);
      });
    });
    ```

* Open `14-Stu_Pass-Tests/Solved/algo.js` in your IDE and explain the following:

  * Inside the `reverse()` function, we write code that returns `str` with a chain of functions attached. First we convert `str` into an array of substrings using `split("")`. Then we call `reverse()` to reverse the order of the array. Finally, we call `join("")` to convert the array back into a string&mdash;as shown in the following example:

    ```js
    Algo.prototype.reverse = function(str) {
      return str
        .split("")
        .reverse()
        .join("");
    };
    ```

* Run `npm run test` in the console and demonstrate the following:

  * 🔑 Success! When we run `npm run test`, `reverse()` passes the test, as shown in the following example:

    ```bash
    Algo
      reverse
        ✓ should reverse a given string (2ms)
    ```

* Open `14-Stu_Pass-Tests/Solved/test/algo.test.js` in your IDE and explain the following: 

  * 🔑  Let's repeat the TDD cycle with the second test. `isPalindrome()` includes two tests that we need to pass. The first verifies that it `"should return true if a string is a palindrome"` and the second verifies that it `"should return false if a string is not a palindrome"`. See the following code for an example:

    ```js
    describe("isPalindrome", () => {
      it("should return true if a string is a palindrome", () => {
        const str = "racecar";
        const result = new Algo().isPalindrome(str);
        expect(result).toEqual(true);
      });

      it("should return false if a string is not a palindrome", () => {
        const str = "neon";
        const result = new Algo().isPalindrome(str);
        expect(result).toEqual(false);
      });
    });
    ```

* Open `14-Stu_Pass-Tests/Solved/algo.js` in your IDE and explain the following:

  * Inside the `isPalindrome()` function, we use `reverse()` as a helper function to check whether `str` is the same when it is reversed&mdash;otherwise known as a palindrome&mdash;as shown in the following example:

    ```js
    Algo.prototype.isPalindrome = function(str) {
      return this.reverse(str) === str;
    };
    ```

* Run `npm run test` in the console and demonstrate the following:

  * 🔑 When we run `npm run test`, `isPalindrome()` passes both tests, as follows:

  ```bash
  isPalindrome
    ✓ should return true if a string is a palindrome
    ✓ should return false if a string is not a palindrome
  ```
    
* Open `14-Stu_Pass-Tests/Solved/test/algo.test.js` in your IDE and explain the following: 

  * 🔑 Let's repeat the TDD cycle one last time, with the third and final test. `capitalize()` includes one test that we need to pass, verifying that it `"should take a string and return a new string with the first letter of each word capitalized"`, as follows:

  ```js
  describe("capitalize", () => {
    it("should take a string and return a new string with the first letter of each word capitalized", () => {
      const str = "capitalize every first word of the string.";
      const capitalized = "Capitalize Every First Word Of The String.";
      const result = new Algo().capitalize(str);
    expect(result).toEqual(capitalized);
    });
  });
  ```

* Open `14-Stu_Pass-Tests/Solved/algo.js` in your IDE and explain the following:

  * Inside the `capitalize()` function, we convert the string to an array using `split()`, then we map over the array and capitalize the first letter of each word. Finally, we convert the array back into a string using `join()`, as follows:

    ```js
    Algo.prototype.capitalize = function(str) {
      return str.split(" ").map(word => {
      return word.substring(0, 1).toUpperCase() + word.substring(1);
      }).join(" ");
    };
    ```

* Run `npm run test` in the console and demonstrate the following:

  * 🔑 All of the tests now pass when we run `npm run test`, including `capitalize()`, as shown in the following example:

  ```bash
  PASS  test/algo.test.js
    Algo
      reverse
        ✓ should reverse a given string (2ms) isPalindrome
        ✓ should return true if a string is a palindrome
        ✓ should return false if a string is not a palindrome capitalize
        ✓ should take a string and return a new string with the first letter of each word capitalized (1ms)

  Test Suites: 1 passed, 1 total
  Tests:       4 passed, 4 total
  Snapshots:   0 total
  Time:        1.362s
  Ran all test suites.
  ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is the benefit of writing tests before we write any code?

  * 🙋 This approach helps us ensure that the code will work. It also helps us code more quickly because we do not have to manually test the code.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Jest API documentation](https://jestjs.io/docs/en/getting-started), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 11. FLEX (20 min)

* This time can be utilized for reviewing key topics learned so far in this module or getting started on the Challenge.

### 12. BREAK (30 min)

This time can be utilized for reviewing key topics learned so far in this module or getting started on the Challenge.

### 13. Instructor Demo: Organizing Tests (5 min)

* Open `15-Ins_Organizing-Tests/test/todo.test.js` in your IDE and demonstrate the following:

  * 🔑 When writing tests, it is helpful to refer to a specific structure for organizing tests and deciding what to test for.

  * 🔑 The Arrange, Act, Assert pattern shown in the following example provides a guide for organizing test code in a way that makes sense to us and others:

    ```js
    it("should create an object with a 'text' property set to the 'text' argument provided when called with the 'new' keyword", () => {
      // Arrange
      const text = "Pick up milk";

      // Act
      const obj = new Todo(text);

      // Assert
      expect(obj.text).toEqual(text);
    });
    ```

  * 🔑 The tests are split into the following three parts:

    * **Arrange:** Set up anything you need to run your test.

    * **Act:** Perform the action to be tested.

    * **Assert:** Perform the assertion.

* Open `15-Ins_Organizing-Tests/test/todoList.test.js` in your IDE and explain the following:

  * 🔑 Consider the following kinds of tests as you decide what to test for:
  
    * **Positive tests** check whether an application behaves as expected with correct inputs.

    * **Negative tests** check whether an application behaves as expected, with invalid or improper inputs, to ensure that the application can handle invalid data gracefully.

    * **Exception tests** check that the application behaves as expected when provided abnormal input.

  * 🔑 This file contains a few positive tests, which we run to ensure that things work as intended in likely situations, as shown in the following example:

    ```js
    it("should add a new 'Todo' object to its 'todos' array", () => {
      // Arrange
      const todoList = new TodoList();
      const todoText = "Mow Lawn";

      // Act
      todoList.addTodo(todoText);

      // Assert
      expect(todoList.todos.length).toEqual(1);
      expect(todoList.todos[0] instanceof Todo).toEqual(true);
      expect(todoList.todos[0].text).toEqual(todoText);
    });
    ```

  * 🔑 We run negative tests, as shown in the following example, to check that things work in edge cases or cases where the function should return a negative result: 

    ```js
    it("should return undefined if there are no todos", () => {
      // Arrange
      const todoList = new TodoList();
      let nextTodo;

      // Act
      nextTodo = todoList.getNextTodo();

      // Assert
      expect(typeof nextTodo).toEqual("undefined");
    });
    ```

  * 🔑 We run exception tests, as follows, to ensure that the code throws errors when it should:

    ```js
    it("should throw an error if not provided text", () => {
      // Arrange
      const todoList = new TodoList();
      const err = new Error(
        "Expected parameter 'text' to be a non empty string"
      );
      const cb = () => todoList.addTodo();

      // Assert
      expect(cb).toThrowError(err);
    });
    ```

  * Not every function will have positive, negative, and exception tests, but considering all three types of test can help us decide what to test for.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 We can use the Arrange, Act, Assert pattern as a guide for organizing test code in a way that makes sense to us and others.

  * ☝️ How do we know what to test for?

  * 🙋 By considering positive, negative, and exception tests.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `16-Stu_Organizing-Tests/README.md`.

### 14. Student Do: Organizing Tests (15 min)

* Direct students to the activity instructions found in `16-Stu_Organizing-Tests/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📐 Add Comments to Implementation of an Arrange, Act, Assert Pattern

  Work with a partner to add comments describing the functionality of the code found in [Unsolved/test](./Unsolved/test).

  ## 📝 Notes

  Refer to the documentation:

  [Jest API documentation](https://jestjs.io/docs/en/getting-started)

  ---

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * How can you write these tests to ensure that another developer testing your code can understand what the tests are checking? 

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 15. Instructor Review: Organizing Tests (10 min) 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel organizing tests? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ Arrange, Act, Assert 

  * ✔️ Positive, negative, and exception tests 

  * ✔️ `it(should ...)`

* Open `16-Stu_Organizing-Tests/Solved/test/dayCare.test.js` in your IDE and explain the following: 

  * 🔑 By using the Arrange, Act, Assert pattern, we can organize the tests into three straightforward parts, as follows:

    ```js
    it("should add a child to the 'children' array", () => {
      // arrange
      const child = new Child("Tammy", 1);
      const dayCare = new DayCare();

      // act
      dayCare.addChild(child);

      // assert
      expect(dayCare.children.length).toEqual(1);
      expect(dayCare.children[0]).toBe(child);
    });
    ```

  * 🔑 We check that an error was thrown using the `toThrowError()` or `toThrow()` matcher. We wrap the code that will throw the error in a callback function so that Jest will suppress the error, as shown in the following example:

    ```js
    it("should throw an error if not provided a Child object as an argument", () => {
      const err = new Error(
        "Expected parameter 'child' to be an instance of Child"
      );
      const cb = () => {
        const dayCare = new DayCare();
        dayCare.addChild();
      };

      expect(cb).toThrowError(err);
    });
    ```

  * 🔑 We use negative tests to ensure that things work as expected in edge cases, as shown in the following example:

    ```js
    it("should not add a child if already at capacity", () => {
      const dayCare = new DayCare();
      const child = new Child("Alice", 4);
      dayCare.children = [
        new Child("Tammy", 1),
        new Child("Mark", 2),
        new Child("Alvin", 1)
      ];

      dayCare.addChild(child);

      expect(dayCare.children.length).toEqual(3);
    });
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why is it helpful for a function to intentionally throw an error?

  * 🙋 If we throw a helpful error message when a function is misused, the issue is easier to track down and resolve before it causes more errors elsewhere.

* Answer any questions before proceeding to the next activity.

### 16. Instructor Demo: Mocks (5 min)

* Open `17-Ins_Introduce_Mocks/logger.js` in your IDE and demonstrate the following:

* Run `node index.js` from the command line and demonstrate the following: 

  * 🔑 When we run the index file, each line of the output displays a color.

  * To print different colors to the console, we have to include special codes for each color as a first argument to the `console.log()` method, as shown in the following example:

    ```js
    function Logger() {
      if (!this.init) {
        Logger.prototype.init = true;
        const colors = {
          black: "\x1b[30m",
          red: "\x1b[31m",
          green: "\x1b[32m",
          yellow: "\x1b[33m",
          blue: "\x1b[34m",
          magenta: "\x1b[35m",
          cyan: "\x1b[36m",
          white: "\x1b[37m"
        };
    ```

  * Rather than manually write a method for each color, we use a loop that only runs the first time that a `Logger` object is created with the constructor&mdash;this is called a **dynamic prototype pattern**. See the following code for an example:

    ```js
    for (let key in colors) {
      Logger.prototype[key] = function(...args) {
        console.log(colors[key], ...args);
      };
    }
    ```

* Open `17-Ins_Introduce-Mocks/index.js` to point out the following:

  * First we import a `Logger` constructor that creates an object capable of logging to the console in different colors. When we run the application in the command-line window, the dynamic output resembles the following example:

    ```js
    const Logger = require("./logger");

    const log = new Logger();

    log.red("We can write to the console in different colors!");

    log.blue("We just need to provide an additional argument to the console.log method!");

    log.magenta("The first argument console.log needs is an 'ANSI Escape Code'");

    log.green("You can look these up at https://en.wikipedia.org/wiki/ANSI_escape_code#Colors");

    log.yellow("But they're just codes that represent different colors");

    log.cyan("The second argument console.log should receive is the message to be printed");
    ```

* Open `17-Ins_Introduce-Mocks/test/logger.test.js` file in your IDE and explain the following:

  * 🔑 In this file, we use the `jest.spyOn()` method to mock and spy on the `console.log()` method. We also use the `mock.mockImplementation()` method to replace the functionality of `console.log()` with an empty function that does nothing, as follows:

    ```js
    it("should print in black", () => {
      const log = new Logger();
      const message = "Hello world!";
      const mock = jest.spyOn(console, "log");
      mock.mockImplementation(() => {});

      log.black(message);

      expect(mock).toBeCalledWith(colors.black, message);

      mock.mockRestore();
    });
    ```

  * 🔑 Because we are mocking the `console.log()` method, nothing will be printed to the console when the test is run, and we can spy on values provided to the `console.log()` method. When `log.black()` is called, we can verify that `console.log()` was also called with the expected message and color.

* Finally, run `npm install` and `npm run test` to show the console log output from the tests.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):
  
  * ☝️ Why might it be complicated to test something like a `fetch()` request being called?

  * 🙋 The results of a `fetch()` request rely on something outside of the code that we can't always control. Reading and writing to the file system can be complicated because the tests might make changes that could impact the results of future tests.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `18-Stu_First-Mock/README.md`.

### 17. Student Do: Mocks (15 min)

* Direct students to the activity instructions found in `18-Stu_First-Mock/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🐛 Running npm run test Results in Errors

  Work with a partner to resolve the following issues:

  * As a developer, I would like to spy on the output of the `console.log()` method in `dayCare.test.js`.

  ## Expected Behavior

  * When we run `npm run test` in the console, we should not receive an error.

  * When we run `npm run test` in the console, the tests for `dayCare.test.js` should be passing.

  ## Actual Behavior

  * When we run `npm run test` in the console, we receive the following error: `"Cannot spyOn on a primitive value; undefined given"`.

  * When we run `npm run test` in the console, the tests for `dayCare.test.js` are not passing.

  ## Steps to Reproduce the Problem

  1. Navigate to the `Unsolved` folder in this activity.

  2. Run `npm install` in your console.

  3. Run `npm run test` in your console.

  ## Assets

  The following image demonstrates the web application's appearance and functionality:

  ![The console indicates that the test suites and tests have passed, with no messages or errors displayed.](./images/pass-test.png)

  ---

  ## 💡 Hints

  What does the error tell you about what is missing, and how do we capture the value of `console.log`?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What are two or three other methods that can be used in conjunction with `spyOn`?

  Use the [Jest API documentation on spyOn()](https://jestjs.io/docs/en/jest-object#jestspyonobject-methodname) to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 18. Instructor Review: Mocks (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with using the `spyOn()` methods? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `jest.spyOn()`

  * ✔️ `mock.mockImplementation()`

* Open `18-Stu_First-Mock/Solved/test/dayCare.test.js` in your IDE and explain the following: 

  * 🔑 Using `jest.spyOn()`, we pass in the arguments `console` and `"log"` to spy on the `console.log()` method. 
  
  * 🔑 We pass in an empty function to `mock.mockImplementation()` to replace the functionality of the `console.log()` method.

  * Now we can use `expect(mock).toBeCalledWith()` to verify that it was called with the arguments that we expect, as shown in the following example:

    ```js
    const mock = jest.spyOn(console, "log");
    mock.mockImplementation(() => {});

    dayCare.addChild(child);

    expect(dayCare.children.length).toEqual(0);
    expect(mock).toBeCalledWith(
      "Unable to add child, they are over the age limit"
    );
    ```

  * We will clean up any mocks we run at the end of a test to ensure that the next test is not affected. We can "unmock" `console.log()` by using the `mock.mockRestore()` method, as shown in the following example: 

    ```js
    mock.mockRestore();
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What can we use mocks for? 

  * 🙋 We can use mocks to replace code with side effects, like printing to the console, making `fetch()` requests, and reading or writing to the file system&mdash;so that these things do not happen when tests are being run.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Jest API documentation on spyOn()](https://jestjs.io/docs/en/jest-object#jestspyonobject-methodname), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 19. Instructor Demo: Mock fs (5 min)

* Open `19-Ins_Module-Mock-Demo/movieSearch.js` in your IDE and demonstrate the following:

  * 🔑 This file exports a `MovieSearch()` constructor that can create an object used for searching the OMDB (Open Movie Database) API, as follows:

    ```js
    const axios = require("axios");

    function MovieSearch() {}

    MovieSearch.prototype.buildUrl = function(movie) {
      return `https://www.omdbapi.com/?t=${movie}&apikey=trilogy`;
    };

    MovieSearch.prototype.search = function(movie) {
      return axios.get(this.buildUrl(movie));
    };
    ```

* Open `19-Ins_Module-Mock-Demo/test/movieSearch.test.js` in your IDE and demonstrate the following:

  * 🔑 We require `axios` and mock it because we want to prevent actual API requests from happening. This is one way to mock a Node.js module. See the following code for an example:

    ```js
    const axios = require("axios");
    const MovieSearch = require("../movieSearch");

    jest.mock("axios");
    ```

  * 🔑 We mock the return value of `axios.get` to be a new Promise object that resolves to an object containing a `data` property set to an empty object. We mock the return value to this, as shown in the following example, because it is similar to what we would get from the response from the OMDB API:

    ```js
    it("should search the OMDB API for a given movie", () => {
      const movie = new MovieSearch();
      const name = "Rocky";

      axios.get.mockReturnValue(
        new Promise(function(resolve) {
          resolve({ data: {} });
        })
      );

      expect(movie.search(name)).resolves.toEqual({ data: {} });
      expect(axios.get).lastCalledWith(movie.buildUrl(name));
    });
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How would we build this?

  * 🙋 We would first test the API call to OMDB in something like Insomnia to ensure that we understand what the mock should return and how to behave. Then we would import the package we need and wrap it using the `jest.mock()` method. Finally, we would mock the return value of a Promise by using `mockReturnValue()`.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `20-Stu_Mock-Fs/README.md`.

### 20. Student Do: Mock fs (15 min)

* Direct students to the activity instructions found in `20-Stu_Mock-Fs/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🏗️ Mock and Spy on fs Module

  Work with a partner to implement the following user story:

  * As a developer, I want to be able to spy on the `fs` module methods and ensure that they are called with the correct arguments.

  ## Acceptance Criteria

  * It's done when I have added code to mock the `fs.readFileSync()` method in `Unsolved/tests/fileIO/test.js` to emulate reading the file system.

  * It's done when I have added code to mock the `fs.writeFileSync()` method in `Unsolved/tests/fileIO/test.js` to emulate writing to the file system.

  ---

  ## 💡 Hints

  How can we use the previous demonstration to aid in mocking Node.js modules?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * How might we be able to mock the append functionality of the `fs` module?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 21. Instructor Review: Mock fs (15 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with mocking and spying on modules? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ Mocking Node.js modules

  * ✔️ Avoiding writes to the file system

* Open `20-Stu_Mock-Fs/Solved/test/fileIO.test.js` file in your editor and point out the following key points:

  * 🔑 We mock the `fs` module by requiring it and using the `jest.mock()` method at the top of the file, as follows:

    ```js
    const fs = require("fs");
    const FileIO = require("../fileIO");

    jest.mock("fs");
    ```

  * 🔑 Because `fileIO.read` returns the result of `fs.readFileSync`, we can mock its return value and verify that it was called with the expected arguments without actually making a trip to the file system, as shown in the following example:

    ```js
    it("should call fs.readFileSync with the passed in 'file' argument", () => {
      const fileIO = new FileIO();
      const file = "message.txt";
      let data;

      fs.readFileSync.mockReturnValue("Hello World!");
      data = fileIO.read(file);

      expect(data).toEqual("Hello World!");
      expect(fs.readFileSync).lastCalledWith(file, "utf8");
    });
    ```

  * 🔑 When testing the `fileIO.write` method, we just need to know that the `fs.writeFileSync` method was called with the correct arguments. We are not testing that the `fs` module works, only that it's being used as expected. See the following code for an example:

    ```js
    it("should call fs.writeFileSync with the passed in 'path' and 'data' arguments", () => {
      const fileIO = new FileIO();
      const path = "message.txt";
      const data = "Hello World!";
    
      fileIO.write(path, data);

      expect(fs.writeFileSync).lastCalledWith(path, data);
    });
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What sort of complications can we avoid by mocking the `fs` module?

  * 🙋 We can avoid requiring the tests to read and write to the file system. This would not only slow tests but also possibly influence how the next test runs.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Jest API documentation on spyOn()](https://jestjs.io/docs/en/jest-object#jestspyonobject-methodname), and stick around for office hours to ask for help.

* Answer any questions before proceeding.

### 22. FLEX (30 min)

* This time can be utilized for reviewing key topics learned so far in this module or getting started on the Challenge.

* Answer any questions before ending the class.

### 23. END (0 mins)

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this [anonymous survey](https://forms.gle/RfcVyXiMmZQut6aJ6).

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
