const servers = [
    {
      id: 2,
      name: "Stephen"
    }
  ];
  
  const tables = [
    {
      id: 1,
      serverId: 2
    },
    {
      id: 2,
      serverId: 2
    },
    {
      id: 3,
      serverId: 2
    }
  ];
  
  const patrons = [
    {
      id: 1,
      tableId: 1,
      mealOrdered: "hamburger",
      drinkOrdered: "Dr. Pepper",
      dessertOrdered: "Lava Cake",
      totalCost: 400,
      orderCompleted: true
    },
    {
      id: 2,
      tableId: 1,
      mealOrdered: "sushi",
      drinkOrdered: "Sprite",
      dessertOrdered: "Ice Cream",
      totalCost: 400,
      orderCompleted: false
    },
    {
      id: 3,
      tableId: 1,
      mealOrdered: "tacos",
      drinkOrdered: "water",
      dessertOrdered: "brownie",
      totalCost: 400
    },
    {
      id: 4,
      tableId: 1,
      mealOrdered: "wrap",
      drinkOrdered: "Coke",
      dessertOrdered: "tiramisu",
      totalCost: 400
    },
    {
      id: 5,
      tableId: 2,
      mealOrdered: "hamburger",
      drinkOrdered: "Dr. Pepper",
      dessertOrdered: "Lava Cake",
      totalCost: 400
    },
    {
      id: 6,
      tableId: 2,
      mealOrdered: "meatloaf",
      drinkOrdered: "Sprite",
      dessertOrdered: "Ice Cream",
      totalCost: 400
    },
    {
      id: 7,
      tableId: 2,
      mealOrdered: "burrito",
      drinkOrdered: "water",
      dessertOrdered: "brownie",
      totalCost: 400
    },
    {
      id: 8,
      tableId: 2,
      mealOrdered: "wrap",
      drinkOrdered: "Coke",
      dessertOrdered: "tiramisu",
      totalCost: 400
    }
  ];
  
  let serverContent = "";
  
  serverContent += `<h3>Server: ${servers[0].name}</h3>`;
  
  tables.forEach((table) => {
    const patronsAtTable = patrons.filter(
      (patron) => patron.tableId === table.id
    );
    serverContent += `
      <div class="table">
        <strong>Table: ${table.id}</strong>
      </div>
    `;
  
    patronsAtTable.forEach((patron) => {
      serverContent += `
      <div class= "patronCss">
        <div class="patron-header">patron: ${patron.id}</div>
        <ul class="patron-details">
          <li>meal: ${patron.mealOrdered}</li>
          <li>drink: ${patron.drinkOrdered}</li>
          <li>dessert: ${patron.dessertOrdered}</li>
          <li>cost: ${patron.totalCost}</li>
          <li>order completed: ${patron.orderCompleted ? "yes" : "no"}</li>
        </ul>
        </div>
      `;
    });
  });
  
  document.getElementById("serverStephen").innerHTML = serverContent;
  