// TODO: Create a function that returns a license badge based on which license is passed in
const fs = require('fs');
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  } else {
    return '';
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache License 2.0') {
    return 'https://www.apache.org/licenses/LICENSE-2.0'
  }
  if (license === 'GNU General Public License v3.0') {
    return 'https://www.gnu.org/licenses/gpl-3.0.en.html'
  }
  if (license === 'MIT License') {
    return 'https://lbesson.mit-license.org/'
  }
  if (license === 'Boost Software License 1.0') {
    return 'https://www.boost.org/LICENSE_1_0.txt'
  }
  if (license === 'Creative Commons Zero v1.0 Universal') {
    return 'https://creativecommons.org/publicdomain/zero/1.0/'
  }
  if (license === 'Eclipse Public License 2.0') {
    return 'https://www.eclipse.org/legal/epl-2.0/'
  }
  if (license === 'GNU General Public License v2.0') {
    return 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html'
  }
  if (license === 'Mozilla Public License 2.0') {
    return 'https://www.mozilla.org/en-US/MPL/2.0/'
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';

  } else {
    return `## License
    This project utilizes the ${license} license. See the license file or click the button at the top to learn more.` 
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [Credits](#credits)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}
  
${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  If you have an questions about this project please contact me using my contacts below!
  GitHub: https://github.com/${data.github}
  Email: ${data.email}

`;
}

module.exports = generateMarkdown;
