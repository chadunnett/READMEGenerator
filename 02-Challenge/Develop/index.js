// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
const inquirer = require('inquirer');
const fs = require('fs');
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What is the description?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What are the installation steps?',
      name: 'installation',
    },
    {
        type: 'input',
        message: 'What is the usage?',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'What license to use?',
        name: 'license',
      },
      {
        type: 'input',
        message: 'What are the contributions?',
        name: 'contributions',
      },
      {
          type: 'input',
          message: 'What are the tests?',
          name: 'tests',
        },
        {
          type: 'input',
          message: 'What are the questions?',
          name: 'questions',
        },
  ])
.then((answers) => {
    const markdown = `# <${answers.title}>

    ## Description
    
    ${answers.description}
    
    ## Table of Contents
    
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    - [Tests](#tests)
    - [Questions](#questions)
    
    ## Installation
    
    ${answers.installation}
    
    ## Usage
    
    ${answers.usage}
    
    ## Credits
    
    ${answers.contributions}
    
    ## License
    
    ${answers.license}
    
    ## How to Contribute
    
    If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
    
    ## Tests
    
    ${answers.tests}
    
    ## Questions
    
    ${answers.questions}`
    fs.writeFile('README,md',markdown, (err) =>
  err ? console.error(err) : console.log('Success!')
);
});