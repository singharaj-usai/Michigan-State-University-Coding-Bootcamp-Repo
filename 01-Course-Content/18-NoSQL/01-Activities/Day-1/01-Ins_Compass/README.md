# Instructor Demo: MongoDB Compass

MongoDB Compass is the GUI for MongoDB and is a great way to explore a database and interact with data visually. If you have not yet done so, please refer to [MongoDB docs on downloading and installing Compass](https://docs.mongodb.com/compass/current/install/) to download Compass prior to starting the activity.

* With a MongoDB server installed locally and running, open Compass on your local machine to do the following:

  * 🔑 To work with our local MongoDB server, we first have to make a connection. By default, the local MongoDB instance runs on localhost with default port `27017`. We will use the default connection at `127.0.0.1:27017` to connect to Compass.  

  * Click on the `Connect` button under `New Connection` at the center of the screen.
  
  > Note: You do not need to paste a connection string in the text box since you are using the default setting. Simply click on the `Connect` button and proceed to the next screen.

  * At the top left of the Local screen under `host`, we see that a successful connection to the default `127.0.0.1:27017` has been made. 

  * The built-in MongoDB shell is located on the bottom left of the Local screen. Click on `MONGOSH` to open a new MongoDB shell.

* In the open MongoDB shell, do the following: 

  * 🔑 To create a database, we select the new database using the `use` command and give it a name. The `use` command performs two common functions. If the database already exists, the `use` command selects the existing database for use. If the database does not yet exist, `use` creates the database as well as selects it for use.

  * To create a new `shelterDB` database, we enter `use` followed by the name of the database, `shelterDB` after the prompt. 

    ```sh
    use shelterDB;
    ```

  * 🔑 Data in MongoDB databases is stored in one or more collections. Just like when we create a database, we do not have to use a special command to create the collection. Instead, we can simply give the new collection a name and insert data in a single step.

    * We start our command with `db.` This `db` refers to the current database in use. We then use dot notation to enter the name of the collection we want to use. Since `petCollection` doesn't exist yet, it will be automatically created when our command is executed.

    * Next, we add the `insertOne()` method to insert a single document into our new collection, `petCollection`.

      ```sh
      db.petCollection.insertOne();
      ```

  * 🔑 Before we can execute the command, though, we must add our document's data. We define an object that contains the fields and values that we want to store and pass the object into `insertOne()`.

    ```sh
    db.petCollection.insertOne({ pet: "dog", breed: "chihuahua"});
    ```

  * Now that our command is complete and contains the data we want to insert, we click `enter` to execute the command. 

  * When a document has been successfully created, an object is returned. If we have not explicitly included a value for the `_id` field, the inserted ID that MongoDB creates for us is included in this object. 

    ```sh
    { 
     acknowledged: true,
     insertedId: ObjectId("{Unique-ID-String-Here}") 
    }
    ```

  * 🔑 To fetch the document we just created, we use the same syntax with the `find()` method. Notice that when our new document is returned, an `_id` has been inserted into the document.

    ```sh
    db.petCollection.find();
    ```

* Scroll up to the top of the page, and do the following to explore our data using Compass's interface:

  * When we click on the `Refresh` located the top of the Compass screen underneath `Local`, the `shelterDB` database we just created should appear on the list of available databases. 

  * We click on the arrow to the left of the `shelterDB` database to open it and click on the `petCollection` collection that appears below.

  * Once the `petCollection` is opened, the new document that we created appears in the Documents tab on the right of the screen. 
  
  * Using the visual interface we can explore, modify, and even delete the data using the `Find` and edit buttons on the page. In the next steps, we will learn to perform these CRUD operations within our app.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
