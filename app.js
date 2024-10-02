
// Simon Says Game
let body = document.querySelector('body');
let head1 = document.querySelector('h1');
let head2 = document.querySelector('h2');
let head3 = document.querySelector('h3');
let sqbtn = document.querySelector(".sqbtn");
let help = document.querySelector(".help");
let gameStatus = false;
let level = 0;
const gameSeq = [];
const userSeq = [];

sqbtn.addEventListener("click", function (event) {
    if (gameStatus == false) {
        sqbtn.innerHTML = "<b>QUIT<b>";
        head3.innerText = `Press ${sqbtn.innerText} to leave`;
        head2.innerText = `Level ${level + 1}`;
        setTimeout(() => {
            levelUp();
        }, 700);
        gameStatus = true;

    } else {
        quit();
    }
});
function levelUp() {
    userSeq.length = 0;
    level++;
    head2.innerText = `Level ${level}`;
    setTimeout(() => {
        gameFlash();
    }, 300);
}
function gameFlash() {
    let btn = document.getElementById(Math.floor(Math.random() * 4) + 1);
    btn.classList.add('gameFlash');
    gameSeq.push(btn.id);
    setTimeout(() => {
        btn.classList.remove("gameFlash")
    }, 300);
}
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener('click', userBtn)

}
function userBtn() {
    if (gameStatus == true) {
        this.classList.add('userFlash');
        setTimeout(() => {
            this.classList.remove("userFlash")
        }, 250);
        userSeq.push(this.id);

        for (let i = 0; i < userSeq.length; i++) {
            if (userSeq[i] == gameSeq[i]) {
                continue;
            }
            else {
                reset();
            }
        }
        if (userSeq.length == level) {
            levelUp();
        }
    }
}
function reset() {
    console.log("reset called");
    gameSeq.length = 0;
    sqbtn.innerHTML = "<b>START</b>"
    head2.innerHTML = `GAME OVER <br> SCORE: ${level - 1}`;
    head3.innerText = "Press START to play again"
    level = 0;
    gameStatus = false;
    body.classList.add('reset');
    setTimeout(() => {
        body.classList.remove('reset');
    }, 150);
}
function quit() {
    gameSeq.length = 0;
    sqbtn.innerHTML = "<b>START</b>"
    head2.innerHTML = `GAME LEFT <br> SCORE: ${level - 1}`;
    head3.innerText = "Press START to play again"
    level = 0;
    gameStatus = false;
}
help.addEventListener("click", function () {
    alert("How to Play the Simon Says Game \n 1) Start the Game: Press `START` to begin. \n 2) Watch the Sequence: Observe the flashing buttons. \n 3) Repeat the Sequence: Click the buttons in the same order they flashed. \n 4) Advance Levels: Correct sequences increase your level; a new sequence will flash. \n 5) Game Over or Quit: Incorrect sequences end the game. Press `START` to play again.");

})

// function changeHead1(color, delay, nextColorChange) {
//     setTimeout(() => {
//         head1.style.color = color;
//         if (nextColorChange) nextColorChange();
//     }, delay);
// }

// changeHead1("red", 400, () => {
//     changeHead1("green", 400, () => {
//         changeHead1("blue", 400, () => {
//             changeHead1("orange", 400, () => {
//                 changeHead1("red", 400, () => {
//                     changeHead1("white", 400)
//                 })
//             });
//         });
//     });
// });






















// sqbtn.addEventListener("click", function (event) {
//     moves();
//     head3.innerText = move;
//     gameSequence.push(move);
//     console.log(`starting sscore is ${score}`)
//     userSequence.length = 0;


// });

// rbtn.addEventListener("click", function (event) {
//     userSequence.push(...this.id);
//     let bool = true;
//     for (let i = 0; i < gameSequence.length; i++) {
//         if (gameSequence[i] == userSequence[i]) {
//             bool = true;
//         } else {
//             bool = false;
//             alert(`Your game is over with Score ${score}`);
//         }
//     }
//     if (bool == true) {
//         level += 1;
//         levelObj = (`Level ${level}`);
//         console.log(`score is ${score}`)
//     }

// });
// gbtn.addEventListener("click", function (event) {
//     userSequence.push(...this.id);
//     let bool = true;
//     for (let i = 0; i < gameSequence.length; i++) {
//         if (gameSequence[i] == userSequence[i]) {
//             bool = true;
//         } else {
//             bool = false;
//             alert(`Your game is over with Score ${score}`);
//         }
//     }
//     if (bool == true) {
//         level += 1;
//         levelObj = (`Level ${level}`);
//         console.log(`score is ${score}`)
//     }


// });
// bbtn.addEventListener("click", function (event) {
//     userSequence.push(...this.id);
//     let bool = true;
//     for (let i = 0; i < gameSequence.length; i++) {
//         if (gameSequence[i] == userSequence[i]) {
//             bool = true;

//         } else {
//             bool = false;
//             alert(`Your game is over with Score ${score}`);
//         }
//     }
//     if (bool == true) {
//         level += 1;
//         levelObj = (`Level ${level}`);
//         console.log(`score is ${score}`)
//     }


// });

// ybtn.addEventListener("click", function (event) {
//     userSequence.push(...this.id);
//     let bool = true;
//     for (let i = 0; i < gameSequence.length; i++) {
//         if (gameSequence[i] == userSequence[i]) {
//             bool = true;

//         } else {
//             bool = false;
//             alert(`Your game is over with Score ${score}`);
//         }
//     }
//     if (bool == true) {
//         level += 1;
//         levelObj = (`Level ${level}`);
//         console.log(`score is ${score}`)
//     }

// });