import '../css/styles.css';

import { postDb, getAllDb } from './database';

const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
  // Handle the form data
  event.preventDefault();
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
