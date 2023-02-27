const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
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
    type: "input",
    name: "install",
    message: "Please enter how a user should install the project",
  },
  {
    type: "input",
    name: "use",
    message: "Please enter the use of this project",
  },
  {
    type: "list",
    name: "license",
    message: "Which license would you like to use?",
    choices: ["MIT", "APACHE 2.0", "GPL", "None"],
  },
  {
    type: "input",
    name: "contributing",
    message: "How should the user go about adding a contribution?",
  },
  {
    type: "input",
    name: "tests",
    message: "How was this project tested?",
  },
  {
    type: "input",
    name: "questions",
    message:
      "Please enter the URL to your gitHub profile, so you can be contacted for questions",
  },
];

function writeFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
  inquirer
    .prompt(questions)
    .then((response) => {
      console.log(`Generating README...`);
      writeFile("READMEgen.md", generateMarkdown({ ...response }));
    })
    .catch((err) => console.error(err));
}

init();
