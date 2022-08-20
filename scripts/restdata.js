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

// Patron ID Management:
    // Holden: 1-10 Table 1,2,3
    // Deanna: 11 - 25 Table 4,5,6
    // Stephen: 26 - 40 Tables 7,8,9
    // Danny: 41 - however many Tables 10,11,12,13,14

const patrons = [
    {
        patronId: 1,
        tableId: 1,
        mealOrdered: "Bacon Burger",
        drinkOrdered: "Jack & Coke",
        dessertOrdered: "Lava Cake",
        totalCost: 56,
        isOrderCompleted: true
    },
    {
        patronId: 2,
        tableId: 1,
        mealOrdered: "Quesadilla",
        drinkOrdered: "Lime Margarita",
        dessertOrdered: "Mega Cookie",
        totalCost: 40,
        isOrderCompleted: true
    },
    {
        patronId: 3,
        tableId: 1,
        mealOrdered: "Fajita",
        drinkOrdered: "Black Berry Margarita",
        dessertOrdered: "Mega Cookie",
        totalCost: 34,
        isOrderCompleted: true
    },
    {
        patronId: 4,
        tableId: 2,
        mealOrdered: "Tacos",
        drinkOrdered: "Maleficent",
        dessertOrdered: "Ice Cream",
        totalCost: 28,
        isOrderCompleted: true
    },
    {
        patronId: 5,
        tableId: 2,
        mealOrdered: "Fish Sandwich",
        drinkOrdered: "Boba Tea",
        dessertOrdered: "None",
        totalCost: 22,
        isOrderCompleted: true
    },
    {
        patronId: 6,
        tableId: 3,
        mealOrdered: "Steak",
        drinkOrdered: "Bud light",
        dessertOrdered: "Ice cream",
        totalCost: 35,
        isOrderCompleted: true
    },
    {
        patronId: 7,
        tableId: 3,
        mealOrdered: "Tacos",
        drinkOrdered: "Moscow Mule",
        dessertOrdered: "Lava Cake",
        totalCost: 30,
        isOrderCompleted: true
    },
    {
        id: 26,
        // name: "John",
        tableId: 1,
        mealOrdered: "Burger-well done",
        drinkOrdered: "Dr. Pepper",
        dessertOrdered: "Lava Cake",
        totalCost: 25,
        isOrderCompleted: true,
    },
    {
        id: 27,
        // name: "Susie",
        tableId: 1,
        mealOrdered: "sushi",
        drinkOrdered: "Sprite",
        dessertOrdered: "Ice Cream",
        totalCost: 40,
        isOrderCompleted: false,
    },
    {
        id: 28,
        // name:"jackson",
        tableId: 1,
        mealOrdered: "Tacos",
        drinkOrdered: "Water",
        dessertOrdered: "Brownie",
        totalCost: 35,
        isOrderCompleted: true,
    },
    {
        id: 29,
        // name:"Holly",
        tableId: 1,
        mealOrdered: "Chicken wrap",
        drinkOrdered: "Coke",
        dessertOrdered: "Tiramisu",
        totalCost: 20,
        isOrderCompleted: true,
    },
    {
        id: 30,
        // name:"Brad",
        tableId: 2,
        mealOrdered: "Burger",
        drinkOrdered: "Dr. Pepper",
        dessertOrdered: "Lava Cake",
        totalCost: 15.50,
        isOrderCompleted: true,
    },
    {
        id: 31,
        // name: "George",
        tableId: 2,
        mealOrdered: "Sushi",
        drinkOrdered: "Sprite",
        dessertOrdered: "Ice Cream",
        totalCost: 12.75,
        isOorderCompleted: true,
    },
    {
        id: 32,
        // name: "Riley",
        tableId: 2,
        mealOrdered: "Tacos",
        drinkOrdered: "Water",
        dessertOrdered: "Brownie",
        totalCost: 12.75,
        isOrderCompleted: true,
    },
    {
        id: 33,
        // name: "Tina",
        tableId: 2,
        mealOrdered: "Wrap",
        drinkOrdered: "Coke",
        dessertOrdered: "Tiramisu",
        totalCost: 22.50,
        isOrderCompleted: true,
    },
    {
        id: 34,
        // name: "Johanna",
        tableId: 3,
        mealOrdered: "Wrap",
        drinkOrdered: "Coke",
        dessertOrdered: "Gingerbread",
        totalCost: 16,
        isOrderCompleted: true,
    },
    {
        id: 35,
        // name: "Adam",
        tableId: 3,
        mealOrdered: "Wrap",
        drinkOrdered: "Coke",
        dessertOrdered: "Mazurek",
        totalCost: 23,
        isOrderCompleted: true,
    },
    {
        id: 36,
        // name: "Yolanda",
        tableId: 3,
        mealOrdered: "wrap",
        drinkOrdered: "Coke",
        dessertOrdered: "Ontbijtkoek",
        totalCost: 27,
        isOrderCompleted: true,
    },
    {
        id: 37,
        // name: "Jessica",
        tableId: 3,
        mealOrdered: "Chicken Alfredo",
        drinkOrdered: "7Up",
        dessertOrdered: "Sfouf",
        totalCost: 45,
        isOrderCompleted: true,
    },
]

export const getServerData = () => {
    const serverData = servers.map(server => ({...server}))
    return getServerData()
}
export const getTableData = () => {
    const tableData = tables.map(table => ({...table}))
    return getTableData
}
export const getPatronData = () => {
    const patronData = patrons.map(patron => ({...patron}))
return getPatronData
}