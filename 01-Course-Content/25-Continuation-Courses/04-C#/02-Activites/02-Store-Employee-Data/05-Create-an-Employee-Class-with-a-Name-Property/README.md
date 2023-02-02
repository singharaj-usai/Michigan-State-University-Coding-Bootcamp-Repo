# Create an Employee Class with a Name Property

Now that we can collect employee names and print them to the console, it’s time to work on the employee data. The badges we'll be creating must display an employee’s first name, last name, identification number, and photograph. We’ll call these data **properties**.

The following table illustrates the `Employee` entity you’ll be working with, including each property’s type:

```cs
<table>
    <tr>
        <td>Employee</td>
        <td></td>
    </tr>
    <tr>
        <td>string</td>
        <td>First Name</td>
    </tr>
    <tr>
        <td>string</td>
        <td>Last Name</td>
    </tr>
    <tr>
        <td>integer</td>
        <td>Id</td>
    </tr>
    <tr>
        <td>string</td>
        <td>Photo URL</td>
    </tr>
</table>
```

As we learned previously, C# provides a dictionary structure, which can store keys and values similar to Javascript objects. This might seem like a candidate for storing the employee data, but remember that dictionaries can only store values of the same type.

**Deep Dive**

> For more information, refer to the [Microsoft Docs on dictionaries](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.dictionary-2?view=netframework-4.8).

The employee data we’re dealing with is mostly strings, except for the employee ids, which are integers. We could transform the ids into strings for storage using a technique called **casting**—but if we ever need to treat ids like integers, we’ll need to cast them back into integers.

**Deep Dive**

> To learn more, refer to the [Microsoft Docs on casting and type conversions](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/types/casting-and-type-conversions).

We can’t anticipate all the possible cases for dealing with these properties, so let's store them in their original types and only cast them to other types as the need arises. A better option for storing employee data is to create an `Employee` class, which will allow us to define each property type individually.

## Create an Employee Class

We've mentioned that `Program` is a class containing the program’s `Main()` entry point method. C# permits defining multiple classes in a single file, so we could put the `Employee` class in `Program.cs.` But for the sake of code organization, we’ll follow the popular convention of defining classes in separate files.

All right, now to create a new file named `Employee.cs` in the `CatWorx.Badgemaker` folder. Let’s start by crafting a minimal class, as follows:

```cs
namespace CatWorx.BadgeMaker
{
  class Employee
  {
    // more to come!
  }
}
```

Note the namespace scope declaration. By wrapping the class in the `CatWorx.BadgeMaker` namespace, we can access it directly from any class that uses `CatWorx.BadgeMaker`. For example, if we wanted to use `Employee` in a class in a separate project—say, `Corporate.HumanResources`—we'd add using `CatWorx.BadgeMaker` at the top of the file in which the `HumanResources` class was defined. We could then use `Employee` anywhere in that class.

To ensure that this is a valid class that we can instantiate in the application, let’s go back to `Program.cs` and create a new `Employee` instance. We'll assign it to a variable named `employee`.

Remember that all variable declarations must include a type, as follows:

```cs
dataType variableName = value
```

Can you guess what the data type of `currentEmployee` will be in the following example?

```cs
____?____ currentEmployee = new Employee();
```

**Hint**

> Look at how we declared the employee list at the top of `Main()`.
  
When you define a class in C#, it registers that class name as a **custom type**, so the type of any instance of `Employee` is also `Employee`. See the following code for an example:

```cs
while (true)
{
  Console.WriteLine("Please enter a name: (leave empty to exit): ");
  string input = Console.ReadLine() ?? "";
  if (input == "")
  {
    break;
  }

  // Create a new Employee instance
  Employee currentEmployee = new Employee();
  employees.Add(input);
}
```

If we run the application now, it should behave the same as before. This assures us that the `Employee` class is working (although not very hard, for the time being).

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.