$(document).ready(function() {

    // Game variables set
    var randomNum = 0;
    var score = 0;
    var wins = 0;
    var losses = 0;
  
    // Function generates random number
    function generateNum(minNumber, maxNumber) {
      return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
    };
  
    // Function sets crystal values
    function setCrystalvalue(crystalType){
      var crystalValue = generateNum(1, 13);
      $("#" + crystalType).attr("data-value", crystalValue);
    }
  
    // Function resets game
    function newGame() {
      randomNum = generateNum(19, 120);
      $("#randomNum").text(randomNum);
      $(".crystal").each(function(){
        setCrystalvalue($(this).attr('id'));
      })
    }
  
    // Functions checks for game ending
    function gameOver(){
      if (score > randomNum){
        losses++;
        $("#losses").text(losses);
        alert("You Lost!!");
        score = 0;
        newGame();
        $("#score").text(score);
      } else if (score == randomNum){
        wins++;
        $("#wins").text(wins);
        alert("You won!!");
        newGame();
        score = 0;
        $("#score").text(score);
      }
    }
  
    // Clicker function for crystals to increase score and verify whether game ended
    $(".crystal").on("click", function(){
      score = score + parseInt($(this).attr("data-value"));
      $("#score").text(score);
      gameOver();
    });
  
    newGame();
  });