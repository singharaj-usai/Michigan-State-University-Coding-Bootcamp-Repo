# 2.3.1 HTML Basics

It's finally time to start coding! We'll begin our foray with the web's humble but ever-present powerhouse: HTML.

## What Is HTML?

**Hypertext markup language (HTML)** is one of the three cornerstone languages used on every webpage in existence. While the syntax might seem daunting at first, by the end of the course, you'll find it simple, straightforward, and completely painless.

HTML handles the basic **markup** of a page. This means that HTML is responsible for the simplest aspects of a website, including the following:

* Text elements on the page

* Images on the page

* The order in which the elements appear on the page

* Which text elements are the primary and secondary headings

To draw a distinction, HTML isn't responsible for things like the following:

* Fanciful colors and layouts

* Snazzy effects on the page

* Complex user interactivity

HTML represents the bare skeleton of a webpage. Then we use CSS and JS to add the fancy things like visual aesthetics, effects, and event handling (such as form submissions and database interactions).

## Tag, You're It!

Every HTML document comprises various pieces of contents wrapped in **tags**. These tags are most often represented by angle brackets (`<tag>`) with associated tag names contained inside. We insert the content between an opening tag and a closing tag so that the browser understands how to treat the content.

For instance, let's say we wanted HTML to style the following phrase in bold: "Coding Rocks!"

**HTML Code**:

`<strong>Coding Rocks!</strong>`

**Visualized**:

![](../../../img/39-fullstack-coding-rocks.png)

Note how we used the opening `<strong>` tag and the closing `</strong>` tag to wrap the content. The browser understands from this HTML that the developer wants the phrase to be in bold.

Don't worry—there are only a few dozen HTML tags out there, and after just a few weeks in the course, these will all become second nature.

You'll come across these tags frequently:

* Aptly named, the `title` tag defines the title of the website as shown on the webpage's tab.

* The `head` and `body` tags help define the structure of the overall webpage. In essence, `head` contains invisible matter that the browser uses to render the page correctly, whereas the `body` tag represents the actual content shown to the user.

* The `h1`, `h2`, `h3`, `h4`, `h5`, and `h6` tags represent the level of **heading** a given text block represents. Headings are exactly what they sound like: larger or more prominent elements of text on a page. They can be likened to topic sentences in a paper.

* The `p` tag represents paragraphs or blocks of text. You'll use this tag extensively to wrap most of the text on your webpages.

* The `strong` and `em` tags can respectively **bold** or *italicize* a given text element.

* The `br` tag creates a line of empty space between two blocks of content.

* The `img` tag displays images on a page. The syntax differs slightly (see below), but we'll walk through its makeup later in the course.

* The `a` tag (which stands for **anchor**) creates links to the same webpage or to other webpages. Again, the syntax differs slightly, but you'll become comfortable using a tags as the course progresses.

* The `ul`, `ol`, and `li` tags represent unordered lists, ordered lists, and list items. In essence, these HTML elements represent bulleted lists of symbols or numbers.

## Hello, HTML

The best way to learn coding concepts is to code. So let's roll up our sleeves and get started!

1. Open VS Code.

2. Copy and paste the following code directly into your editor:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />

    <title>Hello World!</title>
  </head>

  <body>
    <h1>Panda Fan Site!</h1>

    <p>
      I LOVE PANDAS!!! I LOVE PANDAS!!! I LOVE PANDAS!!! I LOVE PANDAS!!! I LOVE
      PANDAS!!!
    </p>

    <h2>Reasons I like Pandas</h2>

    <ul>
      <li>They are fuzzy</li>
      <li>They are cute</li>
      <li>They are adorable</li>
    </ul>

    <img
      src="http://images4.fanpop.com/image/photos/17800000/Cute-Panda-Cubs-Together-pandas-17838800-450-324.jpg"
      alt="Cute Pandas"
    />

    <br />

    <a href="http://www.pandafix.com/">PandaFix.com</a>
  </body>
</html>
```

3. Select File and Save As…, and save the file as `my_first_website.html` on your desktop.

4. Right-click on your VS Code window and then click "Open in Default Browser".

If all went well, you should see the following page show up on your screen.

![](../../../img/40-fullstack-pandas-website.png)

Rejoice! You just created your first HTML file.

If you're thinking, "But all I did was copy stuff," you're right! In the next activity, you'll work on an HTML file of your own.

## Resources

* [HTML Introduction](http://www.w3schools.com/html/html_intro.asp)

* [HTML Basics](https://www.codecademy.com/learn/learn-html)

* [Introduction to HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML)

* [List of HTML Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.