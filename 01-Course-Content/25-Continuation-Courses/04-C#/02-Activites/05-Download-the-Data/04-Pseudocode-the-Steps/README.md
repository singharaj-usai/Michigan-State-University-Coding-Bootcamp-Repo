# Pseudocode the Steps

You're in the final stretch, so the provided code snippets will become less complete, to give you a chance to flex your new C# muscles. Regardless, you should still have a solid plan before proceeding. Pseudocoding can help you develop that plan.

Remember, we want to keep the manual input feature but add another feature to download employee data from the API. Because the app is growing again, this would also be a good time to do more refactoring. Take that into account when pseudocoding these last few steps.

**Hint**

> The `Util` class ended up being used for all output. What could we do for all input?
  
The following steps represent the pseudocode for this final lesson:

1. Create a new `PeopleFetcher.cs` file in the root project directory.

2. Create the `PeopleFetcher` class in the new `PeopleFetcher.cs` file with the following code:

```cs
using System;
using System.Collections.Generic;

namespace  CatWorx.BadgeMaker 
{
  class PeopleFetcher 
  {
    // code from GetEmployees() in Program.cs
  }
}
```

3. Remove the `GetEmployees()` function from the `Program.cs` and place it into the new PeopleFetcher class in the PeopleFetcher.cs file.

4. In the new `PeopleFetcher.c`s file, create a new method called `GetFromApi()`.

5. Make an HTTP request to the API endpoint.

6. Convert JSON to C# data types.

7. Create a new `Employee` for each person that we fetched from the API.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.