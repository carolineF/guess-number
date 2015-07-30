'use strict';

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// This is an example for reading & writing in console.
rl.question('What is your name? ', function(answer) {

  console.log('Hello ' + answer + '!');

  rl.close();
});
