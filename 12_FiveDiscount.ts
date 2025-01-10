/* 
 12) Create a program that reads the price of a product, 
 calculates, and shows its PROMOTIONAL PRICE with a 5% discount.
*/

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
