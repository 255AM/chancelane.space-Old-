// initiate variables
var ansRight = 0;
var numRem = 5;

//ask questions
var ans = prompt("Which galaxy do we live in?");
if (ans === "milky way") {
	ansRight += 1;
}

numRem -=1;
var tellRem = ("You have " + numRem + " questions remaining!");
alert(tellRem);

var ans = prompt("Which planet do we live on?");
if (ans === "earth") {
	ansRight += 1;
}
numRem -=1;
var tellRem = ("You have " + numRem + " questions remaining!");
alert(tellRem);
var ans = prompt("Which continent do i live on?");

if (ans === "north america") {
	ansRight += 1;
}
numRem -=1;
var tellRem = ("You have " + numRem + " questions remaining!");
alert(tellRem);

var ans = prompt("Which country do I live in?");
if (ans === "united states of america") {
	ansRight += 1;
}
numRem -=1;
var tellRem = ("You have " + numRem + " questions remaining!");
alert(tellRem);

var ans = prompt("Which state do I live in?");
if (ans === "kentucky") {
	ansRight += 1;
}
numRem -=1;
var tellRem = ("You have " + numRem + " questions remaining!");
 
//determine amount right and prize won. Tell user
var prize;
var youWin = " You answered " + ansRight + " correcctly. You win a " + prize;

if (ansRight === 5) {
	(prize = "Gold crown");
  youWin = " You answered " + ansRight + " correcctly. You win a " + prize;
	document.write(youWin);
} else if (ansRight === 3 || ansRight === 4){
	(prize = "Silver crown");
  youWin = " You answered " + ansRight + " correcctly. You win a " + prize;
	document.write(youWin);
} else if (ansRight === 1 || ansRight === 2) {
	(prize = "Bronze crown")
  youWin = " You answered " + ansRight + " correcctly. You win a " + prize;
	document.write(youWin);
} else {document.write("you dont win a prize")}