/*
1) Write a program that displays the message "Hello, World!" on the screen.
*/

// function that shows the message

function showMessage(message: string): string {
  return `${message}`;
}

const result = showMessage("Hello World !");
console.log(result);
