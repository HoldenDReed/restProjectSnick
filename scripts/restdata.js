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
        id: 26,
        serverId: 3     
    },
    {
        id: 27,
        serverId: 3     
    },
    {
        id: 28,
        serverId: 3     
    },
    {
        id: 29,
        serverId: 3     
    },
    {
        id: 30,
        serverId: 3 
    },
    {
        id: 31,
        serverId: 3 
    },
    {
        id: 32,
        serverId: 3 
    },
    {
        id: 33,
        serverId: 3 
    },
    {
        id: 33,
        serverId: 3 
    },
    {
        id: 35,
        serverId: 3 
    },
    {
        id: 36,
        serverId: 3 
    }, 
    {
        id: 37,
        serverId: 3 
    },
    {
        id: 40,
        serverId: 4 
    },
    {
        id: 41,
        serverId: 4 
    },  
    {
        id: 42,
        serverId: 4 
    },  
    {
        id: 43,
        serverId: 4 
    },  
    {
        id: 44,
        serverId: 4 
    },  
    {
        id: 45,
        serverId: 4 
    },  
    {
        id: 46,
        serverId: 4 
    },  
    {
        id: 47,
        serverId: 4 
    },  
    {
        id: 48,
        serverId: 4 
    },  
    {
        id: 49,
        serverId: 4 
    },  
    {
        id: 50,
        serverId: 4 
    },  
    {
        id: 51,
        serverId: 4 
    },  
    {
        id: 52,
        serverId: 4 
    },  
    {
        id: 53,
        serverId: 4 
    },  
    {
        id: 54,
        serverId: 4 
    },  
    {
        id: 55,
        serverId: 4 
    },  
    {
        id: 56,
        serverId: 4 
    },  
    {
        id: 57,
        serverId: 4 
    },  
    {
        id: 58,
        serverId: 4 
    },  
    {
        id: 59,
        serverId: 4 
    }
]

    //patron ID Management:
    //Holden: 1-10
    // Deanna: 11 - 25
    // Stephen: 26 - 40
    // Danny: 41 - however many

const patrons = [
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