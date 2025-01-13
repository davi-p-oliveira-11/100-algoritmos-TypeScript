/* 
19) Create an algorithm that reads a student's name and two grades, 
calculates their average, and displays it on the screen. 
In the end, analyze the average and show whether 
the student had good performance (if it was above the average of 7.0).
*/

/*
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

*/

function gradeAnalysis(name: string, grade1: number, grade2: number): string {
  function calculateAverage(grade1: number, grade2: number): number {
    return (grade1 + grade2) / 2;
  }

  const average: number = calculateAverage(grade1, grade2);

  function analyzeGrade(average: number): string | number {
    if (average >= 7) {
      return "Student Passed";
    } else {
      return "Student failed";
    }
  }

  const performance: string | number = analyzeGrade(average);

  return `
  Student ${name} has an average of ${average.toFixed(2)} and had ${performance}
  `;
}

console.log(gradeAnalysis("John", 9, 2));
console.log(gradeAnalysis("Bea", 2, 5));
console.log(gradeAnalysis("Carl", 10, 7));
console.log(gradeAnalysis("Leo", 2, 6));
console.log(gradeAnalysis("Alice", 5, 8));
