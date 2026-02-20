var playgame = confirm("shall we play game");
if (playgame) {
    let game = prompt("Choose rock, paper, scissor");
    if(game) {
        let player = game.trim().toLowerCase();
        if(player === "rock" || player === "paper" || player === "scissor") {
            let computer = Math.floor(Math.random() * 3 + 1);
            let compresult = computer === 1 ? "rock" 
            : computer === 2 ? "paper"
            : "scissor";
            let result = compresult === player ? `game tie\nplayer : ${player}\ncompresult : ${compresult}`
            : compresult === "rock" && player === "scissor" ? `player : ${player}\ncompresult : ${compresult}\ncomputer wins!`
              : compresult === "paper" && player === "rock" ? `player : ${player}\ncompresult : ${compresult}\ncomputer wins!`
                : compresult === "scissor" && player === "paper" ? `player : ${player}\ncompresult : ${compresult}\ncomputer wins!`
                  : `player : ${player}\ncompresult : ${compresult}\nplayer wins!`
                  alert(result);

        } else {
            alert("choose rock, paper, scissor")
        }

    } else{
        alert("choose something")
    }
} else {
    alert("maybe later")
}

