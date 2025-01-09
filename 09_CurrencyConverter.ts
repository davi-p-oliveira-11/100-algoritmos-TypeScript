/* 
9) Write an algorithm that reads how much money a person has in their wallet (in R$) 
and shows how many dollars they can buy. Consider US$1.00 = R$3.45.
*/

function currencyConverter(avaiableBRL: number): string | number {
  const dollarAmount: number = avaiableBRL / 3.45;

  return `You can buy a total of ${dollarAmount.toFixed(2)} USD`;
}

console.log(currencyConverter(2));
console.log(currencyConverter(14));
console.log(currencyConverter(7));
console.log(currencyConverter(80));
console.log(currencyConverter(100));
