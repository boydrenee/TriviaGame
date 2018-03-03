// The following code from "Java in Easy Steps", 5th edition by Mike McGrath
var counter = 30 ;

function init()
{
 var timerId , panel = document.getElementById( "panel" ) ;
 counter-- ; 
 panel.innerHTML += "<span style='fontSize:2em;color:blue;margin:2px;'>"+counter+ "</span>" ;
 if ( counter < 1 ) 
 { 
   alert("Your time is up. Scroll down and press finish to submit.");
   window.clearTimeout( timerId ) ;
  
 }
 else { timerId = window.setTimeout( init , 1000 ) ; }
}
document.addEventListener( "DOMContentLoaded" , init , false ) ;
//***************************************************************************

function resetForm() {
	
	document.getElementById("trivia").reset();
}

function check() {
	
	var question1 = document.trivia.question1.value;
	var question2 = document.trivia.question2.value;
	var question3 = document.trivia.question3.value;
	var question4 = document.trivia.question4.value;
	var question5 = document.trivia.question5.value;
	var question6 = document.trivia.question6.value;
	var question7 = document.trivia.question7.value;
	var question8 = document.trivia.question8.value;
	var question9 = document.trivia.question9.value;
	var question10 = document.trivia.question10.value;
	var rightAns = 0;
	var wrongAns = 0;
	
	
	
	if (question1 == "66") {
		rightAns++;
	}
	else {
		wrongAns++; 
	}
	if (question2 == "Polaroid Cameras") {
		rightAns++;
	}
	else {
		wrongAns++;
	}
	if (question3 == "Hippocrates") {
		rightAns++;
	}
	else {
		wrongAns++;
	}
	if (question4 == "Florence") {
		rightAns++;
	}
	else {
		wrongAns++;
	}
	if (question5 == "Gutenberg") {
		rightAns++;
	}
	else {
		wrongAns++;
	}
	if (question6 == "Elvis Presley's") {
		rightAns++;
	}
	else {
		wrongAns++;
	}
	if (question7 == "Honda Accord") {
		rightAns++;
	}
	else {
		wrongAns++;
	}
	if (question8 == "$50.00 bill") {
		rightAns++;
	}
	else {
		wrongAns++;
	}
	if (question9 == "24") {
		rightAns++;
	}
	else {
		wrongAns++;
	}
	if (question10 == "NaCl") {
		rightAns++;
	}
	else {
		wrongAns++;
	}
	
	// console.log(rightAns);
	// console.log(wrongAns);
	var msgArray = [ "You can do better.", "You did okay.", "That's a Good Score", "Excellent!" ];
	var pictures = [ "images/lose.jpg",  "images/win.jpg" ];
	
	var msgNum;
	
	
	
	if (rightAns < 5) {
		msgNum = 0;
	}
	if ((rightAns > 4) && (rightAns < 8)) {
		msgNum = 1;
	}
	if ((rightAns == 8) || (rightAns == 9))
	{
		msgNum = 2;
	}
	if (rightAns == 10)
		{
		msgNum = 3;
	}
	
	console.log(msgNum);
    
	
	
	document.getElementById("after_submit").style.visibility = "visible";
	
	if (msgNum == 0) {
		document.getElementById("picture").src = pictures[0];
		console.log(pictures[0]);
	}
	if (msgNum == 3) {
		document.getElementById("picture").src = pictures[1];
		console.log(pictures[1]);
	}
	document.getElementById("msgToUser").innerHTML = msgArray[msgNum];
	document.getElementById("number_correct").innerHTML = "       " + rightAns + " correct.";
	document.getElementById("number_incorrect").innerHTML = "     " + wrongAns + " incorrect.";
	
}

