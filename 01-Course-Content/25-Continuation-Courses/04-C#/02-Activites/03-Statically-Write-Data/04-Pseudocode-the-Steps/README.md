# Pseudocode the Steps

Any time we start building a new feature, it’s a good idea to take a step back and pseudocode how we plan to approach it.

The goal at this point is to save all of the employee data to a CSV file located in `data/employees.csv`. Write down in plain language how you'd approach this problem before moving on.

**Hint**

> What needs to exist first, before other things can happen?
  
Your plan might resemble the following steps:

1. Add another static method to the `Util` class, which will make the CSV file.

2. Call this method from within `Program`, passing in the list of employees.

3. In the method, check whether a `data` folder exists. If not, create it.

4. Create a new file located at `data/employees.csv`.

5. Loop over the given employees.

6. Write each employee’s info as a comma-separated string to the CSV file.

Even if your steps don’t 100% match up with the ones listed here, that doesn’t mean you got it wrong. Everyone codes differently, and this is simply one way to approach the task.

With this plan in place, let's get to work!

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.