export const buttonClick = () => {
  const header = document.getElementById('header1');
  if (header.textContent == '') {
    header.textContent = 'Webpack is Working!';
  } else {
    header.textContent = '';
  }
};
