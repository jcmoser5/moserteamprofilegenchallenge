const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');


function generateManagerHTML({ name, id, email, officeNumber }) {
  const manager = new Manager(name, id, email, officeNumber);
  return `
        <div>
          <div class='role'>
            <h2>${manager.getName()}</h2>
            <h3><i class="fa fa-briefcase"></i> ${manager.getRole()}</h3>
          </div>
          <div class='info'>
            <p>ID: ${manager.getId()}</p>
            <p>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
            <p>Office Number: ${manager.getOfficeNumber()}</p>
          </div>
        </div>
  `
}

function generateEngineerHTML(engineers) {
  return engineers
    .map(({ name, id, email, github }) => {
      const engineer = new Engineer(name, id, email, github);
      return `
        <div>
          <div class='role'>
            <h2>${engineer.getName()}</h2>
            <h3><i class="fa fa-laptop"></i> ${engineer.getRole()}</h3>
          </div>
          <div class='info'>
            <p>ID: ${engineer.getId()}</p>
            <p>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
            <p>GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></p>
          </div>
        </div>
      `
    })
    .join('');
}

function generateInternHTML(interns) {
  return interns
    .map(({ name, id, email, school }) => {
      const intern = new Intern(name, id, email, school);
      return `
        <div>
          <div class='role'>
            <h2>${intern.getName()}</h2>
            <h3><i class="fa fa-graduation-cap"></i> ${intern.getRole()}</h3>
          </div>
          <div class='info'>
            <p>ID: ${intern.getId()}</p>
            <p>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
            <p>School: ${intern.getSchool()}</p>
          </div>
        </div>
      `
    })
    .join('');
}

function generateHTML({ manager, engineers, interns }) {
  return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profile</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="./style.css">
</head>

<body>
  <header>
    <h1>My Team</h1> 
  </header>
  <main>
    ${generateManagerHTML(manager)}
    ${generateEngineerHTML(engineers)}
    ${generateInternHTML(interns)}
  </main>
</body>
</html>
`
}

module.exports = generateHTML;