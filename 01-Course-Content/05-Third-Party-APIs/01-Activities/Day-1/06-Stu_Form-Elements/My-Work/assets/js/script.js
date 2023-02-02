var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
function handleFormSubmit(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the input value
    var inputValue = shoppingFormEl.find('input').val();

    // Append the input value as a list item to the shopping list
    shoppingListEl.append('<li>' + inputValue + '</li>');

    // Clear the input value
    shoppingFormEl.find('input').val('');
}

// TODO: Add an event listener to the `shoppingFormEl` to handle submission
shoppingFormEl.submit(handleFormSubmit);