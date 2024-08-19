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
