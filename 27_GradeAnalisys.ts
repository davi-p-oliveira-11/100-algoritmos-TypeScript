/* 
 27) Write a program that calculates a student's average grade from two scores 
 and displays a message based on that average:

Below 5.0: "Failed"
5.0 to 6.9: "Needs Improvement" (OR "Recovery Course Required")
7.0 or higher: "Passed"
*/

import { prompt, pressEnterToExit } from "./utils/inputUtils";

function main(): void {
  function gradeAnalisys(): void {
    const test1: number = parseFloat(
      prompt(`Type the grade for the first test.`)
    );
    const test2: number = parseFloat(
      prompt(`Type the grade for the second test.`)
    );
    const average: number = (test1 + test2) / 2;

    if (average <= 4.9) {
      console.log(
        `The student scored an average of ${average.toFixed(1)} and Failed !`
      );
    } else if (average >= 5 && average <= 6.9) {
      console.log(
        `The student scored an average of ${average.toFixed(1)} 
         and need to do the final exam !`
      );
    } else {
      console.log(
        `The student scored an average of ${average.toFixed(1)} and Passed !`
      );
    }
  }

  gradeAnalisys();
}

main();
pressEnterToExit();
