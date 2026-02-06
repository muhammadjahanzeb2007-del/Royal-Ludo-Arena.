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
      xfbml      : true,
      version    : 'v18.0'
    });
};
