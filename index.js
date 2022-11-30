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
                console.log('We need to add instructions for installation of your project. Please try again!');
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter instructions for usage:',
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log('Let people know how to use your project. Try again!');
            }
        }
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'How can people contribute to your project?',
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log('Please enter information for how others can contribute to your project!');
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter information about tests that are written for your project:',
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log('Please provide information about testing for your project. Try again!');
            }
        }
    },
    {
        type: 'list',
        name: 'liscenses',
        message: 'What Lisence would you like to include on your project?',
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU General Public License v2.0', 'Mozilla Public License 2.0']
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
