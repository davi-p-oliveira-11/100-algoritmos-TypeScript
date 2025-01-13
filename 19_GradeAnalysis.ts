/* 
19) Create an algorithm that reads a student's name and two grades, 
calculates their average, and displays it on the screen. 
In the end, analyze the average and show whether 
the student had good performance (if it was above the average of 7.0).
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
