module.exports = function reverse (number) {
   number = Number(Math.abs(number).toString().split('').reverse().join(''));
   return number;
}



