//Adventure Game

confirm("Are you ready to play an adventure game?");
var age = prompt("How old are you?");
if(age<18){
	alert("You may play, but I'm not responsible for you.");
}
else{
	alert("I'm not responsible for you since you're an adult, but have fun!");
	
}
var intro="Pinkie Pie and SweetieBot were hanging out at the bus stop, waiting to go to the shops. There was a sale on and both needed some new threads. You've never really liked PinkiePie. You walk up to her."
//print(intro);
alert(intro);
var FirstMove ="PinkiePie twitches her tail at you.";
alert(FirstMove);
var userAnswer = prompt("Are you feelin' lucky, pony?");

if(userAnswer==='yes'){
	alert("\'Oh. Okay. I hope it works out for you.\'Pinkiepie says with a wink of her eye. She nudges you out of the way as a door suddenly appears and opens right onto the spot where you were standing.");
}
else (alert("Pinkiepie trembles and a door suddenly appears next to you. The door begins to open, but before you can move out of the way, it opens onto your face. Hard. "));
//Asking for Feedback
var feedback=prompt("Please rate this game from 0-10");
if (feedback > 8)
{alert("This is just the beginning of my game empire. Stay tuned for more!");}
else{alert("I slaved away at this game and you gave me that score?! The nerve! Just you wait!");}
