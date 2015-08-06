'use strict';

var AnswerGenerator = require('./main/answer-generator');
var CompareNumber = require('./main/compare-number');
var Guess = require('./main/guess.js');

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Welcome!');


  var answerGenerator = new AnswerGenerator();
  var compareNumber = new CompareNumber();
  var guess = new Guess(answerGenerator, compareNumber);

  var count = 6;
  // This is an example for reading & writing in console.
rl.on('line', function(){
  rl.question('Please input your number(' + count + '):', function(answer) {

    for(var i = 0; i < answer.length; i++){
      if(answer.indexOf(answer[i],i+1,-i) !== -1){
        console.log('Cannot input duplicate numbers!');
        return;
      }
    }

    var result = guess.getResult(answer);
    if(result === '4A0B' && count > 0){
      console.log('Congratulations!');
      rl.close();
    }else if(count > 0){
      count--;
      console.log(result);
    }

    if(count <= 0){
      console.log('Game Over!');
      rl.close();
    }
  });

});
