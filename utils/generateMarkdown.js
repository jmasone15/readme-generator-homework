// TODO: Create a function that returns a license badge based on which license is passed in

const inquirer = require("inquirer")

// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  !renderLicenseLink
  
  ## Description

  {data.description}

  ## Table of Contents

  *[Installation](#installation)
  
  *[Usage](#usage)
  
  *[License](#license)

  *[Contributing](#installation)

  *[Tests](#tests)

  *[Questions](#questions)

  ## Installation

  To install necessary dependencies, run the following command:

  {data.install}

  ## Usage

  {data.usage}

  ## License

  {data.license}

  ## Contributing

  {data.contribute}

  ## Tests

  To run tests, run the following command:

  {data.test}

  ## Questions

  If you have any questions about the repo, open an issue or contact me directly at jordanmasone1@gmail.com. You can find more of my work at [jmasone15](https://github.com/jmasone15).
  

`;
}

module.exports = generateMarkdown;
