const serverDanny = [
    {
        id: 4,
        name: "Danny",
        tables: [
            {
                table: 1,
                isOrderComplete: false,
                patrons: [
                    {
                        patronId: 1,
                        mealOrdered: "Tacos",
                        drinkOrdered: "Moscow Mule",
                        dessertOrdered: "Lava Cake",
                        totalCost: 30
                    },
                    {
                        patronId: 2,
                        mealOrdered: "Tacos",
                        drinkOrdered: "Moscow Mule",
                        dessertOrdered: "Lava Cake",
                        totalCost: 30
                    },
                    {
                        patronId: 3,
                        mealOrdered: "Tacos",
                        drinkOrdered: "Moscow Mule",
                        dessertOrdered: "Lava Cake",
                        totalCost: 30
                    },
                    {
                        patronId: 4,
                        mealOrdered: "Tacos",
                        drinkOrdered: "Moscow Mule",
                        dessertOrdered: "Lava Cake",
                        totalCost: 30
                    }]
            },
            {
                table: 2,
                isOrderComplete: false,
                patrons: [
                    {
                        patronId: 1,
                        mealOrdered: ["Californication","blink 182na", "Spicy Tuna"],
                        drinkOrdered: "Moscow Mule",
                        dessertOrdered: "Lava Cake",
                        totalCost: 30
                    },
                    {
                        patronId: 2,
                        mealOrdered: ["Californication","blink 182na"],
                        drinkOrdered: "Moscow Mule",
                        dessertOrdered: "Lava Cake",
                        totalCost: 50
                    },
                    {
                        patronId: 3,
                        mealOrdered: "Tacos",
                        drinkOrdered: "Moscow Mule",
                        dessertOrdered: "Lava Cake",
                        totalCost: 50
                    },
                    {
                        patronId: 4,
                        mealOrdered: "Tacos",
                        drinkOrdered: "Moscow Mule",
                        dessertOrdered: "Lava Cake",
                        totalCost: 50
                    },
                    {
                        patronId: 5,
                        mealOrdered: "Tacos",
                        drinkOrdered: "Moscow Mule",
                        dessertOrdered: "Lava Cake",
                        totalCost: 50
                    },
                    {
                        patronId: 6,
                        mealOrdered: "Tacos",
                        drinkOrdered: "Moscow Mule",
                        dessertOrdered: "Lava Cake",
                        totalCost: 50
                    },
                    {
                        patronId: 7,
                        mealOrdered: "Tacos",
                        drinkOrdered: "Moscow Mule",
                        dessertOrdered: "Lava Cake",
                        totalCost: 50
                    },
                    {
                        patronId: 8,
                        mealOrdered: "Tacos",
                        drinkOrdered: "Moscow Mule",
                        dessertOrdered: "Lava Cake",
                        totalCost: 50
                    }]
            },
            {
                table: 3,
                isOrderComplete: true,
                patrons: [
                    {
                        patronId: 1,
                        mealOrdered: "Tacos",
                        drinkOrdered: "Moscow Mule",
                        dessertOrdered: "Lava Cake",
                        totalCost: 30,
                        tip: 5
                    },
                    {
                        patronId: 2,
                        mealOrdered: "Tacos",
                        drinkOrdered: "Moscow Mule",
                        dessertOrdered: "Lava Cake",
                        totalCost: 30,
                        tip: 3
                    },
                    {
                        patronId: 3,
                        mealOrdered: "Tacos",
                        drinkOrdered: "Moscow Mule",
                        dessertOrdered: "Lava Cake",
                        totalCost: 30,
                        tip: 3
                    },
                    {
                        patronId: 4,
                        mealOrdered: "Tacos",
                        drinkOrdered: "Moscow Mule",
                        dessertOrdered: "Lava Cake",
                        totalCost: 30,
                        tip: 3
                    },
                    {
                        patronId: 5,
                        mealOrdered: "Tacos",
                        drinkOrdered: "Moscow Mule",
                        dessertOrdered: "Lava Cake",
                        totalCost: 30,
                        tip: 3
                    },
                    {
                        patronId: 6,
                        mealOrdered: "Tacos",
                        drinkOrdered: "Moscow Mule",
                        dessertOrdered: "Lava Cake",
                        totalCost: 30,
                        tip: 3
                    }]
            },
            {
                table: 4,
                isOrderComplete: false,
                patrons: [
                    {
                        patronId: 1,
                        mealOrdered: "Pizza",
                        drinkOrdered: "Miller Light",
                        dessertOrdered: "Ice Cream",
                        totalCost: 25
                    },
                    {
                        patronId: 2,
                        mealOrdered: "Cheeseburger",
                        drinkOrdered: "Coke",
                        dessertOrdered: "McFlurry",
                        totalCost: 15
                    }]
            }
        ]
    }
]

let header = `<div class="server-name"><h3 class="header">Server Name: ${serverDanny[0].name}</h3></div>`

let inProgressOrders = '<div class="section-title"><u>In Progress Tables</u>:</div>'

let completedOrders = '<div class="section-title"><u>Completed Tables</u>:</div>'

for (const table of serverDanny[0].tables) {
     if (table.isOrderComplete === false){
{ 
    let orderStatus = 'In Progress'
    inProgressOrders += `<div class="table"><div class="inProgressTable">Table #${table.table} <div class="inProgressStatus">[${orderStatus}]</div></div><div class="seat-container">`

    for (const patron of table.patrons) {

        inProgressOrders += `<div class="seat"><ul><u>Seat #${patron.patronId}</u><br><br>`

        inProgressOrders += `<li><b>Meal</b>: ${patron.mealOrdered}</li>`

        inProgressOrders += `<li><b>Drinks</b>: ${patron.drinkOrdered}</li>`

        inProgressOrders += `<li><b>Dessert</b>: ${patron.dessertOrdered}</li>`

        inProgressOrders += `<li><b>Cost</b>: $${patron.totalCost}</li></ul></div>`

    }

    inProgressOrders += '</div></div>'

}}}

inProgressOrders += '<br>'

for (const table of serverDanny[0].tables) {
    if (table.isOrderComplete === true){
{ 
    let orderStatus = 'Complete'
    completedOrders += `<div class="table"><div class="completedTable">Table #${table.table} <div class="completedStatus">[${orderStatus}]</div></div><div class="seat-container">`

   for (const patron of table.patrons) {

       completedOrders += `<div class="seat"><ul><u>Seat #${patron.patronId}</u><br><br>`

       completedOrders += `<li><b>Meal</b>: ${patron.mealOrdered}</li>`

       completedOrders += `<li><b>Drinks</b>: ${patron.drinkOrdered}</li>`

       completedOrders += `<li><b>Dessert</b>: ${patron.dessertOrdered}</li>`

       completedOrders += `<li><b>Cost</b>: $${patron.totalCost}</li>`

       completedOrders += `<li><b>Tip</b>: $${patron.tip}</li></ul></div>`

   }

   completedOrders += '</div></div>'

}}}

let page = header += inProgressOrders += completedOrders

console.log(page)

document.getElementById('serverDanny').innerHTML = page