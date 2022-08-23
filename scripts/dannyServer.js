import {getServerData} from './restdata.js'
import {getTableData} from './restdata.js'
import {getPatronData} from './restdata.js'

const servers = getServerData()
const tables = getTableData()
const patrons = getPatronData()

const dannyServer = servers.filter((danny) => danny.id === 4)

let header = `<div class="server-name"><h3 class="header">Server Name: ${dannyServer[0].name}</h3></div>`

let inProgressOrders = '<div class="section-title"><u>In Progress Tables</u>:</div>'

let completedOrders = '<div class="section-title"><u>Completed Tables</u>:</div>'

let dannyTables = tables.filter(table => table.serverId === 4)

for (const table of dannyTables) {

    table.patrons = []

    const dannyPatrons = patrons.filter((patron) => patron.tableId === table.id)

    for (const patron of dannyPatrons) {
        table.patrons.push(patron)
    }

    table.isOrderCompleted2 = table.patrons[0].isOrderCompleted

}

for (const table of dannyTables) {
    if (table.isOrderCompleted2 === false) {
{
    let orderStatus = 'In Progress'
    inProgressOrders += `<div class="table"><div class="inProgressTable">Table #${table.id} <div class="inProgressStatus">[${orderStatus}]</div></div><div class="seat-container">`

    for (const patron of table.patrons) {

        inProgressOrders += `<div class="seat"><ul><u>Patron #${patron.patronId}</u><br><br>`

        inProgressOrders += `<li><b>Meal</b>: ${patron.mealOrdered}</li>`

        inProgressOrders += `<li><b>Drinks</b>: ${patron.drinkOrdered}</li>`

        inProgressOrders += `<li><b>Dessert</b>: ${patron.dessertOrdered}</li>`

        inProgressOrders += `<li><b>Cost</b>: $${patron.totalCost}</li></ul></div>`

    }

    inProgressOrders += '</div></div>'

}}}

inProgressOrders += '</br>'

for (const table of dannyTables) {
    if (table.isOrderCompleted2 === true){
{ 
    let orderStatus = 'Complete'
    completedOrders += `<div class="table"><div class="completedTable">Table #${table.id} <div class="completedStatus">[${orderStatus}]</div></div><div class="seat-container">`

   for (const patron of table.patrons) {

       completedOrders += `<div class="seat"><ul><u>Patron #${patron.patronId}</u><br><br>`

       completedOrders += `<li><b>Meal</b>: ${patron.mealOrdered}</li>`

       completedOrders += `<li><b>Drinks</b>: ${patron.drinkOrdered}</li>`

       completedOrders += `<li><b>Dessert</b>: ${patron.dessertOrdered}</li>`

       completedOrders += `<li><b>Cost</b>: $${patron.totalCost}</li>`

       completedOrders += `<li><b>Tip</b>: $${patron.tip}</li></ul></div>`

   }

   completedOrders += '</div></div>'

}}}

let page = header += inProgressOrders += completedOrders

document.getElementById('serverDanny').innerHTML = page