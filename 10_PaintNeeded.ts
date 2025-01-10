/* 
 10) Write an algorithm that reads the width and height of a wall, 
 calculates and displays the area to be painted, and the amount of paint needed for the job, 
 knowing that each liter of paint covers an area of 2 square meters.
*/

import { prompt, pressEnterToExit } from "./utils/inputUtils";

function main(): void {
  function calculateArea2(): void {
    const height: number = parseFloat(
      prompt("Type the height of the wall in meters: ")
    );
    const width: number = parseFloat(
      prompt("Type the width of the wall in meters: ")
    );

    const area: number = width * height;
    const paintNeeded: number = area * 0.5;

    console.log(
      `The area of the wall to be painted is equivalent to ${area} m²`
    );
    console.log(
      `and the amount of paint needed is equivalent to ${paintNeeded} liters.`
    );
  }
  calculateArea2();
}

main();
pressEnterToExit();

function calculateArea(width: number, height: number, area: number): number {
  area = width * height;
  return area;
}

function calculatePaintNeeded(area: number, paintNeeded: number): number {
  paintNeeded = area * 0.5;
  return paintNeeded;
}
