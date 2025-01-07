/* 
2 Write a program that reads a person's name and displays a welcome message for them:
Example:
What is your name? João da Silva
Hello João da Silva, it's a pleasure to meet you!
*/

// function that says hello

function sayHello(name: string): string {
  return `Hello ${name} nice to meet you !`;
}

console.log(sayHello("John"));
