# Create the Data Model

In the previous lesson, we created a S3 bucket to store static files after we set up the database. The first step will be to model the data so that AWS can reproduce the back-end operations to store and query user data.

Before we start integrating web services into the Deep Thoughts application, we must figure out how the application will handle the data, as well as what the structure of the data will look like. In this simplified version of the Deep Thoughts application, users can create a thought, see the thoughts of other users, and select a user to review their other thoughts.

In the first step, we'll determine the access points of the data in the application. By access points, we mean which components will need access to the data, how variable the queries will be, and what type of data the components will need.

In this case, it's the homepage, or the `Home` component, that needs a list of all users' thoughts. Later on, we'll use the `ThoughtForm` component to create a new thought and render a specific user's thoughts on the user's profile page.

## Why Use Amazon DynamoDB?

In all of these cases, the requests will be repetitive and simple, meaning they will not change over time or have complex joins. So why is this important?

DynamoDB is specialized for high performance at high request loads because of its ability to handle simple and repetitive queries. For database queries that are very complex and dynamic in nature, we might need to leverage different databases, such as a relational database. AWS offers that in the form of Amazon RDS, or Relational Database Service.

**On The Job**

> Several databases are often used in conjunction with a company's back-end application. This way, the specialized abilities of a relational database can be used in combination with the scalability and performance of a DynamoDB database. This hybrid approach is a way to load balance for performance.

## What Will the Data Look Like?

Now that we've established how the data will be used by the Deep Thoughts application, let's investigate what the data will look like.

We'll be creating a local DynamoDB instance for the development stage. With this local instance we'll create a table called `Thoughts`. In this table, we'll need to store the username, thought text, and when the thought was created. We'll keep it simple for now and add more as needed.

**Deep Dive**

For more information, refer to the [AWS documentation on DynamoDB](https://aws.amazon.com/dynamodb/).

Now let's move to the next step and create the table!

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.