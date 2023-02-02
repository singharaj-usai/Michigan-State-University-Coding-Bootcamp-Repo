import { openDB } from 'idb';

const initdb = async () =>
// We are creating a new database named 'todos' which will be using version 1 of the database.
  openDB('todos', 1, {
    // Add our database schema if it has not already been initialized.
    upgrade(db) {
      if (db.objectStoreNames.contains('todos')) {
        console.log('todos database already exists');
        return;
      }

      // Create a new object store for the data and give it an key name of 'id' which needs to increment automatically.
      db.createObjectStore('todos', { keyPath: 'id', autoIncrement: true });
      console.log('todos database created');
    },
  });

initdb();
