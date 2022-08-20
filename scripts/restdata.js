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
    }
]
export const getTableData = () => {
    const tableData = tables.map(table => ({...table}))
    return tableData
}
     

    

    //patron ID Management:
    //Holden: 1-10
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
]

export const getPatronData = () => {
    const patronData = patrons.map(patron => ({...patron}))
    return patronData
}