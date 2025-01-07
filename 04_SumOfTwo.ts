/* 
Develop an algorithm that reads two integers and displays the sum between them.
Example:
Enter a value: 8
Enter another value: 5
The sum of 8 and 5 is equal to 13.
*/

function sum(num1: number, num2: number, result?: number): number | string {
  result = num1 + num2;
  return `The sum between ${num1} and ${num2} is ${result}`;
}

console.log(sum(2, 2));
console.log(sum(5, 2));
console.log(sum(3, 10));
