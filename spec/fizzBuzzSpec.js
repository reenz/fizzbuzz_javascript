describe ('Fizzbuzz', function(){
  var fizzbuzz;
  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });
  describe('multiples of 3', function(){
    it('returns Fizz for 3', function(){
      expect(fizzbuzz.play(3)).toEqual('Fizz');
    });
    it('returns Fizz for 6', function (){
      expect(fizzbuzz.play(6)).toEqual('Fizz');
    });
  });
  describe('multiples of 5', function(){
    it('returns Fizz for 5', function(){
      expect(fizzbuzz.play(5)).toEqual('Buzz');
    });
    it('returns Fizz for 10', function (){
      expect(fizzbuzz.play(10)).toEqual('Buzz');
    });
  });
  describe('multiples of 3 and 5', function (){
    it ('returns FizzBuzz for 15', function() {
      expect(fizzbuzz.play(15)).toEqual('FizzBuzz')
    });
    it('return FizzBuzz for 30', function () {
      expect(fizzbuzz.play(30)).toEqual('FizzBuzz')
    });
  });
  describe('other numbers', function(){
    it ('returns 2 ', function(){
      expect(fizzbuzz.play(2)).toEqual(2)
    });
    it ('returns 7', function(){
      expect(fizzbuzz.play(7)).toEqual(7)
    });
  });
});
