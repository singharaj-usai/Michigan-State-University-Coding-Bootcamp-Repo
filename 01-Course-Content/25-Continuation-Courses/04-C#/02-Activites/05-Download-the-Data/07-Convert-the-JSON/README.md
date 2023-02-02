# Convert the JSON

This section will take care of pseudocode step 5. Here’s the good news: you have the data that you wanted. The bad news: it’s all in a string. If you’re comfortable with JavaScript, your instinct might be to convert the string back to JSON, because that’s the way the API was structured to begin with. But if you look at the data more objectively, you’ll notice that it’s a mix of data types: arrays, objects, sub-objects, strings, integers, and so on. So how does a complex JavaScript object fit into a language like C#, where data types must be declared?

While C# doesn’t necessarily have JavaScript-like objects, it does have classes, and classes can hold multiple data types. The `Employee` class contains strings, integers, and methods, after all. Fortunately, there are ways to **serialize**, or convert, a C# class to JSON, as well as ways to **deserialize** JSON into a C# class. Unfortunately, this really only works if we have a direct, one-to-one match between the data.

Something like the following code would deserialize perfectly:

```json
{
  "FirstName": "darrell",
  "LastName": "diaz",
  "Id": 427783006,
  "PhotoUrl": "https://randomuser.me/api/portraits/men/47.jpg"
}
```

Alas, what we get from the API doesn’t line up that nicely. This is where the solution becomes a bit more open-ended, which is actually a good thing! One thing that makes programming fun is how there’s always more than one way to solve a problem. If you google "C# parse json," you’ll find a wide variety of suggestions. One approach would be to create another class that acts as a **model** for the API and accounts for all of its nested properties. There are also additional .NET packages that could help us out here.

Let’s try using the Json.NET framework, because it won’t feel like such a big departure from how we would do things the JavaScript way.

**Deep Dive**

> To learn more, refer to the [Json.NET documentation](https://www.newtonsoft.com/json/help/html/Introduction.htm).

Json.NET is available under the package name `Newtonsoft.Json`, so make sure you install it the same way you installed the `SkiaSharp` package in the previous section. Run the following command in the CLI:

```console
dotnet add package Newtonsoft.Json
```

Once installed, import the correct namespace in the top of the `PeopleFetcher.cs` file:

```cs
using Newtonsoft.Json.Linq;
```

This gives us access to a new class called `JObject` that will allow us to parse the JSON. In fact, the first method we’ll use is called `Parse()`. Delete the statement `Console.Write(response);`, which we used to test the app. Add the following code in its place (after the response assignment):

```cs
JObject json = JObject.Parse(response);
```

This will convert the string that we downloaded from the API into a `JObject`, which has a useful method attached to it called `SelectToken()`. Go ahead and run the following console logs to see what happens:

```console
Console.WriteLine(json.SelectToken("results[0].name.first"));
Console.WriteLine(json.SelectToken("results[1].name.first"));
Console.WriteLine(json.SelectToken("results[2].name.first"));
```

If you encountered an error, look at the error message in the CLI as the first clue toward the fix.

If you see the following error message, it means that a module that's necessary for the application to work is missing.:

```console
Unhandled Exception: The type initializer for 'Gdip' threw an exception. Unable to load DLL `libgdiplus`: The specified module could not be found.
```

This error only affects non-Windows users, due to a missing library. For macOS users, install the missing module by typing the following command:

```console
brew install mono-libgdiplus
```

Now we should be able to pull data out of the JSON string using a syntax we’re already familiar with: `results[0].name.first`. One caveat is that it was a string we had to pass into the `SelectToken()` method.

Knowing this, the command `json.SelectToken("results")` should give us the entire array of people objects for us to iterate over. Remember, though, this isn't really an array or a list. It's a `JObject`. So a normal `for` loop won't help us here.

Do a bit of research and trial-and-error to see if you can successfully loop over results, console logging each person's first name (and only the first name for now) on every iteration.

**Pause**

What makes JSON difficult to use in C#?

> C# doesn’t have JavaScript-like objects.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.