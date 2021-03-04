const Employee = require('../lib/Employee');

describe('Employee class', () => {
    it('constructor and getter methods', () => {
        const employee = new Employee('John Doe', 458, 'doe458@fakemail.com', 'Employee');
        expect(employee.getName()).toBe('John Doe');
        expect(employee.getId()).toBe(458);
        expect(employee.getEmail()).toBe('doe458@fakemail.com');
        expect(employee.getRole()).toBe('Employee');
    });
});