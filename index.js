// TODO: Include packages needed for this application

const fs = require('fs'); 
const inquirer = require('inquirer'); 

const mkpage = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
//THEN a high-quality, professional README.md is generated with the title of my 
//project and sections entitled Description, 
//Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the Title of your project?',
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log('We need to title your README before we can continue. Please try again!');
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your project:',
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log('We need to add a description of your project! Please try again!');
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps for installation of your project?',
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log('We need to add instructions for installation. Please try again!');
            }
        }
    },
    {
        type: '',
        name: 'usage',
        message: '',
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log('');
            }
        }
    },
    {
        type: '',
        name: 'contribute',
        message: '',
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log('');
            }
        }
    },
    {
        type: '',
        name: 'tests',
        message: '',
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log('');
            }
        }
    },
    {
        type: '',
        name: 'liscense',
        message: '',
        default
    },
    {
        type: '',
        name: '',
        message: '',
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log('');
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username:',
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username so readers can find your other work!');
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: '',
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log('');
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
