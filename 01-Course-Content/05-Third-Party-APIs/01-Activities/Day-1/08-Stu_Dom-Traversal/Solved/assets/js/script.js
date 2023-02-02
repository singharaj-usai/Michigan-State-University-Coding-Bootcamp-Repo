// Ensure the document is rendered when manipulating DOM elements
// Assemble: Create/select DOM elements
var rootEl = $('#root');

// Starting from the root element, `<main id="root">`, select all the boxes and change the background color to white.
rootEl.children('ul').children().css('background-color', 'white');

// Select the last `<ul>` or the third row.
// Long traverals can be segmented to provide better readability.
var rowThree = rootEl.children('ul').eq(2);

// Select the children of the `<ul>`, then select the first box and add the 'O'.
rowThree.children().eq(0).text('O');
