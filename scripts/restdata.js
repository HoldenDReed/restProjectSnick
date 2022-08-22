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
export const getServerData = () => {
    const serverData = servers.map(server => ({...server}))
    return serverData
}


const tables = [

    {
        id: 1,
        serverId:  1
    },
    {
        id: 2,
        serverId:  1 
    },
    {
        id: 3,
        serverId:  1 
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
export const getTableData = () => {
    const tableData = tables.map(table => ({...table}))
    return tableData
}
     

    

// Patron ID Management:
    // Holden: 1-10
    // Deanna: 11 - 25
    // Stephen: 26 - 40
    // Danny: 41 - however many

const patrons = [
    {
        id: 26, 
        // name: "John",
        tableId: 7,
        mealOrdered: "Burger-well done",
        drinkOrdered: "Dr. Pepper",
        dessertOrdered: "Lava Cake",
        totalCost: 25,
        isOrderCompleted: true,
    },
    {
        id: 27,
        // name: "Susie",
        tableId: 8,
        mealOrdered: "sushi",
        drinkOrdered: "Sprite",
        dessertOrdered: "Ice Cream",
        totalCost: 40,
        isOrderCompleted: false,
    },
    {
        id: 28,
        // name:"jackson",
        tableId: 9,
        mealOrdered: "Tacos",
        drinkOrdered: "Water",
        dessertOrdered: "Brownie",
        totalCost: 35,
        isOrderCompleted: true,
    },
    {
        id: 29,
        // name:"Holly",
        tableId: 7,
        mealOrdered: "Chicken wrap",
        drinkOrdered: "Coke",
        dessertOrdered: "Tiramisu",
        totalCost: 20,
        isOrderCompleted: true,
    },
    {
        id: 30,
        // name:"Brad",
        tableId: 8,
        mealOrdered: "Burger",
        drinkOrdered: "Dr. Pepper",
        dessertOrdered: "Lava Cake",
        totalCost: 15.50,
        isOrderCompleted: true,
    },
    {
        id: 31,
        // name: "George",
        tableId: 9,
        mealOrdered: "Sushi",
        drinkOrdered: "Sprite",
        dessertOrdered: "Ice Cream",
        totalCost: 12.75,
        isOorderCompleted: true,
    },
    {
        id: 32,
        // name: "Riley",
        tableId: 7,
        mealOrdered: "Tacos",
        drinkOrdered: "Water",
        dessertOrdered: "Brownie",
        totalCost: 12.75,
        isOrderCompleted: true,
    },
    {
        id: 33,
        // name: "Tina",
        tableId: 8,
        mealOrdered: "Wrap",
        drinkOrdered: "Coke",
        dessertOrdered: "Tiramisu",
        totalCost: 22.50,
        isOrderCompleted: true,
    },
    {
        id: 34,
        // name: "Johanna",
        tableId: 9,
        mealOrdered: "Wrap",
        drinkOrdered: "Coke",
        dessertOrdered: "Gingerbread",
        totalCost: 16,
        isOrderCompleted: true,
    },
    {
        id: 35,
        // name: "Adam",
        tableId: 7,
        mealOrdered: "Wrap",
        drinkOrdered: "Coke",
        dessertOrdered: "Mazurek",
        totalCost: 23,
        isOrderCompleted: true,
    },
    {
        id: 36,
        // name: "Yolanda",
        tableId: 8,
        mealOrdered: "wrap",
        drinkOrdered: "Coke",
        dessertOrdered: "Ontbijtkoek",
        totalCost: 27,
        isOrderCompleted: true,
    },
    {
        id: 37,
        // name: "Jessica",
        tableId: 9,
        mealOrdered: "Chicken Alfredo",
        drinkOrdered: "7Up",
        dessertOrdered: "Sfouf",
        totalCost: 45,
        isOrderCompleted: true,
    },
    {
        patronId: 41,
        tableId: 10,
        mealOrdered: "real deal california roll",
        drinkOrdered: "high life",
        dessertOrdered: "cake",
        totalCost: 30,
        isOrderCompleted: false
    },
    {
        patronId: 42,
        tableId: 10,
        mealOrdered: "Beef Lo Mein",
        drinkOrdered: "Mai Tai",
        dessertOrdered: "Lava Cake",
        totalCost: 43.92,
        isOrderCompleted: false
    },
    {
        patronId: 43,
        tableId: 10,
        mealOrdered: ["Korean Waffle Fries", "Potstickers"],
        drinkOrdered: "Chardonnay",
        dessertOrdered: "Ice Cream",
        totalCost: 24.58,
        isOrderCompleted: false
    },
    {
        patronId: 44,
        tableId: 10,
        mealOrdered: ["The Peruvian", "Crab Rangoon"],
        drinkOrdered: "Sapporo",
        dessertOrdered: "",
        totalCost: 30,
        isOrderCompleted: false
    },
    {
        patronId: 45,
        tableId: 11,
        mealOrdered: ["Californication","blink 182na", "Spicy Tuna"],
        drinkOrdered: "Moscow Mule",
        dessertOrdered: "Strawberry Ice Cream",
        totalCost: 43.55,
        isOrderCompleted: false
    },
    {
        patronId: 46,
        tableId: 11,
        mealOrdered: "Spicy Tuna",
        drinkOrdered: "PBR",
        dessertOrdered: "",
        totalCost: 20,
        isOrderCompleted: false
    },
    {
        patronId: 47,
        tableId: 11,
        mealOrdered: "Tacos",
        drinkOrdered: "Moscow Mule",
        dessertOrdered: "Lava Cake",
        totalCost: 50,
        isOrderCompleted: false
    },
    {
        patronId: 48,
        tableId: 11,
        mealOrdered: "Pizza",
        drinkOrdered: "Bud Light",
        dessertOrdered: "",
        totalCost: 19.89,
        isOrderCompleted: false
    },
    {
        patronId: 49,
        tableId: 11,
        mealOrdered: "The Emmy",
        drinkOrdered: "Gin & Tonic",
        dessertOrdered: "Banana Pudding",
        totalCost: 32,
        isOrderCompleted: false
    },
    {
        patronId: 50,
        tableId: 11,
        mealOrdered: "Hot Chicken",
        drinkOrdered: "Milk",
        dessertOrdered: "",
        totalCost: 50,
        isOrderCompleted: false
    },
    {
        patronId: 51,
        tableId: 12,
        mealOrdered: "Chicken Sandwhich",
        drinkOrdered: "Sweet Tea",
        dessertOrdered: "Bananas Foster",
        totalCost: 30,
        tip: 5,
        isOrderCompleted: true
    },
    {
        patronId: 52,
        tableId: 12,
        mealOrdered: "Fish Tacos",
        drinkOrdered: "Margarita",
        dessertOrdered: "Fruit Sorbet Trio",
        totalCost: 24.67,
        tip: 3,
        isOrderCompleted: true
    },
    {
        patronId: 53,
        tableId: 12,
        mealOrdered: "Kale Ceasar",
        drinkOrdered: "Diet Coke",
        dessertOrdered: "Italian Wedding Cake",
        totalCost: 40,
        tip: 5,
        isOrderCompleted: true
    },
    {
        patronId: 54,
        tableId: 12,
        mealOrdered: "Veggie Platter",
        drinkOrdered: "Strawberry Daquiri",
        dessertOrdered: "Double Chocolate Brownie",
        totalCost: 24,
        tip: 2,
        isOrderCompleted: true
    },
    {
        patronId: 55,
        tableId: 12,
        mealOrdered: "Steak & Potatoes",
        drinkOrdered: "Miller Light",
        dessertOrdered: "Georgia Peach Cobbler",
        totalCost: 41.25,
        tip: 6,
        isOrderCompleted: true
    },
    {
        patronId: 56,
        tableId: 12,
        mealOrdered: "Surf & Turf",
        drinkOrdered: "White Claw",
        dessertOrdered: "Key Lime Pie",
        totalCost: 30,
        tip: 3,
        isOrderCompleted: true
    },
    {
        patronId: 57,
        tableId: 13,
        mealOrdered: "Ahi Tuna Salad",
        drinkOrdered: "Water w/ lemon",
        dessertOrdered: "Cake Pops",
        totalCost: 25,
        isOrderCompleted: false
    },
    {
        patronId: 58,
        tableId: 13,
        mealOrdered: "Chimichanga",
        drinkOrdered: "Rum & Coke",
        dessertOrdered: "",
        totalCost: 15,
        isOrderCompleted: false
    },
    {
        patronId: 59,
        tableId: 14,
        mealOrdered: "California Burrito",
        drinkOrdered: "Miller Light",
        dessertOrdered: "Chocolate Fondue Bar",
        totalCost: 23.98,
        tip: 2,
        isOrderCompleted: true
    },
    {
        patronId: 60,
        tableId: 14,
        mealOrdered: "Trash Can Nachos",
        drinkOrdered: "Coke",
        dessertOrdered: "Blueberry Loaf",
        totalCost: 13,
        tip: 3,
        isOrderCompleted: true
    }
]

export const getPatronData = () => {
    const patronData = patrons.map(patron => ({...patron}))
    return patronData
}
