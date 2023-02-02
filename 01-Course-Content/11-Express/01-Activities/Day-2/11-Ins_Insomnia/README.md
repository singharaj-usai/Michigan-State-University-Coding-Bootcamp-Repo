# Insomnia Demo

* Open Insomnia and click the `+` sign, then click `New Request`. You can also do this using the keyboard shortcut `Command + N` or `Ctrl + N`.

* In the Insomnia interface, change the HTTP method to `GET` and enter in the endpoint for GitHub:  `https://api.github.com/repos/microsoft/vscode/pulls?state=open`

* Let's take a look at the different parts of this URI.

* In this example, we are making a `GET` request to GitHub's API to access pull requests that are currently open.

    | Protocol |    base URL    | endpoint | :organization | :repository | :resource | query string |
    | :------- | :------------: | -------: | ------------: | ----------: | --------: | -----------: |
    | https    | api.github.com |    repos |     microsoft |      vscode |     pulls |   state=open |

    > An [included image](Images/00-endpoint.png) has been added to the Images to show to students if you so choose.

* Click `send` in the Insomnia interface. Notice that our results appear on the left hand side of the app.

* The response will contain an array of objects that we could map through, which would be handy if we wanted to create some HTML elements for each open pull request.

* Change the word `pulls` to `issues` in the URI to demonstrate that we can access other resources with GitHub's API. All of the possible resources are outlined in [GitHub's Documentation](https://docs.github.com/en/rest/reference).
