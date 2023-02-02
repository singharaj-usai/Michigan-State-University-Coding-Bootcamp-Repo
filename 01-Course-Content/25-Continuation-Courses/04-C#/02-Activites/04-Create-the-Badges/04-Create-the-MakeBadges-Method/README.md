# Create the MakeBadges() Method

We need a badge template before we can do much of anything! Navigate to [https://imgur.com/0EMSs68](https://imgur.com/0EMSs68) to find that. Place that image file in the root directory of the application. Rename the image file `badge.png`.

Now let's go ahead and create a placeholder method called `MakeBadges()`.

Consider the following as you think about creating this method:

* Which file should declare this method?

* Having learned about modifiers in the last section, which modifiers would help identify this method's utility?

* Also think about how this method will function in the context of the app—meaning how it will be invoked and when.

These are some of the basic questions that should be asked when declaring any method.

Not sure what to write yet? Go back and review, then come back and think about your answers again.

**Hint**

> When this method is invoked, will it be on the class or object scope? What is the purpose of this method, and do we need it to return anything?
 
The following code shows the three methods we'll have in the `Util` class by the end of this lesson:

```cs
class Util
{
  public static void PrintEmployees(List<Employee> employees) {} 
  public static void MakeCSV(List<Employee> employees) {}
  async public static Task MakeBadges(List<Employee> employees) {}
}
```

The first two have already been created. Go ahead and add the `MakeBadges()` function to your `Util` class, in the location indicated in the code.

For now, the `MakeBadges()` method should look like the following:

```cs
class Util
{
  public static void MakeBadges(List<Employee> employees) {}
}
```

We will update the method to use the `async` keyword and `Task` return type when we add in asynchronous processing from the `HttpClient` object.

As you'll see in your VS Code editor, the new method `MakeBadges()` will be outlined in red. It will be very similar to the other `Util` methods in scope and function in that it will use the application's employee data to output a file or print to the console.

To clarify, all the methods in the preceding code are closed. This is just to show a possible placement of each method, because the actual order of the methods in the class is arbitrary.

Let’s break down the parts of the code:

* `async`—The `MakeBadges()` method will be asynchronous and use an `async`/`await` syntax that is similar to JavaScript. This is necessary because the method we use from the `HttpClient` object is asynchronous.

* `Task`—This is the required return type for an asynchronous method that returns no value.

* `public`—Must be accessible by the `Main()` method.

* `void`—The purpose of these methods is to create a file or print information, so there is no need for a return.

* `static`—Scoped to class, so can be invoked directly without instantiating an object.

* `List<Employee>`—Employees parameters, the data source of employee info.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.