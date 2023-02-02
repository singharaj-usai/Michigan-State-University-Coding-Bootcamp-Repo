# Introduction

So far, we’ve been manually entering employee data, which is definitely a useful feature to have in the app. However, if we needed to import hundreds or thousands of employees, this wouldn't be sustainable. So let's automate it. One approach would be to import a CSV, which would just require looking into the `StreamReader` class. Another method would be to download all of this data from an API. Because working with APIs is a big part of software development, let’s solve this problem from that perspective.

Here's a high-level overview of what we'll do in this final lesson:

1. Create the `PeopleFetcher` class.

2. Request data from the Random User Generator API.

3. Convert JSON to C# data types.

4. Create a new employee for each person that we fetched from the API.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.