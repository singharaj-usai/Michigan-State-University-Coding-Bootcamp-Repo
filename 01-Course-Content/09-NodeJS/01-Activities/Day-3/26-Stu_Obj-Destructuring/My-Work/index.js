// 1. Object
const nodejs = {
  pkgName: 'Node.js',
  type: 'JavaScript runtime environment',
};

// TODO: Destructure the object 'nodejs'
const { pkgName, type } = nodejs;

console.log(pkgName); // <= Node.js
console.log(type); // <= JavaScript runtime environment

// 2. Nested Object
const js = {
  name: 'JavaScript',
  type: 'programming language',
  version: 'ES6',
  tools: {
    frameworks: {
      framework1: 'AngularJS',
      framework2: 'Vue.js',
    },
    libraries: {
      library1: 'jQuery',
      library2: 'React',
    },
  },
};

// TODO: Destructure the nested object 'js'
const { framework1, framework2 } = js.tools.frameworks;

console.log(framework1); // <= AngularJS
console.log(framework2); // <= Vue.js

// 3. Arrays
const languages = ['HTML', 'CSS', 'JavaScript'];

// TODO: Destructure the array 'languages'
const [markup, style, scripting] = languages;

console.log(markup, style, scripting); // <= HTML CSS JavaScript
console.log(markup); // <= HTML
