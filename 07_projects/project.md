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

### 5th Project Solution
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Event KeyCodes</title>
    <link rel="stylesheet" type="text/css" href="../styles.css" />
    <style>
      table,
      th,
      td {
        border: 1px solid #e7e7e7;
      }
      .project {
        background-color: #1c1c1c;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        height: 100vh;
      }

      .color {
        color: aliceblue;
        display: flex;
        flex-direction: row;
      }
    </style>
  </head>
  <body>
    <nav>
      <a href="/" aria-current="page">Home</a>
      <a target="_blank" href="https://www.youtube.com/@chaiaurcode"
        >Youtube channel</a
      >
    </nav>
    <div class="project">
      <div id="insert">
        <div class="key">Press the key and watch magic</div>
      </div>
    </div>

    <script >
        console.log('Project 5');
        let key = document.querySelector('#insert');

        window.addEventListener('keydown', (e) => {
          key.innerHTML = `<div class="color">
          <table>
          <tr>
            <th>Key</th>
            <th>Keycode</th>
            <th>Code</th>
          </tr>
          <tr>
            <td>${e.key===" " ?"Space":e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
          </tr>
          
        </table>
        </div>`;
        });

    
    </script>
  </body>
</html>
```

### Sixth Project
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Number Guessing Game</title>
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="../styles.css" />
  </head>
  <body style="background-color: #212121; color: #fff">
    <nav>
      <a href="/" aria-current="page">Home</a>
      <a target="_blank" href="https://www.youtube.com/@chaiaurcode"
        >Youtube channel</a
      >
    </nav>

    <h1>Start should change the Background color every second</h1>
    <button id="start">Start</button>
    <button id="stop">Stop</button>
    <script >
    //generate a raondom color


  const randomColor = function () {
      const hex = '0123456789ABCDEF';
      // #FFFFFF
    
      let color="#"
      for (let i = 0; i < 6; i++) {
        color+=hex[parseInt(Math.random() * hex.length )]
        
        
      }
      return color
    
    };

    let changeColor=function(){
      document.body.style.backgroundColor=randomColor()

  }


    

  let data;
  const startColor=function(){
      data= setInterval(changeColor,1000)

  }


  const stopColor=function(){
      clearInterval(data)
      data=null
  }
  document.querySelector("#start").addEventListener("click",startColor)

    document.querySelector("#stop").addEventListener("click",stopColor)
    </script>
  </body>
</html>


```