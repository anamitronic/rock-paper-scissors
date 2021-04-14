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
        {//cs++; 
        return "I WIN! Paper beats Rock.";}
        else if (compSel == "SCISSORS")
        {//ps++; 
        return "YOU WIN! Rock beats Scissors.";}
    }
    else if (playerSel == "PAPER")
    {
        if (compSel == "SCISSORS")
        {//cs++; 
        return "I WIN! Scissors beat Paper.";}
        else if (compSel == "ROCK")
        {//ps++; 
        return "YOU WIN! Paper beats Rock.";}
    }
    else if (playerSel == "SCISSORS")
    {
        if (compSel == "ROCK")
        {//cs++; 
        return "I WIN! Rock beats Scissors.";}
        else if (compSel == "PAPER")
        {//ps++;
        return "YOU WIN! Scissors beat Paper.";}
    }
}

/* function game() {
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
}   */


/* let ps=0; let cs=0;
game();
console.log("YOUR SCORE: ",ps);
console.log("MY SCORE: ",cs);
if (ps>cs)
console.log("FUCK YOU.");
else if (cs>ps)
console.log("GIT GUD SUCKA!");
else
console.log("WE BOTH SUCK :("); */

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        game(button.id);
    });
});

function game(playerSel) {
    playerSel = playerSel.toUpperCase();
    let compSel = computerPlay();
    
    /* console.log("You Selected: ", playerSel);
    console.log("I Selected: ", compSel); */
    
    let result = playRound(playerSel, compSel);
    console.log(result);

    const body = document.querySelector('body');
    const res = document.createElement('div');
    res.style.cssText = 'margin: auto; align-content: center; padding: 50px;';

    const pl = document.createElement('para');
    pl.textContent = `You Selected: ${playerSel}`;
    linebreak = document.createElement('br');

    const p = document.createElement('para');
    p.textContent = `I Selected: ${compSel}`;
    lb = document.createElement('br');

    const r = document.createElement('para');
    r.textContent = `${result}`;

    body.appendChild(res);
    res.appendChild(pl);
    res.appendChild(linebreak);
    res.appendChild(p);
    res.appendChild(lb);
    res.appendChild(r);
}