const Intern = require('../lib/Intern');

describe('Intern class', () => {
    describe('constructor and getter methods', () => {
        const intern = new Intern('Shree Ravikumar', 625, 'ShreeRavi625@fakemail.com', 'OSU');
        expect(intern.getName()).toBe('Shree Ravikumar');
        expect(intern.getId()).toBe(625);
        expect(intern.getEmail()).toBe('ShreeRavi625@fakemail.com');
        expect(intern.getSchool()).toBe('OSU');
        expect(intern.getRole()).toBe('Intern');
    });

    it('intern card', () => {
        const intern = new Intern('Shree Ravikumar', 625, 'ShreeRavi625@fakemail.com', 'OSU');
        expect(intern.getEmployeeCard()).toMatchSnapshot();
    });
});