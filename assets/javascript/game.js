var words = ['snowboard', 'skiing', 'trees', 'chairlift', 'snowflake', 'cold',  'alpine', 'mountains'];
//list of letters that have already been guessed 
var lettersGuessedArray = [];

//chooses random word from words list
var word = words[Math.floor(Math.random() * words.length)];
console.log(word);
function chooseImageForWord() {
  
  if (word == 'snowboard') {
    let targetImg = document.createElement('IMG');
    targetImg.setAttribute('src', '/Assets/images/snowboardword.png');
    targetImg.setAttribute('width', '300px');
    targetImg.setAttribute('height', '300px');
    console.log('its working');
  }
  
}
chooseImageForWord();
var wordArr = word.split('');
var wins = 0;
var losses = 0;
var chances = 15;

//loops through word to determine how many blank spaces to include under current
var answerArray = [];
for (var i = 0; i < word.length; i++) {
  answerArray[i] = '_ ';
  let targetDiv = document.querySelector('#word');
  targetDiv.textContent = answerArray.join('');
}
//array of all letters in alphabet (to avoid allowing numbers or special characters)
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

for (var i = 0; i < letters.length; i++) {
  $('#letterButtons').append('<button id="' + letters[i] + '">' + letters[i] + '</button>');
  $('#letterButtons').attr('unselected', true); //attributes take in two arguments 
}

var userGuess = "";
//when letter is entered using keyboard
document.onkeyup = function(event){
  userGuess = event.key;
  buttonSelected(userGuess);
}
//when letter button is clicked with mouse  
document.onclick = function(event){
  userGuess = event.target.id;
  buttonSelected(userGuess);
}
function buttonSelected() {
  var guessedLetter;
  document.getElementById('button')
}


function validateGuess(userGuess) {
  var validateLetter = false;
  var usedLetter = false;
  //make sure letter guessed hasn't been entered into lettersGuessedArray
  //if not, make sure that the letter is in the letters array
  for (var e = 0; e <= letters; e++) {
    if (userGuess[e] === letters[e]) {
      validateLetter = true;
    }

    
}
function checkGuess(letter) {
  var correctLetter = false;
  //replace all underscores at correct guesses index
  //give button correct CSS styling
  for (var i = 0; i < wordArr; i++) {
    if (letter === wordArr[i]) {
      // correctLetter = true;
      answerArray[i] = letter;
    } 
  }
  //push into lettersGuessedArray
  lettersGuessedArray.push(letter);
  //*if correctLetter is true, call button by id and give it className true.
  //*else call button by id and give it className false.
}


function buttonSelected(userGuess) {
  var correctGuess = []; //array for inputting the correct guess into related blank space
  var wordFinished = []; //array to determine if word is completed
}


// Determines which key was pressed and stores that to letters guessed list: (this might be obsolete since i decided to add buttons)
document.onkeyup = function (event) {
  var userGuess = event.key;
  //make sure event.key is a valid response
  //validate we haven't used that response yet
  checkGuess(userGuess);
  console.log(lettersGuessedArray);
  lettersGuessedArray.push(userGuess);
  //determine if this letter is in the answer
  //if (word.includes(userGuess) {
    

  }
  for (var c = 0; c <= lettersGuessedArray; c++) {
    if (lettersGuessedArray[c] !== userGuess) {
      $('#letterButtons').append('<div>' + userGuess + '</div>');
    } else {
    if (lettersGuessedArray[c] === undefined) {
      document.getElementById("letterButtons").innerHTML.object.style.display == "none";
    }
      
    }

    for (var j = 0; j < letters.length; j++) { 

      if (userGuess.toLowerCase() == letters[j]) { 
        //remove letter from letter array to avoid double use
        letters.splice(j, 1);
        console.log(letters);
      }
    }
    //Need to match each letter entered to the word to guess and output it in answer array.
    for (var a = 0; a < word.length; a++) {
      if (userGuess.toLowerCase() == word[a]) {
        answerArray[i] = userGuess.toLowerCase();
      } else {
        
      }
    }
};
// for (var a = 1; a < word.length; a++) {
//   if (ketter)
// }
lettersGuessedArray.array = document.getElementsByClassName('lettersGuessedArray');

//Change Hint image based off word
function changeImage() {

}

//determine if letter has been pressed yet
}