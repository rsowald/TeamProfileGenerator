const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email, 'Intern')
        this.school = school;
    }
    getSchool() {
        return this.school;
    }

    getEmployeeCard() {
        return super.getEmployeeCard('fa-graduation-cap', [
            `School: ${this.getSchool()}`
        ])
    }
}

module.exports = Intern