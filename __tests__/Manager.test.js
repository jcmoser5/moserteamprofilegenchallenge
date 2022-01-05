const Manager = require('../lib/Manager');


test('creates a Manager object', () => {
  const manager = new Manager('Bob', 'A007', 'bob@corporate.com', '123');

  expect(manager.name).toBe('Bob');
  expect(manager.id).toBe('A007');
  expect(manager.email).toBe('bob@corporate.com');
  expect(manager.officeNumber).toBe('123');
  expect(manager.role).toBe('Manager');
});

test('gets manager\'s name', () => {
  const manager = new Manager('Bob', 'A007', 'bob@corporate.com', '123');

  expect(manager.getName()).toEqual(expect.stringContaining(manager.name));
});

test('gets manager\'s id', () => {
  const manager = new Manager('Bob', 'A007', 'bob@corporate.com', '123');

  expect(manager.getId()).toEqual(expect.stringContaining(manager.id));
});

test('gets manager\'s email', () => {
  const manager = new Manager('Bob', 'A007', 'bob@corporate.com', '123');

  expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email));
});

test('gets manager\'s office number', () => {
  const manager = new Manager('Bob', 'A007', 'bob@corporate.com', '123');

  expect(manager.getOfficeNumber()).toEqual(expect.stringContaining(manager.officeNumber));
});


test('gets manager\'s role', () => {
  const manager = new Manager('Bob', 'A007', 'bob@corporate.com', '123');

  expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
});