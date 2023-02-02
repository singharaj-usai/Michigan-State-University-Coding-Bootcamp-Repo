var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');

function handleFormSubmit(event) {
  event.preventDefault();

  var shoppingItem = $('input[name="shopping-input"]').val();

  if (!shoppingItem) {
    console.log('No shopping item filled out in form!');
    return;
  }

  var shoppingListItemEl = $(
    '<li class="flex-row justify-space-between align-center p-2 bg-light text-dark">'
  );
  shoppingListItemEl.text(shoppingItem);

  // add delete button to remove shopping list item
  shoppingListItemEl.append(
    '<button class="btn btn-danger btn-small delete-item-btn">Remove</button>'
  );

  // print to the page
  shoppingListEl.append(shoppingListItemEl);

  // clear the form input element
  $('input[name="shopping-input"]').val('');
}

// TODO: Create a function to handle removing a list item when `.delete-item-btn` is clicked
// This code will attach an event listener to the shoppingFormEl element that will listen for form submission events and call the handleFormSubmit function when a form submission event is detected.
// It will also attach an event listener to the shoppingListEl element that will listen for click events on any element with the .delete-item-btn class and call the handleRemoveButtonClick function when a click event is detected.
function handleRemoveButtonClick(event) {
  // Remove the parent element of the clicked element
  $(event.target).parent().remove();
}

// TODO: Use event delegation and add an event listener to `shoppingListEl` to listen for a click event on any element with a class of `.delete-item-btn` and execute the function created above
// The handleRemoveButtonClick function will remove the parent element of the clicked element.
shoppingListEl.on('click', '.delete-item-btn', handleRemoveButtonClick);

shoppingFormEl.on('submit', handleFormSubmit);