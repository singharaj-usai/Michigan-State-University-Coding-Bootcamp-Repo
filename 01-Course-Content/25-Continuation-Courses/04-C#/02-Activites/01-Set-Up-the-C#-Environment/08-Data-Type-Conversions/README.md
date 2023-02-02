# Data Type Conversions

In JavaScript, there was often a need to convert data types. Let’s do this in C#.

Imagine that you're given the string `stringNum = "2"`. To use `stringNum` in a math operation, you need to do a data type conversion to a number.

Try writing code that converts the `stringNum` text to an `Int32` and stores it into a variable. Print the variable, and print the variable's type as well.

**Hint**

> Use the `Convert` class from the `System` namespace, specifically the `ToInt32()` method. You'll also need to use `GetType()`.
  
When you're finished, your work should resemble the following code:

```cs
string stringNum = "2";
int intNum = Convert.ToInt32(stringNum);
Console.WriteLine(intNum);
Console.WriteLine(intNum.GetType());
```

**Important**

> `Int32` designates the storage available for the variable. This calculates to 32 bits, which is 2^32 or 4,294,967,296 values. There are also `Int16` and `Int64` for different calculation sizes when necessary.

Now let’s move on to more complex data structures, which will allow us to start building the application.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.