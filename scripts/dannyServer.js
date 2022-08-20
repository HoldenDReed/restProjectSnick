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
                        mealOrdered: "real deal california roll",
                        drinkOrdered: "high life",
                        dessertOrdered: "cake",
                        totalCost: 30
                    },
                    {
                        patronId: 2,
                        mealOrdered: "Beef Lo Mein",
                        drinkOrdered: "Mai Tai",
                        dessertOrdered: "Lava Cake",
                        totalCost: 43.92
                    },
                    {
                        patronId: 3,
                        mealOrdered: ["Korean Waffle Fries", "Potstickers"],
                        drinkOrdered: "Chardonnay",
                        dessertOrdered: "Ice Cream",
                        totalCost: 24.58
                    },
                    {
                        patronId: 4,
                        mealOrdered: ["The Peruvian", "Crab Rangoon"],
                        drinkOrdered: "Sapporo",
                        dessertOrdered: "",
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
                        dessertOrdered: "Strawberry Ice Cream",
                        totalCost: 43.55
                    },
                    {
                        patronId: 2,
                        mealOrdered: "Spicy Tuna",
                        drinkOrdered: "PBR",
                        dessertOrdered: "",
                        totalCost: 20
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
                        mealOrdered: "Pizza",
                        drinkOrdered: "Bud Light",
                        dessertOrdered: "",
                        totalCost: 19.89
                    },
                    {
                        patronId: 5,
                        mealOrdered: "The Emmy",
                        drinkOrdered: "Gin & Tonic",
                        dessertOrdered: "Banana Pudding",
                        totalCost: 32
                    },
                    {
                        patronId: 6,
                        mealOrdered: "Hot Chicken",
                        drinkOrdered: "Milk",
                        dessertOrdered: "",
                        totalCost: 50
                    }]
            },
            {
                table: 3,
                isOrderComplete: true,
                patrons: [
                    {
                        patronId: 1,
                        mealOrdered: "Chicken Sandwhich",
                        drinkOrdered: "Sweet Tea",
                        dessertOrdered: "Bananas Foster",
                        totalCost: 30,
                        tip: 5
                    },
                    {
                        patronId: 2,
                        mealOrdered: "Fish Tacos",
                        drinkOrdered: "Margarita",
                        dessertOrdered: "Fruit Sorbet Trio",
                        totalCost: 24.67,
                        tip: 3
                    },
                    {
                        patronId: 3,
                        mealOrdered: "Kale Ceasar",
                        drinkOrdered: "Diet Coke",
                        dessertOrdered: "Italian Wedding Cake",
                        totalCost: 40,
                        tip: 5
                    },
                    {
                        patronId: 4,
                        mealOrdered: "Veggie Platter",
                        drinkOrdered: "Strawberry Daquiri",
                        dessertOrdered: "Double Chocolate Brownie",
                        totalCost: 24,
                        tip: 2
                    },
                    {
                        patronId: 5,
                        mealOrdered: "Steak & Potatoes",
                        drinkOrdered: "Miller Light",
                        dessertOrdered: "Georgia Peach Cobbler",
                        totalCost: 41.25,
                        tip: 6
                    },
                    {
                        patronId: 6,
                        mealOrdered: "Surf & Turf",
                        drinkOrdered: "White Claw",
                        dessertOrdered: "Key Lime Pie",
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
                        mealOrdered: "Ahi Tuna Salad",
                        drinkOrdered: "Water w/ lemon",
                        dessertOrdered: "Cake Pops",
                        totalCost: 25
                    },
                    {
                        patronId: 2,
                        mealOrdered: "Chimichanga",
                        drinkOrdered: "Rum & Coke",
                        dessertOrdered: "",
                        totalCost: 15
                    }]
            },
            {
                table: 5,
                isOrderComplete: true,
                patrons: [
                    {
                        patronId: 1,
                        mealOrdered: "California Burrito",
                        drinkOrdered: "Miller Light",
                        dessertOrdered: "Chocolate Fondue Bar",
                        totalCost: 23.98,
                        tip: 2
                    },
                    {
                        patronId: 2,
                        mealOrdered: "Trash Can Nachos",
                        drinkOrdered: "Coke",
                        dessertOrdered: "Blueberry Loaf",
                        totalCost: 13,
                        tip: 3
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