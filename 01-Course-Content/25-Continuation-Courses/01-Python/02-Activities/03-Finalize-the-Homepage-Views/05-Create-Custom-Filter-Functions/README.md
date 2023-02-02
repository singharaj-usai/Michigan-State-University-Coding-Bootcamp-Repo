# Create Custom Filter Functions

In a Node.js project, you might use a template engine like Handlebars.js to help you build the front end. Handlebars.js lets you write custom helper functions that allow you to format data in a certain way within the templates themselves.

The Jinja template engine in Flask offers similar functionality, through something called **filters**. In your Jinja templates, you'll want to filter the following three things:

* Dates formatted as month/day/year

* URLs truncated to include only the domain name (for example, `google.com`)

* Plural words (for example, "1 comment" vs. "2 comments")

## Create the Filters

To start using filters, create a new `utils` directory in the `app` directory. Then, in `app/utils`, create a new file called `filters.py`. We'll write the Jinja filters as regular Python functions in this file.

First, let's focus on date formatting. In the `filters.py` file, add the following function:

```python
def format_date(date):
  return date.strftime('%m/%d/%y')
```

The `format_date()` function expects to receive a `datetime` object and then use the `strftime()` method to convert it to a string. The `%m/%d/%y` format code will result in something like "01/01/20".

For more information, refer to the [Python documentation on strftime() and strptime() format codes](https://docs.python.org/3/library/datetime.html#strftime-and-strptime-format-codes).

To test this, add the following code to the end of the `filters.py` file:

```python
from datetime import datetime
print(format_date(datetime.now()))
```

Then use the following command to directly run the script:

```console
python app/utils/filters.py
```

The command line prints a string, like "01/01/20", that contains the current date.

Next we'll work on URL formatting. In the `filters.py` file, add the following function:

```python
def format_url(url):
  return url.replace('http://', '').replace('https://', '').replace('www.', '').split('/')[0].split('?')[0]
```

This code removes all extraneous information from a URL string, leaving only the domain name. Note that the methods we use, like `replace()` and `split()`, behave exactly the same as they do in JavaScript.

To test this, add the following code to the end of the file:

```python
print(format_url('http://google.com/test/'))
print(format_url('https://www.google.com?q=test'))
```

Run the script again, and confirm that both `print()` statements output `"google.com"`.

Finally, we have to address the issue of correctly pluralizing words. In the `filters.py` file, add the following function:

```python
def format_plural(amount, word):
  if amount != 1:
    return word + 's'

  return word
```

To test this, add the following code to the end of the file:

```python
print(format_plural(2, 'cat'))
print(format_plural(1, 'dog'))
```

Run the script again to confirm that it pluralizes "cats" while keeping "dog" singular.

Once you're satisfied, remove all the `print()` statements from the `filters.py` file. In the next section, you'll add these filter functions to the Jinja templates.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
