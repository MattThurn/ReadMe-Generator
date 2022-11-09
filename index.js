const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt([
    {
        type:'input',
        name:'title',
        message:'What is the title of the ReadMe?'
    },
    {
        type:'input',
        name:'description',
        message:'What is the description?'
    },
    {
        type:'input',
        name:'installation',
        message:'What are the steps to install?'
    },
    {
        type:'input',
        name:'usage',
        message:'How do you use the application?'
    },
    {
        type:'input',
        name:'license',
        message:'What is the license?'
    },
    {
        type:'input',
        name:'contributing',
        message:'How do they contribute?'
    },
    {
        type:'input',
        name:'test',
        message:'How to test this application?'
    },
    {
        type:'input',
        name:'git',
        message:'What is your github username?'
    },
    {
        type:'input',
        name:'email',
        message:'What is your email?'
    },

])
.then((response) => {
writeReadMe(response);
console.log('response :>> ', response);
})

function writeReadMe(data){
    const {title, description, installation, usage, license, contributing, test, git, email} = data;
    const readMe = `# ${title}
![License](https://img.shields.io/github/license/${git}/${title})
## Description

    ${description}
    
## Table of Contents (Optional)
    
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribute](#contribute)
- [Tests](#tests)
- [Questions](#questions)

## Installation

    ${installation}

## Usage

    ${usage}

## License
    
    ${license}
    
## How to Contribute

    ${contributing}
    
## Tests

    ${test}
    
## Questions
    Github: https://github.com/${git}
    Email: ${email}`

    fs.writeFile('README.md', readMe, (err) => {
        if (err){
            console.log('error :>> ', error);
        } else {
            console.log('Success!')
        }
    })
}