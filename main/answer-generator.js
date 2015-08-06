'use strict';

function AnswerGenerator(math){
  this.math = math || Math;
}

AnswerGenerator.prototype.generate = function() {
  var result = '';

  while(result.length < 4){
    var number = parseInt(this.math.random()*10);
    if(result.indexOf(number) === -1){
      result += number;
    }
  }

  return result;
};

module.exports = AnswerGenerator;
