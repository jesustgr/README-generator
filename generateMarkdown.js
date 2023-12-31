// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
  else if (license === "Apache-2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
  else if (license === "BSD-3-Clause") {
    return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  }
  else if (license === "Boost Software License 1.0") {
    return `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
  }
  else if (license === "GNU GPL v3") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  }
  else if (license === "Eclipse Public License 1.0") {
    return `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
  }
  else {
    return "";
  }
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "https://opensource.org/licenses/MIT";
  }
  else if (license === "Apache-2.0") {
    return "https://opensource.org/licenses/Apache-2.0";
  }
  else if (license === "BSD-3-Clause") {
    return "https://opensource.org/licenses/BSD-3-Clause";
  }
  else if (license === "Boost Software License 1.0") {
    return "https://www.boost.org/LICENSE_1_0.txt";
  }
  else if (license === "GNU GPL v3") {
    return "https://www.gnu.org/licenses/gpl-3.0";
  }
  else if (license === "Eclipse Public License 1.0") {
    return "https://opensource.org/licenses/EPL-1.0";
  }
  else {
    return "";
  }
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return "## License";
  }
  else if (license === "Apache-2.0") {
    return "## License";
  }
  else if (license === "BSD-3-Clause") {
    return "## License";
  }
  else if (license === "Boost Software License 1.0") {
    return "## License";
  }
  else if (license === "GNU GPL v3") {
    return "## License";
  }
  else if (license === "Eclipse Public License 1.0") {
    return "## License";
  }
  else {
    return "";
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Tests](#tests)
  * [Contributing](#contributing)
  * [License](#license)
  * [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Tests
  ${data.test}
  ## Contributing
  ${data.contributing}
  ${renderLicenseSection(data.license)} ${renderLicenseBadge(data.license)}
  This application is covered under the ${data.license} license.<br>
  For more information, please visit ${renderLicenseLink(data.license)}
  ## Questions
  Feel free to reach out to me at [${data.email}](mailto:${data.email})<br>
  | Github | [https://github.com/${data.username}](https://github.com/${data.username}) | 
`;
}

module.exports = generateMarkdown;
