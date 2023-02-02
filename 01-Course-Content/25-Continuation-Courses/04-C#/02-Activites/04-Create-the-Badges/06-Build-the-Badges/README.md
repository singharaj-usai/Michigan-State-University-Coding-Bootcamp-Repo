# Build the Badges

Next, we'll be inserting the employee information into the badge template, to complete the second pseudocode step in this section. To do this, we'll need another tool from the .NET Core that will allow us to import or download the employee information from the employee list. For this, we'll use the `HttpClient` class.

This is an essential and powerful tool to have in your C# tool belt. This package can also be used to send HTTP requests, read files, download webpages, and upload data from a resource using a multitude of methods.

To use the `HttpClient` class, we can either use the fully specified name `System.Net.Http.HttpClient` or add the `using` directive to include the namespace `System.Net.Http`. In this case, we've decided to include the namespace for simplicity and readability.

Add the following code to the `Util.cs` file:

```cs
using System;
using System.IO;
using System.Collections.Generic;
using System.Net.Http;
using SkiaSharp;
```

Now that we can use the `HttpClient` in the application, let's take a moment to explore the power and utility of this class.

**Deep Dive**

Refer to the [Microsoft Docs on the HttpClient class](https://docs.microsoft.com/en-us/dotnet/api/system.net.http.httpclient?view=net-6.0) and these [examples of using HttpClient in a .NET Console app](https://zetcode.com/csharp/httpclient/).

In the following expression, we will create a new instance, `client`, of the `HttpClient` class:

```cs
HttpClient client = new HttpClient();
```

Because importing files and downloading photos will consume a lot of memory, `HttpClient` will be a resource hog in the application.

.NET has a special statement that allows this resource to be removed once the code has finished running. Can you remember what this statement is?

**Hint**

> You used it for the `StreamWriter` class in the last section.
  
Go ahead and insert that statement into the `MakeBadges()` method:

```cs
public static void MakeBadges(List<Employee> employees)
{
  // instance of HttpClient is disposed after code in the block has run
  using(HttpClient client = new HttpClient())
  {

  }
}
```

The rest of the code for this section should reside in this function block. Thanks to .NET Core's `using` method, the resource dedicated in the parentheses will be disposed of after the code in the block has run, freeing up this memory after use.

Now let's take a moment and think about the steps needed to complete the badge formatting:

1. Place the employee picture onto the badge template.

2. Write the company name.

3. Write the employee name.

4. Write the employee id number.

5. Create a new file.

To access all the information for each employee in the employee list, what type of function would you use to iterate through it?

**Hint**

How do you loop through an array in JavaScript?

That's right—a `for` loop! Let's implement a `for` loop into the function block. Add the following code:

```cs
using(HttpClient client = new HttpClient())
{
  for (int i = 0; i < employees.Count; i++)
  {

  }
}
```

Remember that the employees list was inputted as the argument of this `MakeBadges()` method, which allows us to access the employees list within the context of this `Util` method.

Now that we have access to the list on an object instance level, we'll be able to retrieve the employee information to populate the badge.

In the next section, we'll make the necessary file and URL conversions into the data type and class instances necessary to make modifications to the badge template.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.