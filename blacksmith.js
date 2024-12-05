    // Variables
    let fireStatus = false; 
    let gold = 10; 
    let ore = 0; 
    let wood = 0; 
    let swords = 1; 
    let axes = 0; 

    // Functions

    /**
     * Fire function
     * To start a fire:
     *    The fire must be out
     *    There must be at least 1 piece of wood
     * To stop a fire:
     *    The fire must be going
     */
    function fire() {
      if (!fireStatus && wood >= 1) {
        fireStatus = true;
        wood -= 1;
        return "You have started the fire.";
      } else if (fireStatus) {
        fireStatus = false;
        return "You have extinguished the fire.";
      } else {
        return "You don't have enough wood.";
      }
    }

    /**
     * buy
     * @param {string} item 
     */
    function buy(item) {
      if (item === "ore") {
        if (gold >= 3) {
          gold -= 3;
          ore += 1;
          return "You have bought 1 piece of ore.";
        } else {
          return "Not enough gold to buy ore.";
        }
      } else if (item === "wood") {
        if (gold >= 1) {
          gold -= 1;
          wood += 1;
          return "You have bought 1 piece of wood.";
        } else {
          return "Not enough gold to buy wood.";
        }
      } else {
        return "Invalid item.";
      }
    }

    /**
     * make
     * @param {string} item 
     */
    function make(item) {
      if (item === "sword" && ore >= 2 && wood >= 1 && fireStatus) {
        swords += 1;
        ore -= 2;
        wood -= 1;
        return "You have made 1 sword.";
      } else if (item === "axe" && ore >= 1 && wood >= 2 && fireStatus) {
        axes += 1;
        ore -= 1;
        wood -= 2;
        return "You have made 1 axe.";
      } else {
        return "Cannot make the item. Either not enough resources or the fire is not burning.";
      }
    }

    /**
     * sell
     * @param {string} item 
     */
    function sell(item) {
      if (item === "sword" && swords >= 1 && fireStatus) {
        swords -= 1;
        gold += 5;
        return "You have sold 1 sword for 5 pieces of gold.";
      } else if (item === "axe" && axes >= 1 && fireStatus) {
        axes -= 1;
        gold += 4;
        return "You have sold 1 axe for 4 pieces of gold.";
      } else {
        return "Cannot sell the item. Either you don't have it or the fire is not burning.";
      }
    }

    /**
     * inventory 
     * Shows the player's current inventory
     */
    function inventory() {
      return `Inventory:<br>
      Gold: ${gold} pieces<br>
      Ore: ${ore} pieces<br>
      Wood: ${wood} pieces<br>
      Swords: ${swords} pieces<br>
      Axes: ${axes} pieces`;
    }

    /**
     * Help Command
     * Returns the instructions on how to play the game
     */
    function help() {
      return `INSTRUCTIONS:
      <br>    
      As a blacksmith you can make weapons using ore, wood and fire. You will sell them for gold. You will use gold to buy more ore and wood so you can make more weapons.
      <br>
      <br>   
      COMMANDS:<br>
      - buy(item)<br>
      - make(item)<br>
      - sell(item)<br>
      - fire<br>
      - inventory<br>
      - help`;
    }

    // Function to process user input
    function processCommand() {
      let input = document.getElementById("input").value;
      let output = document.getElementById("output");
      let result;
      
      // Clear input field
      document.getElementById("input").value = "";

      // Execute corresponding function based on input
      switch (input.split(" ")[0]) {
        case "fire":
          result = fire();
          break;
        case "buy":
          result = buy(input.split(" ")[1]);
          break;
        case "make":
          result = make(input.split(" ")[1]);
          break;
        case "sell":
          result = sell(input.split(" ")[1]);
          break;
        case "inventory":
          result = inventory();
          break;
        case "help":
          result = help();
          break;
        default:
          result = "Invalid command. Type 'help' for instructions.";
      }

      // Display result
      output.innerHTML = result;
    }

    // Log the help() function
    console.log(help());