var requestUrl = 'https://api.github.com/orgs/Netflix/repos';

// JQuery AJAX
// TODO: Comment on how AJAX returns an API call
// Using AJAX to make a GET request to the GitHub API will return the data from the API call in the response parameter of the .then block.
// The response parameter contains the data returned by the API, which can be accessed and used in your code as needed.
$.ajax({
  url: requestUrl,
  method: 'GET',
  // In this example, the response parameter will contain an array of objects, each representing a repository owned by the Netflix organization.
}).then(function (response) {
  console.log('AJAX Response \n-------------');
  // The response parameter can be logged to the console to see the data returned by the API.
  console.log(response);
  // This will make a GET request to the GitHub API and log the response data to the console.
  // The response data will be an array of objects, each representing a repository owned by the Netflix organization.
});

// Browser Fetch Method
// TODO: Comment on how Fetch returns an API call
// Using fetch to make a GET request to the GitHub API will return a promise that resolves with a response object.
// The response object has a json method that can be used to parse the body of the response as JSON.
fetch(requestUrl)
    // In this example, the response object will contain the data returned by the API, which can be accessed and used in your code as needed.
    .then(function (response) {
      // The response.json() method returns a promise that resolves with the parsed JSON data.
    return response.json();
  })
  .then(function (data) {
    console.log('Fetch Response \n-------------');
    console.log(data);
    // This will make a GET request to the GitHub API and log the response data to the console.
    // The response data will be an array of objects, each representing a repository owned by the Netflix organization.
    // The response.json() method returns a promise that resolves with the parsed JSON data.
  });

// Browser XMLHttpRequest
// TODO: Comment on how XMLHttpRequest returns an API call
// Using XMLHttpRequest to make a GET request to the GitHub API will return the data from the API call in the response property of the XMLHttpRequest object.
// The response property contains the data returned by the API, which can be accessed and used in your code as needed.
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log('XMLHttpRequest Response \n-------------');
    // In this example, the response property will contain an array of objects, each representing a repository owned by the Netflix organization.
    // The response property can be logged to the console to see the data returned by the API.
    console.log(xhr.response);
  }
};
// This will make a GET request to the GitHub API and log the response data to the console.
// The response data will be an array of objects, each representing a repository owned by the Netflix organization.
xhr.open('GET', requestUrl);
xhr.send();

// TODO: Comment on the differences on the format of the data that was returned
// The format of the data returned by the API will depend on the API itself and the parameters of the request.
// Generally, APIs return data in a specific format such as JSON, XML, or HTML.
// In the examples, the API returns data in JSON format.
// JSON (JavaScript Object Notation) is a widely used data interchange format that is easy to read and write for humans and machines.
// It is based on a subset of the JavaScript programming language, and is typically used to transmit data between a server and a web application.
// In all of the examples, the data is returned as an array of objects, each representing a repository owned by the Netflix organization.
// The specific properties of each object, such as name, full_name, and url, will vary depending on the API and the parameters of the request.
// The main difference between the examples is the way the data is accessed and used in the code. fetch and $.ajax return a promise that resolves with the response data, while XMLHttpRequest returns the response data in the response property of the XMLHttpRequest object.
// The response data can then be accessed and used in the code as needed.
