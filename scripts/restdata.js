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