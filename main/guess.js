'use strict';

function Guess(answerGenerator,compareNumber){
  this.answer = answerGenerator.generate();
  this.compareNumber = compareNumber;
}

Guess.prototype.getResult = function(input) {
  return this.compareNumber.compare(this.answer, input);
};


module.exports = Guess;
