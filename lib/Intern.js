const Employee = require('./Employee');

export class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email, 'Intern')
        this.school = school;
    }
    getSchool() {
        return this.school;
    }

    getCardHtml() {
        return super.getEmployeeCard('fa-graduation-cap', [
            `School: ${this.getSchool()}`
        ])
    }
}
