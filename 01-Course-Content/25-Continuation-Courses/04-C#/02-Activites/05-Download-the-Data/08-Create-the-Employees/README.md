# Create the Employees

This section completes pseudocode step 6. That last step was probably a bit tricky, but hopefully you have a loop set up now that's accessing a new `JObject` on every iteration, allowing you to perform sub queries, as shown here:

```cs
// "person" is a new JObject derived from "results[i]"
person.SelectToken("name.first")
```

If you came across a different approach in your search, that's fine, too. What matters is that you were able to get the data (the 10 first names). At the same time, you'll want to make sure that you can get each person's last name, id, and photo URL. All of this will feed nicely into the `Employee` constructor, as shown in the following code:

```cs
Employee employee = new Employee
(
  person.SelectToken("name.first"),
  person.SelectToken("name.last"),
  // etc...
);
```

But wait, an `Employee` takes in three strings and an integer—and these aren't strings. They're `JObject` data types. Look into how you can convert these to the right data types before giving them to the constructor. Fair warning, the id won't be as straightforward to convert to an integer as it might seem.

Once the data types are correct, add each new employee to the `List` that this method returns. The correct coding solution should more or less match the following code:

```cs
foreach (JToken token in json.SelectToken("results")) {
  // Parse JSON data
  Employee emp = new Employee
  (
    token.SelectToken("name.first").ToString(),
    token.SelectToken("name.last").ToString(),
    Int32.Parse(token.SelectToken("id.value").ToString().Replace("-", "")),
    token.SelectToken("picture.large").ToString()
  );
  employees.Add(emp);
}
```

Run the app. If successful, your `data` folder will become populated with 10 random user badges!

You may notice that there are warnings showing up when you run the application at this point. They are mentioning a possible null reference. Earlier we tackled a similar warning when we were using the `Console.ReadLine()` method earlier. See if you can find a way to get the warnings to go away.

One solution could be to use the null-forgiving operator `!` like in the following code:

```cs
foreach (JToken token in json.SelectToken("results")!) {
  // Parse JSON data
  Employee emp = new Employee
  (
    token.SelectToken("name.first")!.ToString(),
    token.SelectToken("name.last")!.ToString(),
    Int32.Parse(token.SelectToken("id.value")!.ToString().Replace("-", "")),
    token.SelectToken("picture.large")!.ToString()
  );
  employees.Add(emp);
}
```

This tells the compiler that this expression is not null. For more information, see the [Microsoft docs on ! (null-forgiving) operator](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/null-forgiving).

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.