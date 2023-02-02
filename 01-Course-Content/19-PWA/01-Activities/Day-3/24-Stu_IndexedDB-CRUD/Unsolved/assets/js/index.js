import '../css/styles.css';

import { postDb, getAllDb, getOneDb, deleteDb, putDb } from './database';

const form = document.getElementById('contact-form');

// Adds deleteCard() to the global scope so each card has access to it.
window.deleteItem = (e) => {
  // Grabs the id from the button element attached to the contact card.
  let id = parseInt(e.parentElement.id);

  console.log(id);
  // Delete the card
  deleteDb(id);

  // Reload the DOM
  fetchList();
};

window.editList = async (e) => {
  let id = parseInt(e.parentElement.id);
  
  console.log(id);
  let todo = await getOneDb(id);

  let input = `
  <form action="" onsubmit="editTodo(event)">
    <input type="text" id="${id}" value="${todo.todo}" />
  </form>
  `;

  document.getElementById(id).innerHTML = input;
};

window.editTodo = async (e) => {
e.preventDefault()
let id = parseInt(e.target.children[0].id)
let todo = e.target.children[0].value
  console.log(e.target.children[0].id);
  console.log(e.target.children[0].value);
  putDb(id, todo)
  fetchList();
};

form.addEventListener('submit', (e) => {
  // handle the form data
  e.preventDefault();
  const todo = form.elements['todo'].value;

  // Post form data to IndexedDB
  postDb(todo);

  form.reset();
  fetchList();
});

const fetchList = async () => {
  // Grab card data from IndexedDB
  const result = await getAllDb();

  let listItem = ` `;

  // Loop through the data and create the contact listItem
  for (let data of result) {
    console.log(data);
    listItem += `
    <div class="flex-row align-center justify-space between" id="${data.id}">
      <li class="mr-2" id="list-item" onclick="deleteItem(this)">${data.todo}</li>
      <button class="btn btn-sm btn-info" onclick="editList(this)" id="edit-btn">Edit</button>
    </div>
    `;
  }

  // Setting innerHTML as listItem variable
  document.getElementById('list-group').innerHTML = listItem;
};

fetchList();
