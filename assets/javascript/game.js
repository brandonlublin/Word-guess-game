var gameData = {
  wins: 0,
  losses: 0,
  totalChances: 6,
  usersIncorrectGuesses: [],
  selectedWord: selectRandomWord(),
  dashArray: []
}

// pick a random word from the word bank
function selectRandomWord(){
  var wordBank = ['snowboard', 'skiing', 'trees', 'chairlift', 'snowflake', 'cold',  'alpine', 'mountains']
  var word = wordBank[Math.floor(Math.random() * wordBank.length)];
  return word;
}
function showImageHint(){
  var elem = document.querySelector('#hint');
  elem.innerHTML = '<img class="hint" src="assets/images/'+ gameData.selectedWord + '.jpg" alt="' + gameData.selectedWord + '">'
} 

// conver each letter in selectedWord to a dash
function formatWordToDashes(){
  // covert word to array of dashes
  var word = gameData.selectedWord;
 
  for (var i = 0; i < word.length; i++) {
    gameData.dashArray.push('_ ');
  }
}

formatWordToDashes();

// initial display of game data 
function displayGameData(){
  showImageHint();
  document.querySelector('#alert').textContent = "";
  document.querySelector('#winCount').textContent =  gameData.wins;
  document.querySelector('#lossCount').textContent =  gameData.losses;
  document.querySelector('#guessesLeft').textContent =  gameData.totalChances;
  document.querySelector('#guessesSoFar').textContent =  gameData.usersIncorrectGuesses;
  document.querySelector('#word').textContent =  gameData.dashArray.join('');
}

displayGameData();


// on keyb press validate key is a letter 
document.onkeyup = function (event) {
  document.querySelector('#alert').textContent = "";
  var letter = event.key.toLowerCase();

  if(letter >= "a" && letter <= "z"){
    var word = gameData.selectedWord.split('');
    // validate user letter guess
    validateUserGuess(word, letter);
  }else {
    document.querySelector('#alert').textContent = 'letters only (a-z)';
  }
}

// validate user letter guess
function validateUserGuess(word, letter){
  if(word.includes(letter)){
    handleCorrectGuess(word, letter)
  }else {
    handleIncorrectGuess(letter);
  }
}

// user guessed correct letter
function handleCorrectGuess(word, letter){
  // user guessed correctly
  // replace all dashes in the word with letter at index of letter
  for(var i=0; i<word.length;i++) {
    if (word[i] === letter) {
      // replace the underscore
      gameData.dashArray.splice(i, 1, letter + ' ')

      if(gameData.dashArray.join('').replace(/\s/g, '') === gameData.selectedWord){
        gameData.wins++;
        document.querySelector('#alert').textContent = "You WIN! play again!";

        resetGame();
      }
    }
  }
  // redisplay the current word as dashes with letters
  document.querySelector('#word').textContent = gameData.dashArray.join(' ')
}

// user guessed incorrect letter
function handleIncorrectGuess(letter){
  // user incorreclt guessed
  // user hasnt already guessed this letter
  if(!gameData.usersIncorrectGuesses.includes(letter)){
    // guess count goes down by 1
    gameData.totalChances--;
    // add wrong letter to array
    gameData.usersIncorrectGuesses.push(letter);
    // redisplay data
    document.querySelector('#guessesLeft').textContent =  gameData.totalChances;
    document.querySelector('#guessesSoFar').textContent =  gameData.usersIncorrectGuesses;
    // let user know
    
    // check if user has guesses left
    if(gameData.totalChances > 0){
      document.querySelector('#alert').textContent ='incorrect guess, try again';
    }else {
      gameData.losses++;
      document.querySelector('#alert').textContent = "you are out of guesses, you lose. play again!";
  
      resetGame();
    }
  }else {
    document.querySelector('#alert').textContent = "already tried this incorrect letter, try another";
  }
}

// start game over redisplay game data 
function resetGame(){
  gameData.totalChances = 6;
  gameData.usersIncorrectGuesses = []
  gameData.selectedWord =  selectRandomWord()
  gameData.dashArray = []

  formatWordToDashes();
  displayGameData();


}
