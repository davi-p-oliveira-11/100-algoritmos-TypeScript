/*
 32) [CHALLENGE] Create a game where the computer will randomly choose a number 
 between 1 and 5 and the player will try to guess which number was chosen.
*/

/* Algorithm:
 1- ask the user to insert a number
  1.1 - store it in a variable
 2 -  Make the computer randomly chose a number
  2.1 - store it in a variable
 3 - Check if the numbers are equal
  3.1 if it is true the player wins
  3.2 otherwise the player loses
*/

import { prompt, pressEnterToExit } from "./utils/inputUtils";

function main(): void {
  function algorithm(): void {
    const playerNumber: number = parseInt(prompt("Enter a number: "));
    const computerNumber: number = Math.floor(Math.random() * 5) + 1;

    console.log(`Player choice was ${playerNumber}`);
    console.log(`Computer choice was ${computerNumber}`);

    if (playerNumber === computerNumber) {
      console.log("Congratulations you won !");
    } else {
      console.log("You Lose !");
    }
  }

  algorithm();
}

main();
pressEnterToExit();
