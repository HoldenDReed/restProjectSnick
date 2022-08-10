const servers = [
    {
        id: 2,
        name: "Stephen"
    }
]

const stephenTables = [
    {
        id: 1,
        serverId: 2,
    },
    {
        id: 2,
        serverId: 2,
    },
    {
        id: 3,
        serverId: 2,
    }
]

const patrons = [
    {
        id: 1,
        name: "John",
        tableId: 1,
        mealOrdered: "Burger-well done",
        drinkOrdered: "Dr. Pepper",
        dessertOrdered: "Lava Cake",
        totalCost: 25,
        isOrderCompleted: true,
    },
    {
        id: 2,
        name: "Susie",
        tableId: 1,
        mealOrdered: "sushi",
        drinkOrdered: "Sprite",
        dessertOrdered: "Ice Cream",
        totalCost: 40,
        isOrderCompleted: false,
    },
    {
        id: 3,
        name:"jackson",
        tableId: 1,
        mealOrdered: "Tacos",
        drinkOrdered: "Water",
        dessertOrdered: "Brownie",
        totalCost: 35,
        isOrderCompleted: true,
    },
    {
        id: 4,
        name:"Holly",
        tableId: 1,
        mealOrdered: "Chicken wrap",
        drinkOrdered: "Coke",
        dessertOrdered: "Tiramisu",
        totalCost: 20,
        isOrderCompleted: true,
    },
    {
        id: 5,
        name:"Brad",
        tableId: 2,
        mealOrdered: "Burger",
        drinkOrdered: "Dr. Pepper",
        dessertOrdered: "Lava Cake",
        totalCost: 15.50,
        isOrderCompleted: true,
    },
    {
        id: 6,
        name: "George",
        tableId: 2,
        mealOrdered: "Sushi",
        drinkOrdered: "Sprite",
        dessertOrdered: "Ice Cream",
        totalCost: 12.75,
        isOorderCompleted: true,
    },
    {
        id: 7,
        name: "Riley",
        tableId: 2,
        mealOrdered: "Tacos",
        drinkOrdered: "Water",
        dessertOrdered: "Brownie",
        totalCost: 12.75,
        isOrderCompleted: true,
    },
    {
        id: 8,
        name: "Tina",
        tableId: 2,
        mealOrdered: "Wrap",
        drinkOrdered: "Coke",
        dessertOrdered: "Tiramisu",
        totalCost: 22.50,
        isOrderCompleted: true,
    },
    {
        id: 9,
        name: "Johanna",
        tableId: 3,
        mealOrdered: "Wrap",
        drinkOrdered: "Coke",
        dessertOrdered: "Gingerbread",
        totalCost: 16,
        isOrderCompleted: true,
    },
    {
        id: 10,
        name: "Adam",
        tableId: 3,
        mealOrdered: "Wrap",
        drinkOrdered: "Coke",
        dessertOrdered: "Mazurek",
        totalCost: 23,
        isOrderCompleted: true,
    },
    {
        id: 11,
        name: "Yolanda",
        tableId: 3,
        mealOrdered: "wrap",
        drinkOrdered: "Coke",
        dessertOrdered: "Ontbijtkoek",
        totalCost: 27,
        isOrderCompleted: true,
    },
    {
        id: 12,
        name: "Jessica",
        tableId: 3,
        mealOrdered: "Chicken Alfredo",
        drinkOrdered: "7Up",
        dessertOrdered: "Sfouf",
        totalCost: 45,
        isOrderCompleted: true,
    },


]


let serverContent = "";

serverContent += `<h3>Server: ${servers[0].name}</h3>`;

stephenTables.forEach((table) => {
  const patronsAtTable = patrons.filter(
    (patron) => patron.tableId === table.id
  );
  serverContent += `
    <div class= "stephenTable">
      <strong>Table: ${table.id}</strong>
      </div>
      `;
      patronsAtTable.forEach((patron) => {
          serverContent += `
          <div class= "patronsCss">
          <div class="patron-header">patron: ${patron.id}</div>
          <ul class="patron-details">
          <li>Meal: ${patron.mealOrdered}</li>
          <li>Drink: ${patron.drinkOrdered}</li>
          <li>Dessert: ${patron.dessertOrdered}</li>
          <li> Current cost: $${patron.totalCost}</li>
          <li>Order completed: ${patron.isOrderCompleted ? "yes" : "no"}</li>
     
          </ul>
          </div>
          
          `;
        });
    });     
    
document.getElementById("serverStephen").innerHTML = serverContent;
;
console.log(serverContent)