'use strict';

var AnswerGenerator = require('../main/answer-generator');
var CompareNumber = require('../main/compare-number');
var Guess = require('../main/guess.js');

describe('Guess', function(){
  describe('#guessNumber()', function() {

    it('should run compare', function() {
      var answerGenerator = new AnswerGenerator();
      spyOn(answerGenerator,'generate').and.returnValue('1234');

      var compareNumber = new CompareNumber();
      spyOn(compareNumber, 'compare').and.callFake(function(answer, input) {
        if(answer === '1234' && input === '1243'){
          return '2A2B';
        }
      });

      var guess = new Guess(answerGenerator, compareNumber);
      expect(guess.getResult('1243')).toBe('2A2B');
    });

  });
});
