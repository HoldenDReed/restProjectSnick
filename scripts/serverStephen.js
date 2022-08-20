

// const servers = [
//     {
//         id: 3,
//         name: "Stephen"
//     }
// ]

// const stephenTables = [
//     {
//         id: 26,
//         serverId: 3,
//     },
//     {
//         id: 27,
//         serverId: 3,
//     },
//     {
//         id: 28,
//         serverId: 3,
//     },
//     {
//         id: 29,
//         serverId: 3,
//     },
//     {
//         id: 30,
//         serverId: 3,
//     },
//     {
//         id: 31,
//         serverId: 3,
//     },
//     {
//         id: 32,
//         serverId: 3,
//     },
//     {
//         id: 33,
//         serverId: 3,
//     },
//     {
//         id: 34,
//         serverId: 3,
//     },
//     {
//         id: 35,
//         serverId: 3,
//     },
//     {
//         id: 36,
//         serverId: 3,
//     },
//     {
//         id: 37,
//         serverId: 3,
//     },
// ]

// const patrons = [
//     {
//         id: 26,
//         // name: "John",
//         tableId: 1,
//         mealOrdered: "Burger-well done",
//         drinkOrdered: "Dr. Pepper",
//         dessertOrdered: "Lava Cake",
//         totalCost: 25,
//         isOrderCompleted: true,
//     },
//     {
//         id: 27,
//         // name: "Susie",
//         tableId: 1,
//         mealOrdered: "sushi",
//         drinkOrdered: "Sprite",
//         dessertOrdered: "Ice Cream",
//         totalCost: 40,
//         isOrderCompleted: false,
//     },
//     {
//         id: 28,
//         // name:"jackson",
//         tableId: 1,
//         mealOrdered: "Tacos",
//         drinkOrdered: "Water",
//         dessertOrdered: "Brownie",
//         totalCost: 35,
//         isOrderCompleted: true,
//     },
//     {
//         id: 29,
//         // name:"Holly",
//         tableId: 1,
//         mealOrdered: "Chicken wrap",
//         drinkOrdered: "Coke",
//         dessertOrdered: "Tiramisu",
//         totalCost: 20,
//         isOrderCompleted: true,
//     },
//     {
//         id: 30,
//         // name:"Brad",
//         tableId: 2,
//         mealOrdered: "Burger",
//         drinkOrdered: "Dr. Pepper",
//         dessertOrdered: "Lava Cake",
//         totalCost: 15.50,
//         isOrderCompleted: true,
//     },
//     {
//         id: 31,
//         // name: "George",
//         tableId: 2,
//         mealOrdered: "Sushi",
//         drinkOrdered: "Sprite",
//         dessertOrdered: "Ice Cream",
//         totalCost: 12.75,
//         isOorderCompleted: true,
//     },
//     {
//         id: 32,
//         // name: "Riley",
//         tableId: 2,
//         mealOrdered: "Tacos",
//         drinkOrdered: "Water",
//         dessertOrdered: "Brownie",
//         totalCost: 12.75,
//         isOrderCompleted: true,
//     },
//     {
//         id: 33,
//         // name: "Tina",
//         tableId: 2,
//         mealOrdered: "Wrap",
//         drinkOrdered: "Coke",
//         dessertOrdered: "Tiramisu",
//         totalCost: 22.50,
//         isOrderCompleted: true,
//     },
//     {
//         id: 34,
//         // name: "Johanna",
//         tableId: 3,
//         mealOrdered: "Wrap",
//         drinkOrdered: "Coke",
//         dessertOrdered: "Gingerbread",
//         totalCost: 16,
//         isOrderCompleted: true,
//     },
//     {
//         id: 35,
//         // name: "Adam",
//         tableId: 3,
//         mealOrdered: "Wrap",
//         drinkOrdered: "Coke",
//         dessertOrdered: "Mazurek",
//         totalCost: 23,
//         isOrderCompleted: true,
//     },
//     {
//         id: 36,
//         // name: "Yolanda",
//         tableId: 3,
//         mealOrdered: "wrap",
//         drinkOrdered: "Coke",
//         dessertOrdered: "Ontbijtkoek",
//         totalCost: 27,
//         isOrderCompleted: true,
//     },
//     {
//         id: 37,
//         // name: "Jessica",
//         tableId: 3,
//         mealOrdered: "Chicken Alfredo",
//         drinkOrdered: "7Up",
//         dessertOrdered: "Sfouf",
//         totalCost: 45,
//         isOrderCompleted: true,
//     },


// ]

import {getTableData} from './restdata.js'
import {getServerData} from './restdata.js'
import {getPatronData} from './restdata.js'
const tables = getTableData()
const patrons = getPatronData()
const servers = getServerData()


let serverContent = "";

serverContent += `<h3>Server: ${servers[2].name}</h3>`;

tables.forEach((table) => {
  const patronsAtTable = patrons.filter(
    (patron) => patron.tableId === table.id
  );
  serverContent += `
    <div class= "stephenTable">
      <strong>Table: ${table.id}</strong>
      </div>
      `;
      patronsAtTable.forEach((patron) => {
          serverContent += `
          <div class= "patronsCss">
          <div class="patron-header">patron: ${patron.id}</div>
          <ul class="patron-details">
          <li>Meal: ${patron.mealOrdered}</li>
          <li>Drink: ${patron.drinkOrdered}</li>
          <li>Dessert: ${patron.dessertOrdered}</li>
          <li> Current cost: $${patron.totalCost}</li>
          <li>Order completed: ${patron.isOrderCompleted ? "yes" : "no"}</li>
     
          </ul>
          </div>
          
          `;
        });
    });     
    
document.getElementById("serverStephen").innerHTML = serverContent;
;
console.log(serverContent)