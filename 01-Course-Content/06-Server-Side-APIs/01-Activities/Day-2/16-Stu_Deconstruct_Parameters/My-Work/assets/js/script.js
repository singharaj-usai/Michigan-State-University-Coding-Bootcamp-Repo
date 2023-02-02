fetch(
    // Explain each parameter in comments below.
    // Retrieve data about issues for the Node.js repository, requesting 10 results per page.
    // Filter results to only include open issues.
    // Sort results by the date the issues were created, with the most recently created issues first.
    // Return results in descending order.
    'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'
)
    .then(function (response) {
        // Parse the response as JSON.
        return response.json();
    })
    .then(function (data) {
        // Log the data to the console.
        console.log(data);
    });
// Parameter explanation.
