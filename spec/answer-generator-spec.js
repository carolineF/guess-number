'use strict';

var AnswerGenerator = require('../main/answer-generator');

describe('AnswerGenerator', function() {
  describe('#generate()', function() {

    var answerGenerator;

    beforeEach(function() {
      answerGenerator = new AnswerGenerator();
    });

    it('can return a String no repeat', function() {
      var result = answerGenerator.generate();
      var length =  result.toString().length;
      var isRepeat = false;

      for(var i = 0; i < length; i++){
        if(result.toString().indexOf(result[i],i+1,-i) !== -1){
          isRepeat = true;
        }
      }

      expect(isRepeat).toBe(false);
    });

    it('can return a number', function() {
      var result = answerGenerator.generate();
      var isNumber = true;

      for(var i = 0; i < result.toString().length; i++){
        if(isNaN(result.toString()[i])){
          isNumber = false;
        }
      }

      expect(isNumber).toBe(true);
    });

    it('can return a random number', function() {
      var result = answerGenerator.generate();
      expect(result).toBe(1);
    });

    it('can return a four-digit', function() {
      var result = answerGenerator.generate();
      var length = result.toString().length;
      expect(length).toBe(4);
    });
  });
});
