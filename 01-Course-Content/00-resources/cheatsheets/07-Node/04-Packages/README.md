# Node.JS Packages

Node developers often publicly share packages, that other developers can use to help solve common problems. A package is a collection of Node modules along with a package.json file describing the package.

To work with Node packages we use NPM. NPM includes two things:

1. The NPM registry with a massive collection of Node packages for us to use.

2. The NPM tool that you installed when you installed Node.

> 🔎 We can search the NPM registry for packages at www.npmjs.com. The NPM tool will by default install packages from this NPM registry.

## NPM Commands
| **Command** |**Comments** |
|:--|:--| 
| npm start | Execute the current Node package defined by package.json Defaults to executing node server.js |
| npm init | Initialize a fresh package.json file |
| npm init -y |  Initialize a fresh package.json file, accepting all default options. Equivalent to npm init —yes |
| npm install | Equivalent to npm i |
| npm install package | Install a package from the NPM registry at [www.npmjs.com](https://www.npmjs.com/) Equivalent to npm i package |
| npm install -D package | Install a package as a development dependency. Equivalent to npm install —save-dev package |
| npm install -g package | Install a package globally. |
| npm update package | Update an already installed package. Equivalent to npm up package |
| nnpm uninstall package | Uninstall a package from your node_modules/ folder. Equivalent to npm un package |
| npm outdated | Check for outdated package dependencies |
| npm audit | Check for security vulnerabilities in package dependencies |
| npm audit fix	| Try to fix any security vulnerabilities by automatically updating vulnerable packages |

## package.json

Most Node applications we create include a package.json file, which means our Node applications are also Node packages.

The **package.json** file contains:

1. Name, version, description, license of the current package.

2. Scripts to automate tasks like starting, testing, and installing the current package.

3. Lists of dependencies that are required to be installed by the current package.

## node_modules
This folder lives next to your package.json file.

When you run **npm install** the packages listed as dependencies in your package.json are downloaded from the NPM registry and put in the node_modules folder.

It contains not just your direct dependencies, but also the dependencies of those dependencies. The entire dependency tree lives in node_modules.

## package-lock.json

The package-lock.json file is automatically created by NPM to track the exact versions of packages that are installed in your node_modules folder. Share your package-lock.json with other developers on your team to ensure that everyone is running the exact same versions of every package in the dependency tree.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.