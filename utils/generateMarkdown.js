// // TODO: Create a function that returns a license badge based on which license is passed in

function renderLicenseBadge(license) {
    if (license) {
        return `${license.join(", ")}`;
    } else {
        // If there is no license, return an empty string
        return ' ';
    }
};

// // TODO: Create a function that returns the license link
function renderLicenseLink(license) {
    if (license) {
        return `https: //choosealicense.com/`;
    } else {
        // If there is no license, return an empty string
        return ' ';
    }
}

// // TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
    if (license) {
        return `
## License
${ renderLicenseBadge(license) }
${ renderLicenseLink(license) }`
    } else {
        // If there is no license, return an empty string
        return ' ';
    }
}

function contactInfo(questions) {
    if (questions) {
        return `href="https://github.com/${questions}"`;
    }
}

// // TODO: Create a function to generate markdown for README
module.exports = generateMarkdown => {
    const {
        proName,
        description,
        installation,
        usage,
        license,
        contributing,
        questions,
        tests,
    } = generateMarkdown;
    return `
# ${proName}

## Description
${description}

## Table of Contents
*[Description](#description) 
*[Installation](#installation) 
*[Usage](#usage) 
*[License](#license) 
*[Contributing](#contributing) 
*[Tests](#credits) 
*[License](#test) 
*[Question](#questions)


## Installation
${installation}

## Usage
${usage}


${renderLicenseSection(license)}


## Contribution
${contributing}

## Test
${tests}

## Questions
${contactInfo(questions)}
        `;
};