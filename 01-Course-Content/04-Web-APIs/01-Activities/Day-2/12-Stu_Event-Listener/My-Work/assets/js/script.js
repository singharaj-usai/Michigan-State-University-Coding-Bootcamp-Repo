var count = 0;
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

function setCounterText() {
  countEl.textContent = count;
}

// TODO: Add event listener to increment button
incrementEl.addEventListener('click', (e)=>{
  console.log('Click event', e);
  count++; //count = count + 1;
  // countEl.textContent = count;
  setCounterText();
})

// TODO: Add event listener to decrement button
decrementEl.addEventListener('click', (e)=>{
  console.log('Click event', e);
  count--; //count = count - 1;
  // countEl.textContent = count;
  setCounterText();
})
