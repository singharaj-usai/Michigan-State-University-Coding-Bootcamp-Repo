# Render the Employee Photo

To render the employee photo onto the badge template, we'll need to successfully achieve a few smaller objectives. First we need the image file and photo URL to be converted to objects that can be manipulated in the `SKImage` class, as detailed in the following steps:

1. Convert the photo URL into `SKImage`.

2. Convert badge template into `SKImage`.

3. Place the images onto a canvas.

So first, let's get each employee photo and turn it into an `SKImage` stored in a variable called `photo`. Luckily, we created an instance method in the `Employee` class called `GetPhotoUrl()` that will get the `PhotoUrl` property of the employee instance.

Now before starting to code this step, let's determine some of the particular methods we might need to use to convert the photo URL into an `SKImage`:

1. Convert the URL into a `Stream`.

2. Convert this `Stream` into an `SKImage`.

The first method we'll use will be `HttpClient.GetStreamAsync()`. As the [Microsoft Docs on the HttpClient.GetStreamAsync method](https://docs.microsoft.com/en-us/dotnet/api/system.net.http.httpclient.getstreamasync?view=net-6.0) state, this "Sends a GET request to the specified Uri and returns the response body as a `Stream` in an asynchronous operation."

The second method will be the `SKImage.FromEncodedData()` that we used earlier. Recall, this method creates an `SKImage` from a `Stream`.

Now that we are going to implement an asynchronous method, we need to make some changes to some method declarations to allow for asynchronous processing.

The first method we need to change is the `MakeBadges()` method that we are working in now. We need to update it to look like the following:

```cs
async public static Task MakeBadges(List<Employee> employees) {
  using(HttpClient client = new HttpClient())
  {
    for (int i = 0; i < employees.Count; i++)
    {

    }
  }
}
```

In order to allow for asynchronous processing, we need to include the `async` keyword in the method name, which will allow us to use the `await` keyword within the method code block. An asynchronous method will have the return type of `Task` if the method does not return anything and the type `Task<TResult>` if it does, where `<TResult>` is replaced with the return type of the method.

In order to use the `Task` object, we need to include the following using statement within `Util.cs`:

```cs
using System.Threading.Tasks;
```

We will also need to include the following updates to the `Program.cs` Class:

```cs
using System.Threading.Tasks;

...

async static Task Main(string[] args)
{
    List<Employee> employees = GetEmployees();
    Util.PrintEmployees(employees);
    Util.MakeCSV(employees);
    await Util.MakeBadges(employees);
}
```

Notice, the return type of the `Main()` method is now Task as well, because our `Main()` method has no return type and would be `void` if it was not asynchronous. Note, we now include the `await` keyword when calling our `Util.MakeBadges()` method because it is now an asynchronous method.

**Deep Dive**

> For more information, refer to the [Microsoft Docs on Asynchronous Programming](https://docs.microsoft.com/en-us/dotnet/csharp/async) and the [Microsoft Docs on the Async Return Types](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/async/async-return-types).

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.