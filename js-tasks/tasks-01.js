// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript
function evenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

// Messi Goals https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

// Make negative https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
function makeNegative(num) {
  return num < 0 ? num : -num;
}

// Game Move https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript
function move(position, roll) {
  return position + roll * 2;
}

// Personalized Message https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript
function greet(name, owner) {
  return name === owner ? "Hello boss" : "Hello guest";
}

// Keep Hydrated https://www.codewars.com/kata/keep-hydrated-1/train/javascript
function litres(time) {
  return Math.trunc(time / 2);

  // alternative solution 1
  // return Math.floor(time * 0.5);

  // alternative solution 2
  // const litres = time * 0.5;
  // return litres - litres % 1;

  // alternative solution 3
  // return (time / 2) | 0;
}

// Opposites Attract https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
function lovefunc(flower1, flower2) {
  return (flower1 + flower2) % 2 !== 0;
  
  // alternative solution
  // return (flower1 % 2) ^ (flower2 % 2) ? true : false;
}