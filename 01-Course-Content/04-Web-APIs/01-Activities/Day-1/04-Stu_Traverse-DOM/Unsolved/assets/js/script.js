// Access element using id
var articlesDiv = document.getElementById('articles');
var headerDiv = document.getElementById('header');

// Change style by accessing style object's properties
articlesDiv.children[2].style.fontSize = '50px';
// articlesDiv.children[0].style.fontSize = '50px'; // Solution

headerDiv.style.color = 'white';
// headerDiv.children[0].style.color = 'white'; // Solution
