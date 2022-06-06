var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
// console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
// for(var i = 0; i < enemyNames.length; i++) {
//     console.log(enemyNames[i] + " has " + enemyHealth + " health points and " + enemyAttack + " attack points.");
//  }

var fight = function(enemyName) {
    while(playerHealth > 0 && enemyHealth > 0) {
        // Ask player if they want to run or fight
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        // if player picks 'skip' confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to skip this fight?");

            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");

                // subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }

        // calculate enemy's new health after attack
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        )

        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died.");
            
            // award player money for winning
            playerMoney = playerMoney + 20;
            // leave while() loop since enemy is dead
            break;
        } 
        
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // calculate the player's new health after attack
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health reminaing."
        )

        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            // leave while() loop if player is dead
            break;
        }

        else {
            window.alert(playerName + " still has " + playerHealth + " health remaining.")
        }
    } // end of while loop
}; // end of fight function

// fight each enemy-robot by looping over them and fighting them one at a time
for(var i = 0; i < enemyNames.length; i++) {
    // if player is still alive, keep fighting
    if (playerHealth > 0) {
        // let player know what round they are in
        window.alert("Welcome to Robot Gladiators! Round " + (i+1));
        // pick new enemy to fight based on the index of the enemyNames array
        var pickedEnemyName = enemyNames[i];
        // reset enemyHealth before starting new fight
        enemyHealth = 50;
        // use debugger to pause script from running and check what's going on at that moment in the code
        //debugger;
        // pass the pickedEnemyName variable's value into the fight funtion,where it will assume the value of the enemyName parameter
        fight(pickedEnemyName );
    }

    //if player isn't alive, stop the game
    else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
}