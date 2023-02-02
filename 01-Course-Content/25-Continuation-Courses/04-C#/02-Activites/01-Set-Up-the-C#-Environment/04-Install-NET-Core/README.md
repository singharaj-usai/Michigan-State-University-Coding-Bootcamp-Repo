# Install .NET Core

Next we’ll install the .NET Core SDK from Microsoft. This package will install everything we need to build and run C# applications, including libraries, tools, and the .NET runtime environment.

The .NET runtime environment includes the dotnet application, which will allow us to install extra packages (called **assemblies**) and run C# applications from the command line. It's similar to Node's npm.

**Deep Dive**

> The .NET Core SDK isn't specific to VS Code and can be used with other IDEs. For more information, refer to the [Microsoft Docs on the dotnet command](https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet).

To install the .NET Core SDK, follow these steps:

1. Navigate to the [Microsoft Docs on .NET downloads](https://dotnet.microsoft.com/download/dotnet).

2. Select the .NET 6.0 option.

3. Upon selection, you will be navigated to a new page where you will need to select the correct installer for your system.

4. After downloading the correct installer, open the installer and it will guide you through the remaining steps to install .NET Core SDK.

## Confirm the Installation

Before we move on, let’s confirm that the C# environment was installed.

To do that, open a new instance of the command line and type `dotnet --info`. You should see something like the following output:

```console
$ dotnet --info
.NET Core SDK (reflecting any global.json):
 Version:  6.0.202
 Commit:    f8a55617d2

Runtime Environment:
 OS Name:     Mac OS X
 OS Version:  12.3
.
.
.
```

If you get an error like "command not found," you might need to manually add a link to `dotnet` in your executable path.

**Deep Dive**

> For more details, refer to this [GitHub issue about the dotnet command not found on macOS](https://github.com/dotnet/cli/issues/2544) or this [GitHub issue about the dotnet command not found on Windows](https://github.com/dotnet/sdk/issues/7428).

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.