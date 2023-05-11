//const inquirer = require('inquirer');
/*import { createRequire } from 'module';
const require = createRequire(import.meta.url);*/
//const inquirer = require('inquirer');
const inquirer = require("inquirer");
const fs= require('fs');
const {Triangle, Circle, Square} = require('./lib/shapes.js')
//import from lib

//inquirer to get user input on a three character name (validation required), color for name, shape, color of the shape
const questions = [
    {
        type:'input',
        message:'Enter a name for your logo that is up to three characters long:',
        name: 'name',
        validate: function validateName(input){
            if(input.length >= 4){
                console.log("Your logo's name must be three characters or less");
                return false
            } else {
                return true
            };
        }
    },
    {
        type:'input',
        message:'What color would you like your logo text to be? Enter a color keyword or a hex value:',
        name: 'textColor',
    },
    {
        type:'list',
        message: 'What shape do you want your logo to be?',
        name:'shape',
        choices:['Triangle', 'Circle', 'Square'],
    },
    {
        type:'input',
        message:'What color do you want the background shape to be? Enter a color keyword or a hex value:',
        name:'shapeColor',
    }
]

//function to write svg
function renderSvg(fileName, shape){
    fs.writeFile(`./examples/${shape.name}.svg`, shape.render(), err=>{
        if(err) {
            return console.log(err);
        }
        console.log('file successfully rendered');
    })
}
//function to init app
function init(){
    inquirer.prompt(questions)
    .then(data => {
        console.log(data);
    })
};
init();