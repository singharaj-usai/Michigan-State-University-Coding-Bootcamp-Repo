# Loop Over the Employees and Write the Data

Let’s write the first line of the CSV file inside the `using` statement. This line will provide column headings to help users make sense of the data. It should resemble the following example:

```cs
using (StreamWriter file = new StreamWriter("data/employees.csv"))
{
  file.WriteLine("ID,Name,PhotoUrl");
}
```

Run the code and verify that the text `"ID,Name,PhotoUrl"` appears in the CSV file.

Cool, we’re almost there! The last thing to do is to populate the file with actual employee data. We can repurpose the `for` loop and console log logic we wrote earlier—just change `Console.WriteLine()` to `file.WriteLine()`.

Try it on your own before referencing the following completed code:

```cs
using (StreamWriter file = new StreamWriter("data/employees.csv"))
{
  file.WriteLine("ID,Name,PhotoUrl");

  // Loop over employees
  for (int i = 0; i < employees.Count; i++)
  {
    // Write each employee to the file
    string template = "{0},{1},{2}";
    file.WriteLine(String.Format(template, employees[i].GetId(), employees[i].GetFullName(), employees[i].GetPhotoUrl()));
  }
}
```

Run the app and check whether your employee data made it into the CSV. Then celebrate! Knowing how to create files gives you a lot more power in developing applications.

**Deep Dive**

> Along with creating files, it’s also pretty useful to be able to read the contents of a file. To learn more, refer to the [Microsoft Docs on the StreamReader class](https://docs.microsoft.com/en-us/dotnet/api/system.io.streamreader).

Fantastic work. You've completed another important phase of the badge-maker application build! The next step will be creating image files.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.