// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name:'title',
        message: 'What is your project title?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your project title.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a project description:',
        validate: descInput => {
            if (descInput) {
                return true;
            } else {
                console.log('Please enter a project description.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installationInstructions',
        message: 'Please provide installation instructions:',
        validate: instInput => {
            if (instInput) {
                return true;
            } else {
                console.log('Please provide installation instructions.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information:',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please provide usage information.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributionGuidelines',
        message: 'Please provide contribution guidelines:',
        validate: contrInput => {
            if (contrInput) {
                return true;
            } else {
                console.log('Please provide contribution guidelines.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'Please provide test instructions:',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Please provide test instructions.');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose your application license.',
        choices: ["MIT","ISC","Open Software License 3.0","Mozilla Public License 2.0"]
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github username:',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your Github username.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address.');
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,generateMarkdown(data),err=> {
        if (err) throw err;
        console.log('README complete! Check out readme.md to see the output!')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(data => {
            writeToFile('./readmeGenerated.md',data);
            // console.log(generateMarkdown(data));
        });
}

// Function call to initialize app
init();