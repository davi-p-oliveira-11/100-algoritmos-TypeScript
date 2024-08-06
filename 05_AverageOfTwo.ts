/* 

5 Write a program that reads a student's two grades in a subject and displays their average in the course.

Example:
Grade 1: 4.5  
Grade 2: 8.5  
The average between 4.5 and 8.5 is 6.5
*/

import { prompt, pressEnterToExit } from "./utils/inputUtils";

function main(): void {
  function calculateAverage(): void {
    const grade1: number = parseFloat(
      prompt("Enter the grade of the first test: ")
    );
    const grade2: number = parseFloat(
      prompt("Enter the grade of sencond test: ")
    );

    const average: number = (grade1 + grade2) / 2;

    console.log(
      `The average between ${grade1} and ${grade2} is ${average.toFixed(2)}`
    );
  }
  calculateAverage();
}

main();
pressEnterToExit();
