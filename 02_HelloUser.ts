/* 
2 Write a program that reads a person's name and displays a welcome message for them:
Example:
What is your name? João da Silva
Hello João da Silva, it's a pleasure to meet you!
*/

import { prompt, pressEnterToExit } from "./utils/inputUtils";

function main(): void {
  function helloUser(): void {
    let name: string | null = prompt("What is your name ? ");
    console.log(`Hello ${name} nice to meet you !`);
  }

  helloUser();
}

main();
pressEnterToExit();
