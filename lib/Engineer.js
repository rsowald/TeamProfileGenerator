const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email, 'Engineer');
        this.github = github;
    }
    getGitHub() {
        return this.github;
    }

    getCardHtml() {
        return super.getEmployeeCard('fa-glasses', [
            `GitHub: ${this.getGitHub()}`
        ])
    }
}

module.exports = Engineer