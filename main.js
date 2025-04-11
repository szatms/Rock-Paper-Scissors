// -- VARIABLES

let machineScore = 0;
let playerScore = 0;
let draws = 0;

let pChoice;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const mdDisplay = document.getElementById("mDrew");
const reset = document.getElementById("re");
const noti = document.getElementById("noti");

const mDisplay = document.getElementById("mScore");
const pDisplay = document.getElementById("pScore");
const dDisplay = document.getElementById("draws");

const opt = ["rock","paper","scissors"];

// -- FUNCTIONALITY

function play(pChoice){
    const mChoice = opt[Math.floor(Math.random() * 3)];
    mdDisplay.textContent = `Machine drew: ${mChoice}`;

    if(pChoice === mChoice){
        draws++;
        noti.textContent="DRAW!";
    } else{
        switch(pChoice){
            case "rock":
                if(mChoice === "paper"){
                    machineScore++;
                    noti.textContent="YOU LOSE!";
                } else {
                    noti.textContent="YOU WIN!";
                    playerScore++
                };
                break;
            case "paper":
                if(mChoice === "scissors"){
                    machineScore++;
                    noti.textContent="YOU LOSE!";
                } else {
                    noti.textContent="YOU WIN!";
                    playerScore++
                };
                break;
            case "scissors":
                if(mChoice === "rock"){
                    machineScore++;
                    noti.textContent="YOU LOSE!";
                } else {
                    noti.textContent="YOU WIN!";
                    playerScore++
                };
                break;
        }
    }
    mDisplay.textContent = `Machine score: ${machineScore}`;
    pDisplay.textContent = `Player score: ${playerScore}`;
    dDisplay.textContent = `Draws: ${draws}`;
}

// -- DOM EVENTS

rock.addEventListener("click", (ev) => {
    //console.log(`ESEMÉNY: ${ev.type}`);
    pChoice = "rock";
    //console.log(pChoice);
    play(pChoice);
});

paper.addEventListener("click", (ev) => {
    //console.log(`ESEMÉNY: ${ev.type}`);
    pChoice = "paper";
    //console.log(pChoice);
    play(pChoice);
});

scissors.addEventListener("click", (ev) => {
    //console.log(`ESEMÉNY: ${ev.type}`);
    pChoice = "scissors";
    //console.log(pChoice);
    play(pChoice);
});

reset.addEventListener("click", (ev) => {
    //console.log(`ESEMÉNY: ${ev.type}`);
    machineScore = 0;
    playerScore = 0;
    draws = 0;

    mDisplay.textContent = "Machine score:";
    pDisplay.textContent = "Player score:";
    dDisplay.textContent = "Draws:";
    mdDisplay.textContent = "Machine drew:";
    noti.textContent="";
});