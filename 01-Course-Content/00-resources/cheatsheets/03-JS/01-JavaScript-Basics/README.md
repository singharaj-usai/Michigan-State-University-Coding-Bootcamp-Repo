# JavaScript Basics
Let’s start off with the basics – how to include JavaScript in a website.

### Including JavaScript in an HTML Page
To include JavaScript inside a page, you need to wrap it in the **script** tags
```html
<script type="text/javascript">

//JS code goes here

</script>
``` 
With this input, the browser can identify and execute the code properly.

### Call an External JavaScript File
You can also place JavaScript in its own file and name it inside your HTML. That way, you can keep different types of code separate from one another, making for better-organized files. If your code is in a file called **myscript.js**, you would call it:
```html
<script src="myscript.js"></script>
```
### Including Comments
Comments are important because they help other people understand what is going on in your code or remind you if you forgot something yourself. Keep in mind that they have to be marked properly so the browser won’t try to execute them.

In JavaScript you have two different options:

* **Single-line comments** — To include a comment that is limited to a single line, precede it with //

* **Multi-line comments** — In case you want to write longer comments between several lines, wrap it in /* and */ to avoid it from being executed

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.