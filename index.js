const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = () =>
  inquirer.createPromptModule([
    {
      type: "input",
      name: "title",
      message: "Please enter the title for the README.md",
    },
    {
      type: "input",
      name: "descriptiom",
      message: "Please enter a description of the project",
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter how a user should install the project',
    }
    {
        type: 'input',
        name: 'usage',
        message: '',
    }
    {
        type: 'input',
        name: 'contributing',
        message: '',
    }
    {
        type: 'input',
        name: 'tests',
        message: '',
    }
  ]);

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
