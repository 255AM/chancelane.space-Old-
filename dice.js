// initialize users name and users starting amount 

var userName = prompt("Welcome to dice war what is your name?");
var userMoney = 1000;
alert ("You have " + userMoney + " remaining.");

// main loop of game: bet, roll die, win or lose, reiterate as long as userMoney is > 0
while (userMoney > 0) {
    var wager = prompt( userName + " Please select your wager");
    var userWager = parseInt(wager); 
    

    if (userWager <= userMoney) {
          var userNumber = Math.floor(Math.random() * 6) + 1;
          var comNumber  = Math.floor(Math.random() * 6) + 1;
          alert("your number is " + userNumber + " the computer number is " + comNumber);
       if (userNumber > comNumber) { 
              userMoney += userWager;
              alert(" you win " + userWager + ", you now have " + userMoney + ".");
          }
          else if (userNumber < comNumber) {
              userMoney -= userWager;
              alert("you lose " + userWager + ", you now have " + userMoney + ".");
          }
          
          else if (userNumber === comNumber){
              alert("Tie");
          }      
      }
    else if (userMoney < userWager) { 
              alert("you do not have enough");     
      }
         
       }
       