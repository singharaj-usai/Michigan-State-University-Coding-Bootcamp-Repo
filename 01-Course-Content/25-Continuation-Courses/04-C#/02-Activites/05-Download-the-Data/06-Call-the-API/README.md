# Call the API

This section represents step 4 in the pseudocode steps. Finally, the app is ready for that new feature! In `PeopleFetcher`, import the `System.Net.Http` namespace. You might remember needing to import this namespace in the previous module when it was time to download images. You can use the same `HttpClient` class from `System.Net.Http` to download information from API endpoints. Add the following code to the `GetFromApi()` method in `PeopleFetcher.cs` file, right before that method's return statement:

```cs
using (HttpClient client = new HttpClient())
{

}
```

Remember that to use an asynchronous method, we will need to make updates to the method we are using the asynchronous code in, and we will need to change the place that we call the method from. In this case, we need to update the `GetFromApi()` method and the `Main()` method. Update the `GetFromApi()` to look like the following:

```cs
async public static Task<List<Employee>> GetFromApi()
{
  ...
}
```

Notice that here we are using the `Task` return type that looks like `Task<TResult>` like we discussed previously. Because this method is asynchronous and does not return `null`, we need to specify the return type and replace `<TResult>` with the return type, which in this case is `List<Employee>`. As a result of this, we end up with a return type of `Task<List<Employee>>`.

**Hint**

> Don't forget to import the `System.Threading.Tasks` namespace in `PeopleFetcher.cs`!
  
We will also need to update the call in the `Main(`) method to look like the following:

```cs
employees = await PeopleFetcher.GetFromApi();
```

We’ll use a different method this time from the `HttpClient` method we used the last time. This time we will be using a method called `GetStringAsync()` rather than `GetStreamAsync()`. Add the following code to our `using` block in the `GetFromApi()` method:

```cs
string response = await client.GetStringAsync("https://randomuser.me/api/?results=10&nat=us&inc=name,id,picture");
```

The `GetStringAsync()` method will do exactly what it sounds like: return all of the information from this URL as a `string`. Save your work and print the response to the console to verify that the API request is working. If you see a massive block of unformatted JSON, as follows, you’re on the right track:

```json
{"results":[{"name":{"title":"ms","first":"danielle","last":"reid"},"id":{"name":"SSN","value":"801-52-3803"},"picture":{"large":"https://randomuser.me/api/portraits/women/37.jpg","medium":"https://randomuser.me/api/portraits/med/women/37.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/37.jpg"}}],"info":{"seed":"ad252bbde80093d2","results":1,"page":1,"version":"1.2"}}
```

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.