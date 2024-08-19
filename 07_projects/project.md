# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
console.log("hitesh")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});
//Another My way
btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    // console.log(e.target.id);
    body.style.backgroundColor = e.target.id;
  });
});

```

## project  2 solution
```Javascript
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let height = parseInt(document.querySelector('#height').value);
  let weight = parseInt(document.querySelector('#weight').value);
  let results = document.querySelector('#results');
  let msg = '';

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / (height ** 2 / 10000)).toFixed(2);
    if (bmi < 18.6) {
      msg = 'You are under weight';
    } else if (bmi < 24.9) {
      msg = "You'r weight is in Normal Range";
    } else if (bmi >= 24.0) {
      msg = 'You are over weight';
    }

    //show the total results

    results.innerHTML = `<span>${bmi}</span> <br> <span>${msg}</span>`;
  }
});
```
## project 3 solution code

```Javascript tried

const clk = document.querySelector('#clock');
let date = new Date();

console.log(date.toLocaleTimeString());

setInterval(() => {
  let date = new Date();

// console.log(date.toLocaleTimeString());
clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```
## 4th projects
```Javascript
let randNum = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.getElementById('guessField');
const guessSlot = document.getElementsByClassName('guesses');
const guessLeft = document.getElementsByClassName('lastResult');
const lowOrHigh = document.getElementsByClassName('lowOrHi');
const startOver = document.getElementsByClassName('resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  //validate for range
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number more than 1');
  } else if (guess > 100) {
    alert('Please enter a valid number smaller than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game over. Random number was ${randNum}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randNum) {
    displayMessage(`You guess it right`);
    endGame();
  } else if (guess > randNum) {
    displayMessage(`Number is Low`);
  } else if (guess < randNum) {
    displayMessage(`Number is High`);
  }
}

function displayGuess(guess) {
  //
  userInput.value = '';
  guessSlot.innerHTML += `${guess} `;
  console.log(guessSlot);
  numGuess++;
  guessLeft.innerHTML = `${11 - numGuess}`;
  console.log(guessLeft);
}

function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
  console.log(lowOrHigh);
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id= 'start new game></h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  // userInput.value = '';
  // userInput.setAttribute('disabled', '');
  const newGameBtn = document.querySelector('#newGame');
  newGameBtn.addEventListener('click', (e) => {
    randNum = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    guessLeft.innerHTML = '';
    userInput.removeAttribute('disable');
    startOver.removeChild(p);
    playGame = true;
  });
}
```