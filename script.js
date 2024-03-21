// Player 1 hit counter
var player1HitsCount = 0;
var player1HitsDisplay = document.getElementById("player1Hits");
var player1HitBtn = document.getElementById("player1HitBtn");
var player1RemoveBtn = document.getElementById("player1RemoveBtn");

player1HitBtn.addEventListener("click", function() {
    player1HitsCount++;
    player1HitsDisplay.textContent = player1HitsCount;
});

player1RemoveBtn.addEventListener("click", function() {
    if (player1HitsCount > 0) {
        player1HitsCount--;
        player1HitsDisplay.textContent = player1HitsCount;
    }
});

// Player 2 hit counter
var player2HitsCount = 0;
var player2HitsDisplay = document.getElementById("player2Hits");
var player2HitBtn = document.getElementById("player2HitBtn");
var player2RemoveBtn = document.getElementById("player2RemoveBtn");

player2HitBtn.addEventListener("click", function() {
    player2HitsCount++;
    player2HitsDisplay.textContent = player2HitsCount;
});

player2RemoveBtn.addEventListener("click", function() {
    if (player2HitsCount > 0) {
        player2HitsCount--;
        player2HitsDisplay.textContent = player2HitsCount;
    }
});

// Save game data
var saveBtn = document.getElementById("saveBtn");

saveBtn.addEventListener("click", function() {
    var gameData = {
        date: new Date().toLocaleString(),
        player1Hits: player1HitsCount,
        player2Hits: player2HitsCount
    };
    // Retrieve existing games data
    var games = JSON.parse(localStorage.getItem("games")) || [];
    // Add current game data
    games.push(gameData);
    // Save updated games data
    localStorage.setItem("games", JSON.stringify(games));
});

// View game history
// View game history
var historyBtn = document.getElementById("historyBtn");
var historyList = document.getElementById("historyList");

historyBtn.addEventListener("click", function() {
    var games = JSON.parse(localStorage.getItem("games")) || [];
    if (games.length > 0) {
        // Clear previous history
        historyList.innerHTML = "";
        // Display game history in reverse order (latest game at the top)
        for (var i = games.length - 1; i >= 0; i--) {
            var game = games[i];
            var gameDate = new Date(game.date).toLocaleDateString(); // Format date to only show the date part
            var gameEntry = document.createElement("div");
            gameEntry.textContent = "Game " + (i + 1) + ": " + gameDate + " - Ebba: " + game.player1Hits + ", Sigge: " + game.player2Hits;
            gameEntry.classList.add("history-entry");
            historyList.appendChild(gameEntry);
        }
    } else {
        historyList.textContent = "No game history available.";
    }
});

