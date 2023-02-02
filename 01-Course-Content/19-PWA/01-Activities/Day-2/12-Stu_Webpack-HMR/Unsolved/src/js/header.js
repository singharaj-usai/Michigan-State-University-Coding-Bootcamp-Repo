export const headerClick = () => {
  const header = document.getElementById('header');
  if (header.style.color === 'blue') {
    header.style.color = 'black';
  } else {
    header.style.color = 'blue';
  }
};
// TODO: Try changing the 'blue' to 'orange' to see if hot reloading works
