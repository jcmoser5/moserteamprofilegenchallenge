const Engineer = require('../lib/Engineer');


test('creates an Engineer object', () => {
  const engineer = new Engineer('Bob', 'A007', 'bob@corporate.com', 'bobhub');

  expect(engineer.name).toBe('Bob');
  expect(engineer.id).toBe('A007');
  expect(engineer.email).toBe('bob@corporate.com');
  expect(engineer.github).toBe('bobhub');
  expect(engineer.role).toBe('Engineer');
});

test('gets engineer\'s name', () => {
  const engineer = new Engineer('Bob', 'A007', 'bob@corporate.com', 'bobhub');

  expect(engineer.getName()).toEqual(expect.stringContaining(engineer.name));
});

test('gets engineer\'s id', () => {
  const engineer = new Engineer('Bob', 'A007', 'bob@corporate.com', 'bobhub');

  expect(engineer.getId()).toEqual(expect.stringContaining(engineer.id));
});

test('gets engineer\'s email', () => {
  const engineer = new Engineer('Bob', 'A007', 'bob@corporate.com', 'bobhub');

  expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email));
});

test('gets engineer\'s github', () => {
  const engineer = new Engineer('Bob', 'A007', 'bob@corporate.com', 'bobhub');

  expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github));
});

test('gets engineer\'s role', () => {
  const engineer = new Engineer('Bob', 'A007', 'bob@corporate.com', 'bobhub');

  expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});