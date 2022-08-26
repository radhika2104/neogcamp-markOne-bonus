// 'npm i chalk@4.1.2'  in terminal to use chalk with require
// 'npm uninstall chalk' in terminal to delete latest version that does not work with require
// 'npm i readline-sync'  in terminal to use readline with require
const chalk = require('chalk');
const readlineSync = require('readline-sync');
const username = readlineSync.question('please enter your name: ');
console.log('')
console.log('Welcome, ' + chalk.cyan(username.charAt(0).toUpperCase()) + chalk.cyan(username.substr(1)) + '!');

function containAnyletter(str) {
  // The test method returns true if the regular expression is matched in the string and false otherwise
  // The forward slashes '/ /' mark the beginning and end of the regular expression
  return /[a-zA-Z]/.test(str);
}

let birthday = ''

while (true) {
  console.log('');
  birthday = readlineSync.question('please enter your birth date [yyyy/mm/dd or mm/dd/yyyy]: ');
  // Check if the birthday contains a letter - post invalid
  boolstring = null;
  if (containAnyletter(birthday) === true) {
    console.log(chalk.red('Please enter a valid birthday as per given format!'));
  }
  else {
    break;
  }
}

// Convert string to date object
const date = new Date(birthday);
// check validity of a date format - if date is valid, it will be object of date and can be convert to a number
function dateValidity(date) {
  // When you convert a valid date to a number, you get a timestamp  - if that does not happen, the user did not enter a valid date
  return date instanceof Date && !isNaN(date);
}

if (dateValidity(date) !== true) {
  console.log(date);
  process.exit();
}

// Extract year from birthday
let year = date.getFullYear()
let boolyear = null

// Determine whether the year is leap year or not
if (year % 4 !== 0) {
  boolyear = false;
} else {
  if (year % 100 !== 0) {
    boolyear = true;
  } else {
    if (year % 400 !== 0) {
      boolyear = false;
    }
    else {
      boolyear = true;
    }
  }
}
console.log('')
// display 
if (boolyear === false) {
  console.log(chalk.magenta.bold('Your birthday does not fall in a leap year!'))
} else {
  console.log(chalk.yellow.bold('Yaye! You were born in a leap year! '))
  console.log('Take a screenshot and share this moment with your friends!')
}


