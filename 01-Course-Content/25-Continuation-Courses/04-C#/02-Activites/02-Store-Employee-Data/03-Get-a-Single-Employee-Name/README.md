# Get a Single Employee Name by Using ReadLine()

Remember that you've already hardcoded employee names to get comfortable coding C#. In the real world, the employee names and other information will come from outside the application, and it would be cumbersome to update this list every time the company hires a new employee.

Fortunately, `Console` has a method that allows us to read input from the command line and assign it to a variable. Let’s try this out by updating the `Main()` method to ask the user for an employee name and then immediately display it.

To do that, type the following code in the `Program.cs` file:

```cs
using System;
using System.Collections.Generic;

namespace CatWorx.BadgeMaker
{
  class Program
  {
    static void Main(string[] args)
    {
      List<string> employees = new List<string>() { "adam", "amy" };
      employees.Add("barbara");
      employees.Add("billy");
      Console.WriteLine("Please enter a name: ");
      // Get a name from the console and assign it to a variable
      string input = Console.ReadLine() ?? "";
      employees.Add(input);
      for (int i = 0; i < employees.Count; i++) 
      {
        Console.WriteLine(employees[i]);
      }
    }
  }
}
```

Run the program in the VS Code CLI by typing `dotnet run`. After typing a name and pressing Enter, you should see that name added to the printed list. Note that when it encounters `Console.ReadLine()`, the .NET runtime halts and waits for input. Then it continues executing on the next line.

**Note**

> You may have noticed that the syntax for the `Console.ReadLine()` that we used looks a little strange. This is necessary because by default in .NET 6.0, the compiler will warn you if there is a possible `null` reference. If `Console.ReadLine()` returned null, then there would be an issue because the `input` variable can only hold a `string` type. To solve for this, we use the **null coalescing operator** `??` which is quite similar to a ternary operator. This operator will check for `null` and replace the `null` value with the value after the operator. In this case, if we were to get a `null` value back from the `Console.ReadLine()` method, we would replace it with an empty string.

Now that we have an interactive command-line program, we can remove the hardcoded list of names and accept all names from the user. Using a `while` loop, we'll get multiple employee names and store them in a list.

Similar to how we iterated over the hardcoded list of employee names and output each one to `Console.WriteLine()`, we can loop over `Console.ReadLine()` and store user input in the employee list.

First, let’s remove the values we used to initialize the employees list, as well as the first two calls to `employees.Add()`. This will ensure that we're starting with an empty list. See the following code for an example:

```cs
static void Main(string[] args)
{
  List<string> employees = new List<string>();
  Console.WriteLine("Please enter a name: ");
  string input = Console.ReadLine() ?? "";
  employees.Add(input);
  for (int i = 0; i < employees.Count; i++) 
  {
    Console.WriteLine(employees[i]);
  }
}
```

Next, wrap the `Console.ReadLine()` call in a `while` statement. You might recognize `while` from JavaScript, where it behaves exactly the same: it executes a statement or a block of statements while a specified Boolean expression evaluates to true.

**Deep Dive**

To learn more, refer to the [Microsoft Docs on while](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/while).

Examine the following code:

```cs
static void Main(string[] args)
{
  List<string> employees = new List<string>();
  // Collect user values until the value is an empty string
  while (true)
  {
    Console.WriteLine("Please enter a name: ");
    string input = Console.ReadLine() ?? "";
    employees.Add(input);
  } 
  for (int i = 0; i < employees.Count; i++) 
  {
    Console.WriteLine(employees[i]);
  }
}
```

Before we run this, let's think about how the application will behave. The first time through the loop, the user will enter a name, and we'll add it to employees. Then the loop will restart—infinitely. What small piece of code could we add to the `while` block to exit the loop when the user is done entering names?

One solution is to break out of the loop if the user presses Enter without typing a name. In that case, we should check for an empty string (`""`). We can check for this and break out of the loop as follows:

```cs
while (true)
{
  Console.WriteLine("Please enter a name: (leave empty to exit): ");
  string input = Console.ReadLine() ?? "";
  // Break if the user hits ENTER without typing a name
  if (input == "") 
  {
    break;
  }
  employees.Add(input);
}
```

Remember, whenever you write a `while` statement, be sure to provide a mechanism to exit it, or you'll create an infinite loop!

Now the employee list can be populated entirely from the command line! Execute it by entering `dotnet run`, and confirm that it works as expected.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.