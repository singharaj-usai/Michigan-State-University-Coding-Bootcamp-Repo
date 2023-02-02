# Add a New Method to Util and Call from Program

Mirroring what we did previously with the `PrintEmployees()` method, add another static method, called `MakeCSV()`, to `Util`. The code should look like the following example:

```cs
using System;
using System.Collections.Generic;

namespace CatWorx.BadgeMaker
{
  class Util
  {
    public static void PrintEmployees(List<Employee> employees) 
    {
      // ...
    }

    public static void MakeCSV(List<Employee> employees)
    {
        
    }
  }
}
```

Although this method doesn’t actually do anything yet, let’s prep the main `Program.cs` to use it. Doing so will make it easier to test as we go along. Put the following code in the `Main()` function of `Program.cs,` beneath `List<Employee> employees = GetEmployees();`:

```cs
Util.PrintEmployees(employees);
Util.MakeCSV(employees);
```

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.