/* 

5 Write a program that reads a student's two grades in a subject and displays their average in the course.

Example:
Grade 1: 4.5  
Grade 2: 8.5  
The average between 4.5 and 8.5 is 6.5
*/

function calculateAverage(
  grade1: number,
  grade2: number,
  average?: number
): number | string {
  average = (grade1 + grade2) / 2;
  return `The average between ${grade1} and ${grade2} is ${average.toFixed(2)}`;
}

console.log(calculateAverage(9, 7));
console.log(calculateAverage(4, 7));
console.log(calculateAverage(3, 8));
