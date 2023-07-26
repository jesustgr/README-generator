// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

// TODO: Create an array of questions for user input
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
        message: "Who contributed to your project?",
        name: "contributing",
    },
    {
        type: "input",
        message: "What is/are the license(s) for your project?",
        name: "license",
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    inquirer.prompt(data).then((answers) => {
        fs.writeFile(fileName, generateMarkdown(answers), (err) => {
            if (err) {
                return console.log(err);
            }
        });
    })
}

// TODO: Create a function to initialize app
function init() {
    writeToFile("README.md", questions);
}

// Function call to initialize app
init();
