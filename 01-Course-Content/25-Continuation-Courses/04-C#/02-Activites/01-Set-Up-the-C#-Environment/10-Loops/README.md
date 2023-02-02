# Loops

It's time to test your googling skills. See if you can find the correct function to iterate through the employees list.

It turns out, just like in JavaScript, we can use `for` loops in C# to iterate through an array or, in this case, a list.

**Deep Dive**

> To learn more, refer to this [tutorial on C# for loops](https://www.tutorialsteacher.com/csharp/csharp-for-loop).
  
>  Can you note all the differences and similarities compared to `for` loops in Javascript?

## Write a for Loop

Replace the `Console.Writeline()` statement currently in the `Main()` function with the following code block, and run the application:

```cs
for (int i = 0; i < employees.Count; i++) 
{
  Console.WriteLine(employees[i]);
}
```

In the console, we can display each employee's name on a separate line, as follows:

```console
adam
amy
barbara
billy
```

Pretty soon, we'll use a list to store the employee names for the badge-maker application. The list can grow to accommodate the size of the company, and it has a familiar interface to access and populate data into the list.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.