// function to generate markdown for README

function generateMarkdown(data, lImgMarkdown) {
  return `
# ${data.title}
${lImgMarkdown}
## Descrpition
${data.description}
## Table of Contents
  
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contibuting)
- [Tests](#Tests)
- [Questions](#Questions)
  
## Installation
${data.install}
## Usage
${data.use}
## License
The license used for this project is ${data.license}
## Contributing
${data.contributing}
## Tests
${data.tests}
## Questions
If you have any questions on this project or if you would like to discuss anything code related then please reach out to me through my [gitHub profile](https://github.com/${data.questions})
`;
}

module.exports = generateMarkdown;
