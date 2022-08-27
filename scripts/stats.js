import {getServerData} from './restdata.js'
import {getTableData} from './restdata.js'
import {getPatronData} from './restdata.js'

const servers = getServerData()
const tables = getTableData()
const patrons = getPatronData()


const findServerTables = (id) => {
    return tables.filter(table => table.serverId === id)
}

const countServerTables = (arr) => {
    return arr.length
}

let tablesCopy = tables.map((x) => x);

for (const table of tablesCopy) {
    let findPatrons = patrons.filter((patron) => patron.tableId === table.id)
    table.patrons = []
    for (const patron of findPatrons) {
        table.patrons.push(patron)
    }
}

const sum = (arr) => arr.reduce((accumulator, value) => {
    return accumulator + value;
}, 0)

console.log(tablesCopy)

for (const table of tablesCopy) {
    table.bill = 0
    table.tips = 0
    for (const patron of table.patrons) {
        table.bill += patron.totalCost
        if (patron.tip > 0) {table.tips += patron.tip}
    }
}

console.log(tablesCopy)


const getServerTotals = (serverId) => {
    let serverTotal = []
    for (const table of tablesCopy) {
        if (table.serverId === serverId) {
            serverTotal.push(table.bill)
        }
    } return sum(serverTotal).toFixed(2)
}

const getServerTipTotals = (serverId) => {
    let serverTipTotal = []
    for (const table of tablesCopy) {
        if (table.serverId === serverId) {
            serverTipTotal.push(table.tips)
        }
    } return sum(serverTipTotal).toFixed(2)
}

const getRestTotals = () => {
    let restTotal = []
    for (const table of tablesCopy) {
        restTotal.push(table.bill)
    } return sum(restTotal).toFixed(2)
}

const getRestTipTotals = () => {
    let restTipTotal = []
    for (const table of tablesCopy) {
        restTipTotal.push(table.tips)
    } return sum(restTipTotal).toFixed(2)
}

let resturauntStats = ''

resturauntStats += `</div><div class="rest"><h3>Resturaunt Totals:<br><br>
                
                    Tables: ${countServerTables(tables)}<br>
                    Total: $${getRestTotals()}<br>
                    Tips: $${getRestTipTotals()}
                </div>`

document.getElementById('resturaunt-stats').innerHTML = resturauntStats

let profiles = ''

for (const server of servers) {
    if (server.id === 1) {
        profiles += 
        `<div class="profile">
         <h3>${server.name}</h3>
         <img src="/styles/holden.jpg">
         </div>
         <div class="profile">
         <b>Table Count:</b> ${countServerTables(findServerTables(server.id))}<br>
         <b>Total:</b> $${getServerTotals(server.id)}<br>
         <b>Tips:</b> $${getServerTipTotals(server.id)}
         </div>&nbsp&nbsp&nbsp&nbsp`
    } else if (server.id === 2) {
        profiles +=
        `<div class="profile">
         <h3>${server.name}</h3>
         <img src="/styles/deanna.jpg">
         </div>
         <div class="profile">
         <b>Table Count:</b> ${countServerTables(findServerTables(server.id))}<br>
         <b>Total:</b> $${getServerTotals(server.id)}<br>
         <b>Tips:</b> $${getServerTipTotals(server.id)}
         </div><br>`
    } else if (server.id === 3) {
        profiles += 
        `<div class="profile">
         <h3>${server.name}</h3>
         <img src="/styles/stephen.jpg">
         </div>
         <div class="profile">
         <b>Table Count:</b> ${countServerTables(findServerTables(server.id))}<br>
         <b>Total:</b> $${getServerTotals(server.id)}<br>
         <b>Tips:</b> $${getServerTipTotals(server.id)}
         </div>&nbsp&nbsp&nbsp&nbsp`
    } else if (server.id === 4) {
        profiles +=
        `<div class="profile">
         <h3>${server.name}</h3>
         <img src="/styles/danny.jpg">
         </div>
         <div class="profile">
         <b>Table Count:</b> ${countServerTables(findServerTables(server.id))}<br>
         <b>Total:</b> $${getServerTotals(server.id)}<br>
         <b>Tips:</b> $${getServerTipTotals(server.id)}
         </div>`
    }
}

document.getElementById('server-profiles').innerHTML = profiles