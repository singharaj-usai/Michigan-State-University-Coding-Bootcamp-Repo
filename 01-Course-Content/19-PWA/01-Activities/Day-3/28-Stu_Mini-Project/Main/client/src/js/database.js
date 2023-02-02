import { openDB } from 'idb';

const initdb = async () =>
// We are creating a new database named 'contact' which will be using version 1 of the database.
  openDB('contact', 1, {
    // Add our database schema if it has not already been initialized.
    upgrade(db) {
      if (db.objectStoreNames.contains('contact')) {
        console.log('contact database already exists');
        return;
      }
      // Create a new object store for the data and give it an key name of 'id' which needs to increment automatically.
      db.createObjectStore('contact', { keyPath: 'id', autoIncrement: true });
      console.log('contact database created');
    },
  });

// Export a function we will use to POST to the database.
export const postDb = async (name, home, cell, email)  => {
  console.log('Post to the database');

  // Create a connection to the database database and version we want to use.
  const contactDb = await openDB('contact', 1);

  // Create a new transaction and specify the database and data privileges.
  const tx = contactDb.transaction('contact', 'readwrite');

  // Open up the desired object store.
  const store = tx.objectStore('contact');

  // Use the .add() method on the store and pass in the content.
  const request = store.add({ name: name, home_phone: home, cell_phone: cell, email: email });

  // Get confirmation of the request.
  const result = await request;
  console.log('🚀 - data saved to the database', result);
};
;

// Export a function we will use to GET to the database.
export const getDb = async () => {
  console.log('GET from the database');

  // Create a connection to the database database and version we want to use.
  const contactDb = await openDB('contact', 1);

  // Create a new transaction and specify the database and data privileges.
  const tx = contactDb.transaction('contact', 'readonly');

  // Open up the desired object store.
  const store = tx.objectStore('contact');

  // Use the .getAll() method to get all data in the database.
  const request = store.getAll();

  // Get confirmation of the request.
  const result = await request;
  console.log('result.value', result);
  return result;
};


// Export a function we will use to DELETE to the database.
export const deleteDb = async (id) => {
  console.log('DELETE from the database', id);

  // Create a connection to the database database and version we want to use.
  const contactDb = await openDB('contact', 1);

  // Create a new transaction and specify the database and data privileges.
  const tx = contactDb.transaction('contact', 'readwrite');

  // Open up the desired object store.
  const store = tx.objectStore('contact');

  // Use the .delete() method to get all data in the database.
  const request = store.delete(id);

  // Get confirmation of the request.
  const result = await request;
  console.log('result.value', result);
  return result?.value;
};

// Start the database.
initdb();
