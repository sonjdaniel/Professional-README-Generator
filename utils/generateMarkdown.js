// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "None") {
    return ``;
  } else {
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)](${renderLicenseLink(
      license
    )})`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "None") {
    return ``;
  } else {
    return `https://opensource.org/licenses/${license}`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "None") {
    return ``;
  } else {
    return `## License
    This product is licensed under ${license}.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  fileName = answers.fileName;
  return `# ${answers.title}

  ${renderLicenseBadge(answers.license)}


## Description
${answers.description}



## Table of Contents
${renderLicenseTOC(answers.license)}

## Installation
${answers.installation}

## Usage
${answers.usage}

${renderLicenseSection(answers.license)}

## Contributing
${answers.contribution}

## Tests
${answers.test}

## Questions
If you have any questions, please contact me at ${
    answers.email
  } or view my projects at ${answers.github}.
`;
}

module.exports = generateMarkdown;
