var words = [
  'snowboard',
  'skiing',
  'trees',
  'chairlift',
  'snow',
  'cold', 'alpine', 'mountains'
];
//list of letters that have already been guessed 
var lettersGuessedArray = [];

//chooses random word from words list
var word = words[Math.floor(Math.random() * words.length)];
  console.log(word);
var wins = 0;
var losses = 0;
var chances = 15;

//loops through word to determine how many blank spaces to include under current
var answerArray = [];
for (var i = 0; i < word.length; i++) {
  answerArray[i] = '_ ';
}
//array of all letters in alphabet (to avoid allowing numbers or special characters)
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

for (var e = 0; e <= letters.length; e++) {
  $('#letterButtons').append('<button>' + letters[e] + '</button>');
  $('#letterButtons').attr('unselected');
}

var userGuess = "";
//when letter is entered using keyboard
document.onkeydown = function(event){
  userGuess = event.key;
  buttonSelected(userGuess);
}
//when letter button is clicked with mouse  
document.onclick = function(event){
  userGuess = event.target.id;
  buttonSelected(userGuess);
}

function buttonSelected(userGuess) {
  var correctGuess = []; //array for inputting the correct guess into related blank space
  var wordFinished = []; //array to determine if word is completed
}
let targetDiv = document.querySelector('#word');
targetDiv.textContent = answerArray.join('');

// Determines which key was pressed and stores that to letters guessed list: (this might be obsolete since i decided to add buttons)
document.onkeypress = function (event) {
  userGuess = event.key;
  console.log(lettersGuessedArray);
  lettersGuessedArray.push(userGuess);
  for (var c = 0; c <= lettersGuessedArray; c++) {
    if (lettersGuessedArray[c] !== userGuess) {
      $('#letterButtons').append('<div>' + userGuess + '</div>');
    } else {
    if (lettersGuessedArray[c] === undefined) {
      document.getElementById("letterButtons").innerHTML.object.style.display == "none";
    }
      
    }

    for (var j = 0; j < letterOptions.length; j++) { 

      if (userGuess.toLowerCase() == letterOptions[j]) { 
        //remove letter from letter array to avoid double use
        letterOptions.splice(j, 1);
        console.log(letterOptions);
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



//determine if letter has been pressed yet
}
