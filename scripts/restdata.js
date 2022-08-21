const servers = [

    {
        id: 1,
        name: "Holden"
    },
    {
        id: 2,
        name: "Deanna"
    },
    {
        id: 3, 
        name: "Stephen"
    },
    {
        id: 4,
        name: "Danny"
    }

]

const tables = [

    {
        id: 1,
        serverId: 1 
    },
    {
        id: 2,
        serverId: 1 
    },
    {
        id: 3,
        serverId: 1 
    },
    {
        id: 4,
        serverId: 2 
    },
    {
        id: 5,
        serverId: 2
    },
    {
        id: 6,
        serverId: 2
    },
    {
        id: 7,
        serverId: 3
    },
    {
        id: 8,
        serverId: 3
    },
    {
        id: 9,
        serverId: 3
    },
    {
        id: 10,
        serverId: 4
    },
    {
        id: 11,
        serverId: 4
    },
    {
        id: 12,
        serverId: 4
    },
    {
        id: 13,
        serverId: 4
    },
    {
        id: 14,
        serverId: 4
    }

]

// Patron ID Management:
    // Holden: 1-10
    // Deanna: 11 - 25
    // Stephen: 26 - 40
    // Danny: 41 - however many

const patrons = [

    {
        patronId: 11,
        tableId: 4,
        mealOrdered: "Chicken Tacos",
        drinkOrdered: "Moscow Mule",
        dessertOrdered: "Lava Cake",
        totalCost: 15,
        isOrderComplete: true
    },
    {
        patronId: 12,
        tableId: 4,
        mealOrdered: "Cheeseburger",
        drinkOrdered: "Diet Coke",
        dessertOrdered: "Vanilla Ice Cream",
        totalCost: 25,
        orderComplete: true
    },
    {
        patronId: 13,
        tableId: 4,
        mealOrdered: "Meatloaf",
        drinkOrdered: "Milk",
        dessertOrdered: "Strawberry Cheesecake",
        totalCost: 30,
        orderComplete: false
    },
    {
        patronId: 14,
        tableId: 4,
        mealOrdered: "Fish Tacos",
        drinkOrdered: "Margarita",
        dessertOrdered: "Chocolate Pudding",
        totalCost: 20,
        orderComplete: true
    },
    {
        patronId: 15,
        tableId: 5,
        mealOrdered: "Grilled Cheese",
        drinkOrdered: "Sweet Tea",
        dessertOrdered: "Strawberry Shortcake",
        totalCost: 10,
        orderComplete: false
    },
    {
        patronId: 12,
        tableId: 5,
        mealOrdered: "Veggie Burger",
        drinkOrdered: "Unsweet Tea",
        dessertOrdered: "Fruit Plate",
        totalCost: 35,
        orderComplete: false
    },
    {
        patronId: 17,
        tableId: 5,
        mealOrdered: "Chicken Nachos",
        drinkOrdered: "Coke",
        dessertOrdered: "Cinnamon Donuts",
        totalCost: 25,
        orderComplete: false
    },
    {
        patronId: 18,
        tableId: 5,
        mealOrdered: "Chicken Fingers",
        drinkOrdered: "Shirley Temple",
        dessertOrdered: "Chocolate Ice Cream",
        totalCost: 20,
        orderComplete: true
    },
    {
        patronId: 19,
        tableId: 6,
        mealOrdered: "Ribeye Steak",
        drinkOrdered: "Jack and Coke",
        dessertOrdered: "Pecan Pie",
        totalCost: 40,
        orderComplete: true 
    },
    {
        patronId: 20,
        tableId: 6,
        mealOrdered: "Fried Fish",
        drinkOrdered: "Sprite",
        dessertOrdered: "Chocolate Chip Cookies",
        totalCost: 20,
        orderComplete: true
    },
    {
        patronId: 21,
        tableId: 6,
        mealOrdered: "Spaghetti",
        drinkOrdered: "Water",
        dessertOrdered: "Tiramisu",
        totalCost: 25,
        orderComplete: true
    },
    {
        patronId: 22,
        tableId: 6,
        mealOrdered: "Turkey and Dressing",
        drinkOrdered: "Dr. Pepper",
        dessertOrdered: "Pumpkin Pie",
        totalCost: 30,
        orderComplete: true
    }
]

export const getServerData = () => {
    const serverData = servers.map(server => ({...server}))
    const tableData = tables.map(table => ({...table}))
    const patronData = patrons.map(patron => ({...patron}))
    return (serverData, tableData, patronData)
}