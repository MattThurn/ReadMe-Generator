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
        name:'questions',
        message:'Please add links for questions.'
    },

])
.then((response) => {
writeReadMe(response);
console.log('response :>> ', response);
})

function writeReadMe(data){
    const {title, description, installation, usage, license, contributing, test, questions} = data;
}