/* 
 10) Write an algorithm that reads the width and height of a wall, 
 calculates and displays the area to be painted, and the amount of paint needed for the job, 
 knowing that each liter of paint covers an area of 2 square meters.
*/

function algorithm10(width: number, height: number): string {
  function calculateArea(width: number, height: number): number {
    return width * height;
  }

  function calculatePaintNeeded(area: number): number {
    return area * 0.5;
  }

  const area: number = calculateArea(width, height);
  const paintNeeded: number = calculatePaintNeeded(area);

  return `The area of the wall is ${area} square meters, and the amount of paint needed is ${paintNeeded} liters`;
}

console.log(algorithm10(10, 3));
console.log(algorithm10(5, 4));
console.log(algorithm10(12, 5));
