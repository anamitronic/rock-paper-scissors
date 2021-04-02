function computerPlay() {
    var rps = ['ROCK','PAPER','SCISSORS'];
    let i=Math.floor(Math.random() * rps.length);
    return rps[i];
}

function playRound(playerSel, compSel) {
    if (playerSel == compSel)
    {
        return "DRAW";
    }
    else if (playerSel == "ROCK")
    {
        if (compSel == "PAPER")
        {cs++; return "I WIN! Paper beats Rock.";}
        else if (compSel == "SCISSORS")
        {ps++; return "YOU WIN! Rock beats Scissors.";}
    }
    else if (playerSel == "PAPER")
    {
        if (compSel == "SCISSORS")
        {cs++; return "I WIN! Scissors beat Paper.";}
        else if (compSel == "ROCK")
        {ps++; return "YOU WIN! Paper beats Rock.";}
    }
    else if (playerSel == "SCISSORS")
    {
        if (compSel == "ROCK")
        {cs++; return "I WIN! Rock beats Scissors.";}
        else if (compSel == "PAPER")
        {ps++; return "YOU WIN! Scissors beat Paper.";}
    }
}

function game() {
    for (let i=1; i<=5; i++)
    {
        let playerSel = prompt("You choose. Rock, Paper, or Scissors?");
        playerSel=playerSel.toUpperCase();
        let compSel = computerPlay(); 
        console.log("ROUND ", i,":"); 
        console.log("You Selected: ", playerSel);
        console.log("I Selected: ", compSel);
        console.log(playRound(playerSel, compSel)); 
    }
}


let ps=0; let cs=0;
game();
console.log("YOUR SCORE: ",ps);
console.log("MY SCORE: ",cs);
if (ps>cs)
console.log("FUCK YOU.");
else if (cs>ps)
console.log("GIT GUD SUCKA!");
else
console.log("WE BOTH SUCK :(");