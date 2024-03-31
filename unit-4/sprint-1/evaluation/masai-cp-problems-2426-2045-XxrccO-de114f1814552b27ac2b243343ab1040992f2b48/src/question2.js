// Problem 1

const foodDeliveryService = {
  serviceName: "TastyBites Delivery",
  location: "Foodville",
  restaurants: {
    italianCorner: {
      menu: {
        pizza: { available: 20, price: 12 },
        pasta: { available: 30, price: 10 },
        salad: { available: 15, price: 8 },
      },
      orders: [
        { id: 1, items: ["pizza", "pasta"], total: 22 },
        { id: 2, items: ["salad", "pasta"], total: 18 },
        { id: 3, items: ["pizza", "pasta"], total: 12 },
      ],
    },
    burgerJoint: {
      menu: {
        burger: { available: 25, price: 8 },
        fries: { available: 40, price: 4 },
        drink: { available: 30, price: 2 },
      },
      orders: [
        { id: 1, items: ["burger", "fries"], total: 12 },
        { id: 2, items: ["drink", "burger", "fries"], total: 14 },
        { id: 3, items: ["drink"], total: 2 },
      ],
    },
  },
  restaurantNames: ["italianCorner", "burgerJoint"],
};

// Level-Problem 1-1
function findDetails(foodDeliveryService) {
 return { 
  pizzaAvailable:foodDeliveryService.restaurants.italianCorner.menu.pizza.available,
  burgerAvailable:foodDeliveryService.restaurants.burgerJoint.menu.burger.available,
  pizzaPrice:foodDeliveryService.restaurants.italianCorner.menu.pizza.price,
  burgerPrice:foodDeliveryService.restaurants.burgerJoint.menu.burger.price,
 };
}
// console.log(findDetails(foodDeliveryService).pizzaAvailable); // 20
// console.log(findDetails(foodDeliveryService).burgerAvailable); // 25
// console.log(findDetails(foodDeliveryService).pizzaPrice); // 12
// console.log(findDetails(foodDeliveryService).burgerPrice); // 8

// Level-Problem 1-2
function calculateTotalRevenue(foodDeliveryService) {
  const {restaurants}=foodDeliveryService;
  const totalRev=Object.values(restaurants).reduce((acc,restaurant)=>{
    const restRev=restaurant.orders.reduce((acc,order)=> acc+order.total,
    0
    );
    return acc+restRev;
  },0);
  return `Total Revenue: ${totalRev}`;

}
// console.log(calculateTotalRevenue(foodDeliveryService)); //80 = (22+18+12+12+14+2)



//don't remove below export statement part
export { findDetails, calculateTotalRevenue };
