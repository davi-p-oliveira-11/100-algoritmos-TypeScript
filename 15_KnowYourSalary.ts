/* 
 15) Create a program that reads the number of days worked in a month and shows the salary of an employee, 
 knowing that they work 8 hours per day and earn $25 per hour worked.
*/

function algorithm14(daysWorked: number): string {
  function calculate(daysWorked: number): number {
    return daysWorked * 200;
  }

  const salary: number = calculate(daysWorked);

  return `The employee worked ${daysWorked} days
and will receive ${salary} USD`;
}

console.log(algorithm14(20));
console.log(algorithm14(12));
console.log(algorithm14(30));
console.log(algorithm14(25));
console.log(algorithm14(10));
