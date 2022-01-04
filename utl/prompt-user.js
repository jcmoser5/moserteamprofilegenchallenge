const inquirer = require('inquirer');

function promptManager() {
  let teamData = {
    manager: {},
    engineers: [],
    interns: []
  };
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the team manager\'s name?',
      validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter the team manager\'s name');
            return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the team manager\'s employee ID?',
      validate: idInput => {
        if (idInput) {
            return true;
        } else {
            console.log('Please enter the team manager\'s employee ID');
            return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the team manager\'s email address?',
      validate: emailInput => {
        if (emailInput) {
            return true;
        } else {
            console.log('Please enter the team manager\'s email address');
            return false;
        }
      }
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'What is the team manager\'s office number?',
      validate: officeNumberInput => {
        if (officeNumberInput) {
            return true;
        } else {
            console.log('Please enter the team manager\'s office number');
            return false;
        }
      }
    }
  ])
  .then(managerData => {
    teamData.manager = managerData;
    return teamData;
  })
}

function promptTeam(teamData) {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'role',
      message: 'Select the role of the team member you\'d like to add.',
      choices: ['Engineer', 'Intern']
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is your team member\'s name?',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter the team member\'s name');
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your team member\'s ID?',
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log('Please enter the team member\'s ID');
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your team member\'s email address?',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('Please enter the team member\'s email address');
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your team member\'s GitHub username?',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter the team member\'s GitHub username');
        }
      },
      when: ({role}) => (role === 'Engineer')
    },
    {
      type: 'input',
      name: 'school',
      message: 'What is your team member\'s school?',
      validate: schoolInput => {
        if (schoolInput) {
          return true;
        } else {
          console.log('Please enter the team member\'s school');
        }
      },
      when: ({role}) => (role === 'Intern')
    },
    {
      type: 'confirm',
      name: 'confirmAddTeamMember',
      message: 'Would you like to add another team member?'
    }
  ])
  .then(answers => {
    if (answers.role === 'Engineer') {
      teamData.engineers.push(answers);
    } else if (answers.role === 'Intern') {
      teamData.interns.push(answers);
    }
    if (answers.confirmAddTeamMember) {
      return promptTeam(teamData);
    } else {
      return teamData;
    }
  });
}

module.exports = { promptManager, promptTeam };