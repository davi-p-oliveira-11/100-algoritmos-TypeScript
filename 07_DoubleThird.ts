/* 
7) Create an algorithm that reads a real number and displays its double and its one-third.

Example:
Enter a number: 3.5
The double of 3.5 is 7.0
One-third of 3.5 is 1.16666
*/

function calculateNums(num1: number): number | string {
  const double: number = num1 * 2;
  const third: number = num1 / 3;

  return `The double of ${num1} is ${double.toFixed(2)}
The third part of ${num1} is ${third.toFixed(2)}`;
}

console.log(calculateNums(3));
console.log(calculateNums(4));
console.log(calculateNums(10));
