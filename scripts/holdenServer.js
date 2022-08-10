console.log("This is working")
const serverHolden = [
    {
        id: 1,
        name: "Holden",
        asssighedTables:[1, 2, 3]}]
const patrions = [
                    {
                        serverId: 1,
                        patronId: 1,
                        tableNumber: 1,
                        mealOrdered: "Bacon Burger",
                        drinkOrdered: "Jack & Coke",
                        dessertOrdered: "Lava Cake",
                        totalCost: 56
                    },
                    {
                        serverId: 1,
                        patronId: 2,
                        tableNumber: 1,
                        mealOrdered: "Quesadilla",
                        drinkOrdered: "Lime Margarita",
                        dessertOrdered: "Mega Cookie",
                        totalCost: 40
                    },
                    {
                        serverId: 1,
                        patronId: 3,
                        tableNumber: 1,
                        mealOrdered: "Fajita",
                        drinkOrdered: "Black Berry Margarita",
                        dessertOrdered: "Mega Cookie",
                        totalCost: 34
                    },
                    {
                        serverId: 1,
                        patronId: 4,
                        tableNumber: 2,
                        mealOrdered: "Tacos",
                        drinkOrdered: "Maleficent",
                        dessertOrdered: "Ice Cream",
                        totalCost: 28
                    },
                    {
                        serverId: 1,
                        patronId: 5,
                        tableNumber: 2,
                        mealOrdered: "Fish Sandwich",
                        drinkOrdered: "Boba Tea",
                        dessertOrdered: "None",
                        totalCost: 22
                    },
                    {
                        serverId: 1,
                        patronId: 6,
                        tableNumber: 3,
                        mealOrdered: "Steak",
                        drinkOrdered: "Bud light",
                        dessertOrdered: "Ice cream",
                        totalCost: 35
                    },
                    {
                        serverId: 1,
                        patronId: 7,
                        tableNumber: 3,
                        mealOrdered: "Tacos",
                        drinkOrdered: "Moscow Mule",
                        dessertOrdered: "Lava Cake",
                        totalCost: 30
                    }]
const tables = [
    {
        id:1,
        serverId:1
    },
    {
        id:2,
        serverId:1
    },
    {
        id:3,
        serverId:1
    },
]

let holdenGreetings =`<h3>Serve Name: ${serverHolden[0].name}</h3>
<h4>Assighed tables ${serverHolden[0].asssighedTables}</h3>`
let holdenOrder=""

//     let uniqueTable = []
//     for(var i = 0; i < tables.length; i++){
//     const unique = patrions.filter(element => {
//         const isDuplicate = uniqueTable.includes(element.tableNumber);

//         if (!isDuplicate) {
//             uniqueTable.push(element.tableNumber);

//             return true;
//         }
//             return false;
    
// })};
//  holdenOrder += `<h4> Table ${uniqueTable[i]}<h4>`

    
// holdenOrder += `<strong>Table Number: ${tables.id}</strong>`;
// Loop over tables 
// For each table table find patrions === table'

for(let i = 0; i < tables.length; i++){


    tableHtml = `<h4 class ="holdenTableHeader">Table Number: ${tables[i].id}</h4>`;

    for(let j = 0; j < patrions.length; j++){
       if(patrions[j].tableNumber === tables[i].id){
        tableHtml +=
                    `<div class="holdenOrders">
                    <div>Customer Number: ${patrions[j].patronId}</div>
                    <div>Meal Ordered: ${patrions[j].mealOrdered}</div>
                    <div>Drink Ordered: ${patrions[j].drinkOrdered}</div>
                    <div>Desert Ordered: ${patrions[j].dessertOrdered}</div>
                    <div>Total Cost: $${patrions[j].totalCost}</div><br>
                    <button class="holdenButton">Bump Order</button>
                    </div>`;
       } 
       
    };
    holdenOrder += tableHtml
};




// for(let i = 0; i < patrions.length; i++){
// holdenOrder +=

// ` <div class="orders">
//   <div class="tableHeader">Table Number: ${patrions[i].tableNumber}</div>
//   <div>Customer Number: ${patrions[i].patronId}</div>
//   <div>Meal Ordered: ${patrions[i].mealOrdered}</div>
//   <div>Drink Ordered: ${patrions[i].drinkOrdered}</div>
//   <div>Desert Ordered: ${patrions[i].dessertOrdered}</div>
//   <div>Total Cost: $${patrions[i].totalCost}</div><br>
//   </div>`;
// };



document.getElementById('serverHolden').innerHTML = holdenGreetings + holdenOrder

