# Clean Up the Code by Using Classes

First, let's clean up the code by creating some new classes. To start, create a new file called `Util.cs` in the same directory as `Program.cs.` This class is where we’ll handle any output-related logic. Type the following code in this new file:

```cs
namespace CatWorx.BadgeMaker
{
  class Util
  {

  }
}
```

Does this look familiar? We started the `Employee` class this way. Note that we want to make this available in the same namespace so that other classes like `Program` can see and use it. Unlike `Employee`, though, we won't create new instances of this class. See the following code for an example:

```cs
// What you won't be doing
Util thing = new Util();
```

Instead, this class will be a collection of general methods that can be used again and again—like the `WriteLine()` method that's available on the `Console` class.

We're already familiar with the `public` modifier, because it was integral to the `Employee` class. We’ll want the methods on `Util` to be public as well, but we need an extra modifier to make this work correctly, as shown in the following example:

```cs
namespace CatWorx.BadgeMaker
{
  class Util
  {
    // Method declared as "static"
    public static void PrintEmployees()
    {

    }
  }
}
```

We defined the preceding `PrintEmployees()` method as **static**, meaning that it belongs to the class itself instead of individual instances or objects. In other words, we don’t have to create a new `Util` object to use it. We can access this method directly from the class name, as follows:

```cs
Util.PrintEmployees();
```

If you look back at the `Program` class, you’ll recognize that the first method given to us was also declared as static, as shown in the following example:

```cs
static void Main(string[] args)
{

}
```

.NET won't create a new instance of `Program` to run the app; it only looks for a `Main()` method on the class itself (or other classes, if one doesn’t exist on `Program`). If you remove the static modifier, the app will break, because .NET can't see and run `Program.Main()` as is. Review the following example:

```cs
class Example
{
  // Example.StaticMethod();
  public static void StaticMethod()
  {
    Console.WriteLine("Bananas");
  }
  
  // Example thing = new Example();
  // thing.InstanceMethod();
  public void InstanceMethod()
  {
    Console.WriteLine("Oranges");
  }
}
```

Yes, it’s possible for a class to have both, but whether or not you should combine them largely depends on how you intend to use the class. In this case, it makes sense that `Util` will only ever have static methods.

Now is a good opportunity to start cleaning up the main `Program`. Move the previous `for` loop and console-writing logic out of `Program` and into the static method in `Util`. You might get some errors during the transfer; think about what might be missing from `Util` to get everything hooked up again.

**Hint**

> Lists aren't part of the `System` namespace. Think about what we want to "give" this method.

Your code should resemble the following example:

```cs
// Import correct packages
using System;
using System.Collections.Generic;

namespace CatWorx.BadgeMaker
{
  class Util
  {
    // Add List parameter to method
    public static void PrintEmployees(List<Employee> employees) 
    {
      for (int i = 0; i < employees.Count; i++) 
      {
        string template = "{0,-10}\t{1,-20}\t{2}";
        Console.WriteLine(String.Format(template, employees[i].GetId(), employees[i].GetFullName(), employees[i].GetPhotoUrl()));
      }
    }
  }
}
```

In the `Main()` method in `Program.cs`, delete the old `PrintEmployees()` method and replace the call to it with a call to the `Util` method, as follows:

```cs
Util.PrintEmployees(employees);
```

Run the app again to confirm that everything still works.

Congratulations! You just finished some much-needed code cleanup and made it easier to add future features. Next you'll deepen your understanding of static and instance methods before moving on.

## About CSV Files

Incidentally, the Util class will do more than just print names to the console. It will also populate a CSV file and, later, create nifty badge images. CSV files are simply text files containing lines of comma-separated values.

You can create your own CSV in any code editor by saving the following text as a CSV file:

```
1,sam,samerson

2,jane,janerson
```

If you have Excel installed, you can open this file as a spreadsheet. Alternatively, there are VS Code extensions that will display the CSV as a table. In any case, the CSV file type is versatile and fairly easy to make programmatically, so it’s a great fit here.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.