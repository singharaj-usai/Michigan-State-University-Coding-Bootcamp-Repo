# If – Else Statements
These types of statements are easy to understand. Using them, you can set conditions for when your code is executed. If certain conditions apply, something is done, if not – something else is executed.

```js
if (condition) {
    // what to do if condition is met
} else {
    // what to do if condition is not met
}
```

A similar concept to **if else** is the **switch** statement. However, using the switch you select one of several code blocks to execute.

## Strings
Strings are what JavaScript calls to text that does not perform a function but can appear on the screen.

```js
var person = "John Doe";
```

In this case, **John Doe** is the string.

## Escape Characters
In JavaScript, strings are marked with single or double-quotes. If you want to use quotation marks in a string, you need to use special characters:

* \' — Single quote

* \" — Double quote
Aside from that you also have additional escape characters:

Aside from that you also have additional escape characters:

* \\ — Backslash

* \b — Backspace

* \f — Form feed

* \n — New line

* \r — Carriage return

* \t — Horizontal tabulator

* \v — Vertical tabulator

## String Methods
There are many different ways to work with strings:

* charAt() — Returns a character at a specified position inside a string

* charCodeAt() — Gives you the Unicode of a character at that position

* concat() — Concatenates (joins) two or more strings into one

* fromCharCode() — Returns a string created from the specified sequence of UTF-16 code units

* indexOf() — Provides the position of the first occurrence of a specified text within a string

* lastIndexOf() — Same as indexOf() but with the last occurrence, searching backward

* match() — Retrieves the matches of a string against a search pattern

* replace() — Find and replace specified text in a string

* search() — Executes a search for a matching text and returns its position

* slice() — Extracts a section of a string and returns it as a new string

* split() — Splits a string object into an array of strings at a specified position

* substr() —  Similar to slice() but extracts a substring depending on a specified number of characters

* substring() — Also similar to slice() but can’t accept negative indices

* toLowerCase() — Convert strings to lower case
toUpperCase() — Convert strings to upper case

* valueOf() — Returns the primitive value (that has no properties or methods) of a string object

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.