console.log("This is my js")

const serverDeanna = {
    id: 2,
    name: "Deanna",
    tables: [
        {
            table: 1,
            patrons: [
                {
                    patronId: 1,
                    mealOrdered: "Chicken Tacos",
                    drinkOrdered: "Moscow Mule",
                    dessertOrdered: "Lava Cake",
                    totalCost: 15,
                    orderComplete: true
                },
                {
                    patronId: 2,
                    mealOrdered: "Cheeseburger",
                    drinkOrdered: "Diet Coke",
                    dessertOrdered: "Vanilla Ice Cream",
                    totalCost: 25,
                    orderComplete: true
                },
                {
                    patronId: 3,
                    mealOrdered: "Meatloaf",
                    drinkOrdered: "Milk",
                    dessertOrdered: "Strawberry Cheesecake",
                    totalCost: 30,
                    orderComplete: false
                },
                {
                    patronId: 4,
                    mealOrdered: "Fish Tacos",
                    drinkOrdered: "Margarita",
                    dessertOrdered: "Chocolate Pudding",
                    totalCost: 20,
                    orderComplete: true
                }
            ]
        },
        {
            table: 2,
            patrons: [
                {
                    patronId: 1,
                    mealOrdered: "Grilled Cheese",
                    drinkOrdered: "Sweet Tea",
                    dessertOrdered: "Strawberry Shortcake",
                    totalCost: 10,
                    orderComplete: false
                },
                {
                    patronId: 2,
                    mealOrdered: "Veggie Burger",
                    drinkOrdered: "Unsweet Tea",
                    dessertOrdered: "Fruit Plate",
                    totalCost: 35,
                    orderComplete: false
                },
                {
                    patronId: 3,
                    mealOrdered: "Chicken Nachos",
                    drinkOrdered: "Coke",
                    dessertOrdered: "Cinnamon Donuts",
                    totalCost: 25,
                    orderComplete: false
                },
                {
                    patronId: 4,
                    mealOrdered: "Chicken Fingers",
                    drinkOrdered: "Shirley Temple",
                    dessertOrdered: "Chocolate Ice Cream",
                    totalCost: 20,
                    orderComplete: true
                }
            ]
        },
        {
            table: 3,
            patrons: [
                {
                    patronId: 1,
                    mealOrdered: "Ribeye Steak",
                    drinkOrdered: "Jack and Coke",
                    dessertOrdered: "Pecan Pie",
                    totalCost: 40,
                    orderComplete: true 
                },
                {
                    patronId: 2,
                    mealOrdered: "Fried Fish",
                    drinkOrdered: "Sprite",
                    dessertOrdered: "Chocolate Chip Cookies",
                    totalCost: 20,
                    orderComplete: true
                },
                {
                    patronId: 3,
                    mealOrdered: "Spaghetti",
                    drinkOrdered: "Water",
                    dessertOrdered: "Tiramisu",
                    totalCost: 25,
                    orderComplete: true
                },
                {
                    patronId: 4,
                    mealOrdered: "Turkey and Dressing",
                    drinkOrdered: "Dr. Pepper",
                    dessertOrdered: "Pumpkin Pie",
                    totalCost: 30,
                    orderComplete: true
                }
            ]
        }

    ]
}
let deannaHeader = `<div class="server-name"><h3>Server Name: ${serverDeanna.name}</h3></div>`

let tableCard = ''

for (const table of serverDeanna.tables) {
    tableCard += `<div id="tablesDeanna"><h4 id="tableNumbers">Table #: ${table.table}</h4>`
    
    for (const patron of table.patrons) {
        tableCard += `<div id="seat"><ul><u>Seat #: ${patron.patronId}</u><br><br>`
        tableCard += `<li>Meal: ${patron.mealOrdered}</li>`
        tableCard += `<li>Drink: ${patron.drinkOrdered}</li>`
        tableCard += `<li>Dessert: ${patron.dessertOrdered}</li>`
        tableCard += `<li>Total Cost: $${patron.totalCost}</li>`
        tableCard += `<li>Suggested Tip (20%): $${patron.totalCost * 0.10 * 2.00}`
        tableCard += `<li>Order Status: ${patron.orderComplete ? "Completed" : "**In Progress**"}</li></ul></div>`
    }

    tableCard += `</div>`
}
    
let display = deannaHeader += tableCard
    
// console.log(display);

document.getElementById('serverDeanna').innerHTML = display