let playgame = confirm("shall we play a game");
if(playgame) {

while(playgame) {
    const game = prompt("choose rock, paper, scissor");
    if (game || game === "") {
        const player = game.trim().toLowerCase();
        if(player === "rock" || player === "paper" || player === "scissor") {
        const computer = Math.floor(Math.random() * 3 );
        const rps = ["rock", "paper", "scissor"];
        const compresult = rps[computer];
         const result = compresult === player ? `game tie\nplayer : ${player}\ncompresult : ${compresult}`
            : compresult === "rock" && player === "scissor" ? `player : ${player}\ncompresult : ${compresult}\ncomputer wins!`
              : compresult === "paper" && player === "rock" ? `player : ${player}\ncompresult : ${compresult}\ncomputer wins!`
                : compresult === "scissor" && player === "paper" ? `player : ${player}\ncompresult : ${compresult}\ncomputer wins!`
                  : `player : ${player}\ncompresult : ${compresult}\nplayer wins!`
                  alert(result);
                  playgame = confirm("playagain")
                  if(!playgame) alert ("maybe later");
                  continue;
        } else{
            alert("choose rock, paper, scissor");
            continue;
        }
    } else {
        alert("ok maybe later");
        break;
    }
    
} 
} else {
    alert("maybe later")
}


