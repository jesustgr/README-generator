// packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

// an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {  
        type: "input",
        message: "What is the description of your project?",
        name: "description",
    },
    {
        type: "input",
        message: "What are the installation instructions for your project?",
        name: "installation",
    },
    {
        type: "input",
        message: "What are the usage instructions for your project?",
        name: "usage",
    },
    {
        type: "input",
        message: "What are the testing instructions for your project?",
        name: "test",
    },
    {
        type: "input",
        message: "Provide guidelines on how to contribute to your project.",
        name: "contributing",
    },
    {
        type: "list",
        message: "What is the license for your project?",
        name: "license",
        choices: ["MIT", "Apache-2.0", "BSD-3-Clause", "Boost Software License 1.0", "GNU GPL v3", "Eclipse Public License 1.0", "None"]
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username",
    },
    {
        type: "input",
        message: "What email is good to contact you?",
        name: "email",
    }
];

// function to write README file
function writeToFile(fileName, data) {
    inquirer.prompt(data).then((answers) => {
        fs.writeFile(fileName, generateMarkdown(answers), (err) => {
            if (err) {
                return console.log(err);
            }
        });
    })
}

// function to initialize app
function init() {
    writeToFile("README.md", questions);
}

// Function call to initialize app
init();
