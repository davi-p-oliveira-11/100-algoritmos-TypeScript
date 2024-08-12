/* 
19) Create an algorithm that reads a student's name and two grades, 
calculates their average, and displays it on the screen. 
In the end, analyze the average and show whether 
the student had good performance (if it was above the average of 7.0).
*/

import { prompt, pressEnterToExit } from "./utils/inputUtils";

function main(): void {
  function analyzeGrade(): void {
    const grade1: number = parseFloat(prompt("Enter the grade for exam 2: "));
    const grade2: number = parseFloat(prompt("Enter the grade for exam 2: "));
    const average: number = (grade1 + grade2) / 2;

    console.log(
      `The average of the exams is equivalent to ${average.toFixed(1)}`
    );

    average >= 7
      ? console.log("Student Passed !")
      : console.log("Student Failed !");
  }

  analyzeGrade();
}

main();
pressEnterToExit();
