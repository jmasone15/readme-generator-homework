// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none') {
    return `[![License: ${license}]`
  } else {
    return ''
  }
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLink = license.toLowerCase().split(' ').join('-');
  if (licenseLink !== 'none') {
    return `(https://img.shields.io/badge/License-${licenseLink}-yellow.svg)](https://opensource.org/licenses/${licenseLink})`
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseLink = license.toLowerCase().split(' ').join('-');
  if (licenseLink !== 'none') {
    return `## License
    
    This project is licensed under the ${license} license.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}
  
  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  
  * [Usage](#usage)
  
  * [License](#license)

  * [Contributing](#installation)

  * [Tests](#tests)

  * [Questions](#questions)

  ## Installation

  To install necessary dependencies, run the following command:

    ${data.install}

  ## Usage

    ${data.usage}

  ${renderLicenseSection(data.license)}

    ${data.license}

  ## Contributing

    ${data.contribute}

  ## Tests

    To run tests, run the following command:

    ${data.test}

  ## Questions

    If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.username}](https://github.com/${data.username}).
  

`;
}

module.exports = generateMarkdown;
