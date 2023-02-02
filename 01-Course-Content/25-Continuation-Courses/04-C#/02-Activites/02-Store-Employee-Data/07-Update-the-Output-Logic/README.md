# Update the Output Logic

We've covered a lot of ground here, exploring the power of the `Employee` class. But we have a few more employee properties to manage, and the existing `employees` list of first names won't cut it. `Employee` can now output full names; soon it will output ids and photo URLs too. With all that in mind, it makes sense to store `Employee` instances instead of the simple strings we used initially.

Currently, we're declaring `employees` as follows, in the `GetEmployees()` method in `Program`:

```cs
List<string> employees = new List<string>();
```

How can we alter this declaration to handle `Employee` instances instead of strings?

**Hint**

> Remember that `Employee` is now a custom type.
  
We simply change the list type from `string` to `Employee`, as follows:

```cs
List<Employee> employees = new List<Employee>();
```

We'll have to make a couple more changes in `GetEmployees()` to work with a list of employees. First, we're no longer adding strings to `employees`; we're adding `Employee` instances. We should specify that as follows:

```cs
while (true)
{
  Console.WriteLine("Please enter a name: (leave empty to exit): ");
  string input = Console.ReadLine() ?? "";
  if (input == "")
  {
    break;
  }
  Employee currentEmployee = new Employee(input, "Smith");
  // Add currentEmployee, not a string
  employees.Add(currentEmployee);
}
```

Finally, we're no longer returning a list of strings; we're returning a list of `Employee` instances. So let's update the return value of the method, like in the following example:

```cs
// Update the method return type

static List<Employee> GetEmployees()
```

Now to update `PrintEmployees()`. First we need to change the method signature to set the correct parameter type. It will accept a `List<Employee>` instead of a `List<string>`, as follows:

When we iterate over employees, we're no longer iterating over strings but `Employee` instances! Now we'll get an employee's full name straight from the instance via `GetFullName()`. Let's update `PrintEmployees()` to use `GetFullName()`, as shown in the following example:

```cs
for (int i = 0; i < employees.Count; i++) 
{
  // each item in employees is now an Employee instance
  Console.WriteLine(employees[i].GetFullName());
}
```

Before the app can be run, the employees declaration in `Main()` must be edited to match the class we're using. We'll do that by changing the statement `List<string> employees = GetEmployees();` in `Main(),` as follows:

```cs
static void Main(string[] args) {
  List<Employee> employees = GetEmployees();
  PrintEmployees(employees);
}
```

Okay, let's run the app! It should behave exactly the same as it did before we made these changes. That might seem anticlimactic, but we've actually set the stage for a powerful application that can manage a massive list of complex employee data.

Phew! You can take a break now. This is the perfect time to reflect on what you've learned and how much progress you've made.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.