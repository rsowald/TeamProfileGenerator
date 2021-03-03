//list required packages so they can be installed on initialization

const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const path = require('path');
const generatedFunctions = require('./util/generateHtml');

// Array of questions for manager input
askManagerQuestions = async () => {
    const managerInfo = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Welcome, Manager! What is your name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is you employee ID number?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number?'
        }
    ]);
}

askEngineerQuestions = async () => {
    const engineerInfo = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is this engineer's employee ID?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is this engineer's email address?"
        },
        {
            type: 'input',
            name: 'github',
            message: "What is this engineer's GitHub username?"
        }
    ])
}

askInternQuestions = async () => {
    const internInfo = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is this intern's employee ID?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is this intern's email address?"
        },
        {
            type: 'input',
            name: 'github',
            message: "What school is this intern from?"
        }
    ])
}

promptMenu = async () => {
    const menu = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: "What would you like to do?",
            choices: ['Add an engineer', 'Add an Intern', 'Finish building my team']
        }
    ])
}


// Function to write HTML file
writeToFile = async (fileName, data) => {
    const writeFileAsync = util.promisify(fs.writeFile);
    //use path.join to save html to dist directory
    await writeFileAsync(path.join('/dist', fileName), data);
};

// Function to initialize app
init = async () => {
    const managerInfo = await askManagerQuestions();
    //prompt add team menu
    //if choice = engineer, prompt engineer questions
    //if choice = intern, prompt engineer questions
    //if choice = finish building, exit and write file
    const info = managerInfo + engineerInfo + internInfo;
    const markdown = generatedFunctions(info);
    try {
        await writeToFile('index.html', markdown);
    }
    catch (err) {
        if (err) { throw err };
    }
};


init();