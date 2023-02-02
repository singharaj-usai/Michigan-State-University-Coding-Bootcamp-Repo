# Add Remaining Properties and Methods to Employee Class

After you've taken a breather, get ready to jump back in! There's plenty more to be done.

At this point, the `Employee` class still needs to store and return an employee's id and photo URL. Update the constructor to accept these arguments and set them to the properties we've already defined. Don't forget to use camelCase for the parameters and PascalCase when assigning them to properties.

Refer to the following example for guidance:

```cs
public Employee(string firstName, string lastName, int id, string photoUrl) {
    FirstName = firstName;
    LastName = lastName;
    Id = id;
    PhotoUrl = photoUrl;
}
```

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.