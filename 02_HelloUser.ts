/* 
2 Write a program that reads a person's name and displays a welcome message for them:
Example:
What is your name? João da Silva
Hello João da Silva, it's a pleasure to meet you!
*/

function sayHello(name: string): string {
  console.log(`Hello ${name} nice to meet you !`);
  return `${name}`;
}

const result: string = sayHello("John");
console.log(result);
