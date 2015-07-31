'use strict';

var AnswerGenerator = require('../main/answer-generator');
var CompareNumber = require('../main/compare-number');
var Guess = require('../main/guess.js');

describe('Guess Integration', function() {
  describe('#getResult()', function() {

    var guess;

    beforeEach(function() {
      var count = 0;
      Math.random = jasmine.createSpy('Math random()').and.callFake(function() {
        var array = [0.1, 0.2, 0.2, 0.3, 0.4];
        return array[count++];
      });

      var answerGenerator = new AnswerGenerator(Math);
      var compareNumber = new CompareNumber();
      guess = new Guess(answerGenerator, compareNumber);
    });

    it('should return 0A0B', function() {
      expect(guess.getResult('5678')).toBe('0A0B');
    });

    it('should return 4A0B', function() {
      expect(guess.getResult('1234')).toBe('4A0B');
    });

    it('should return 0A4B', function() {
      expect(guess.getResult('4321')).toBe('0A4B');
    });
  });
});
