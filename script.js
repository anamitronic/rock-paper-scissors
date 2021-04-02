function computerPlay() {
    var rps = ['ROCK','PAPER','SCISSORS'];
    let i=Math.floor(Math.random() * rps.length);
    return rps[i];
}

function playRound(playerSel, compSel) {
    if (playerSel == compSel)
    {
        return "Draw";
    }
    else if (playerSel == "ROCK")
    {
        if (compSel == "PAPER")
        {cs++; return "Computer Wins! Paper beats Rock.";}
        else if (compSel == "SCISSORS")
        {ps++; return "Player Wins! Rock beats Scissors.";}
    }
    else if (playerSel == "PAPER")
    {
        if (compSel == "SCISSORS")
        {cs++; return "Computer Wins! Scissors beat Paper.";}
        else if (compSel == "ROCK")
        {ps++; return "Player Wins! Paper beats Rock.";}
    }
    else if (playerSel == "SCISSORS")
    {
        if (compSel == "ROCK")
        {cs++; return "Computer Wins! Rock beats Scissors.";}
        else if (compSel == "PAPER")
        {ps++; return "Player Wins! Scissors beat Paper.";}
    }
}

function game() {
    for (let i=0; i<5; i++)
    {
        let playerSel = prompt("Rock, Paper, or Scissors?");
        playerSel=playerSel.toUpperCase();
        let compSel = computerPlay();  
        console.log("PLAYER SELECTED: ", playerSel);
        console.log("COMPUTER SELECTED: ", compSel);
        console.log(playRound(playerSel, compSel)); 
    }
}


let ps=0; let cs=0;
game();
console.log("PLAYER SCORE: ",ps);
console.log("COMPUTER SCORE: ",cs);
if (ps>cs)
console.log("FUCK YOU.");
else if (cs>ps)
console.log("GIT GUD SUCKA!");
else
console.log("WE BOTH SUCK :(");