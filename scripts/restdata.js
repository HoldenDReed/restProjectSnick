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
        patronId: 1,
        tableId: 1,
        mealOrdered: "",
        drinkOrdered: "",
        dessertOrdered: "",
        totalCost: 25,
        isOrderCompleted: true,
    },

]

export const getServerData = () => {
    const serverData = servers.map(server => ({...server}))
    const tableData = tables.map(table => ({...table}))
    const patronData = patrons.map(patron => ({...patron}))
    return (serverData, tableData, patronData)
}