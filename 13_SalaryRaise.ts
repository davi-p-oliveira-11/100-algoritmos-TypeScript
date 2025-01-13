/* 
 13) Create an algorithm that reads an employee's salary, 
 calculates, and shows their new salary with a 15% increase.
*/

function algorithm13(salary: number): string {
  function calculateSalary(salary: number): number {
    return salary + salary * 0.15;
  }

  const newSalary: number = calculateSalary(salary);

  return `Your new salary with a raise of 15% is: ${newSalary}`;
}

console.log(algorithm13(100));
console.log(algorithm13(2500));
console.log(algorithm13(3800));
console.log(algorithm13(5000));
