let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");
let nameUser = prompt("Please enter your name")

console.log(choices);

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    // stone paper scissors 
    const options = ["stone", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * options.length);
    return options[randIdx];

}
const drawGame = () => {
    console.log("Game Draw");
    msg.innerText = `Game Draw Hogya ${nameUser} ji! Play Again.`;
    msg.style.backgroundColor = "#3c353a";
}
const showWinner = (userWin , userChoice ,compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("User Wins");
        msg.style.backgroundColor = "green";
        msg.innerText =  `${nameUser} ji aap Jeet gaye coz ${userChoice} beats ${compChoice}`;
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("Computer Wins");
        msg.style.backgroundColor = "red";
        msg.innerText = `${nameUser} ji aap Haar gaye coz ${compChoice} beats ${userChoice}`;
    }
}



const playGame = (userChoice) => {
    console.log(userChoice);
    //Generate computer choices
    const compChoice = genCompChoice();
    console.log(compChoice);

    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "stone") {
            //scissor , paper 
            userWin = compChoice === "paper" ? false : true;
        } 
        else if (userChoice === "paper") {
            //stone, scissor
            userWin = compChoice === "scissor" ? false : true;
        }
        else {
            //paper, stone
            userWin = compChoice === "stone" ? false : true;
        }
        showWinner(userWin , userChoice , compChoice);

    }
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    })
})