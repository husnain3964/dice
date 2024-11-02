// let name1= prompt("what is your good name" , 'name')
// let name2= prompt("what is your good name" , 'name')

// document.querySelector('.name-1').innerHTML=name1
// document.querySelector('.name-2').innerHTML=name2

let turn = true;
if (turn) {
  document.querySelector(".p1").style.border = "2px solid purple";
} else {
  document.querySelector(".p2").style.border = "2px solid red";
}

let diceScore = 0;
document.querySelector(".roll").addEventListener("click", () => {
  let score_p1 = document.querySelector(".dicingScore1");
  let score_p2 = document.querySelector(".dicingScore2");
  newScore = Math.ceil(Math.random() * 5);
  console.log(newScore);
  if (newScore != 1) {
    diceScore += newScore;
    score_p1.textContent = diceScore;
  } else {
    diceScore=0
    score_p1.innerHTML = 0;
    diceScore += newScore;
    score_p2.textContent = diceScore;
  }
});
