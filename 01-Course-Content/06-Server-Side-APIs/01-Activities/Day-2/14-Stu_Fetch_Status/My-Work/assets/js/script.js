var badRequestUrl = 'https://api.github.com/orgs/nodejs/oreps?per_page=5';

var responseText = document.getElementById('response-text');

// This code is using the fetch function to send a GET request to the specified URL (requestUrl).
// The then function is called with the response object as an argument, and it logs the response status to the console.
// The second then function is called with the data as an argument and logs it to the console.

// To display the response on the page, you could use the innerHTML property of the response-text element to set the response text as the element's content. Here's an example of how you could modify the code to do this:

function getApi(request) {
    fetch(request)
        .then(function (response) {
            console.log(response.status);
            if (response.ok) {
                return response.text();
            } else {
                throw new Error('Request failed: ' + response.status);
            }
        })
        .then(function (response) {
            console.log(response.status);
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Request failed: ' + response.status);
            }
        })
        .then(function (data) {
            responseText.innerHTML = JSON.stringify(data);
        })
        .catch(function (error) {
            responseText.innerHTML = error.message;
        });
}

getApi(badRequestUrl);

// This will set the innerHTML of the response-text element to the response text if the request was successful (response.ok is true), or to an error message if the request failed.
