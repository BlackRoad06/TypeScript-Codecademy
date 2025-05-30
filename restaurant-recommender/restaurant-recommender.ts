import restaurants from './restaurants';

const dollarSigns = '$$';
const deliveryTimeMax = '90';
const maxDistance = 10;
let result: string;
let hour: number = new Date().getHours();

const priceBracket: number = dollarSigns.length;

const filteredRestaurants = restaurants.filter((restaurant) => {
  if (Number(restaurant.priceBracket) > priceBracket) {
    return false;
  }

  if (restaurant.deliveryTimeMinutes > Number(deliveryTimeMax)) {
    return false;
  }

  if (Number(restaurant.distance) > maxDistance) {
    return false;
  }

 const openHour = Number(restaurant.openHour);
const closeHour = Number(restaurant.closeHour);

if (openHour <= closeHour) {
  if (hour < openHour || hour > closeHour) {
    return false;
  }
} else {
  if (hour < openHour && hour > closeHour) {
    return false;
  }
}

  return true;
});

if (filteredRestaurants.length === 0) {
  result = 'There are no restaurants available right now.';
} else {
  result = `We found ${filteredRestaurants.length} restaurants, the first is ${filteredRestaurants[0].name}.`;
}

console.log(result);
