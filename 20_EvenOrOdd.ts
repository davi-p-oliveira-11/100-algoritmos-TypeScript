/* 
20) Develop a program that reads an integer and shows whether it is EVEN or ODD."
*/

function algorithm20(num: number): number | string {
  if (num % 2 === 0) {
    return `Even Number`;
  } else {
    return `Odd Number`;
  }
}

console.log(algorithm20(2));
console.log(algorithm20(1));
console.log(algorithm20(4));
console.log(algorithm20(12));
console.log(algorithm20(7));
