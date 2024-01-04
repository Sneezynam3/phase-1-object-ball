function gameObject () {
    return {home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", " White"],
        players: {
            "Alan Anderson": {
                "number":0,
                "shoe":16,
                "points":22,
                "rebounds":12,
                "assists":12,
                "steals":3,
                "blocks":1,
                "slamDunks":1
            },

            "Reggie Evans":{
                "number":30,
                "shoe":14,
                "points":12,
                "rebounds":12,
                "assists":12,
                "steals":12,
                "blocks":12,
                "slamDunks":7
            },

            "Brook Lopez":{
                "number":11,
                "shoe":17,
                "points":17,
                "rebounds":19,
                "assists":10,
                "steals":3,
                "blocks":1,
                "slamDunks":12
            },

            "Mason Plumlee":{
                "number":1,
                "shoe":19,
                "points":26,
                "rebounds":12,
                "assists":6,
                "steals":3,
                "blocks":8,
                "slamDunks":5
            },

            "Jason Terry":{
                "number":31,
                "shoe":15,
                "points":19,
                "rebounds":2,
                "assists":2,
                "steals":4,
                "blocks":11,
                "slamDunks":1
            }
        }
    },

    away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", " Purple"],
        players: {
            "Jeff Adrien": {
                "number":4,
                "shoe":18,
                "points":10,
                "rebounds":1,
                "assists":1,
                "steals":2,
                "blocks":7,
                "slamDunks":2
            },

            "Bismak Biyombo":{
                "number":0,
                "shoe":16,
                "points":12,
                "rebounds":4,
                "assists":7,
                "steals":7,
                "blocks":15,
                "slamDunks":10
            },

            "DeSagna Diop":{
                "number":2,
                "shoe":14,
                "points":24,
                "rebounds":12,
                "assists":12,
                "steals":4,
                "blocks":5,
                "slamDunks":5
            },

            "Ben Gordon":{
                "number":8,
                "shoe":15,
                "points":33,
                "rebounds":3,
                "assists":2,
                "steals":1,
                "blocks":1,
                "slamDunks":0
            },

            "Brendan Haywood":{
                "number":33,
                "shoe":15,
                "points":6,
                "rebounds":12,
                "assists":12,
                "steals":22,
                "blocks":5,
                "slamDunks":12
            }
        }
    }
  }
};

console.log(gameObject());



//Build a function, numPointsScored that takes in an argument of a player's name and returns the number of points scored for that player.
function numPointsScored(playerName) {
  return gameObject().home.players[playerName]["points"];
}

// console.log("Number of points scored: " + numPointsScored("Alan Anderson"));
  
//Build a function, shoeSize, that takes in an argument of a player's name and returns the shoe size for that player.
function shoeSize(playerName) {
    return gameObject().home.players[playerName]["shoe"]
  }
  console.log("Shoe Size: " + shoeSize("Alan Anderson"));

//Build a function, teamColors, that takes in an argument of the team name and returns an array of that teams colors.
function teamColors(team) {
    if (team === "home") {
      return gameObject().home.colors;
    } else if (team === "away") {
      return gameObject().away.colors;
    } else {
      return [];
    }
  }

console.log("Home colors: " + teamColors("home")); 
console.log("Away colors: " + teamColors("away"));

//Build a function, teamNames, that operates on the game object to return an array of the team names.
function teamsArray() {
  let object = gameObject();
  let teams = [];

  teams.push(object["home"]["teamName"]);
  teams.push(object["away"]["teamName"]);

  return teams;
}

console.log(teamsArray());


// // Build a function, playerNumbers, that takes in an argument of a team name and returns an array of the jersey numbers for that team.
  function playerNumbers(teamName) {
    let teamObject;
  
    if (teamName === "home") {
      teamObject = gameObject().home;
    } else if (teamName === "away") {
      teamObject = gameObject().away;
    } else {
      return [];
    }
  
    let players = Object.keys(teamObject.players);
    let jerseyNumbers = [];
  
    for (let i = 0; i < players.length; i++) {
      let player = players[i];
      jerseyNumbers.push(teamObject.players[player].number);
    }
  
    return jerseyNumbers;
  }
  
  console.log("Home jersey numbers: " + playerNumbers("home"));
  console.log("Away jersey numbers: " + playerNumbers("away"));
  

  // Build a function, playerStats, that takes in an argument of a player's name and returns an object of that player's stats. 
  const playerStats = (playerName) => {
    // Call the gameObject function to get the game data
    const gameData = gameObject();
    // Check if the player is in the home team
    if (gameData.home.players.hasOwnProperty(playerName)) {
      const playerStats = gameData.home.players[playerName];
      return playerStats;
    }
    // Check if the player is in the away team
    if (gameData.away.players.hasOwnProperty(playerName)) {
      const playerStats = gameData.away.players[playerName];
      return playerStats;
    }
    // Player not found
    return null;
  };
  const stats = playerStats("Alan Anderson");
  console.log(stats);


// Build a function, bigShoeRebounds, that will return the number of rebounds associated with the player that has the largest shoe size.
// function getPlayerWithMostRebounds(gameObj) {
//   let playerWithMostRebounds = null;
//   let maxRebounds = 0;

//   // Iterate through home players
//   Object.values(gameObj.home.players).forEach(player => {
//     if (player.rebounds > maxRebounds) {
//       maxRebounds = player.rebounds;
//       playerWithMostRebounds = player;
//     }
//   });

//   // Iterate through away players
//   Object.values(gameObj.away.players).forEach(player => {
//     if (player.rebounds > maxRebounds) {
//       maxRebounds = player.rebounds;
//       playerWithMostRebounds = player;
//     }
//   });

//   return playerWithMostRebounds;
// }

// // Example usage
// const game = gameObject(); // Assume gameObject function returns the game object
// const player = getPlayerWithMostRebounds(game);
// console.log(player);

function getPlayerWithMostRebounds(gameObj) {
  let playerWithMostRebounds = null;
  let maxRebounds = 0;

  // Iterate through home players
  Object.values(gameObj.home.players).forEach(player => {
    if (player.rebounds > maxRebounds) {
      maxRebounds = player.rebounds;
      playerWithMostRebounds = player;
    }
  });

  // Iterate through away players
  Object.values(gameObj.away.players).forEach(player => {
    if (player.rebounds > maxRebounds) {
      maxRebounds = player.rebounds;
      playerWithMostRebounds = player;
    }
  });

  // Return an object with player's name and shoe size
  return {
    player: playerWithMostRebounds,
    shoe: playerWithMostRebounds.shoe
  };
}

// Example usage
const game = gameObject(); // Assume gameObject function returns the game object
const { player, shoe } = getPlayerWithMostRebounds(game);
console.log(player); // Output: The player object with the most rebounds
console.log("Shoe size of the player with the most rebounds: " + shoe); // Output: The shoe size of the player with the most rebounds