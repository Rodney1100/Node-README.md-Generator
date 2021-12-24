// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = projectsData => {
    const projectsDataArray = []
    return inquirer.prompt([{
            type: "input",
            name: "proName",
            message: "What is your project name? (required)",
            validate: (value) => {
                if (value) {
                    return true;
                } else {
                    return "What is your project name? (required)";
                }
            },
        },
        {
            type: "input",
            name: "description",
            message: "What are your projects discription? (required)",
            validate: (value) => {
                if (value) {
                    return true;
                } else {
                    return "What is your project name? (required)";
                }
            },
        },
        {
            type: "input",
            name: "installation",
            message: "What is your project installation direction? (required)",
            validate: (value) => {
                if (value) {
                    return true;
                } else {
                    return "What is the projects Table of Contents? (required)";
                }
            },
        },
        {
            type: "input",
            name: "usage",
            message: "What is your projects Usage? (required)",
            validate: (value) => {
                if (value) {
                    return true;
                } else {
                    return "What is the projects Table of Contents? (required)";
                }
            },
        },
        {
            type: "checkbox",
            name: "license",
            message: "What did you this project with? (Check all that apply)",
            choices: [
                'Apache',
                'Cloud Native Computing Foundation dictates',
                'GNU',
                'npm packages',
                'OpenBSD',
                'Rust',
                'WordPress',
            ],
        },
        {
            type: "input",
            name: "contributing",
            message: "Who are the Contributors to the project? (required)",
            validate: (value) => {
                if (value) {
                    return true;
                } else {
                    return "What is the projects Table of Contents? (required)";
                }
            },
        },
        {
            type: "input",
            name: "tests",
            message: "Tests?",
        },
        {
            type: "input",
            name: "questions",
            message: "Questions and contact information? (required)",
            validate: (value) => {
                if (value) {
                    return true;
                } else {
                    return "Questions? (required)";
                }
            },
        },
        // ]).then(projectsData => {
        // projectsDataArray.push(projectsData);
    ]);
};
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
// TODO: Create a function to initialize app
// console.log(questionsArrayData)

// function init() {}

// Function call to initialize app
// init();

questions().then(projectsData => {
    const readme = generateMarkdown(projectsData);
    fs.writeFile('./README.md', readme, err => {
        if (err) throw new Error(err);
        console.log('Page created! Check out README.md in this directory to see it!');
    });
});


// .then(projectsData => {
//     fs.writeFile("README.md", generateMarkdown(projectsData), err => {
//         if (err) throw new Error(err);
//     });
// });