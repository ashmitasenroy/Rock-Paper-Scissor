let uscore = 0;
let cscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#move");
const userscore = document.querySelector("#uscore");
const compscore = document.querySelector("#cscore");

const options = ["rock", "paper", "scissors"];

const cgenchoice = () => {
  const idx = Math.floor(Math.random() * options.length);
  return options[idx];
};

const resetMessageStyle = () => {
  msg.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
  msg.style.color = "black";
};

const showWin = (userwin, id, compchoice) => {
  if (userwin) {
    uscore++;
    userscore.innerText = uscore;
    msg.innerText = `You win! Your ${id} beats ${compchoice}.`;
    msg.style.backgroundColor = "green";
    msg.style.color = "white";
  } else {
    cscore++;
    compscore.innerText = cscore;
    msg.innerText = `You lose! ${compchoice} beats your ${id}.`;
    msg.style.backgroundColor = "red";
    msg.style.color = "white";
  }
};

const drawGame = () => {
  msg.innerText = "Game was a draw! Try again.";
  msg.style.backgroundColor = "orange";
  msg.style.color = "black";
};

const playgame = (id) => {
  resetMessageStyle();
  const compchoice = cgenchoice();

  if (id === compchoice) {
    drawGame();
  } else {
    let userwin = true;
    if (id === "rock") {
      userwin = compchoice === "paper" ? false : true;
    } else if (id === "paper") {
      userwin = compchoice === "scissors" ? false : true;
    } else if (id === "scissors") {
      userwin = compchoice === "rock" ? false : true;
    }
    showWin(userwin, id, compchoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const id = choice.getAttribute("id");
    playgame(id);
  });
  // Accessibility: allow keyboard "Enter" or "Space" to trigger click
  choice.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      choice.click();
    }
  });
});
