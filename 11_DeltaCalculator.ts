/* 
 11) Develop a logic that reads the values of A, B, and C 
 of a quadratic equation and shows the value of Delta.
*/

function algorithm11(
  valueOfA: number,
  valueOfB: number,
  valueOfC: number
): string {
  function calculateDelta(
    valueOfA: number,
    valueOfB: number,
    valueOfC: number
  ): number {
    return valueOfB * valueOfB - 4 * (valueOfA * valueOfC);
  }

  const delta = calculateDelta(valueOfA, valueOfB, valueOfC);

  return `The value of delta is equal to: ${delta}`;
}

console.log(algorithm11(10, 5, 12));
console.log(algorithm11(1, 5, 17));
console.log(algorithm11(10, 8, 9));
