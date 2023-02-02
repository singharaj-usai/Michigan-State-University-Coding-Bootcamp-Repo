# Introduction

Now that we have a C# application that can successfully create employee instances, it's time to actually do something with that data. The ultimate goal is to superimpose this employee data onto badge images, but let's tackle a smaller problem first. We need a way to save all the information we're gathering in case the company needs to reference it again. One way to accomplish this would be to insert records into a database, but if we don't want to deal with the hassle of databases right now, we could also write it to a local file.

As we start adding more features and functionality to the app, it’s important to keep the codebase organized and not let any one file or class get too complex and unwieldy. This goes back to the SOLID design principles that we touched on previously.

The following steps show how we'll approach the objectives for this lesson:

1. Create a `Util` class, which we'll use to populate the CSV file.

2. Create the `data` folder to house the CSV file.

3. Import the `System.IO` namespace in order to enable writing to a CSV file.

Along the way, you'll learn how to do the following:

* Use `static` to keep code neatly organized.

* Populate a CSV file with `Util`.

* Manage memory with the `using` keyword.

Next up, we'll preview how we'll approach this lesson.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.