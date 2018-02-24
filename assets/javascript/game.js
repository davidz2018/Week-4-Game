
$( document ).ready(function() {
  var Random=Math.floor(Math.random()*101+19)

  $('#randomNumber').text(Random);
  
  var bitcoin= Math.floor(Math.random()*11+1)
  var ethereum= Math.floor(Math.random()*11+1)
  var litecoin= Math.floor(Math.random()*11+1)
  var ripple= Math.floor(Math.random()*11+1)
 
  var userTotal= 0; 
  var wins= 0;
  var losses = 0;

$('#numberWins').text(wins);
$('#numberLosses').text(losses);

function reset() {
      
      Random=Math.floor(Math.random()*101+19);
      console.log(Random)
      $('#randomNumber').text(Random);
      bitcoin= Math.floor(Math.random()*11+1);
      ethereum= Math.floor(Math.random()*11+1);
      litecoin= Math.floor(Math.random()*11+1);
      ripple= Math.floor(Math.random()*11+1);
      userTotal= 0;
      $('#finalTotal').text(userTotal);
  } 

function correct() {
  alert("You won!");
    wins++; 
    $('#numberWins').text(wins);
    reset();
 }

function wrong() {
  alert ("You lose!");
    losses++;
    $('#numberLosses').text(losses);
    reset()
 }

  $('#one').on ('click', function() {
    userTotal = userTotal + bitcoin;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
        if (userTotal === Random) {
          correct();
      } else if ( userTotal > Random) {
          wrong();
      }   
  })

  $('#two').on ('click', function() {
    userTotal = userTotal + ethereum;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
        if (userTotal === Random) {
          correct();
        } else if ( userTotal > Random) {
          wrong();
    } 
  })

  $('#three').on ('click', function() {
    userTotal = userTotal + litecoin;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);

          if (userTotal === Random) {
          correct();
        } else if ( userTotal > Random) {
          wrong();
      } 
  })  
  $('#four').on ('click', function() {
    userTotal = userTotal + ripple;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
      
          if (userTotal === Random) {
          correct();
        } else if ( userTotal > Random) {
          wrong();
      }

  });   
}); 