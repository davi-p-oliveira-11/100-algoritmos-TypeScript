/* 
3) Create a program that reads the name and salary of an employee, and displays a message at the end.

Example:
Employee Name: Jane Doe
Salary: 1850.45
The employee Jane Doe has a salary of R$1850.45 in June.
*/

function helloEmployee(name: string, salary: string, month: string): string {
  return `The employee ${name} has a salary of ${salary} USD in ${month}`;
}

console.log(helloEmployee("John", "2000", "October"));
console.log(helloEmployee("Mary", "2500", "March"));
console.log(helloEmployee("Tom", "4500", "February"));
