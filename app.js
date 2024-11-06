let name1 = prompt("what is your good name", "name");
let name2 = prompt("what is your good name", "name");
let setScore = +prompt("set score", "20,30,40...");

document.querySelector(".name-1").innerHTML = name1;
document.querySelector(".name-2").innerHTML = name2;
document.querySelector(".setScore").innerHTML = `score ${setScore}`;

let turn = true;
diceScore_1 = 0;
diceScore_2 = 0;

document.querySelector(".roll").addEventListener("click", () => {
  let scoreP1 = document.querySelector(".dicingScore1");
  let scoreP2 = document.querySelector(".dicingScore2");
  let rollDiceNum = Math.ceil(Math.random() * 5);
  document.querySelector('.img').src=`./assets/${rollDiceNum}.png`
  console.log(rollDiceNum, diceScore_1);

  if (turn) {
    if (rollDiceNum !== 1) {
      diceScore_1 += rollDiceNum;
      scoreP1.textContent = diceScore_1;
    } else {
      diceScore_1 = 0;
      // diceScore_1 += rollDiceNum;
      scoreP1.textContent = diceScore_1;

      turn = false;
    }
  } else {
    if (rollDiceNum !== 1) {
      diceScore_2 += rollDiceNum;
      scoreP2.textContent = diceScore_2;
    } else {
      diceScore_2 = 0;
      // diceScore_1 += rollDiceNum;
      scoreP2.textContent = diceScore_2;

      turn = true;
    }
  }

  console.log(scoreP1.textContent);
});

document.querySelector("#hold").addEventListener("click", () => {
  let scoreP1 = document.querySelector(".scoreP1");
  let scoreP2 = document.querySelector(".scoreP2");
  console.log("scorep1", scoreP1.innerHTML);
  console.log("scorep2", scoreP2.innerHTML);

  if (turn === true) {
    scoreP1.textContent = parseInt(scoreP1.textContent) + diceScore_1;
    diceScore_1 = 0;
    document.querySelector(".dicingScore1").textContent = diceScore_1;
    turn = false;
  } else {
    scoreP2.textContent = parseInt(scoreP2.textContent) + diceScore_2;
    diceScore_2 = 0;
    document.querySelector(".dicingScore2").textContent = diceScore_2;
    turn = true;
  }
  let winMes = document.querySelector(".main");
  if (scoreP1.textContent > setScore) {
    document.querySelector('.main').style.display='none'
    let win = document.createElement("h1");
    win.textContent = `win ${name1}`;
    win.classList.add("trunMessege");
    console.log("win-1");
    document.body.appendChild(win);
  } else if (scoreP2.textContent > setScore) {
    document.querySelector('.main').style.display='none'
    let win = document.createElement("h1");
    win.textContent = `win ${name2}`;
    win.classList.add("trunMessege");
    console.log("win-2");
    document.body.appendChild(win);
  }
});
