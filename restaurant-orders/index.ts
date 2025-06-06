import { restaurants, Restaurant } from "./restaurants";
import { orders, Order, PriceBracket } from "./orders";

// Add your getMaxPrice() function below:

function getMaxPrice(price: PriceBracket){
  switch(price){
    case PriceBracket.Low: 
    return 10.0;

    case PriceBracket.Medium:
    return 20.0;

    case PriceBracket.High:
    return 30.0;
  }
}


// Add your getOrders() function below:

function getOrders(price: PriceBracket, orders: Order[][]){
let filteredOrders: Order[][] = [];

orders.forEach((orderArray: Order[]) => {
  const filtered = orderArray.filter((order: Order) => order.price <= getMaxPrice(price));
  filteredOrders.push(filtered);
});
return filteredOrders;
}

// Add your printOrders() function below:
function printOrders(restaurants: Restaurant[], orders: Order[][]) {
  restaurants.forEach((restaurant: Restaurant, index: number) => {
    const restaurantOrders = orders[index]; // Match restaurant to its orders

    if (restaurantOrders.length > 0) {

      console.log(`${restaurant.name}`);

      restaurantOrders.forEach((order: Order) => {
        console.log(`- ${order.name}: $${order.price.toFixed(2)}`);
      });

      console.log();
    }
  });
}



// Main
const eligibleOrders = getOrders(PriceBracket.Low, orders);


printOrders(restaurants, eligibleOrders);