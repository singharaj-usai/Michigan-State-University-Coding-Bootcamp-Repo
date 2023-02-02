# Instructor Demo: MongoDB Compass - Update and Delete

If you have not yet done so, please refer to [MongoDB docs on downloading and installing Compass](https://docs.mongodb.com/compass/current/install/) to download Compass prior to starting the activity.

* With a MongoDB server installed locally and running, open Compass on your local machine to do the following:

  * Click on the `Connect` button under `New Connection` at the center of the screen.
  
  > Note: You do not need to paste a connection string in the text box since you are using the default setting. Simply click on the `Connect` button and proceed to the next screen.

  * The built-in MongoDB shell is located on the bottom left of the Local screen. Click on `MONGOSH` to open a new MongoDB shell.

* In the open MongoDB shell, do the following: 

  * 🔑 To create a database, we select the new database using the `use` command and give it a name. 

    ```sh
    use mygroceryDB;
    ```

  * 🔑 We use the `insertOne()` method to a create a new collection, `groceryCollection` and insert a single document with two key pairs.

    ```sh
    db.groceryCollection.insertOne( {"item": "banana", "department": "produce"} );
    ```

  * Click `enter` to execute the shell command. Make sure you note the generated `ObjectId({Unique-ID-String-Here})`. We will use this unique identifier to delete this record later on.

  * 🔑 To verify that the document has been added to our new collection, we can use the `find` method and pass in an empty object `{}` so that all documents currently in the collection will be returned. 

    ```sh
    db.groceryCollection.find({});
    ```

  * 🔑 To update the document we just created, we use the `updateOne()` method.

    * The first object we add is key pair that we want to use to find the document, or the filter. In this case, we are going to use the filter to find the document by it's item name. Using a filter is important so that only the document that you want updated is changed and not all the documents. 

    * Then, we use the MongoDB update operator `$set` to set our new value, updating our document.

    ```sh
    db.groceryCollection.updateOne({"item": "banana"}, {$set: { "item" : "apple"}});
    ```

  * 🔑 To delete the document we just updated, we use the `deleteOne()` method.

    * It is important that you provide filter information so that only the document we want deleted is deleted, not all the documents in the collection! 

    * In this case, only the document with the item name of `apple` will be deleted. If there happens to be more than one document with the item of `apple`, only the first one will be deleted. Don't click `enter` yet! 

    ```sh
    db.groceryCollection.deleteOne( {"item": "apple"});
    ```

    * A better way to do this is to use the unique identifier, the `_id`. Replace the `item` field with `_id` and paste the ObjectID you noted above as the key-pair value and click `enter` to execute the command. 

    ```sh
    db.groceryCollection.deleteOne({ "_id" : ObjectId("YOUR-UNIQUE_ID")} );
    ```

  * 🔑 To verify that the document has been deleted, we can use the `find` method. If successful, no documents should be returned since the one document in the collection has now been deleted. 

    ```sh
    db.groceryCollection.find({});
    ```

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
