// TODO: Edit the URL to get only 5 issues of Twitter's Chill repo
var requestUrl = 'https://api.github.com/repos/twitter/chill/issues?per_page=5';

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Github Repo Issues \n----------');
    console.log(data);
    // TODO: Loop through the response
    // TODO: Console log each issue's URL and each user's login
      data.forEach((issue) => {
          console.log(issue.url);
          console.log(issue.user.login);
      });
  });
