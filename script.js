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
    player1HitsCount--;
    player1HitsDisplay.textContent = player1HitsCount;
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
    player2HitsCount--;
    player2HitsDisplay.textContent = player2HitsCount;
});
