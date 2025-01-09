/* 
6) Write a program that reads an integer and displays its predecessor and successor.
Example:
Enter a number: 9
The predecessor of 9 is 8
The successor of 9 is 10
*/

function predecessorSucessor(num1: number): number | string {
  const predecessor: number = num1 - 1;
  const sucessor: number = num1 + 1;
  return `The succesor of ${num1} is ${predecessor} \n
The predecessor of ${num1} is ${sucessor}`;
}

console.log(predecessorSucessor(2));
console.log(predecessorSucessor(9));
console.log(predecessorSucessor(6));
