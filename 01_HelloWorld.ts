/*
1) Write a program that displays the message "Hello, World!" on the screen.
*/

import { pressEnterToExit } from "./utils/inputUtils";

// function that shows the message

function showMessage(message: string): string {
  console.log(message);
  return `${message}`;
}

showMessage("Hello World !");
pressEnterToExit();
