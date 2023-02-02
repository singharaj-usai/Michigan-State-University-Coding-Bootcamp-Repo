const buttons = document.getElementsByTagName('button');

const clickHandler = function () {
// TODO: Add a comment describing the purpose of this variable.
  // The purpose of the count variable is to keep track of the number of clicks on the buttons.
  // It is scoped inside the clickHandler function, which means that it is only accessible within that function and any nested functions.
  let count = 0;

  // TODO: Add a comment describing what is happening.
  // When the clickHandler function is called, it returns an anonymous function that increments the count variable by 1 when it is called.
  // The anonymous function also sets the text content of the clicked button to show the number of clicks, using the count variable.
  return function () {
  
   // TODO: Add a comment describing how this variable is being scoped. 
    count++;
   // TODO: Add a comment describing how we are using the 'count' variable.
    this.textContent = `Clicks: ${count}`;
  };
};

// TODO: Add a comment describing the purpose of this loop.
// The purpose of the loop is to iterate through all the buttons and add the anonymous function returned by clickHandler as an event listener for the click event on each button.
// This means that when a button is clicked, the anonymous function will be called and the count variable will be incremented.
// The text content of the clicked button will also be updated to show the number of clicks.
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', clickHandler());
}
