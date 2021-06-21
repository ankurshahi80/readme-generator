// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name:'title',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a project description:'
    },
    {
        type: 'input',
        name: 'installationInstructions',
        message: 'Please provide installation instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information:'
    },
    {
        type: 'input',
        name: 'contributionGuidelines',
        message: 'Please provide contribution guidelines:'
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'Please provide test instructions:'
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
        message: 'Enter your Github username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:'
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
        .then((data) =>{
            writeToFile('./readmeGenerated.md',data);
            // console.log(generateMarkdown(data));
        });
}

// Function call to initialize app
init();