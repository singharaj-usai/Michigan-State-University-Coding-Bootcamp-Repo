// This code is using the fetch function to make a GET request to the GitHub API to retrieve a list of up to 5 users.
// The response from the API is in JSON format, which is being parsed into a JavaScript object using response.json().
// The resulting data is being logged to the console for inspection.

var userContainer = document.getElementById('users');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  var requestUrl = 'https://api.github.com/users?per_page=5';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Use the console to examine the response
      console.log(data);
      // TODO: Loop through the data and generate your HTML
      // It looks like the code is supposed to loop through the data and generate HTML
      // To do this, you could loop through the data using a for loop and create DOM elements to display the information.
      function displayUsers(users) {
        for (let user of users) {
          // Create a div element to hold the user information
          let userDiv = document.createElement('div');
          // Create an image element to display the user's avatar
          let avatarImg = document.createElement('img');
          avatarImg.src = user.avatar_url;
          // Create a span element to display the user's name
          let nameSpan = document.createElement('span');
          nameSpan.textContent = user.login;
          // Append the avatar and name to the user div
          userDiv.appendChild(avatarImg);
          userDiv.appendChild(nameSpan);
          // Append the user div to the container element
          userContainer.appendChild(userDiv);
        }
      }
    });
}
fetchButton.addEventListener('click', getApi);
