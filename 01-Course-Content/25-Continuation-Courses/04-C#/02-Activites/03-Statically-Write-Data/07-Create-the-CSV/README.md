# Create the CSV

The `System.IO `namespace in the .NET framework provides other classes, besides `Directory`, that can aid file system operations. One such class is `System.IO.StreamWriter`, which facilitates creating and writing to files. Let's put that one to use!

After the directory logic, create a new `StreamWriter` object, as shown in the following example:

```cs
StreamWriter file = new StreamWriter("data/employees.csv");
```

That alone will make a new (albeit empty) CSV file in the `Data` folder. However, we’re not really following best practices here. In .NET apps, memory management is pretty important; we don’t want to waste memory on potentially heavy resources that are no longer being used.

So we could manually dispose of the `StreamWriter` object once we’re done with it—or we could let .NET do that for us with a `using` statement. This `using` statement would resemble the following example:

```cs
using (StreamWriter file = new StreamWriter("data/employees.csv"))
{
  // Any code that needs the StreamWriter would go in here
}
```

Yes, the keyword `using` has two distinct meanings that depend on the context (importing a namespace versus temporarily using a resource). Just remember that whatever is defined in the parentheses is ONLY available within the subsequent set of curly braces. Once that block of code runs, the resource (in this case, `StreamWriter`) is removed.

**Deep Dive**

> To learn more, refer to the [Microsoft Docs on IDisposable.](https://docs.microsoft.com/en-us/dotnet/api/system.idisposable)

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.