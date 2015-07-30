'use strict';

function AnswerGenerator(){

}

AnswerGenerator.prototype.generate = function() {
  var result ;

  while(!/^(?!\d*?(\d)\d*?\1)\d{4}$/.test(result)){
    result = parseInt(Math.random()*10000);
  }

  return result;
};

module.exports = AnswerGenerator;
