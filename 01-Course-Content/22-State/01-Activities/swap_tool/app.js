#!/usr/bin/env node

const inquirer = require("inquirer");

// log the current directory
const currentDir = process.cwd();

const fs = require("fs-extra");
const path = require("path");
const chalk = require("chalk");

// Logger methods
const error = (msg) => console.log(chalk.red(msg));
const success = (msg) => console.log(chalk.green(msg));
const info = (msg) => console.log(chalk.yellow(msg));

// Helper to check if the directory is the activities directory
const isActivityDir = (dir) => dir.endsWith("01-Activities");

/* Because this will be a CLI app that will most likely live inside the 
20-React/01-Activities directory, we can assume that all the activity directories will
be in the parent of the current directory */

let activitiesDir;

const isWindows = () => process.platform === "win32";

const parentDir = !isWindows()
  ? currentDir.split("/").slice(0, -1).join("/")
  : currentDir.split("\\").slice(0, -1).join("\\");

if (isActivityDir(parentDir)) {
  console.log(`${parentDir} (parentDir) is the activity directory`);
  activitiesDir = parentDir;
} else if (isActivityDir(currentDir)) {
  console.log(`${currentDir} (currentDir) is the activity directory`);
  activitiesDir = currentDir;
} else {
  error("🚫  Could not find an activity directory");
  console.log(`${currentDir} (currentDir) is NOT the activity directory`);
  process.exit(1);
}

console.log(`🚀 Activities directory: ${activitiesDir}`);

if (isActivityDir(activitiesDir)) {
  success(`✅  Running from the correct directory!`);
} else {
  error(`🚫  You are not in the right directory!`);
  process.exit(1);
}

const getDirectories = (srcpath) =>
  fs
    .readdirSync(srcpath)
    .filter(
      (file) =>
        fs.statSync(path.join(srcpath, file)).isDirectory() &&
        !file.startsWith(".") &&
        file !== "node_modules"
    );

// Helper function to check if a directory is a react project
const isReactApp = (dir) => {
  const packageJson = path.join(dir, "package.json");
  if (fs.existsSync(packageJson)) {
    const packageObj = JSON.parse(fs.readFileSync(packageJson));
    if (packageObj.dependencies && packageObj.dependencies.react) {
      return true;
    }
  }
  return false;
};

// React app directory
const reactApp = getDirectories(activitiesDir).find((dir) =>
  isReactApp(path.join(activitiesDir, dir))
);

if (!reactApp) {
  error(`You don't seem to have a practice React App to copy to.`);
  error(`Please run "npx create-react-app" in ${activitiesDir} first.`);
  process.exit(1);
} else {
  info(`✅  Practice app found! ${reactApp}`);
}

// Choices for the inuquirer prompt
const otherFolders = getDirectories(activitiesDir).filter(
  (dir) => dir !== reactApp
);

inquirer
  .prompt([
    {
      type: "confirm",
      name: "replaceSrc",
      message: "Replace the src directory?",
      default: false,
    },
    {
      type: "list",
      name: "srcToCopy",
      message: `What directory contains the src/ directory you want to copy to ${reactApp}?`,
      choices: otherFolders,
      when: (answers) => answers.replaceSrc,
    },
  ])
  .then((answers) => {
    if (answers.replaceSrc) {
      const hasUnsolved = fs.existsSync(
        path.join(activitiesDir, answers.srcToCopy, "Unsolved")
      );

      // Directory to copy from depending on whether this is an activity or a ins demo (hasUnsolved)
      const srcToCopy = hasUnsolved
        ? `${answers.srcToCopy}/Unsolved/src`
        : `${answers.srcToCopy}/src`;

      // Full paths to the directories
      const reactAppPath = path.join(activitiesDir, reactApp, "src");
      const srcToCopyPath = path.join(activitiesDir, srcToCopy);

      // Delete everything inside the react app's src directory
      try {
        fs.removeSync(reactAppPath);
      } catch (err) {
        error(`Error deleting ${reactAppPath}`);
        error(err);
        process.exit(1);
      }

      // Copy the src directory
      try {
        info(`Copying ${srcToCopy} to ${reactApp}/src`);
        fs.copySync(srcToCopyPath, reactAppPath);
        success(`Copied:\n${srcToCopyPath} \n${reactAppPath}`);
      } catch (err) {
        error(`Error copying ${srcToCopyPath} to ${reactAppPath}`);
        error(err);
        process.exit(1);
      }
    } else {
      error(`Nothing to do.`);
    }
  });
