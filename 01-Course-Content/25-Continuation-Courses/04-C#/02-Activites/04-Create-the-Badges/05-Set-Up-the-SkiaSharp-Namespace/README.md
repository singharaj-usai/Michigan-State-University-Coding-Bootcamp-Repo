# Set Up the SkiaSharp Namespace

If you do a quick internet search for `SkiaSharp`, you will see that it is a graphics system for .NET and C# for rendering 2D images. You will likely find that this API is based on [Google's Skia Graphics Library](https://skia.org/), that is used extensively throughout various Google products.

Next we will want to look at the specific docs for the [SkiaSharp Namespace](https://docs.microsoft.com/en-us/dotnet/api/skiasharp?view=skiasharp-2.88). There is quite a lot here, but quickly read over the descriptions for `SKBitmap`, `SKData`, `SKCanvas`, `SKImage`, and `SKPaint` as these will be relevant for our application.

Take a look at the [SKImage docs](https://docs.microsoft.com/en-us/dotnet/api/skiasharp.skimage?view=skiasharp-2.80.2). Our first objective is convert our `badge.png` file into an `SKImage` object.

**Pause**

Why is it necessary to create a new `SKImage` object?

> The image must be translated into an instance object of the `SKImage` class to use the tools or methods in this class.

Note that location of the badge template file is crucial. We can simply call for the `badge.png` in this case, because we saved it in the root directory.

Now let's type the following code into the `MakeBadges()` method:

```cs
public static void MakeBadges(List<Employee> employees) {
  // Create image
  SKImage newImage = SKImage.FromEncodedData(File.OpenRead("badge.png"));
}
```

To create a new `SKImage` object with our `badge.png` file, we are using a static method on the `SKImage` class called `FromEncodedData()`. This method takes a data type called a `Stream`. `System.IO.Stream` is a class that allows reading and writing of bytes or data from a source. To convert our `badge.png` file into a `Stream`, we will use another class from the `System.IO` namespace called File and more specifically, the `OpenRead()` method. This method takes in a `string` with the file path.

**Deep Dive**

> To learn more, refer to the [Microsoft Docs on the Stream class](https://docs.microsoft.com/en-us/dotnet/api/system.io.stream?view=net-6.0).

And now we'll call the method in the `Program.cs` file's `Main()` method just to see if the code is working, as follows:

```cs
static void Main(string[] args)
{
  List<Employee> employees = new List<Employee>();
  employees = GetEmployees();
  Util.MakeCSV(employees);
  Util.MakeBadges(employees);
}
```

But wait, how do we check to see if this `newImage` object was created correctly?

One option would be to save this `SKImage` object into a new file. This option is appealing because it is a step we'll need to accomplish anyway in the last step of the pseudocode.

The first step of this process is to encode our `SKImage` into the image format that we want. Take a look at the [docs for the Encode() method](https://docs.microsoft.com/en-us/dotnet/api/skiasharp.skimage.encode?view=skiasharp-2.80.2#skiasharp-skimage-encode). You can see that running the `Encode()` method with no arguments encodes the image in a png format, which is the format that we want to use. You can also see that the `Encode()` method returns the type `SKData`. Because of this, we will have to store it in a variable with that type.

Add the following code:

```cs
public static void MakeBadges(List<Employee> employees)
{
  SKImage newImage = SKImage.FromEncodedData(File.OpenRead("badge.png"));

  SKData data = newImage.Encode();
}
```

Now that we have our `SKImage` encoded in a png format, we will want to find a method to use on the `SKData` class that will allow us to save it to a file. Take a look at the [docs for the SKData Class](https://docs.microsoft.com/en-us/dotnet/api/skiasharp.skdata?view=skiasharp-2.80.2). Is there any method that looks promising in there? The `SaveTo()` method looks like it will accomplish what we are looking for. This method takes in a `Stream` to save the data into. Similar to before, we will use another method from the File class to convert the file we want to save to into a `Stream`. We will use the `OpenWrite()` method, which is used similarly to the `OpenRead()` method that we used before. We need to provide the file path to the `OpenWrite()` method as an argument.

Add the following code:

```cs
public static void MakeBadges(List<Employee> employees)
{
  SKImage newImage = SKImage.FromEncodedData(File.OpenRead("badge.png"));

  SKData data = newImage.Encode();
  data.SaveTo(File.OpenWrite("data/employeeBadge.png"));
}
```

Notice that we prefixed the argument in the `OpenWrite()` method with `data/` to ensure that the new image is stored in the `data` folder. Otherwise, the images would simply be stored in the project's root directory.

When you try to run the application at this point, you will get an output that looks similar to the following:

```cs
$ dotnet run
Util.cs(41,13): error CS0246: The type or namespace name 'SKImage' could not be found (are you missing a using directive or an assembly reference?)
Util.cs(41,32): error CS0103: The name 'SKImage' does not exist in the current context 
Util.cs(42,13): error CS0246: The type or namespace name 'SKData' could not be found (are you missing a using directive or an assembly reference?)

The build failed. Fix the build errors and run again.
```

In the `Util.cs` file, add the `using` directive, as follows:

```cs
using SkiaSharp;
```

Now let's try to run the program again.

Hmm, we're running into the same issue. Now what are we missing? Let's focus on the second part of the error fix suggestion: it looks like we're missing an assembly reference. But what is an **assembly reference**? Think of it like in Node.js and npm, how we often had to manually import packages using `npm install`.

Basically, we're being told that `SkiaSharp` isn't available in .NET Core, so we'll manually add this package to the application. How do we go about that task? Let's google another query, something like, "how to use `SkiaSharp` in .NET Core".

This search leads to many responses that pertain to a new package called `SkiaSharp`. Look over the [NuGet documentation on SkiaSharp](https://www.nuget.org/packages/SkiaSharp/) and see if you can identify whether this is the right fit and how to install or add this package to your application.

As you can see, the types or classes available for graphics functionality are the same ones you discovered when researching the `SkiaSharp` namespace. There are multiple tabs showing how to install this package depending on your coding platform or text editor. Use the one for .NET CLI, which you've been using with the .NET Core tool.

Type the following into the command prompt associated with the root directory:

```cs
dotnet add package SkiaSharp --version 2.88.0
```

Now head over to the `CatWorx.BadgeMaker.csproj` file to see if the package was included properly, as shown in the following example:

```cs
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>net6.0</TargetFramework>
    <ImplicitUsings>enable</ImplicitUsings>
    <Nullable>enable</Nullable>
  </PropertyGroup>

  <ItemGroup>
    <PackageReference Include="SkiaSharp" Version="2.88.0" />
  </ItemGroup>

</Project>
```

Now let's run the app from the root directory and see if we successfully imported the template into the application. By looking into the data directory, we should now see an image file called `employeeBadge.png`.

Success! We were able to import the badge template and create a new image file! While the image itself isn't very impressive, this marks an essential step. Now let's work on modifying the image and customizing the graphics. For now remove the code that we added in the `MakeBadges()` method, as we will need to make some modifications in the next sections.

Your `MakeBadges()` method should now look like the following:

```cs
public static void MakeBadges(List<Employee> employees)
{
  
}
```

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.