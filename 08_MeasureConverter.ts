/* 
Develop a program that reads a distance in meters and displays the equivalent values in other units.
Example:
Enter a distance in meters: 185.72
The distance of 185.72m corresponds to:
0.18572Km
1.8572Hm
18.572Dam
1857.2dm
18572.0cm
185720.0mm
*/

import { prompt, pressEnterToExit } from "./utils/inputUtils";

function main(): void {
  function measureConverter1(): void {
    const meters: number = parseFloat(prompt("Type a distance in meters: "));
    const kilometers: number = meters / 1000;
    const hectometers: number = meters / 100;
    const decameters: number = meters / 10;
    const decimeters: number = meters * 10;
    const centimeters: number = meters * 100;
    const milimeters: number = meters * 1000;

    console.log(`The distance of ${meters}m corresponds to:
    ${kilometers}km
    ${hectometers}hm
    ${decameters}dam
    ${decimeters.toFixed(1)}dm
    ${centimeters.toFixed(2)}cm
    ${milimeters.toFixed(3)}mm`);
  }
  measureConverter1();
}

main();
pressEnterToExit();

function measureConverter(meters: number): number | string {
  const kilometers: number = meters / 1000;
  const hectometers: number = meters / 100;
  const decameters: number = meters / 10;
  const decimeters: number = meters * 10;
  const centimeters: number = meters * 100;
  const milimeters: number = meters * 1000;

  return `The distance of ${meters}m corresponds to:
    ${kilometers}km
    ${hectometers}hm
    ${decameters}dam
    ${decimeters.toFixed(1)}dm
    ${centimeters.toFixed(2)}cm
    ${milimeters.toFixed(3)}mm`;
}

console.log(measureConverter(1));
