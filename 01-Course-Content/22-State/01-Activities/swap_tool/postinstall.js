// script to run after installation

const fs = require("fs");
try {
  fs.chmodSync("./app.js", "755");
  console.log("Executable permissions set");
} catch (err) {
  console.error(err);
}
