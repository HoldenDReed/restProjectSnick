import {getTableData} from './restdata.js'
import {getPatronData} from './restdata.js'
import {getServerData} from './restdata.js'

const tables = getTableData()
const patrons = getPatronData()
const servers = getServerData()

const server = servers.filter((deanna) => deanna.id === 2);

let deannaHeader = `<div class="server-name"><h3>Server Name: ${server[0].name}</h3></div>`

let serverContent = '';

const displayTables = tables.filter((deannaTable) => deannaTable.serverId === 2);

displayTables.forEach((table) => {
    const patronsAtTable = patrons.filter (
        (patron) => patron.tableId === table.id
    );

    serverContent += `<div id="tablesDeanna"><h4 id="tableNumbers">Table #: ${table.id}</h4>`
    
    patronsAtTable.forEach((patron) => {
        serverContent += `<div id="seat"><ul><u>Seat #: ${patron.patronId}</u><br><br>`
        serverContent += `<li>Meal: ${patron.mealOrdered}</li>`
        serverContent += `<li>Drink: ${patron.drinkOrdered}</li>`
        serverContent += `<li>Dessert: ${patron.dessertOrdered}</li>`
        serverContent += `<li>Total Cost: $${patron.totalCost}</li>`
        serverContent += `<li>Suggested Tip (20%): $${patron.totalCost * 0.10 * 2.00}`
        serverContent += `<li>Order Status: ${patron.isOrderCompleted ? "Completed" : "**In Progress**"}</li></ul></div>`
    
    });

    serverContent += `</div>`
});
    
let display = deannaHeader += serverContent

document.getElementById('serverDeanna').innerHTML = display