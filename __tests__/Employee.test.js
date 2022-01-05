const Employee = require('../lib/Employee');


test('creates an Employee object', () => {
  const employee = new Employee('Bob', 'A007', 'bob@corporate.com');

  expect(employee.name).toBe('Bob');
  expect(employee.id).toBe('A007');
  expect(employee.email).toBe('bob@corporate.com');
  expect(employee.role).toBe('Employee');
});

test('gets employee\'s name', () => {
  const employee = new Employee('Bob', 'A007', 'bob@corporate.com');

  expect(employee.getName()).toEqual(expect.stringContaining(employee.name));
});

test('gets employee\'s id', () => {
  const employee = new Employee('Bob', 'A007', 'bob@corporate.com');

  expect(employee.getId()).toEqual(expect.stringContaining(employee.id));
});

test('gets employee\'s email', () => {
  const employee = new Employee('Bob', 'A007', 'bob@corporate.com');

  expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email));
});

test('gets employee\'s role', () => {
  const employee = new Employee('Bob', 'A007', 'bob@corporate.com');

  expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});