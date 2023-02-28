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
    message: "Please enter the title for the README.md:",
  },
  {
    type: "input",
    name: "description",
    message: "Please enter a description of the project:",
  },
  {
    type: "input",
    name: "install",
    message: "Please enter how a user should install the project:",
  },
  {
    type: "input",
    name: "use",
    message: "Please enter the use of this project:",
  },
  {
    type: "list",
    name: "license",
    message: "Which license would you like to use?",
    choices: ["MIT", "APACHE 2.0", "GPLv2", "GPLv3", "None"],
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
      "Please enter your gitHub username, so a link to your profile can be added so you can be contacted for questions:",
  },
];

let licenseType = questions.license;
console.log(licenseType);
function licenseBadge(license) {
  let lImg = "";

  if (license == "MIT") {
    lImg =
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
  if (license == "APACHE 2.0") {
    lImg =
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }
  if (license == "GPLv3") {
    lImg =
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  }
  if (license == "GPLv2") {
    lImg =
      "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
  }

  return lImg;
}

function writeFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
  inquirer
    .prompt(questions)
    .then((result) => {
      let licenseType = result.license;

      const lImgMarkdown = licenseBadge(licenseType);

      writeFile("README.md", generateMarkdown({ ...result }, lImgMarkdown));
      console.log(`README created`);
    })
    .catch((err) => console.error(err));
}

init();
