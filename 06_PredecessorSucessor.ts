/* 
6) Write a program that reads an integer and displays its predecessor and successor.
Example:
Enter a number: 9
The predecessor of 9 is 8
The successor of 9 is 10
*/
import { prompt, pressEnterToExit } from "./utils/inputUtils";

function main(): void {
  function predecessorSucessor(): void {
    const num1: number = parseInt(prompt("Type a number: "));
    const predecessor: number = num1 - 1;
    const succesor: number = num1 + 1;

    console.log(`The predecessor of ${num1} is ${predecessor}`);
    console.log(`The succesor of ${num1} is ${succesor}`);
  }
  predecessorSucessor();
}

main();
pressEnterToExit();
