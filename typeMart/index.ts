import products from "./products";

let productName: string = products[2].name;
let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;

let shippingAddress: string = "12 Anabole Road, New York";

let product = products.find((prod) => productName === prod.name);

if (product && product.preOrder === "true") {
  console.log(`We will send you a message for your order: ${product.name} when it's ready for shipment!`);
}

if ( product && Number(product.price) >= 25){
  shipping = 0;
  console.log("We provide free shipping for this product")
}
else{
  shipping = 5;
}


if (shippingAddress.match(/New York/)) {
  taxPercent = 0.1;
} else {
  taxPercent = 0.05;
}

if(product){
taxTotal  =  Number(product.price) * taxPercent;
total = Number(product.price) + taxTotal + shipping;
console.log(`
Product:  ${product.name}
Address:  ${shippingAddress}
Price:    $${product.price}
Tax:      $${taxTotal.toFixed(2)}
Shipping: $${shipping.toFixed(2)}
Total:    $${total.toFixed(2)}
`);
}

