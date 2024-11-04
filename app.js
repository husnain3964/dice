// let name1= prompt("what is your good name" , 'name')
// let name2= prompt("what is your good name" , 'name')

// document.querySelector('.name-1').innerHTML=name1
// document.querySelector('.name-2').innerHTML=name2

//

let turn = true;
diceScore_1 = 0;
diceScore_2 = 0;

document.querySelector(".roll").addEventListener("click", () => {
  let scoreP1 = document.querySelector(".dicingScore1");
  let scoreP2 = document.querySelector(".dicingScore2");
  let rollDiceNum = Math.ceil(Math.random() * 6);
  console.log(rollDiceNum, diceScore_1);

  if (turn) {
    if (rollDiceNum !== 1) {
      diceScore_1 += rollDiceNum;
      scoreP1.textContent = diceScore_1;
      document.querySelector("#hold").addEventListener("click", () => {
      play1=document.querySelector(".scoreP1")
      let finalNum= scoreP1.textContent;
      play1.innerHTML =finalNum
      diceScore_1= 0
       turn = false
      scoreP1.innerHTML=diceScore_1
      
          
      });
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
  // console.log(scoreP2.textContent);
});
// let turn = true; // true for player 1, false for player 2
// let diceScore1 = 0; // Score for player 1
// let diceScore2 = 0; // Score for player 2

// document.querySelector(".roll").addEventListener("click", () => {
//     let score_p1 = document.querySelector(".dicingScore1");
//     let score_p2 = document.querySelector(".dicingScore2");
//     let newScore = Math.ceil(Math.random() * 6); // 1 to 6 ke liye

//     console.log(newScore);

//     if (turn) { // Agar player 1 ka turn hai
//         if (newScore !== 1) {
//             diceScore1 += newScore; // Score badhao
//             score_p1.textContent = diceScore1; // Score update karo
//         } else {
//             diceScore1 = 0; // Agar score 1 aaye to score reset
//             score_p1.textContent = 0;
//             turn = false; // Turn player 2 ko do
//         }
//     } else { // Agar player 2 ka turn hai
//         if (newScore !== 1) {
//             diceScore2 += newScore; // Score badhao
//             score_p2.textContent = diceScore2; // Score update karo
//         } else {
//             diceScore2 = 0; // Agar score 1 aaye to score reset
//             score_p2.textContent = 0;
//             turn = true; // Turn player 1 ko do
//         }
//     }

//     // Border color change karna
//     document.querySelector(".p1").style.border = turn ? "2px solid purple" : "none";
//     document.querySelector(".p2").style.border = turn ? "none" : "2px solid red";
// });
