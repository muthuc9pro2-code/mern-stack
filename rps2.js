let PlayGame = confirm("Shall We Play a Game");

if (PlayGame) {
    while (PlayGame) {
        const game = prompt("Choose Rock, Papper, Scissor");
        if (game === "") {
             alert ("Choose either rock, papper, scissor");
             continue;
        } else if (game) {
            const PlayerInput = game.trim().toLowerCase();
            const math = Math.floor(Math.random()*3);
            const option = ["rock", "papper", "scissor"];
            const computerChoice = option[math];
            if(PlayerInput === "rock" || PlayerInput === "papper" || PlayerInput === "scissor") {
                const result = PlayerInput === computerChoice ? `Game Tie \nPlayer: ${PlayerInput} \nComputer: ${computerChoice}`
                : PlayerInput === "rock" && computerChoice === "papper" ? `Computer Wins \nPlayer: ${PlayerInput} \nComputer: ${computerChoice}`
                : PlayerInput === "papper" && computerChoice === "scissor" ? `Computer Wins \nPlayer: ${PlayerInput} \nComputer: ${computerChoice}`
                : PlayerInput === "scissor" && computerChoice === "rock" ? `Computer Wins \nPlayer: ${PlayerInput} \nComputer: ${computerChoice}`
                : `Player Wins \nPlayer: ${PlayerInput} \nComputer: ${computerChoice}`;
                alert(result);
            } else {
             alert ("Choose either rock, papper, scissor");
            }
        } else {
            alert ("Ok Later")
            break;
        } 
    }
} else {
    alert ("Maybe Later");
}

