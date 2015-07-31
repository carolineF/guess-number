'use strict';

function CompareNumber(){
}

CompareNumber.prototype.compare = function(answer, input) {
  var countA = 0;
  var countB = 0;

  if(answer === input){
    countA += 4;
  }else{

    for(var i = 0; i < input.length; i++){
      var index = answer.indexOf(input[i]);
      if(index !== -1 && i !== index){
        countB += 1;
      }else if(i === index){
        countA += 1;
      }
    }
  }

  return countA + 'A' + countB + 'B';
};

module.exports = CompareNumber;
