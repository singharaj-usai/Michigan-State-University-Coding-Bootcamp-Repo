# NodeJS Folder Structure

One typical folder structure for an API following RESTful architecture and using the Express framework can be found below. Node servers typically follow the Model View Controller pattern. Models live together in one folder. Controllers are grouped together based on which feature or collection they are related to. Views are typically managed by the front end, although some Node servers may serve static HTML or use templating engines like Handlebars.

```
node-project/                    # top level project
  node_modules/                  # all installed node packages
  data/                          # static data files, if needed
    database.json
  src/                           # the source code for your server
    models/                      # models following the model-view-controller pattern
      comment.model.js
      post.model.js
    routes/                      # one folder for each collection in your API
      feeds/                     # folder for the user feeds collection
        feed.router.js           # router listing all possible routes for user feeds
        feed.controller.js       # controller with the implementation for each route
      posts/
        post.router.js
        post.controller.js
      api.js                     # top level router connecting all the above routes
    services/                    # any long running services or utilities
      mongo.js                   # e.g. connecting to a MongoDB database
    app.js                       # all Express middleware and routers
    server.js                    # the top level Node HTTP server
  .gitignore
  package-lock.json
  package.json
  ```

**NOTE**:
> This is just a reference. In the real world, every project will have differences in the requirements and the ideal project structure.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.