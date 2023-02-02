# Bootstrap.CSS Cheat Sheet

![](../images/Bootstrap-Cheat-Sheet-Summary-Full.png)

## Bootstrap Cheat Sheet
### What Is Bootstrap?
Bootstrap 4 is a popular framework for front-end website development.

Primarily, it is a CSS mobile-first design and includes both CSS and JavaScript templates for such things as forms, buttons, navigation, typography, dropdowns, popovers, modals, and carousels, along with other interface elements. But don’t misjudge it: Bootstrap also offers plenty of room for customization and you can use it to code any type of website.

You can check out the full documentation on the [official website of Bootstrap.](https://getbootstrap.com/docs/4.4/getting-started/introduction/)

## Key Bootstrap Components
**Bootstrap.css**

This is the basic Bootstrap package that you will need to [download](https://getbootstrap.com/docs/4.3/getting-started/download/). CSS is a style sheet language for static information.

```html
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
```

**Bootstrap.js**

A JavaScript/jQuery library is what powers up certain components of Bootstrap such as animation, scrolling, and interactivity.

```html
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
```

**Glyphicons**

Glyphs are elemental symbols with typography, such as the English Pound symbol (£). Bootstrap has a huge list of embedded glyph icons that are available for free.

## Bootstrap Source Code Elements
The Bootstrap source code download includes the precompiled CSS, JavaScript, and font assets, along with source Less, JavaScript, and documentation.

* less/ – a preprocessor style sheet for CSS that eliminate repetitive coding tasks

* sass/ – a newer version of the preprocessor that is more popular
* js/ – simply refers to the source code JavaScript, which allows Bootstrap components to work

* fonts/ – these are icon fonts that come with the download

* dist/ – a folder that contains precompiled files for drop-in use in website development

**Note**: 
> Bootstrap also requires jQuery installation for Bootstrap’s JavaScript plugins. jQuery is a feature-rich component of the JavaScript library, and it whittles down lots of JavaScript code and wraps them into actions you can accomplish with a single line.

```html
<script src="https://code.jquery.com/jquery.js"></script>
```

To install plug-ins:

```html
<script src="js/bootstrap.min.js"></script>
```

## Bootstrap Screen Sizes
Bootstrap 4 is a mobile-first responsive framework. But still, you need to provide screen size instructions when you are creating page layout grids. Below are the standard screen sizes for reference:

Min: 

```html
@media (min-width: @screen-sm-min) // >= 768px (small tablet)
@media (min-width: @screen-md-min) // >= 992px (medium laptop)
@media (min-width: @screen-lg-min) // >= 1200px (large desktop)
```

Max: 

```html
@media (max-width: @screen-xs-max) { // < 768px (xsmall phone)
@media (max-width: @screen-sm-max) { // < 992px (small tablet)
@media (max-width: @screen-md-max) { // < 1200px (medium laptop)
```

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.