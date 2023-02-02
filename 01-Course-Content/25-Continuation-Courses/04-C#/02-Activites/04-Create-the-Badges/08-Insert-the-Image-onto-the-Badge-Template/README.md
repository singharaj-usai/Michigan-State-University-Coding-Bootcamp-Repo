# Insert the Image onto the Badge Template

Because we're dealing with an instance of the `HttpClient` as `client`, let's use it to call the `GetStreamAsync()` method and convert the `Stream` into an `SKImage`.

Add the following code:

```cs
using(HttpClient client = new HttpClient())
{
  for (int i = 0; i < employees.Count; i++)
  {
    SKImage photo = SKImage.FromEncodedData(await client.GetStreamAsync(employees[i].GetPhotoUrl()));
  }
}
```

Here we are using the `GetPhotoURL()` method on each `Employee` object in our `List`. We are then using the `GetStreamAsync()` method with the `await` keyword to tell the method to wait for this method to complete. We are then converting the `Stream` that is returned from the `GetStreamAsync()` method into an `SKImage` using the `FromEncodedData()` method.

Now that we've finished this step, how do we check whether we actually did anything?

**Hint**

> One option is to use the `SKData.SaveTo()` method and `File.OpenWrite()` method to create an image file to ensure this step was done correctly.
  
All right, now type the following code into the block of your `for` loop:

```cs
using (HttpClient client = new HttpClient())
{
  for (int i = 0; i < employees.Count; i++)
  {
    SKImage photo = SKImage.FromEncodedData(await client.GetStreamAsync(employees[i].GetPhotoUrl()));
    
    SKData data = photo.Encode();
    data.SaveTo(File.OpenWrite("data/employeeBadge.png"));
  }
}
```

Now to run and test the application, we'll need an employee picture to enter at the command prompt for employee information. For testing purposes use the following URL: [http://placekitten.com/400/400](http://placekitten.com/400/400).

This file gets overwritten every time the application runs. How can we prevent an overwrite if we need to keep all the employee badge images? Keep this question in mind as we continue coding.

Let's move on to the second step: converting the badge template.

We actually accomplished this step already and checked the result. Replace `photo.Encode();` with the following statements:

```cs
using (HttpClient client = new HttpClient())
{
  for (int i = 0; i < employees.Count; i++)
  {
    SKImage photo = SKImage.FromEncodedData(await client.GetStreamAsync(employees[i].GetPhotoUrl()));
    SKImage background = SKImage.FromEncodedData(File.OpenRead("badge.png"));

    SKData data = background.Encode();
    data.SaveTo(File.OpenWrite("data/employeeBadge.png"));
  }
}
```

We changed the variable name to `background` to signify that the badge image will be the background image onto which we'll print the employee information.

Now that these image conversions are complete, it's time to tackle the third step. We need to temporarily comment out the `background.Encode()` statement and `data.SaveTo()` statement so that we can create the canvas where we'll place the images.

## Create an SKCanvas by Using the SKBitmap Class

We'll use the `SKBitmap` class to create a canvas to place the images and text. A **bitmap** is a representation of an image or graphic that uses **pixels**, or tiny dots of color, to create an image.

You'll find bitmaps everywhere, because pixels are used heavily in digital media, including television shows, monitors, cell phones, video games, and even some famous paintings.

**Deep Dive**

