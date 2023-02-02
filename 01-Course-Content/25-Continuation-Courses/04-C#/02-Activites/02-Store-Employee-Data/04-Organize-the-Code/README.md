# Organize the Code

Nice work so far. As a refresher, `Main()` currently does the following things:

1. Serves as the entry point for the application, which is its primary responsibility.

2. Creates an empty list of employee names.

3. Collects input from the user.

4. Adds user input to the list of employee names.

5. Prints the contents of the list of employee names.

That's a lot of work, and there's more to come! To keep things manageable, let's organize the code into separate, specialized methods.

According to the **single-responsibility principle** in software design, every module, class, or function in a program should be responsible for a single part of the functionality. That's a hard goal to achieve, but we can at least move closer to it. Let's try to make `Main()` as lightweight as possible by delegating the heavy lifting to some new methods.

**Deep Dive**

> To learn more, refer to the [Wikipedia page on SOLID](https://en.wikipedia.org/wiki/SOLID).

The work we've done so far falls into two categories: getting employee data from the user and printing the results to the console. So let's make two new methods, `GetEmployees()` and `PrintEmployees()`. We know we'll call `GetEmployees()` first, so it should probably return a list of employee names. Once we have that, we can pass that list to `PrintEmployees()`.

In C#, a method declaration (or **signature**) looks like the following example:

`[access_modifier] ["static"] return_type name([parameters])`

The parts in brackets are optional. We'll talk about access modifiers and the `static` keyword later—just remember that if a static method wants to call another method inside the same class directly, that method must also be static. Because `Main()` is static, any other method it needs to call within `Program` must also be static.

For now, let's focus on the return type and parameters. We know that `GetEmployees()` needs to return employee names, which we've decided to store in a list of strings. So let's make the return type of this method `List<string>`. Place the code for the function `GetEmployees()` after the closing block of `Main()`, as follows:

```cs
static List<string> GetEmployees()
{
  // I will return a List of strings
}
```

This method doesn't need parameters, because it will know how to get employee names from the user all by itself. Now we can move all of the employee-getting code from `Main()` into this new method, as follows:

```cs
static List<string> GetEmployees()
{
  List<string> employees = new List<string>();
  while (true) 
  {
    Console.WriteLine("Please enter a name: (leave empty to exit): ");
    string input = Console.ReadLine() ?? "";
    if (input == "") 
    {
      break;
    }

    employees.Add(input);
  }
  // This is important!
  return employees;
}
```

Because we'll hand off the list of employee names to the caller of the method, we must make sure to return it at the end of the method. This fulfills the contract we created in the method signature, which promises to return a list of strings (`List<string>`).

To get the application functioning correctly, we need to call this method from `Main()`, in the place where we pulled out the employee-getting code. See the following example:

```cs
static void Main(string[] args)
{
  // This is our employee-getting code now
  List<string> employees = GetEmployees();

  for (int i = 0; i < employees.Count; i++) 
  {
    Console.WriteLine(employees[i]);
  }
}

static List<string> GetEmployees()
{
  List<string> employees = new List<string>();
  while (true) 
  {
    Console.WriteLine("Please enter a name: (leave empty to exit): ");
    string input = Console.ReadLine() ?? "";
    if (input == "") 
    {
      break;
    }
      
    employees.Add(input);
  }
  // This is important!
  return employees;
}
```

Note the syntax of the `GetEmployees()` method call. The left-hand side of the statement assigns a `List<string>` to employees. The right-hand side calls the new method, which returns a `List<string>`. This is very similar to the original employees declaration that we moved into `GetEmployees()`, shown in the following example:

```cs
List<string> employees = new List<string>();
```

This symmetry is common in C#, contributing to its elegance!

Now that we've moved the employee-getting logic into a method, let's move the employee-printing logic into a new `PrintEmployees()` method.

**Hint**

> `GetEmployees()` had a return type but no parameters. `PrintEmployees()` will require a parameter but won't have a return type.

This one is a little tricky, because we haven't talked about how to specify no return type. If we look at the `Main()` method, we can see that its signature states that it will return void. Any method that does not return a value must be defined to return void.

Let's define `PrintEmployees()` below `GetEmployees()`, as follows:

```cs
static void PrintEmployees(List<string> employees)
{
  for (int i = 0; i < employees.Count; i++) 
  {

    Console.WriteLine(employees[i]);

  }
}
```

Because this method won't return anything, we don't need to add a return statement at the end of the method.

The entire `Program` class now looks as follows:

```cs
class Program
{
  static List<string> GetEmployees()
  {
    List<string> employees = new List<string>();
    while (true)
    {

      Console.WriteLine("Please enter a name: (leave empty to exit): ");

      string input = Console.ReadLine() ?? "";

      if (input == "")
      {
        break;
      }
      employees.Add(input);
    }
    return employees;
  }

  static void PrintEmployees(List<string> employees)
  {
    for (int i = 0; i < employees.Count; i++)
    {
      Console.WriteLine(employees[i]);
    }
  }

  static void Main(string[] args)
  {
    List<string> employees = GetEmployees();
    PrintEmployees(employees);
  }
}
```

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.