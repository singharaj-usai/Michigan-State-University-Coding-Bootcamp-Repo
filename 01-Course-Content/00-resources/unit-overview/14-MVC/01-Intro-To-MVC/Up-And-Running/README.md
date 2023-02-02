# Up and Running
A web developer relies on numerous tools to perform everyday tasks. Let's review the tools that you'll use this week, as well as some useful resources for extra help as you learn and practice.

## Tools for This Week
For the following tools, you don't need to install anything—just check that you can access them.

In this module, you'll use the following tools:

* [Handlebars.js](https://handlebarsjs.com/) is a logicless templating language that keeps the View and the code separate and compiles templates into JavaScript functions. It’s an extension to the Mustache templating language. Although there is a standard [Handlebars npm package](https://www.npmjs.com/package/handlebars), you’ll use the [Express Handlebars package as the View engine for your Express.js applications.

* The [express-session package](https://www.npmjs.com/package/express-session) is an Express.js middleware that uses sessions, a mechanism that helps applications to determine whether multiple requests came from the same client. Developers may assign every user a unique session so that their application can store the user state, and thus authenticate users.

* The [connect-session-sequelize package](https://www.npmjs.com/package/connect-session-sequelize) provides applications with a scalable store for sessions. The express-session package’s default server-side session storage, **MemoryStore**, is purposely not designed for a production environment, will leak memory under most conditions, doesn’t scale past a single process, and is only meant for debugging and developing. The connect-session-sequelize package resolves these issues and is compatible with the Sequelize ORM.
* [Prettier](https://prettier.io/) is an opinionated code formatter with support for multiple languages that integrates easily with most code editors. Developers often use Prettier to help format code across large codebases. For the purposes of this module, you'll use both the [prettier](https://www.npmjs.com/package/prettier) and [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier) npm packages.

## How to Use Your Tools
Learning how to use your web development tools effectively can take time. Try to be patient with yourself, and refer to the following useful resources for extra guidance.

### Git Guide Video
Refer to the following **Git Guide** video for a guide on how to use Git:

[How I Setup And Customize VSCode](https://www.youtube.com/watch?v=VknMxAIbJj4)

### Ready to Learn
You're now fully equipped with the background knowledge and tools that will help you succeed in the coming week. Get excited to learn!

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.