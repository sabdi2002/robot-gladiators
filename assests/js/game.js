var playerInfo = {
  name: window.prompt("What is your robot's name?"),
  health: 100,
  attack: 10,
  money: 10
};

var enemyInfo = [
  {
    name: "Roborto",
    attack: 12
  },
  {
    name: "Amy Android",
    attack: 13
  },
  {
    name: "Robo Trumble",
    attack: 14
  }
];



var fight = function(enemyName) {
  window.alert("Welcome to Robot Gladiators!");
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
// if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = Math.max(0, enemyHealth-playerAttack)
    console.log(
      playerInfo.name + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
  
    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
  
    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = Math.max(0,playerHealth - enemyAttack);
    console.log(
      enemyName + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerHealth + " health remaining."
    );
  
    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerInfo.name + " has died!");
      break;
    } else {
      window.alert(playerInfo.name + " still has " + playerHealth + " health left.");
    }
    // if player choses to skip
  } else if (promptFight === "skip" || promptFight === "SKIP") {
    window.alert(playerInfo.name + " has chosen to skip the fight!");
      // confirm player wants to skip
  var confirmSkip = window.confirm("Are you sure you'd like to quit?");

  // if yes (true), leave fight
  if (confirmSkip) {
    window.alert(playerInfo.name+ " has decided to skip this fight. Goodbye!");
    // subtract money from playerMoney for skipping
    playerMoney = Math.max(0,playerMoney - 10);
    console.log("playerMoney", playerMoney);
  }
  // if no (false), ask question again by running fight() again
  else {
    fight();
  }

  } else {
    window.alert("You need to choose a valid option. Try again!");
  }
}
 

};
if (playerHealth > 0) {
  window.alert("Welcome to Robot Gladiators! Round" + (i+1));
}

for (var i = 0; i < enemyNames.length; i++) {
  var pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
  fight(pickedEnemyName);
}
// function to start a new game
var startGame = function() {
  for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

      playerHealth = 100;
      playerAttack = 10;
      playerMoney = 10;


      var pickedEnemyName = enemyNames[i];

      enemyHealth = Math.max(0,enemyHealth-damage)

      fight(pickedEnemyName);
      // if we're not at the last enemy in the array
    if (playerHealth > 0 && i < enemyNames.length - 1) {
      var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
      if (storeConfirm){
    shop();
      }
}
    }
    else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }
};

// function to end the entire game
var endGame = function() {
  // if player is still alive, player wins!
  if (playerHealth > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
  } 
  else {
    window.alert("You've lost your robot in battle.");
  }
  // ask player if they'd like to play again
  var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
    // restart the game
    startGame();
  } 
  else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }

};

var shop = function() {
  // ask player what they'd like to do
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    // use switch to carry out action
switch (shopOptionPrompt); {
  case "refill":
    window.alert("Refilling player's health by 20 for 7 dollars.");

    // increase health and decrease money
    playerHealth = playerHealth + 20;
    playerMoney = playerMoney - 7;
    break;
  case "upgrade";
    window.alert("Upgrading player's attack by 6 for 7 dollars.");

    // increase attack and decrease money
    playerAttack = playerAttack + 6;
    playerMoney = playerMoney - 7;
    break;
  case "leave":
    window.alert("Leaving the store.");

    // do nothing, so function will end
    break;
  default:
    window.alert("You did not pick a valid option. Try again.");

    // call shop() again to force player to pick a valid option
    shop();
    break;
}// use switch to carry out action
switch (shopOptionPrompt) {
  case "refill":
    window.alert("Refilling player's health by 20 for 7 dollars.");

    // increase health and decrease money
    playerHealth = playerHealth + 20;
    playerMoney = playerMoney - 7;
    break;
  case "upgrade":
    window.alert("Upgrading player's attack by 6 for 7 dollars.");

    // increase attack and decrease money
    playerAttack = playerAttack + 6;
    playerMoney = playerMoney - 7;
    break;
  case "leave":
    window.alert("Leaving the store.");

    // do nothing, so function will end
    break;
  default:
    window.alert("You did not pick a valid option. Try again.");

    // call shop() again to force player to pick a valid option
    shop();
    break;
}
  );
};

// function to generate a random numeric value
var randomNumber = function(min,max) {
  var value = Math.floor(Math.random() * (max-min+1)+min);

  return value;
};