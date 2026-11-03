let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

/* 🔊 Sounds */
const clickSound = new Audio("click.mp3");
const winSound = new Audio("win.mp3");
const loseSound = new Audio("lose.mp3");
const drawSound = new Audio("draw.mp3");

/* Computer choice */
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

/* Draw game */
const drawGame = () => {
    drawSound.play();
    msg.innerText = "Game was Draw. Play again!";
    msg.style.backgroundColor = "#081b31";
};

/* Show winner */
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        winSound.play();
        msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        loseSound.play();
        msg.innerText = `You lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

/* Play game */
const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;

        if (userChoice === "rock") {
            userWin = compChoice === "scissors";
        } else if (userChoice === "paper") {
            userWin = compChoice === "rock";
        } else {
            userWin = compChoice === "paper";
        }

        showWinner(userWin, userChoice, compChoice);
    }
};

/* Click events */
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        clickSound.play();
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const refreshBtn = document.querySelector("#refresh-btn");

refreshBtn.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;

    document.querySelector("#user-score").innerText = 0;
    document.querySelector("#comp-score").innerText = 0;

    document.querySelector("#msg").innerText = "Play your move";
    document.querySelector("#msg").style.backgroundColor = "";
});