> To learn more, see this [Art Institute of Chicago page on the painting "A Sunday on La Grande Jatte—1884"](https://www.artic.edu/artworks/27992/a-sunday-on-la-grande-jatte-1884).

The `SKBitmap` data type is very useful, as it allows the pixel count on the x-axis and y-axis of the 2D image to map placement and size precisely.

Let's create the canvas that we'll use to make the badge. To do that, we'll use the size constants that we will declare, as shown in the following code:

```cs
// Layout variables
int BADGE_WIDTH = 669;
int BADGE_HEIGHT = 1044;

using (HttpClient client = new HttpClient())
{
  for (int i = 0; i < employees.Count; i++)
  {
    SKImage photo = SKImage.FromEncodedData(await client.GetStreamAsync(employees[i].GetPhotoUrl()));
    SKImage background = SKImage.FromEncodedData(File.OpenRead("badge.png"));

    SKBitmap badge = new SKBitmap(BADGE_WIDTH, BADGE_HEIGHT);
  }
}
```

**Note**

> The layout variables added at this step and that will be added later are pixel values that have been added to save the time and hassle of manual trial and error to determine the best values for a desired layout.
  
When we created a new `SKBitmap` instance, we had to initialize the size parameters. We chose the width and height of the `SKBitmap` to reflect the size of the badge.

Next we'll need to convert this `SKBitmap` into a `SKCanvas` object—so that we can use the `SKCanvas` methods to draw on the canvas, using the `DrawImage()` method. We've chosen to make `badge` the canvas where we'll make the graphical modifications (in other words, add pictures and text).

## Create an SKCanvas Object

The `SKCanvas` class acts much like a wrapper around the badge bitmap and allows direct graphical modifications to the badge.

Take a look at the Constructors section of the [Microsoft Docs on the SKCanvas Class](https://docs.microsoft.com/en-us/dotnet/api/skiasharp.skcanvas?view=skiasharp-2.80.2). Let's try using this constructor to create a new `SKCanvas`. How should it look?

**Hint**

> For the correct syntax, refer to the [Microsoft Docs on the SKCanvas(SKBitmap) Constructor](https://docs.microsoft.com/en-us/dotnet/api/skiasharp.skcanvas.-ctor?view=skiasharp-2.80.2#skiasharp-skcanvas-ctor(skiasharp-skbitmap)).

Type out the following expression:

```cs
using (HttpClient client = new HttpClient())
{
  for (int i = 0; i < employees.Count; i++)
  {
    SKImage photo = SKImage.FromEncodedData(await client.GetStreamAsync(employees[i].GetPhotoUrl()));
    SKImage background = SKImage.FromEncodedData(File.OpenRead("badge.png"));

    SKBitmap badge = new SKBitmap(BADGE_WIDTH, BADGE_HEIGHT);
    SKCanvas canvas = new SKCanvas(badge);
  }
}
```

Now that the `SKCanvas` object has been created, we can use the methods in the `SKCanvas` class to insert images onto the badge.

Take another look at the [Microsoft Docs on the SKCanvas Class](https://docs.microsoft.com/en-us/dotnet/api/skiasharp.skcanvas?view=skiasharp-2.80.2) and see if you can find a method that will help you accomplish this goal. As you can see, there are many methods specific to drawing—especially shapes, images, and strings.

We'll use a method called `DrawImage()`. This method allows us to draw images onto the badge.

## Insert the Badge Template Image

Next, add the following highlighted code to insert a badge template `Image` object, named `background`, onto the badge:

```cs
using (HttpClient client = new HttpClient())
{
  for (int i = 0; i < employees.Count; i++)
  {
    SKImage photo = SKImage.FromEncodedData(await client.GetStreamAsync(employees[i].GetPhotoUrl()));
    SKImage background = SKImage.FromEncodedData(File.OpenRead("badge.png"));

    SKBitmap badge = new SKBitmap(BADGE_WIDTH, BADGE_HEIGHT);
    SKCanvas canvas = new SKCanvas(badge);

    canvas.DrawImage(background, new SKRect(0, 0, BADGE_WIDTH, BADGE_HEIGHT));
  }
}
```

Note the use of the SKRect class here. This special class is from `SkiaSharp` and allows us to allocate a position and size on the badge.

If we think back to constructors in JavaScript, we can examine the `SKRect` constructor's four arguments and think about how we'll instantiate a new object. The first two arguments indicate the coordinates for the upper-left corner of the rectangle: The first being the X coordinate of the upper-left corner, and the second being the Y coordinate of the upper-left corner. The next two arguments indicate the coordinates for the lower-right corner of the rectangle: the first being the X coordinate of the lower-right corner and the second being the Y coordinate of the lower-right corner.

**Deep Dive**

> For more information, refer to the [Microsoft Docs on the SKRect Struct](https://docs.microsoft.com/en-us/dotnet/api/skiasharp.skrect?view=skiasharp-2.80.2).

To review, note that the `DrawImage()` method's arguments involved taking in an `SKImage` object, then using the `SKRectangle` object for placement and size.

## Insert the Employee Photo

Next, we'll insert the employee photo at the coordinates currently held by the placeholder image on the badge template, by adding the following code:

```cs
// Layout variables
int BADGE_WIDTH = 669;
int BADGE_HEIGHT = 1044;     

int PHOTO_LEFT_X = 184;
int PHOTO_TOP_Y = 215;
int PHOTO_RIGHT_X = 486;
int PHOTO_BOTTOM_Y = 517;

using (HttpClient client = new HttpClient())
{
  for (int i = 0; i < employees.Count; i++)
  {
    SKImage photo = SKImage.FromEncodedData(await client.GetStreamAsync(employees[i].GetPhotoUrl()));
    SKImage background = SKImage.FromEncodedData(File.OpenRead("badge.png"));

    SKBitmap badge = new SKBitmap(BADGE_WIDTH, BADGE_HEIGHT);
    SKCanvas canvas = new SKCanvas(badge);

    canvas.DrawImage(background, new SKRect(0, 0, BADGE_WIDTH, BADGE_HEIGHT));
    canvas.DrawImage(photo, new SKRect(PHOTO_LEFT_X, PHOTO_TOP_Y, PHOTO_RIGHT_X, PHOTO_BOTTOM_Y));
  }
}
```

This step allows us to insert the employee photo onto the `SKCanvas` object with specific location coordinates, as well as specific size dimensions using `SKRect`.

So how do we check that we're going in the right direction? We'll need to test the code.

## Test the Code

Save this image to a file, by adding the following code to the bottom of our `for` loop:

```cs
SKImage finalImage = SKImage.FromBitmap(badge);
SKData data = finalImage.Encode();
data.SaveTo(File.OpenWrite("data/employeeBadge.png"));
```

Notice, that we are able to use the `FromBitmap()` method on the `SKImage` class and pass in our `SKBitmap`. From there, we can use the same process as before to save the image.

Now let's check the image file to see if we were able to successfully input the employee picture onto the badge template. Run the application and create a single employee at the command prompt to create this badge image. Don't forget to include the URL for the employee test photo, you can use the same URL as before: `https://placekitten.com/400/400`.

Success!

You were able to create the image objects, transfer them onto a bitmap using the `SKCanvas` class, and then successfully place them with the correct size dimensions. Take a moment to bask in this accomplishment, knowing that your app is close to complete!

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.