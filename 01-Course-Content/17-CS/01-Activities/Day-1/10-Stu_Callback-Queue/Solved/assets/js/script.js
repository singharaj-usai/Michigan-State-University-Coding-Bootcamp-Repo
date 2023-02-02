// wait 8 seconds in a separate thread
setTimeout(() => {
  // remove the class that hides the element
  document.querySelector('form button')
    .classList.remove('display-none');
}, 8000);
