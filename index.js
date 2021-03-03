//list required packages so they can be installed on initialization

const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const path = require('path');
const generateHtml = require('./util/generateHtml');
const { Engineer } = require('./lib/Engineer');
const { Manager } = require('./lib/Manager');
const { Intern } = require('./lib/Intern');

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
            message: 'What is your employee ID number?'
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
    return new Manager(managerInfo.name, managerInfo.id, managerInfo.email, managerInfo.officeNumber);
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
            message: "What is the engineer's employee ID?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email address?"
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's GitHub username?"
        }
    ]);
    return new Engineer(engineerInfo.name, engineerInfo.id, engineerInfo.email, engineerInfo.github)
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
            message: "What is the intern's employee ID?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email address?"
        },
        {
            type: 'input',
            name: 'school',
            message: "What school is the intern from?"
        }
    ]);
    return new Intern(internInfo.name, internInfo.id, internInfo.email, internInfo.school);
}

promptMenu = async () => {
    const menu = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: "What would you like to do?",
            choices: ['Add an engineer', 'Add an Intern', 'Finish building my team']
        }
    ]);

    return menu.action;
}

endProgram = async () => {
    // Function to write HTML file
    writeToFile = async (fileName, data) => {
        const writeFileAsync = util.promisify(fs.writeFile);
        //use path.join to save html to dist directory
        await writeFileAsync(path.join(process.cwd(), '/dist/' + fileName), data);
    };

}

// Function to initialize app
init = async () => {
    const employeeArr = [];

    const manager = await askManagerQuestions();

    while (true) {
        const nextMenuChoice = promptMenu();

        if (nextMenuChoice === 'Add an engineer') {
            const engineer = await askEngineerQuestions();
            employeeArr.push(engineer);
        }
        else if (nextMenuChoice === 'Add an intern') {
            const intern = await askInternQuestions();
            employeeArr.push(intern);
        }
        else {
            break;
        }
    }

    const markdown = generateHtml(employeeArr, manager);
    try {
        await writeToFile('team.html', markdown);
    }
    catch (err) {
        //TODO: console.error message
        throw err;
    }
};


init();