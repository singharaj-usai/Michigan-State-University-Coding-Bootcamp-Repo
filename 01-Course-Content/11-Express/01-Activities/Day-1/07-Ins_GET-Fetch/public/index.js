console.log('hello');
const termEl = document.getElementById('terms');
const termButton = document.getElementById('term-btn');

const getTerms = async () => {
  const result = await fetch('/api/terms', {
    method: 'GET',
  });
  const json = await result.json();
  return json;
};

const renderTerm = (term) => {
  const cardEl = document.createElement('div');
  const cardBodyEl = document.createElement('div');
  const cardBodyTitle = document.createElement('div');

  cardEl.classList.add('card', 'p-5');
  cardBodyEl.classList.add('card-body', 'p-5');
  cardBodyTitle.classList.add('card-header', 'card-title', 'link');

  cardBodyTitle.innerHTML = `<a href=${term.url}>${term.term}</a>`;
  cardBodyEl.innerText = term.definition;
  termEl.appendChild(cardBodyTitle);
  termEl.appendChild(cardBodyEl);
};

const buttonHandler = () =>
  getTerms().then((response) => response.forEach((item) => renderTerm(item)));

termButton.addEventListener('click', buttonHandler);
