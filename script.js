* { margin: 0; padding: 0; box-sizing: border-box; }
body { 
    background: radial-gradient(circle, #2c3e50, #000);
    height: 100vh; display: flex; justify-content: center; align-items: center;
    font-family: 'Arial', sans-serif; overflow: hidden;
}

.app-container { width: 100%; max-width: 450px; text-align: center; }

.game-logo { 
    width: 80%; border-radius: 15px; border: 3px solid #ffd700;
    margin-bottom: 10px; box-shadow: 0 0 20px #ffd70055;
}

#ludo-board {
    width: 320px; height: 320px; background: #fff; margin: 0 auto;
    border: 10px solid #555; display: grid; 
    grid-template-columns: repeat(2, 1fr); position: relative;
}

.corner { border: 1px solid #000; }
.red-home { background: #ff4757; }
.blue-home { background: #1e90ff; }
.green-home { background: #2ed573; }
.yellow-home { background: #ffa502; }

.center-square {
    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
    width: 60px; height: 60px; background: gold; border: 2px solid #000;
    display: flex; align-items: center; justify-content: center; font-size: 30px;
}

#dice-box { font-size: 80px; color: #fff; margin: 20px; }

#roll-btn {
    background: linear-gradient(to bottom, #ffd700, #b8860b);
    border: none; padding: 15px 40px; border-radius: 30px;
    font-size: 22px; font-weight: bold; color: #000; cursor: pointer;
    box-shadow: 0 5px 0 #555;
}

#roll-btn:active { transform: translateY(4px); box-shadow: none; }
#msgText { color: gold; margin-top: 15px; font-weight: bold; }
window.fbAsyncInit = function() {
    FB.init({
      appId      : 'APNI_APP_ID_YAHAN_LIKHEIN', // Jo number copy kiya wo yahan daalein
      cookie     : true,
        let gameData = {
    currentDice: 0,
    turn: 'red',
    redPos: 0,
    bluePos: 0,
    isRolling: false
};

function playGame() {
    if(gameData.isRolling) return;
    
    gameData.isRolling = true;
    let dice = document.getElementById('dice');
    let sound = document.getElementById('diceRollSound');
    if(sound) sound.play();

    // Dice Roll Animation
    dice.style.transform = "rotate(720deg)";
    
    setTimeout(() => {
        gameData.currentDice = Math.floor(Math.random() * 6) + 1;
        dice.style.transform = "rotate(0deg)";
        dice.innerText = getDiceIcon(gameData.currentDice);
        
        checkMovePossibility();
        gameData.isRolling = false;
    }, 400);
}

function handleTokenClick(color) {
    if(gameData.turn !== color) return alert("Abhi aapki baari nahi hai!");
    if(gameData.currentDice === 0) return;

    let token = document.getElementById(color + '-token');
    
    // Jail se nikalne ka rule
    if(gameData[color + 'Pos'] === 0) {
        if(gameData.currentDice === 6) {
            gameData[color + 'Pos'] = 1;
            updateTokenUI(color);
            alert("Mubarak ho! Goti bahar nikal gayi.");
        } else {
            alert("Goti nikalne ke liye 6 chahiye!");
            switchTurn();
        }
    } else {
        // Goti aage badhana
        gameData[color + 'Pos'] += gameData.currentDice;
        updateTokenUI(color);
        switchTurn();
    }
    gameData.currentDice = 0;
}

function updateTokenUI(color) {
    let token = document.getElementById(color + '-token');
    let pos = gameData[color + 'Pos'];
    // Goti ko raste par move karna (Simple linear move)
    token.style.left = (pos * 30) + "px"; 
}

function switchTurn() {
    gameData.turn = (gameData.turn === 'red') ? 'blue' : 'red';
    document.getElementById('msgText').innerText = gameData.turn.toUpperCase() + " ki baari hai!";
}

function getDiceIcon(num) {
    return ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'][num-1];
}
      xfbml      : true,
      version    : 'v18.0'
    });
};
