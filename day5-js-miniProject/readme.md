# 📅 Day 5 - Simon Game using JavaScript

## 🎮 Project: Simon Game Clone

Today, I built a working version of the **Simon Game** using HTML, CSS, and JavaScript.

---

## 🧠 Concepts Applied

- DOM Manipulation (`querySelector`, `classList`, etc.)
- Event Listeners (`keypress`, `click`)
- Arrays for tracking sequences
- Game logic and state handling
- Conditional checks and comparison
- Styling feedback using `classList.add/remove`
- Timers with `setTimeout`

---

## 🕹️ How the Game Works

- The game starts when the user presses any key.
- A random button flashes each round, which the user must remember and repeat.
- On each level up:
  - A new button is added to the sequence.
  - The user has to remember the full sequence and repeat it.
- If the user makes a mistake:
  - The game ends.
  - The background flashes red.
  - The score (level reached) is displayed.

---

## 💡 Key Functions

```js
function gameflash(btn) {
    btn.classList.add("flash");
    setTimeout(() => btn.classList.remove("flash"), 250);
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(() => btn.classList.remove("userflash"), 250);
}

function levelup() {
    userSeq = [];
    level++;
    h2.innerHTML = `level ${level}`;
    let randColor = btns[Math.floor(Math.random() * 4)];
    gameSeq.push(randColor);
    gameflash(document.querySelector(`.${randColor}`));
}

function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelup, 1000);
        }
    } else {
        h2.innerText = `Game Over! Your score was ${level}\nPress any key to restart`;
        document.body.style.backgroundColor = "red";
        setTimeout(() => document.body.style.backgroundColor = "white", 350);
        resetGame();
    }
}

function resetGame() {
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
}
