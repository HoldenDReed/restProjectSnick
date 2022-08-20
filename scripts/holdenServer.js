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
import {getServerData} from `./restdata.js`
import {getPatronData} from `./restdata.js`
import {getTablesData} from `./restdata.js`

console.log("This is working")

let servers = getServerData();
let patrons = getPatronData();
let tables = getTablesData();
tables = tables.filter(table => table.serverId === 1); //Might need refracting
patrons.forEach(patron => {
    if(patron.tableId === tables.id){
    patron.serverId = 1
    }
});
patrons = patrons.filter(patron => patron.serverId === 1); //Might need refracting

let holdenGreetings =`<h3>Serve Name: ${servers[0].name}</h3>
<h4>Table numbers assigned: `

tables.forEach(table => {
    holdenGreetings + `${table[0].id},`
});
holdenGreetings + `</h4>`

let holdenOrder=""

for(let i = 0; i < tables.length; i++){
    tableHtml = `<h4 class ="holdenTableHeader">Table Number: ${tables[i].id}</h4>`;
    for(let j = 0; j < patrons.length; j++){
       if(patrons[j].tableId === tables[i].id){
        tableHtml +=
                    `<div class="holdenOrders">
                    <div>Customer Number: ${patrons[j].patronId}</div>
                    <div>Meal Ordered: ${patrons[j].mealOrdered}</div>
                    <div>Drink Ordered: ${patrons[j].drinkOrdered}</div>
                    <div>Desert Ordered: ${patrons[j].dessertOrdered}</div>
                    <div>Total Cost: $${patrons[j].totalCost}</div><br>
                    <button class="holdenButton">Bump Order</button>
                    </div>`;
       } 
       
    };
    holdenOrder += tableHtml
};


document.getElementById('serverHolden').innerHTML = holdenGreetings + holdenOrder

