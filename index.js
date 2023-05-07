// Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Create an array of questions for user input. Template for the questions.
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        console.log("Please enter a title");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "What is the project description?",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        console.log("Please enter a description");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message: "What are the installation instructions?",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        console.log("Please enter instructions");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "What is the usage information?",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        console.log("Please enter usage information");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "contribution",
    message: "What are the contribution guidelines?",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        console.log("Please enter guidelines");
        return false;
      }
    },
  },
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
