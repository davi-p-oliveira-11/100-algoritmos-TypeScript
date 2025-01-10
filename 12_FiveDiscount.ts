/* 
 12) Create a program that reads the price of a product, 
 calculates, and shows its PROMOTIONAL PRICE with a 5% discount.
*/

import { prompt, pressEnterToExit } from "./utils/inputUtils";

function main(): void {
  function calculateDiscount(): void {
    const productPrice: number = parseFloat(
      prompt("How much the product costs ? ")
    );

    const discount: number = productPrice * 0.05;
    const finalPrice: number = productPrice - discount;

    console.log(`The original price of the product is: ${productPrice}`);
    console.log(`The price with discount is : ${finalPrice}`);
  }

  calculateDiscount();
}

main();
pressEnterToExit();

function algorithm12(productPrice: number): string {
  function calculateDiscount(productPrice: number): number {
    return productPrice - productPrice * 0.05;
  }

  const finalPrice = calculateDiscount(productPrice);

  return `The price with discount is : ${finalPrice.toFixed(2)}`;
}

console.log(algorithm12(100));
console.log(algorithm12(300));
console.log(algorithm12(5000));
console.log(algorithm12(40));
console.log(algorithm12(150));
