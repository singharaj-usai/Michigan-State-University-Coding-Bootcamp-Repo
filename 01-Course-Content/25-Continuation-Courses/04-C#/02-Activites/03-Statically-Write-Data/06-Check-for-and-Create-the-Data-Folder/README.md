# Check for and Create the Data Folder

Ultimately, we want to output the CSV to a new folder called `data`, but there’s a problem—we don’t have a folder called `data`. We could create the folder manually, but if the folder ever got deleted, the app would break.

Instead, let’s handle this with a bit of code. Inside the `MakeCSV()` method, write the following:

```cs
// Check to see if folder exists
if (!Directory.Exists("data")) 
{
  // If not, create it
  Directory.CreateDirectory("data");
}
```

This code will look for the folder first; if it doesn’t exist, the app will create it for the first time. However, you probably already saw some errors pop up, because the `Util` class doesn’t know what `Directory` means. What does that usually suggest? How could you solve this problem?

**Hint**

> How did we fix this issue with the `List` class?
  
Yep, we’re missing a namespace. The documentation for the `Directory` class tells us that it falls under the `System.IO` namespace. Let’s add that alongside the other imports, as follows:

```cs
using System;
using System.IO;
using System.Collections.Generic;
```

**Deep Dive**

> To learn more, refer to the [Microsoft Docs on the Directory class](https://docs.microsoft.com/en-us/dotnet/api/system.io.directory).

Okay, now we'll run the app and confirm that everything currently works as expected. If so, a `data` folder will be created in the same directory as the other classes.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.