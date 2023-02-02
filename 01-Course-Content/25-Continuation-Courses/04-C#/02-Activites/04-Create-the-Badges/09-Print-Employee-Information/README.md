# Print Employee Information

In this section, we'll finish up the badge by inserting the text for each employee's information, including the company name, employee name, and employee id number.

Let's take another look at the [Microsoft Docs on the SKCanvas Class](https://docs.microsoft.com/en-us/dotnet/api/skiasharp.skcanvas?view=skiasharp-2.80.2) and see if we can find a method that will help us accomplish this goal. There are multiple drawing methods that allow us to draw shapes, images, and strings.

`DrawText()` sounds like the right method for this application. Take a minute to look over some examples in the [Microsoft Docs on the SKCanvas.DrawText method](https://docs.microsoft.com/en-us/dotnet/api/skiasharp.skcanvas.drawtext?view=skiasharp-2.80.2#skiasharp-skcanvas-drawtext(system-string-system-single-system-single-skiasharp-skpaint)).

As shown in the Overloads section of the documentation, a number of arguments are needed to format and style the string. Lets take a look at the one that looks like the following

```cs
DrawText(String, Single, Single, SKPaint);
```

This code draws the specified text string starting at the specified coordinates using an `SKPaint` object. The first argument specifies the text to be drawn. The second and third arguments give the X and Y coordinates that will be the origin of the text. You will notice these arguments take the type `Single`. This type is actually something we have seen before and is the same as the type `float`, in fact the `float` keyword is an alias for `System.Single`. See the [Microsoft Docs on Floating-Point Numeric Types](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/floating-point-numeric-types) for more information about this. The final argument is an `SKPaint` object, which is an object we will use to define certain characteristics about the text we want to draw, such as color, font, font size, text alignment, and other specifications.

In the first step, let's try to print the company name onto the badge. How would we go about accessing the company name from the employee?

**Hint**

> Look at the `Employee` class to see if there are any methods that could help us. We're still in a `for` loop, so what type of level scope are we on with the employee list?

We need to go back to the `Employee` class and add a function that will return the `CompanyName`. Add the following function to the `Employee` class:

```cs
public string GetCompanyName() {
  return "Cat Worx";
}
```

Because we're still in the `for` loop, we're on the object scope of the employee list and can access the instance method, `GetCompanyName()`, that we just added, as shown here:

```cs
employees[i].GetCompanyName();
```

Lets add an additional layout variable that we will need:

```cs
// Layout variables
int BADGE_WIDTH = 669;
int BADGE_HEIGHT = 1044;     

int PHOTO_LEFT_X = 184;
int PHOTO_TOP_Y = 215;
int PHOTO_RIGHT_X = 486;
int PHOTO_BOTTOM_Y = 517;

int COMPANY_NAME_Y = 150;
```

The second argument of the `DrawText()` method will be the X coordinate of the origin of the text to be drawn. Since we want this to be centered on the badge, we will compute the value to be half the width of the badge using `BADGE_WIDTH / 2f`. Adding the f suffix allows us to treat the 2 as a `float` and get a decimal for more precision since `BADGE_WIDTH` is an odd number. Without the `f` suffix, this value would be rounded to the nearest whole number since the `int` type cannot hold a decimal value.

The third argument of the `DrawText()` method will be the Y coordinate of the origin of the text to be drawn. This value is included in the layout variables and will be `COMPANY_NAME_Y`.

The fourth argument of the `DrawText()` method will be an `SKPaint` object. As mentioned previously, the `SKPaint` object will be used to define certain characteristics about the text we want to draw. Take a look at the [Microsoft Docs on the SKPaint object](https://docs.microsoft.com/en-us/dotnet/api/skiasharp.skpaint?view=skiasharp-2.80.2) for examples and a list of what you can do with this class. To create an `SKPaint` object and initialize it with the values we want to use for the company name text, add the following code:

```cs
SKPaint paint = new SKPaint();
paint.TextSize = 42.0f;
paint.IsAntialias = true;
paint.Color = SKColors.White;
paint.IsStroke = false;
paint.TextAlign = SKTextAlign.Center;
paint.Typeface = SKTypeface.FromFamilyName("Arial");
```

With this code, we are creating an instance of an `SKPaint` object and are altering the properties of the `SKPaint` instance to use the settings we want for drawing our company name text. We are altering the font, font size, color, alignment and a couple of other properties that you can read about in the [Microsoft Docs on the SKPaint object](https://docs.microsoft.com/en-us/dotnet/api/skiasharp.skpaint?view=skiasharp-2.80.2) if you want to learn more about any `SKPaint` properties.

Now that we have added everything we need for the `DrawText()` method to draw in the company name, go ahead and add these arguments into a `DrawText()` method call.

**Important**

> The order of the arguments is critical!
  
When you're finished, your work should look like the following code, which should come just before the `finalImage` code and just after the `SKPaint` setup we just did:

```cs
// Company name
canvas.DrawText(employees[i].GetCompanyName(), BADGE_WIDTH / 2f, COMPANY_NAME_Y, paint);
```

Test the code to see if the company name appears in the right place.

Awesome. Now we just have a few more steps to finish the badge.

The next step will be to print the employee's name on the badge. Lets make the employee name text the color black as well. Try to do that on your own using only this additional layout variable:

```cs
// Layout variables
int BADGE_WIDTH = 669;
int BADGE_HEIGHT = 1044;     

int PHOTO_LEFT_X = 184;
int PHOTO_TOP_Y = 215;
int PHOTO_RIGHT_X = 486;
int PHOTO_BOTTOM_Y = 517;

int COMPANY_NAME_Y = 150;

int EMPLOYEE_NAME_Y = 600;
```

**Hint**

> Leverage the previous step to fill out most of the arguments in the `DrawText()` method. Make sure that you are adding this code after the `DrawText()` method we used to draw the company name and before the `finalImage` saving code.

Using the previous step, shown in the following statement, we will use the `DrawText()` method again—but this time use the `GetFullName()` method to retrieve the employee name instead of the company name:

```cs
paint.Color = SKColors.Black;

// Employee name
canvas.DrawText(employees[i].GetFullName(), BADGE_WIDTH / 2f, EMPLOYEE_NAME_Y, paint);
```

The next step will be to print the employee id number to the page. For this step, we want to use the font Courier New instead of Arial. You will also need an additional layout variable:

```cs
// Layout variables
int BADGE_WIDTH = 669;
int BADGE_HEIGHT = 1044;     

int PHOTO_LEFT_X = 184;
int PHOTO_TOP_Y = 215;
int PHOTO_RIGHT_X = 486;
int PHOTO_BOTTOM_Y = 517;

int COMPANY_NAME_Y = 150;

int EMPLOYEE_NAME_Y = 600;

int EMPLOYEE_ID_Y = 730;
```

As before, the following new code should come before the `finalImage` saving code:

```cs
paint.Typeface = SKTypeface.FromFamilyName("Courier New");

// Employee ID
canvas.DrawText(employees[i].GetId().ToString(), BADGE_WIDTH / 2f, EMPLOYEE_ID_Y, paint);
```

Now let's run the program to check if the employee number printed correctly.

Let's run the application and create a single employee at the command prompt to create a badge image.

If the steps were followed correctly, we should have a badge image that looks similar to the following image:

![](../Images/image_10.png)

`Example of the employee badge with the employee number, name, and picture.`

Excellent! Have you noticed that the file `employeeBadge.png` is being rewritten every time you run the application? This was okay for testing purposes, but if you need many badges, overwriting the badge image files won't serve the final objective of creating image files for many employee badges.

How can we implement a change to the code so that we can have individual files for every employee's badge image?

Try to code your solution.

**Hint**

> Use string interpolation to insert the employee id number into the file name to differentiate each badge image file.
  
Refer to the following example:

```cs
data.SaveTo(File.OpenWrite("data/{0}_badge.png", employees[i].GetId());
```

Hm, this code is giving an error. It could be that the `OpenWrite()` method can't read the string interpolation. We need to convert the file name into a string before placing it into the `OpenWrite()` method argument.

See if you can figure out how to use `String.Format()` to output a file path that looks like `data/[id]_badge.png`.

When you're finished, your work should look like the following code:

```cs
string template = "data/{0}_badge.png";
data.SaveTo(File.OpenWrite(string.Format(template, employees[i].GetId())));
```

Now let's run this application and see if we were able to create the employee badges by creating multiple employees at the command prompt. See if different badges with the corresponding file names were created successfully in the `data` folder.

Excellent—great job! Take a moment to review some of the objectives that you accomplished in this section.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.