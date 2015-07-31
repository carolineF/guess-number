'use strict';

var AnswerGenerator = require('../main/answer-generator');

describe('AnswerGenerator', function() {
  describe('#generate()', function() {

    var result;

    beforeEach(function() {
      var count = 0;
      Math.random = jasmine.createSpy('Math random()').and.callFake(function() {
        var array = [0.1, 0.2, 0.2, 0.3, 0.4];
        return array[count++];
      });

      var answerGenerator = new AnswerGenerator(Math);
      result = answerGenerator.generate();
    });

    it('can return a String no repeat', function() {
      var length =  result.toString().length;
      var isRepeat = false;

      for(var i = 0; i < length; i++){
        if(result.toString().indexOf(result[i],i+1,-i) !== -1){
          isRepeat = true;
        }
      }

      expect(isRepeat).toBe(false);
    });

    it('can return a random number', function() {
      expect(result).toBe('1234');
    });

    it('can return a four-digit', function() {
      var length = result.toString().length;
      expect(length).toBe(4);
    });
  });
});
