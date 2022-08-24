// const serverHolden = [
//     {
//         id: 1,
//         name: "Holden",
//         asssighedTables:[1, 2, 3]}]
// const patrons = [
//                     {
//                         serverId: 1,
//                         patronId: 1,
//                         tableNumber: 1,
//                         mealOrdered: "Bacon Burger",
//                         drinkOrdered: "Jack & Coke",
//                         dessertOrdered: "Lava Cake",
//                         totalCost: 56
//                     },
//                     {
//                         serverId: 1,
//                         patronId: 2,
//                         tableNumber: 1,
//                         mealOrdered: "Quesadilla",
//                         drinkOrdered: "Lime Margarita",
//                         dessertOrdered: "Mega Cookie",
//                         totalCost: 40
//                     },
//                     {
//                         serverId: 1,
//                         patronId: 3,
//                         tableNumber: 1,
//                         mealOrdered: "Fajita",
//                         drinkOrdered: "Black Berry Margarita",
//                         dessertOrdered: "Mega Cookie",
//                         totalCost: 34
//                     },
//                     {
//                         serverId: 1,
//                         patronId: 4,
//                         tableNumber: 2,
//                         mealOrdered: "Tacos",
//                         drinkOrdered: "Maleficent",
//                         dessertOrdered: "Ice Cream",
//                         totalCost: 28
//                     },
//                     {
//                         serverId: 1,
//                         patronId: 5,
//                         tableNumber: 2,
//                         mealOrdered: "Fish Sandwich",
//                         drinkOrdered: "Boba Tea",
//                         dessertOrdered: "None",
//                         totalCost: 22
//                     },
//                     {
//                         serverId: 1,
//                         patronId: 6,
//                         tableNumber: 3,
//                         mealOrdered: "Steak",
//                         drinkOrdered: "Bud light",
//                         dessertOrdered: "Ice cream",
//                         totalCost: 35
//                     },
//                     {
//                         serverId: 1,
//                         patronId: 7,
//                         tableNumber: 3,
//                         mealOrdered: "Tacos",
//                         drinkOrdered: "Moscow Mule",
//                         dessertOrdered: "Lava Cake",
//                         totalCost: 30
//                     }]
// const tables = [
//     {
//         id:1,
//         serverId:1
//     },
//     {
//         id:2,
//         serverId:1
//     },
//     {
//         id:3,
//         serverId:1
//     },
// ]

import {getServerData} from './restdata.js'
import {getPatronData} from './restdata.js'
import {getTableData} from './restdata.js'

console.log("This is working")

let servers = getServerData();
let patrons = getPatronData();
let tables = getTableData();

tables = tables.filter((table) => table.serverId === 1);

let holdenGreetings =`<h3>Serve Name: ${servers[0].name}</h3>
<h4>Table numbers assigned: `

tables.forEach(table => {
    holdenGreetings += `${table.id} `
});
holdenGreetings += ` </h4>`

let holdenOrder=""
let tableHtml = ""
tables.forEach((table) => {
    let newPatrons = patrons.filter((patron) => patron.tableId === table.id);
     tableHtml += `<h4 class ="holdenTableHeader">Table Number: ${table.id}</h4>`;
     newPatrons.forEach((patron) => {
        tableHtml +=
                    `<div class="holdenOrders">
                    <div>Customer Number: ${patron.patronId}</div>
                    <div>Meal Ordered: ${patron.mealOrdered}</div>
                    <div>Drink Ordered: ${patron.drinkOrdered}</div>
                    <div>Desert Ordered: ${patron.dessertOrdered}</div>
                    <div>Total Cost: $${patron.totalCost}</div>
                    <div>Order status: ${patron.isOrderCompleted ? "[Compeleted]" : "[In Progress]"}</div><br>
                    <button class="holdenButton">Bump Order</button>
                    </div>`;
    });
});
holdenOrder += tableHtml

document.getElementById('serverHolden').innerHTML = holdenGreetings + holdenOrder

// var mealHtml = ""
// menuMeal.forEach(meal => {
//     mealHtml += 
//     `<div>Name: ${meal.mealName}</div>
//      <div>Description: ${meal.mealDescription}</div>
//      <div>Cost: $${meal.mealCost}</div>`
// });

// var drinksHtml = ""S
// menuDrinks.forEach(drink => {
//     drinksHtml += 
//     `<div>Name: ${drink.drinkName}</div>
//      <div>Description: ${drink.drinkDescription}</div>
//      <div>Cost: $${drink.drinkCost}</div>`
// });

// var dessertsHtml = ""
// menuDesserts.forEach(dessert => {
//     dessertsHtml += 
//     `<div class="itemName">Name: ${dessert.dessertName}</div>
//      <div>Description: ${dessert.dessertDescription}</div>
//      <div>Cost: $${dessert.dessertCost}</div>`
// });

// document.getElementById('meals').innerHTML = mealHtml
// document.getElementById('drinks').innerHTML = drinksHtml
// document.getElementById('desserts').innerHTML = dessertsHtml