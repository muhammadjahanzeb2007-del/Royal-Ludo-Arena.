let gameStatus = {
    diceValue: 0,
    redPos: 0, // 0 matlab Jail mein hai
    bluePos: 0,
    turn: 'red'
};

function playGame() {
    let dice = document.getElementById('dice');
    let icons = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
    
    // Animation
    dice.style.transform = "rotate(360deg)";
    
    setTimeout(() => {
        let roll = Math.floor(Math.random() * 6) + 1;
        gameStatus.diceValue = roll;
        dice.innerText = icons[roll - 1];
        dice.style.transform = "rotate(0deg)";

        if (roll === 6) {
            document.getElementById('msgText').innerText = "WAH! 6 Aaya. Goti par click karke bahar nikalo!";
        } else {
            document.getElementById('msgText').innerText = "Santhu, Number " + roll + " aaya.";
        }
    }, 300);
}

function handleTokenClick(color) {
    if (gameStatus.diceValue === 0) return;

    if (gameStatus.redPos === 0 && gameStatus.diceValue === 6) {
        // Goti Jail se bahar
        gameStatus.redPos = 1;
        let token = document.getElementById('red-token');
        token.style.top = "160px"; // Board ke raste par le aao
        token.style.left = "20px";
        document.getElementById('msgText').innerText = "Goti Bahar Aa Gayi! Agli baari chalo.";
    } else if (gameStatus.redPos > 0) {
        // Goti aage badhao
        gameStatus.redPos += gameStatus.diceValue;
        document.getElementById('red-token').style.left = (gameStatus.redPos * 15) + "px";
    }
    
    gameStatus.diceValue = 0; // Turn khatam
}
