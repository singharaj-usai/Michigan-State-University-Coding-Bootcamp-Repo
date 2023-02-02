// We export this function using an export statement so that we can import it to our index.js file

export const boxClick = () => {
  const box = document.getElementById('box');
  if (box.style.backgroundColor === 'blue') {
    box.style.backgroundColor = 'yellow';
  } else {
    box.style.backgroundColor = 'blue';
  }
};
