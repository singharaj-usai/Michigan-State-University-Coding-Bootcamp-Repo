var badRequestUrl = 'https://api.github.com/unicorns';
var redirectUrl = './404.html';

fetch(badRequestUrl).then(function (response) {
  // Use a conditional to check the response status.
  // If that status equals the conditional, then redirect to the 404 page.

    // To check the status of the response, you can use the status property of the response object.
    // Here is an example of how you could use a conditional statement to check the status and redirect to the 404 page if the status equals 404:
    if (response.status === 404) {
        window.location.replace(redirectUrl);
    }
    // This will redirect the user to the 404 page if the request to badRequestUrl returned a 404 status code.
    // Note that this will only work if the fetch call is made in the context of a browser.
    // If you are using fetch in a Node.js environment, you would need to use a different method to redirect the user.
});
