# 11.5 Full-Time Lesson Plan: MERN and Redux

## Overview

Today's lesson will further explore complex state management in MERN-stack applications. We will review using type definitions with Apollo Server, creating a global store, and refactoring an app to use Redux instead of the React Context API.

## Instructor Notes

* In this lesson, students will complete activities `21-Ins_Typedefs` through `28-Stu_Mini-Project`.

* Remind students that this module's **Challenge is extra credit**. If they choose not to submit it, their final grade will not be affected in any way. This Challenge is an opportunity for students to further practice their skills and get feedback on it.

* In the `24-Stu_Stripe` activity, students are introduced to implementing an e-commerce solution in an existing MERN app using Stripe. This activity serves two learning purposes. First, it is important that students practice reverse engineering an unfamiliar codebase since they are likely to encounter similar e-commerce integrations in the workplace. Second, as the goal of the Challenge is to refactor an authentic existing MERN app with a Stripe integration, this activity provides the students the needed exposure to Stripe prior to doing the Challenge. For more information about integrating Stripe, refer to [Stripe docs on getting up and running](https://stripe.com/docs/development/quickstart).

* We'll use the Stripe API to process payments, which includes making front-end and back-end changes. Don't worry, Stripe provides test credentials, so you won't need to use a real credit card to try it out. Refer to the [Stripe docs on testing your integration](https://stripe.com/docs/testing).

* For Project 03, students will choose their own groups and project ideas. Encourage students to form groups and start brainstorming ideas for their app, and be prepared to help anyone who is struggling to find a group or project idea.

* Remind students to do a `git pull` of the class repo to have today's activities ready and open in VS Code.

* If you are comfortable doing so, live-code the solutions to the activities. If not, just use the solutions provided and follow the prompts and talking points for review.

* Let students know that the Bonus at the end of each activity is not meant to be extra coding practice, but instead is a self-study on topics beyond the scope of this module for those who want to further their knowledge.

* If the students struggle with the `Everyone Do: Git` activity, walk through it with the students using the talking points provided. Otherwise, support the students as they do the activity and do a brief review at the end.

## Learning Objectives

* Create type definitions for Apollo Server applications.

* Implement a store provider in a React App using the Context API.

* Explain how the reducer function helps manage complex state with libraries like Redux.

## Time Tracker

| Start  | #   | Activity Name                        | Duration |
|---     |---  |---                                   |---       |
| 10:00AM| 1   | Instructor Do: Stoke Curiosity       | 0:10     |
| 10:10AM| 2   | Instructor Demo: Type Definitions    | 0:05     |
| 10:15AM| 3   | Student Do: Type Definitions         | 0:15     |
| 10:30AM| 4   | Instructor Review: Type Definitions  | 0:10     |
| 10:40AM| 5   | Instructor Demo: Stripe              | 0:05     |
| 10:45AM| 6   | Student Do: Stripe                   | 0:15     |
| 11:00AM| 7   | Instructor Review: Stripe            | 0:10     |
| 11:10AM| 8   | Instructor Demo: Actions/Reducers    | 0:05     |
| 11:15AM| 9   | Student Do: Actions/Reducers         | 0:15     |
| 11:30AM| 10  | Instructor Review: Actions/Reducers  | 0:10     |
| 11:40AM| 11  | Everyone Do: Git                     | 0:20     |
| 12:00PM| 12  | BREAK                                | 0:30     |
| 12:30PM| 13  | Instructor Demo: Mini Project        | 0:05     |
| 12:35PM| 14  | Student Do: Mini Project             | 0:60     |
| 1:35PM | 15  | Instructor Review: Mini Project      | 0:10     |
| 1:45PM | 16  | Introduce Challenge                  | 0:05     |
| 1:50PM | 17  | FLEX                                 | 0:40     |
| 2:30PM | 18  | End                                  | 0:00     |

---

## Class Instruction

### 1. Instructor Do: Stoke Curiosity (10 min)

* Welcome students to class.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is Redux?

  * 🙋 Redux is a predictable state container for JavaScript apps. The idea is to have a single store that holds your application's state.

  * 🙋 Redux, like the Context API, prevents developers from having to drill props down several layers of components.

* Redux is very similar to the Context API. The core principles of React's Context API are influenced heavily by Redux. While it's not common to work with both on the same project, it is important to be familiar with both the Context API and Redux. Today we will look more closely at Redux and refactor an app so that it uses Redux instead of React Hooks.

### 2. Instructor Demo: Type Definitions (5 min)

* Navigate to `21-Ins_Typedefs/server` in your command line and run `npm install` and `npm start` in your terminal.

* Open `localhost:4000/graphql` in your browser and demonstrate the following:

  * 🔑 The server is hosting something called the Apollo Playground, which executes queries on the server.

* Open `21-Ins_Typedefs/server/server.js` in your IDE to demonstrate the following:

  * Notice in the `server` file that we are using `apollo-server-express`, which allows us to import `ApolloServer` and connect GraphQL with the Express.js server:

    ```js
    const { ApolloServer } = require('apollo-server-express');
    ```

  * We are also importing two files, `typeDefs` and `resolvers`, both located in the `schemas` folder:

    ```js
    const typeDefs = require('./schemas/typeDefs');
    const resolvers = require('./schemas/resolvers')
    ```

  * The `typeDefs` file describes how the request and response data should be formatted.

  * The `resolvers` file contains an object with the possible `Query` and `Mutation` functions.

* Open `21-Ins_Typedefs/server/schemas/typeDefs.js` in your IDE to demonstrate the following:

  * First, inside the type definitions file, we import `gql` from `apollo-server-express`:

      ```js
      const { gql } = require('apollo-server-express');
      ```

  * `gql` allows us to parse a template string that defines the data types we will use in the query or mutation. First, we need to create a type for the `Query`:

    ```js
    type Query {
      posts: [Post]
      authors: [Author]
      author(id: Int!): Author
      post(id: Int!): Post
    }
    ```

  * The query references the different kinds of data we can request. For example, if we want to get a list of all the posts, we can state that the posts returned should be of type `Post`.

  * 🔑 We declare type definitions by providing the data type after the colon. Data types wrapped in square brackets indicate that multiple items of a given type should be returned:

    ```js
    posts: [Post]
    ```

  * Also defined in the `typeDefs` file is the `Post` type, a custom type that we created to describe the data that we can expect a `Post` to include.

  * The definition is saying that a `Post` will have an `id` property that is a number (`Int`) and that it cannot be null.

  * The `Post` type definition also includes a `title` of type `String`, an `authorId` of type `ID` that can't be null, and a `votes` property of type `Int`.

  * 🔑 Note that the items that can't be null are annotated with an exclamation mark:

    ```js
    type Post {
      id: Int!
      title: String
      authorId: ID!
      votes: Int
    }
    ```

  * Returning to the `Query` type definition, note that we have some queries that accept parameters -- for example, the `author` query.

  * The `author` query should return a specific author after it receives an `id` as an argument, and it should return data of type `Author`:

    ```js
    type Query {
      ...
      author(id: Int!): Author
    }
    ```

  * This file also includes a definition for `Mutation`. This definition will describe the resolvers that can mutate data in the database, similar to PUT or POST requests in REST APIs.

  * In the `createPost` definition, we state that this mutation accepts an argument of `post` that is of another custom type, `PostData`.

  * It also describes the data that should be returned, which in this case is a type of `authorResponse`:

    ```js
    type Mutation {
      createPost(post: PostData): postResponse
      createAuthor(author: AuthorData): authorResponse
    }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How can we indicate in a type definition that an argument is required?

  * 🙋 We can add an exclamation mark after the data type to describe a property that cannot be null.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `22-Stu_Typedefs/README.md`.

### 3. Student Do: Type Definitions (15 min)

* Direct students to the activity instructions found in `22-Stu_Typedefs/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🏗️ Implement Type Definitions for GraphQL

  Work with a partner to implement the following user story:

  * As a developer, I want to define a set of type definitions to validate my return data when using GraphQL.

  ## Before You Begin

  1. Navigate to the `22-Stu_TypeDefs/Unsolved` directory in the terminal.

  2. Run `npm install` to install dependencies.

  3. Run `npm run seed` to seed your MongoDB database for this activity.

  4. Run `npm run develop` to start both the front-end and back-end servers.

  ## Acceptance Criteria

  * It's done when I have created a `typeDefs.js` file in `/server/schemas`.

  * It's done when I have required `gql` from the `apollo-server-express` library.

  * It's done when I have created a `typeDefs` template that contains types for `Category`, `Product`, `Order`, and `User`.

  ---

  ## 💡 Hints

  How can we use the models defined in the `/models` directory to inform us of the kind of data that we can expect?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What is an `enum`, and how can it be used in type definitions?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 4. Instructor Review: Type Definitions (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel writing type definitions? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `gql`

  * ✔️ Custom types

  * ✔️ Argument types

* Navigate to the `22-Stu_Typedefs/Solved` folder and run `npm install`, `npm run seed`, and `npm run develop` to start the server.

* Open `22-Stu_Typedefs/Solved/server/schemas/typeDefs.js` in your IDE and explain the following:

  * We have to import `gql` from `apollo-server-express` before we can use it:

    ```js
    const { gql } = require('apollo-server-express');
    ```

  * In the `typeDefs` file for this activity, we have some predefined types for `Auth`, `Query`, and `Mutation`.

  * Some of these types rely on other custom types that haven't been defined yet, like `Category`, `Product`, `Order`, and `User`:

    ```js
    const typeDefs = gql`
      type Auth {
        token: ID
        user: User
      }

      type Query {
        categories: [Category]
        products(category: ID, name: String): [Product]
        product(_id: ID!): Product
        user: User
        order(_id: ID!): Order
      }

      type Mutation {
        addUser(
          firstName: String!
          lastName: String!
          email: String!
          password: String!
        ): Auth
        addOrder(products: [ID]!): Order
        updateUser(
          firstName: String
          lastName: String
          email: String
          password: String
        ): User
        updateProduct(_id: ID!, quantity: Int!): Product
        login(email: String!, password: String!): Auth
      }
    `;
    ```

  * The first definition to create is `Category`. We can start by looking at the schema for the type that we want to create.

* Open `22-Stu_Typedefs/Solved/server/models/Category.js` in your IDE to demonstrate the following:

  * The database will assign an `ID` for each item, which is not part of the schema but will be expected in the type definition.

  * Additionally, the `Category` type has a name property that is of type `String`:

    ```js
    const categorySchema = new Schema({
      name: {
        type: String,
        required: true,
        trim: true,
      },
    });
    ```

  * Now we have enough information to create the type definition for `Category`!

* Open `22-Stu_Typedefs/Solved/server/schemas/typeDefs.js` in your IDE and explain the following:

  * After we include the `name` property and the `_id` property that is assigned by GraphQL, the type definition for `Category` will look something like this:

    ```js
    type Category {
      _id: ID
      name: String
    }
    ```

  * The next definition to create is `Product`. Once again, we can review the schema for `Product` for a better idea of the data that we can expect.

* Open `22-Stu_Typedefs/Solved/server/models/Product.js` in your IDE to demonstrate the following:

  * The `Product` schema is more complex than that of `Category`.

  * The schema includes a `name`, `description`, `image`, `price`, `quantity`, and `category`.

  * Most of these properties are pretty easy to decipher, except the last one. Note the `ref` property that is set to the string `'Category'` -- telling us that the `category` property is referencing the `Category` schema.

* Open `22-Stu_Typedefs/Solved/server/schemas/typeDefs.js` in your IDE and explain the following:

  * Now that we have a grasp of the structure of `Product` and `Category`, we can start writing the type definitions.

  * Note that we are referencing another custom type, `Category`, for the `category` property:

    ```js
    type Product {
      _id: ID
      name: String
      description: String
      image: String
      quantity: Int
      price: Float
      category: Category
    }
    ```

* Open `22-Stu_Typedefs/Solved/server/models/Order.js` in your IDE to demonstrate the following:

  * The next definition is for the orders. The schema includes a `purchaseDate` property of type `Date` and a `products` property, which is an array that references another model, `Product`.

  * The `ref` property is another indication that the `Order` definition should reference another custom type, `Product`, in the `typeDefs.js` file:

    ```js
    const orderSchema = new Schema({
      purchaseDate: {
        type: Date,
        default: Date.now,
      },
      products: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Product',
        },
      ],
    });
    ```

* Open `22-Stu_Typedefs/Solved/server/schemas/typeDefs.js` in your IDE and explain the following:

  * Now we can create the definition for `Order`:

    ```js
    type Order {
      _id: ID
      purchaseDate: String
      products: [Product]
    }
    ```

* Open `22-Stu_Typedefs/Solved/server/models/User.js` in your IDE to demonstrate the following:

  * The `User` model should have `firstName`, `lastName`, `email`, and `password` properties, all of which should be of type `String`.

  * The `orders` property also directly references the `Order.schema`, which means that we will want to reference the custom type of `Order` in the `typeDefs.js` file:

    ```js
    const userSchema = new Schema({
      firstName: {
        type: String,
        required: true,
        trim: true,
      },
      lastName: {
        type: String,
        required: true,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
        minlength: 5,
      },
      orders: [Order.schema],
    });
    ```

* Open `22-Stu_Typedefs/Solved/server/schemas/typeDefs.js` in your IDE and explain the following:

  * Now that we have reviewed the `User` schema, we can write the code for the definition:

    ```js
    type User {
      _id: ID
      firstName: String
      lastName: String
      email: String
      orders: [Order]
    }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ In type definitions, how do we annotate properties that should contain more than one of something?

  * 🙋 We can wrap the type in square brackets to indicate that an array of objects should be expected.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Apollo documentation on gql](https://www.apollographql.com/docs/apollo-server/api/apollo-server/#gql), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 5. Instructor Demo: Stripe (5 min)

* Navigate to `23-Ins_Stripe` in your command line and run `npm install`, `npm run seed`, and `npm run develop`.

* Open `localhost:3000` in your browser and demonstrate the following:

  * When we run this application, we are presented with an app called Shop-Shop.

  * Let's begin by logging in to an account that has already been created:

    ```console
    email: pamela@testmail.com
    password: password12345
    ```

  * We can add items to the cart and then check out!

  * When we select "check out", we are redirected to the Stripe checkout.

  * 🔑 Stripe is a payment processing service for online merchants. It offers a useful set of developer tools that we will explore in this demo.

* Open `23-Ins_Stripe/server/schemas/resolvers.js` in your IDE to demonstrate the following:

  * To use Stripe, we must first install the necessary dependencies using `npm`:

    ```sh
    npm install --save @stripe/react-stripe-js @stripe/stripe-js
    ```

  * Once the dependencies are installed, we can import Stripe with the API key.

  * Notice the second set of parentheses after the import statement, which indicates that we invoking Stripe's JavaScript closure with the public API key passed in as an argument:

    ```js
    const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
    ```

  * In the `resolvers` file, let's look at the `checkout()` method inside the `Query` object for the resolver.

  * The method accepts `args` and `context` that will later be used to get the list of products that was passed to this method:

    ```js
    checkout: async (parent, args, context) => { ... }
    ```

  * To store all of the items for a given order, we create a new empty array called `line_items`.

  * We await the results of the request for the products in the order:

    ```js
    const { products } = await order.populate('products');
    ```

  * Then we loop through each of those products and create a new product object that will be used by Stripe. We call on the `products.create()` method to do this.

  * The `products.create()` method has a required property of `name` that we provide from the current product in the array.

  * We also provide a few optional arguments, like the product `description` and the `image` property:

    ```js
    for (let i = 0; i < products.length; i++) {
      const product = await stripe.products.create({
        name: products[i].name,
        description: products[i].description,
        images: [`${url}/images/${products[i].image}`]
      });
    ```

  * Then we create a price for each product, by creating a new variable called `price` inside the loop.

  * We call on the Stripe `prices.create()` method to assign a price for an existing product. This method takes a required parameter of `currency`, a `product` perimeter, and `unit_amount`.

  * The `unit_amount` is in cents, so we multiply by 100:

    ```js
    const price = await stripe.prices.create({
      product: product.id,
      unit_amount: products[i].price * 100,
      currency: 'usd',
    });
    ```

  * Toward the end of each iteration of the loop, we push a new object that contains the `price` and the `quantity` to the `line_items` array:

    ```js
    line_items.push({
      price: price.id,
      quantity: 1
    });
    ```

  * Now that we have all of the items ready to send off to Stripe in the `line_items` array, it is time to create the checkout session.

  * 🔑 A checkout session represents the payment session and also tells Stripe the line items in the order, the cost of the items, and the payment options the user has.

  * To create a session object, we create a variable `session` and set its value to the response we get from the `session.create()` method.

  * When we invoke the `session.create()` method, we pass in an object that contains the payment type, the items in the order, and the callback URLs for a successful or cancelled payment:

    ```js
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${url}/`
    });
    ```

  * Once the session information has returned from the async call to the sessions API, we return an object that contains the `session.id` to reference the session in the front end:

    ```js
    return { session: session.id };
    ```

  * Now we have an idea of how Stripe is implemented on the server-side; in the upcoming activity, we will explore how to implement Stripe on the front end.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do we create a new checkout session with Stripe?

  * 🙋 To create a checkout session, we need to invoke the `sessions.create()` method, by passing in an object that contains the payment method, line items, and callback URLs.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `24-Stripe/README.md`.

### 6. Student Do: Stripe (15 min)

* Direct students to the activity instructions found in `24-Stu_Stripe/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📐 Add Comments to Implementation of Stripe

  Work with a partner to add comments describing the functionality of the code found in [24-Stu_Stripe/Unsolved/client/src/components/Cart/index.js](24-Stu_Stripe/Unsolved/client/src/components/Cart/index.js).

  ## 📝 Notes

  What information does the front end need to reference a checkout session?

  Which packages do we need to import at the top of the file?

  Refer to the documentation:

  [Stripe documentation on prebuilt Checkout page](https://stripe.com/docs/checkout/integration-builder)

  ---

  ## 💡 Hints

  Where do we put the API key provided by the [Stripe dashboard](https://dashboard.stripe.com/)?

  What does the `loadStripe()` Promise do?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What is `IndexedDB`, and what is used for?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 7. Instructor Review: Stripe (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with global state? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ Checkout session

  * ✔️ `product.create()`

  * ✔️ `price.create()`

* Navigate to `24-Stu_Global-State/Unsolved/` in your command line and run `npm install`, `npm run seed`, and `npm run develop`.

* Open `24-Stu_Stripe/Solved/client/src/components/Cart/index.js` in your IDE and explain the following:

  * Let's look at the `Cart` component, where we import the front-end Stripe package. Specifically, we import a method called `loadStripe()`.

  * `loadStripe()` is a Promise that will return the Stripe object when the `stripe-js` package has been loaded into the component.

  * To use Stripe, we need to authenticate ourselves with Stripe's back end. `loadStripe()` accepts an argument containing the public-facing API key.

  * We assign the return value of the `loadStripe()` Promise to a variable called `stripePromise`:

    ```js
    const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
    ```

  * We also declare `getCheckoutQuery`, which is returned with a `data` object from an Apollo Hook called `useLazyQuery`. This method allows us to make a query to the back end for the checkout data:

    ```js
    const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);
    ```

  * This file also uses React's `useEffect` Hook in two different places.

  * The first `useEffect` callback lists `data` as the only item in the optional dependency array.

  * This means that when `data` is returned from the `getCheckout()` query, the code inside this block will run:

    ```js
    useEffect(() => { ... }, [data])
    ```

  * In the `useEffect` callback, we first ask whether a `data` variable exists. If so, that means that we have received the checkout session data from the back end.

  * Finally, we redirect the user to the Stripe checkout page, passing along the session information:

    ```js
    useEffect(() => {
      if (data) {
        stripePromise.then((res) => {
          res.redirectToCheckout({ sessionId: data.checkout.session });
        });
      }
    }, [data]);
    ```

  * Now let's review the second use of `useEffect` in this component.

  * Initially we check whether the cart's length or the `dispatch()` function has been updated in any way.

  * We are watching these two items for changes by including them in the `useEffect` optional dependency array.

  * Inside the `useEffect` callback, we declare a scoped helper function called `getCart()` that is responsible for populating the cart:

    ```js
    async function getCart() {
      const cart = await idbPromise('cart', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }
    ```

  * We add a check to determine whether the cart is empty, and if so we call the `getCart()` method:

    ```js
    if (!state.cart.length) {
      getCart();
    }
    ```

  * In the `Cart` component, we also have a method called `submitCheckout()`.

  * This method is responsible for pushing all of the cart items into an array that contains only the `id` for each product. We assign this new array to the variable `productIds`:

    ```js
    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    ```

  * After the loop has completed and we have all the `productIds` in one array, we invoke the `getCheckout()` query:

    ```js
    function submitCheckout() {
      const productIds = [];

      state.cart.forEach((item) => {
        for (let i = 0; i < item.purchaseQuantity; i++) {
          productIds.push(item._id);
        }
      });

      getCheckout({
        variables: { products: productIds },
      });
    }
    ```

  * We use this `submitCheckout()` method by attaching it to the `onClick` attribute of the checkout button.

  * First, however, we verify that the user is logged in by using some conditional rendering:

    ```js
    {Auth.loggedIn() ? (
      <button onClick={submitCheckout}>Checkout</button>
    ) : (
      <span>(log in to check out)</span>
    )}
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do we redirect the user to the Stripe payment page?

  * 🙋 To redirect the user to the Stripe checkout page, we need to pass along the checkout session information in an object.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Stripe documentation on Stripe.js](https://stripe.com/docs/js), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 8. Instructor Demo: Actions/Reducers (5 min)

* Navigate to `25-Ins_Actions-Reducers/client` in your terminal, run `npm install` and `npm start`, and demonstrate the following:

  * When we run this application, we are presented with a login screen and an option to update the username.

  * 🔑 The reason that we can perform any action is a result of this application using actions and a reducer.

* Open `25-Ins_Actions-Reducers/client/src/components/AccountDisplay.js` in your IDE to demonstrate the following:

  * Let's look more closely at the `AccountDisplay` component and explore how the actions and reducers are implemented.

  * At the top of the file we are importing the actions:

    ```js
    import { UPDATE_ACCOUNT_NAME, UPDATE_ACCOUNT_STATUS } from '../utils/actions';
    ```

* Open `25-Ins_Actions-Reducers/client/src/utils/actions.js` in your IDE to demonstrate the following:

  * The actions file only contains two actions -- one to update the account name and another to update the account status.

  * 🔑 Notice that we preface the variable names with the `export` keyword so that they can be imported into other components:

    ```js
    export const UPDATE_ACCOUNT_NAME = 'UPDATE_ACCOUNT_NAME';
    export const UPDATE_ACCOUNT_STATUS = 'UPDATE_ACCOUNT_STATUS';
    ```

* Open `25-Ins_Actions-Reducers/client/src/components/AccountDisplay.js` in your IDE to demonstrate the following:

  * We use actions when calling the `dispatch()` function to let the reducer know what sort of work should be performed on the global state.

  * Let's look at how the first action, `UPDATE_ACCOUNT_NAME`, is being used.

  * We want the users to be able to update their account name if they want, so we attach a function that will handle what happens when a user clicks the "submit" button:

    ```jsx
    return (
      <button onClick={handleInputSubmit}>Submit</button>
      ...
    )
    ```

  * In the `handleInputSubmit()` function, we call `dispatch()`, which accepts an action and the payload for what we want to change:

    ```js
    const handleInputSubmit = () => {
      dispatch({
        type: UPDATE_ACCOUNT_NAME,
        userName: newName,
      });
      setUpdatingName(!updatingName);
    };
    ```

  * 🔑 If we had written this component so that it used local state, we would then write a helper function to handle the updating of the account name inside the component. However, because we are using React Context and a reducer, we have to call `dispatch()` to manipulate the state.

* Open `25-Ins_Actions-Reducers/client/src/utils/reducers.js` in your IDE to demonstrate the following:

  * Once the action has been dispatched, it gets passed to the reducer, where a `switch` statement will decide which code should be executed.

  * The `UPDATE_ACCOUNT_NAME` case will return a copy of the current state, with the updated `userName` property provided in the action payload:

    ```js
    case UPDATE_ACCOUNT_NAME:
      console.log('UPDATE_ACCOUNT_NAME dispatched');
      return {
        ...state,
        userName: action.userName,
      };
    ```

* Open `25-Ins_Actions-Reducers/client/src/components/AccountDisplay.js` in your IDE to demonstrate the following:

  * Another feature of the small application allows the user to log in and out. That is what the second action, `UPDATE_ACCOUNT_STATUS`, is for.

  * In the return statement, we invoke the `dispatch()` function from the `onClick()` method of the login button.

  * Notice that the text content of the button also gets changed based on the `loggedIn` status from state. This is the property we will be updating:

    ```js
    <button
      onClick={() =>
        dispatch({
          type: UPDATE_ACCOUNT_STATUS,
          isLoggedIn: state.isLoggedIn,
        })
      }
    >
      {state.isLoggedIn ? 'Log out' : 'Log in'}
    </button>
    ```

* Open `25-Ins_Actions-Reducers/client/src/utils/reducers.js` in your IDE to demonstrate the following:

  * Once the action has been dispatched, it gets passed to the reducer, where the `switch` statement will once again decide which code should be executed.

  * The `UPDATE_ACCOUNT_STATUS` case will return a copy of the current state, with the updated `isLoggedIn` property provided in the action payload.

  * The `isLoggedIn` property is simply inverted from what it was when the dispatch function was called:

    ```js
    case UPDATE_ACCOUNT_STATUS:
      console.log('UPDATE_ACCOUNT_STATUS dispatched');
      return {
        ...state,
        isLoggedIn: !action.isLoggedIn,
      };
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What do we need to invoke an action inside an application that uses a reducer?

  * 🙋 We need to call the `dispatch()` function with the relevant action type and the action payload.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `22-State/01-Activities/26-Stu_Actions-Reducers/README.md`.

### 9. Student Do: Actions/Reducers (15 min)

* Direct students to the activity instructions found in `26-Stu_Actions-Reducers/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📐 Add Comments to Implementation of a Reducer

  Work with a partner to add comments describing the functionality of the code found in [reducers.js](.Unsolved/client/src/utils/reducers.js).

  ## 📝 Notes

  What is the purpose of the action argument that gets passed to the reducer function?

  How can we account for multiple types of actions inside the reducer?

  Refer to the documentation:

  [React documentation on useReducer](https://reactjs.org/docs/Hooks-reference.html#usereducer)

  ---

  ## 💡 Hints

  How do we make sure that the database is seeded?

  Which `npm` package allows us to run both the front end and the back end at the same time? How do you start it?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * Why do we create variable names for each action type in `actions.js`?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 10. Instructor Review: Actions/Reducers (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with actions and reducers? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `switch` statements

  * ✔️ `action.type`

  * ✔️ `action.payload`

* Open `26-Stu_Actions-Reducers/Unsolved/client/src/utils/reducers.js` in your IDE and explain the following:

  * This application called Shop-Shop is a small marketplace app that offers a lot of features, like adding items to your cart, updating products, updating cart quantities, and clearing your cart.

  * This application's reducer has a lot of moving parts. Let's review each action.

  * In the reducer `switch` statement, we have an `UPDATE_PRODUCTS` case.

  * 🔑 Note that the reducer is being passed a copy of the current state and an action:

      ```js
      export const reducer = (state, action) => { ... }
      ```

  * In the `UPDATE_PRODUCTS` case, we return a copy of the current state using the spread operator and an updated products array.

  * The products array is set to an array that includes the content of `action.payload`:

      ```js
      case UPDATE_PRODUCTS:
      return {
        ...state,
        products: [...action.products],
      };
      ```

  * The next action we want to review is the `UPDATE_CART_QUANTITY`.

  * The `UPDATE_CART_QUANTITY` case returns a new object that contains a copy of the current state, an updated `cartOpen` value, and an updated `cart` object.

  * To update the cart quantity, we first reference the existing state's `cart`.

  * We map over each product and, for each one, ask if the `id` passed into the `action.payload` is the same as the current product. If so, we want to change that particular product's quantity to the one included in `action.payload`:

    ```js
    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        cartOpen: true,
        cart: state.cart.map((product) => {
          if (action._id === product._id) {
            product.purchaseQuantity = action.purchaseQuantity;
          }
          return product;
        }),
      };
    ```

  * Now let's review the `REMOVE_FROM_CART` case. We start by declaring a new variable called `newState`.

  * Next, we filter through all of the products inside the current cart. If a product doesn't match the `id` from the `action.payload`, we don't include it in the new cart.

  * We directly assign the return value of the filter to `newState`.

  * Now that we have the `newState` object, we can return a copy of state, a Boolean value that indicates whether or not the cart is open, and the updated cart:

    ```js
    case REMOVE_FROM_CART:
      let newState = state.cart.filter((product) => {
        return product._id !== action._id;
      });

      return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState,
      };
    ```

  * The last case to annotate for this activity is the `default` case.

  * 🔑 We return state as a default because developers make mistakes -- sometimes `dispatch()` gets called with an action that doesn't exist!

  * We could encounter an error if the `action.type` passed to the reducer wasn't accounted for when creating the `switch` statement. To mitigate this, we return the current state in the `default` case:

    ```js
    default:
      return state;
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why is it a good idea to provide a `default` case that returns the current state?

  * 🙋 Using a `default` case in the `switch` statement prevents the application from crashing if an unknown action type is passed to the reducer.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [React documentation on useReducer](https://reactjs.org/docs/Hooks-reference.html#usereducer), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `27-Evr-GitHub-Actions`.

### 11. Everyone Do: Git (20 min)

* Open the [GitHub documentation on continuous integration](https://docs.github.com/en/actions/guides/about-continuous-integration) in your browser and explain the following:

  * **Continuous deployment** is the automated process by which new features and bug fixes are delivered to end-users.

  * In this Git Guide, you will set up a GitHub action that will enable you to automatically deploy your application to Heroku. This process can be adapted easily to work with your chosen cloud platform.

  * You will learn more about **CI/CD**, a term that you will hear often and that references the **continuous integration and continuous deployment** pipeline.

  * At the end of this guide, you will be able to automate the deployment of your apps!

* Direct students to the activity instructions found in `27-Evr-Continuous-Deployment/README.md`.

* While everyone is working on the activity, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

* 🔑 This is a brief overview and not the guide itself. Read the following steps to get an idea of where to start, then proceed to `27-Evr-Continuous-Deployment/README.md`.

* Open your command line and demonstrate the following:

  > Be sure to run `create-react-app` outside of the class repository folder to avoid any complications. If you already ran `create-react-app` inside the class repository, you will need to add a `.env` file to avoid conflicting versions of `eslint`. You can do this by running the following command at the root of your React app: `echo "SKIP_PREFLIGHT_CHECK=true" > .env`.

* To get up and running, we will need to create a boilerplate React application that will eventually be automatically deployed to Heroku:

    ```sh
    npx create-react-app github-cd
    cd github-cd
    ```

* 🔑 You will also need to create a GitHub repository for this project and add the remote URL to your local React app directory:

    ```sh
    git remote add origin <gh_remote_url>
    ```

* The guide will have you create some files that will instruct GitHub on how to interact with your Heroku application. This brings us to the next step to get you up and running.

* Visit the [Heroku page to create a new app](https://dashboard.heroku.com/new-app), and create an app for this project.

* Answer any questions before students go on break.

### 12. BREAK (30 min)

### 13. Instructor Demo: Mini-Project (5 min)

* Copy the `src` directory from `28-Stu_Mini-Project/Main/src` into `00-practice-app`.

* Run `npm i react-redux redux` to ensure that your practice React app has the necessary dependencies.

* Run `npm start` to start the application.

* Open `localhost:3000` in your browser and demonstrate the following:

  * When we load this application, we are presented with a digital garage.

  * In this app, we can perform a few actions like adding a car and turning a car's engine on or off.

  * Let's take a moment and check out the starter code.

* Open `28-Stu_Mini-Project/Develop/src/components/CarComponent.js` in your IDE to demonstrate the following:

  * As you can see, the `CarComponent` is currently using React Hooks and the Context API.

  * We are using `useContext` and `useReducer` to achieve global state in the app:

    ```js
    export default function CarComponent() {
      const initialState = useCar();
      const [state, dispatch] = useReducer(reducer, initialState);
      ...
    }
    ```

* 🔑 In this mini-project, you will refactor the application so that it uses Redux instead of React Hooks.

* 🔑 React's implementation of global state is heavily based on the Redux library -- so while this might sound like a daunting task, most of your code will be similar.

* This will also be an exercise in using documentation to find examples of how to implement certain features. Use the official [Redux documentation](https://redux.js.org/introduction/getting-started) as a resource.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What things will need to be replaced to implement Redux?

  * 🙋 We will replace the `useReducer` hook and the implementation of `useContext` with Redux-specific Hooks instead.

* Answer any questions before allowing students to start the mini-project.

### 14. Student Do: Mini-Project (60 min)

* Direct students to the activity instructions found in `28-Stu_Mini-Project/README.md`.

* Break your students into groups that will work together on this activity.

  ```md
  # Mini-Project

  In this activity, you will refactor an application that uses the Context API so that it handles state using the open-source JavaScript library Redux.

  ## Setup

  Copy the `src` directory from the `Develop` folder into `00-practice-app` before you begin.

  ## Instructions

  * Begin by installing the `redux` and `react-redux` libraries with `npm`.

  * Create a `store.js` file in the `utils` directory. This file should do the following:

    * Import `{ createStore }` from `redux`.

    * Import `reducers` from `./reducers`.

    * Create a default export of `createStore` that accepts an argument of `reducers`.

  * Open `/utils/CarContext.js` and import `{ Provider }` from `react-redux` and `store` from `./store`.

  * Refactor the `CarProvider` component so that it returns `<Provider>` with an attribute of `store`, set to the value of `store`.

  * Clean up any unused code left over from the React Hooks.

  * Run the application using `npm run start` to ensure that functionality is unchanged for the end-user.

  ---

  ## 💡 Hints

  How can we use the [Redux Fundamentals guide](https://redux.js.org/tutorials/fundamentals/part-1-overview) to find examples of implementation?

  What needs to be changed, if anything, inside the `reducers.js` file?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * Instead of using `React.createContext`, how can we use `Redux.createStore` and the existing `reducer` to generate the initial state and to calculate any future updates?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 15. Instructor Review: Mini-Project  (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with this mini-project? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `react-redux`

  * ✔️ `createStore`

  * ✔️ Redux store

* Navigate to `00-practice-app` in your terminal and explain the following:

  * To use Redux in the app, we first need to install two packages -- `redux` and `react-redux`:

    ```sh
    npm i react-redux redux
    ```

  * The Redux library can work with many front-end frameworks, not just React. To use Redux with React, we need the second dependency, `react-redux`, which allows us to listen to state changes inside the components.

* Open `28-Stu_Mini-Project/Main/src/utils/store.js` in your IDE to demonstrate the following:

  * The first task in this mini-project is to create a store. The Redux store will hold the entire state tree.

  * Much like the React Context API, we can only update the store using a `dispatch()` function.

  * In the `store.js` file, the first thing we do is import `createStore` from `redux`:

    ```js
    import { createStore } from 'redux';
    ```

  * 🔑 We should only have one store for the application.

  * We import the `reducers` file from `./reducers`:

    ```js
    import reducers from './reducers';
    ```

  * We also create a `default` export for the reducer.

  * The `createStore()` method accepts an argument of `reducer`, much like the `useReducer` Hook from React:

    ```js
    export default createStore(reducers);
    ```

* Open `/28-Stu_Mini-Project/Main/src/utils/reducers.js` in your IDE to demonstrate the following:

  * The code for the reducer is unchanged from the React Hooks version.

  * This is an example of the similarities between Redux and React's state management Hooks:

    ```js
    export default function reducer(state = initalState, action) {
      switch (action.type) {
        case ADD_CAR: {
          const newCarId = state.cars[state.cars.length - 1].id + 1;
          const newCar = { ...action.payload, id: newCarId };

          return {
            ...state,
            cars: [...state.cars, newCar],
          };
        }
        case START_CAR: {
          const carIndex = state.cars.findIndex((car) => car.id === action.payload);
          const updatedCar = { ...state.cars[carIndex], isRunning: true };

          const carsCopy = [...state.cars];
          carsCopy[carIndex] = updatedCar;

          return {
            ...state,
            cars: carsCopy,
          };
        }
        case STOP_CAR: {
          const carIndex = state.cars.findIndex((car) => car.id === action.payload);
          const updatedCar = { ...state.cars[carIndex], isRunning: false };

          const carsCopy = [...state.cars];
          carsCopy[carIndex] = updatedCar;

          return {
            ...state,
            cars: carsCopy,
          };
        }
        default: {
          return state;
        }
      }
    }
    ```

* Open `28-Stu_Mini-Project/Main/src/utils/CarContext.js` in your IDE to demonstrate the following:

  * Inside of the `carContext` file, we first need to import the `Provider` from the `react-redux` package:

    ```js
    import { Provider } from 'react-redux';
    ```

  * We also import the `store` that we just created from the `utils` folder:

    ```js
    import store from './store';
    ```

  * Finally, we need to refactor the `CarContext.js` file. First, we remove the `CarContext` export at the top, and then we remove the custom `useCar` Hook.

  * We also moved the `randomNum()` helper function into the `CarComponent`.

  * The `CarProvider()` function should then return the `Provider` that we imported from `redux`, with a value of `store` set to `store`. The final revisions should look something like this:

    ```js
    import React from 'react';
    import { Provider } from 'react-redux';

    import store from './store';

    export default function CarProvider(props) {
      return <Provider store={store} {...props} />;
    }
    ```

* Open `28-Stu_Mini-Project/Main/src/utils/CarComponent.js` in your IDE to demonstrate the following:

  * We longer need `useReducer` from React, so we can take that out of our React import.

    ```js
    import React, { useState } from 'react';
    ```

  * Since we want to handle data with Redux, instead we need to import both `useDispatch` and `useSelector` from `react-redux`.

    ```js
    import { useDispatch, useSelector } from 'react-redux';
    ```

  * Once imported, we can then use the `useDispatch` hook to dispatch actions as needed and the `useSelector` hook to select data from the store. 

    ```js
     const dispatch = useDispatch();
    const state = useSelector((state) => state);
    ```
    
* Open `localhost:3000` in your browser and demonstrate the following:

  * The application works the same using Redux as it did with React Hooks!

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What file didn't need to be changed at all to implement Redux into the application?

  * 🙋 The reducer worked with Redux out of the box, as it was written.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [Redux documentation on stores](https://redux.js.org/api/store/), and stay for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 16. Instructor Demo: Introduce Challenge (5 min)

* **Important**: Let students know that this Challenge is extra credit!

* Navigate to `02-Challenge/Main` in your terminal and run `npm install`, `npm run seed`, and `npm run develop`.

* Open `localhost:3000` in your browser and demonstrate the following:

  * Today we will refactor the marketplace application from `26-Stu_Actions_Reducers` so that it uses Redux.

  * Now that you know more about implementing state management with React Hooks and have some experience with Redux, it is time to test your skills with full Redux!

  * Much like the mini-project, this application will function the same as before but will use Redux instead of React Hooks.

  * 🔑 If you don't have access to your code from this activity, there is a mirror link in the module overview for you to get started.

  * **Important**: The Challenge requires a specific version (>=7.0) of `npm` in order to install peer dependencies like GraphQL. By default, Heroku uses `npm 6.x`, which may cause some issues. This is a good opportunity to educate students on how to configure their Heroku environment to meet the needs of the project, as shown in the following `package.json` snippet:

  ```json
  {
    "engines": {
      "npm": "7.x"
    }
  }
  ```

* Refer students to the [Heroku Docs on Specifying an NPM Version](https://devcenter.heroku.com/articles/nodejs-support#specifying-an-npm-version) for more information.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are we learning?

  * 🙋 We are learning how to implement Redux to manage complex state in an application. We are also learning how to use a new piece of technology by relying on documentation alone.

  * ☝️ How does this project build off or extend previously learned material?

  * 🙋 This project builds off of the core concepts of creating full-stack MERN applications. We also take what we know about React and expand that skill set with modern features.

  * ☝️ How does this project relate to your career goals?

  * 🙋 This project will demonstrate not only that you can learn new technologies but that you can do it relatively quickly -- which will help distinguish you from other applicants and appeal to potential employers.

* Ask TAs to direct students to the Challenge Requirements found in `02-Challenge/README.md`.

### 17. FLEX (40 min)

* This time can be utilized for reviewing key topics learned so far in this module or getting started on the Challenge.

* Answer any questions before ending the class.

### 18. END (0 min)

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this [anonymous survey](https://forms.gle/RfcVyXiMmZQut6aJ6).

---
 © 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
