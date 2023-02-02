# Explore the Program.cs File

Let's explore the contents of the `Program.cs` file to learn about some C# constructs. Here it is again, in the following code:

```cs
using System;

namespace CatWorx.BadgeMaker
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine("Hello, World!");
    }
  }
}
```

## Namespaces

In the `Program.cs` file, you'll notice the keyword `namespace` followed by the name of the app, `CatWorx.BadgeMaker`. **Namespaces** are used to organize and provide a level of separation in the code—something like modules in Node.js.

Think of namespaces as containers that have members. A member can be another nested namespace, a method, or a class (like in this case). After `namespace CatWorx.BadgeMaker`, everything inside the curly braces can be interpreted as members of that namespace.

**Pro Tip**

> Common C# conventions are to use a company name for the root namespace in order to ensure that it is unique.

## The System Namespace

On the very first line, with the `using` directive, we're importing a common namespace called `System`. Much like `require` or `import` when using modules in Node.js, in C# the `using` directive lets us use the corresponding namespace (`System`) without needing to qualify its use when using one of its members. For example, without this naming shortcut, every time `Console` is used, it would need to be preceded by `System` and a period.

The `System` namespace is part of the .NET framework. It is a collection of commonly used methods, data types, and data structures, which are the essential building blocks of a C# application.

**Deep Dive**

> To learn more, refer to the [Microsoft Docs on the System namespace](https://docs.microsoft.com/en-us/dotnet/api/system?view=netframework-4.8).

You may have noticed that this line shows a message that says: "Unnecessary Using Directive". This is because in .NET 6.0 there is a setting called **implicit usings**, which is turned on by default. This setting automatically adds certain `using` directives based on the project type.

For console applications with this setting enabled, the following `using` directives are implicitly included:

* `using System;`

* `using System.IO;`

* `using System.Collections.Generic;`

* `using System.Linq;`

* `using System.Net.Http;`

* `using System.Threading;`

* `using System.Threading.Tasks;`

**Note**

> Even though these directives are implicitly included with the default settings, they will be included in the code snippets. This inclusion will be for reference and so that if you change this setting your code will still work.

## The Main() Method

Within the namespace, you'll find a class named `Program` and a static method named `Main()`. You'll learn more about C# classes later, but for now, look more closely at the `Main()` method in `Program`.

`Main()` is a very special method that serves as the entry point of the application. The Main() method is invoked when the program runs—and it's where we'll place the code.

In order for `Main()` to be recognized as the program's entry point, the following syntax guidelines must be followed:

* `Main()` must be nested in a class.

* There can only be one entry point to a program.

* The keyword `void` signifies that the return of this executable method will be void.

* The keyword `static` implies that the scope of this method is at the class level, not the object level, and can thus be invoked without having to first create a new class instance. Hence the Main() method can be run as soon as the program runs.

* We use the following syntax to initialize the `Main()` method, with or without parameters:

We use the following syntax to initialize the `Main()` method, with or without parameters:

```console
static void Main () //Entry Point
```

Alternatively, you can initialize it as follows:

```console
static void Main (string[] args) //Entry Point
```

Now that we have a basic understanding of how a program is set up, let’s explore how to build one. We'll start with reviewing C# data types!

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.