// TODO: Include packages needed for this application
const inquirer = require("inquirer");

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
        message: "What are the test instructions for your project?",
        name: "test",
    },
    {
        type: "input",
        message: "What are the contributors instructions for your project?",
        name: "contributing",
    },
    {
        type: "input",
        message: "What is the license for your project?",
        name: "license",
    },
    {
        type: "input",
        message: "What is the GitHub username for your project?",
        name: "username",
    },
    {
        type: "input",
        message: "What is the email for your project?",
        name: "email",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
