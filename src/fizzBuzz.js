var Fizzbuzz = function () {};

Fizzbuzz.prototype.play = function(number) {
  if (this._isDivisibleBy(number, 15)) {
    return 'FizzBuzz';
  }
  else if (this._isDivisibleBy(number, 5)) {
    return 'Buzz';
  }
  else if (this._isDivisibleBy(number, 3)) {
    return 'Fizz';
  }
  else {
    return number;
  }
}

Fizzbuzz.prototype._isDivisibleBy = function (number, divisor) {
  return (number % divisor === 0);
};
