const Intern = require('../lib/Intern');


test('creates an Intern object', () => {
  const intern = new Intern('Bob', 'A007', 'bob@corporate.com', 'Intern U');

  expect(intern.name).toBe('Bob');
  expect(intern.id).toBe('A007');
  expect(intern.email).toBe('bob@corporate.com');
  expect(intern.school).toBe('Intern U');
  expect(intern.role).toBe('Intern');
});

test('gets intern\'s name', () => {
  const intern = new Intern('Bob', 'A007', 'bob@corporate.com', 'Intern U');

  expect(intern.getName()).toEqual(expect.stringContaining(intern.name));
});

test('gets intern\'s id', () => {
  const intern = new Intern('Bob', 'A007', 'bob@corporate.com', 'Intern U');

  expect(intern.getId()).toEqual(expect.stringContaining(intern.id));
});

test('gets intern\'s email', () => {
  const intern = new Intern('Bob', 'A007', 'bob@corporate.com', 'Intern U');

  expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email));
});

test('gets intern\'s school', () => {
  const intern = new Intern('Bob', 'A007', 'bob@corporate.com', 'Intern U');

  expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school));
});

test('gets intern\'s role', () => {
  const intern = new Intern('Bob', 'A007', 'bob@corporate.com', 'Intern U');

  expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});