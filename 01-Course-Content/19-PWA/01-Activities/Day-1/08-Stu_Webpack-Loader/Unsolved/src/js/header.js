export const headerClick = () => {
  const header = document.getElementById('header');
  if (header.style.color === 'blue') {
    header.style.color = 'black';
  } else {
    header.style.color = 'blue';
  }
};
