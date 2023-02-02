# Add the Finishing Touches

Earlier, you swapped out the manual `GetEmployees()` method with the new `GetFromApi()` method, but you want both options to be available in the final version of the app. Ideally, the app will first ask if the user wants to fetch data from the API. If they answer "yes," it will run the `GetFromApi()` method. If "no," it will run the `GetEmployees()` method. In either case, once the employee data is collected, the app will still generate the CSV file and badge images. Go ahead and implement these final changes however you see fit. No hints; you got this!

Afterwards, make sure to properly celebrate (and ask for a raise from CatWorx leadership)! This app will save you and your company a lot of time now when it comes to creating new security badges for employees. Granted, there's always more that could be added to it, which means a chance to continue learning and strengthening your C# skills.

For instance, a fun bonus feature would be to upload the images to an online service like Google Drive or Imgur, save the employee data in a MySQL database, or add a default profile picture if one doesn't exist for any given user. You could also think about other companies potentially wanting to use this application, so adding a company name as one of the input options would be a great addition. Whatever you do, just keep practicing and building cool stuff!

**Deep Dive**

> To learn more, refer to the [Imgur API documentation](https://apidocs.imgur.com/).
  
---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.