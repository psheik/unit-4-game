$(document).ready(function() {

    // Game variables set
    var targetNum = 0;
    var score = 0;
    var wins = 0;
    var losses = 0;
  
    // Function generates random number
    function generateNum(min_value, max_value) {
      return Math.floor(Math.random() * (max_value - min_value) + min_value);
    };
  
    // Function sets crystal value
    function setCrystal(crystalType){
      var crystalVal = generateNum(1, 12);
      $("#" + crystalType).attr("data-value", crystalVal);
    }
  
    // Function resets game
    function newGame() {
      targetNum = generateNum(19, 120);
      $("#targetNum").text(targetNum);
      $(".crystal").each(function(){
        setCrystal($(this).attr('id'));
      })
    }
  
    // Functions checks for game ending
    function gameOver(){
      if (score > targetNum){
        losses++;
        $("#losses").text(losses);
        alert("You Lost!!");
        score = 0;
        newGame();
        $("#score").text(score);
      } else if (score == targetNum){
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