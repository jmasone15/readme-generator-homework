// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === 'APACHE 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GPL 3.0') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'BSD 3') {
    return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//   const licenseLink = license.toLowerCase().split(' ').join('-');
//   if (licenseLink !== 'none') {
//     return `(https://img.shields.io/badge/License-${licenseLink}-yellow.svg)](https://opensource.org/licenses/${licenseLink})`
//   } else {
//     return ''
//   }
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `## License
    
    This project is licensed under the ${license} license.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
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