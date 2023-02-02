# Prepare the PeopleFetcher Class

This section represents steps 1–3 in our pseudocode. We chose to call the new class `PeopleFetcher`, because its purpose is to fetch people's data from various places, be it the command line or an API. Calling on the `PeopleFetcher` class, we can call the method, `GetEmployees()`, and store the data in `employees`, as shown in the following code:

```cs
employees = PeopleFetcher.GetEmployees();
```

If you get stuck, refer back to the steps we took with `Util` and printing the employees to the console.

**Hint**

> Remember that methods need to be made public to be accessed from other classes.
  
This is another example of moving things around for the sake of organization. It’s perfectly normal to find yourself doing this at various stages during development. As you write more code, you’ll frequently spot places where you could divide a class into other classes. In fact, some design principles suggest that a class should only ever have one job, but no need to go that far today.

With the new `PeopleFetcher` class in place, run the app again as a quick sanity test to make sure everything still works before moving on. If things look good, add another method to `PeopleFetcher`, called `GetFromApi()`. This method will also return a `List` of `Employee` instances. It’s okay if it returns an empty `List` for now. Your work should look like the following code:

```cs
public static List<Employee> GetFromApi() 
{
  List<Employee> employees = new List<Employee>();
  return employees;
}
```

We’ll worry about populating it later. Comment out the existing assignment in `Program.cs` for `employees` and add the following statement:

```cs
employees = PeopleFetcher.GetFromApi();
```

This is temporary, for testing whether the API is returning the employee names properly.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.