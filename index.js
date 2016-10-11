'use strict';
var inquirer = require('inquirer');

console.log('  ** Welcome to paella.js **\n');

var questions = [
  {
    type: 'confirm',
    name: 'likesPaella',
    message: 'Do you like paella?',
    default: true
  },
  {
    type: 'list',
    name: 'favouriteIngredient',
    message: 'Whats your favourite paella ingredient?',
    choices: ['Chicken', 'Bunny', 'Tomato', 'Rice', 'Chorizo', 'Green beans'],
    filter: function (val) {
      return val.toLowerCase().replace(' ', '_');
    }
  }
];

inquirer.prompt(questions).then(function (answers) {
  console.log('\n\n  Stay in touch for more paella awesomeness!');
});
