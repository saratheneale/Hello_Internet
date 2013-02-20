var userChoice = prompt("Do you choose rock, paper, or scissors?");

var computerChoice = Math.random();
console.log(computerChoice);

if(computerChoice >= 0 && computerChoice <= .33){
	computerChoice = "rock";
}
else if(computerChoice > .33 && computerChoice <= .66){
	computerChoice = "paper";
}
else {computerChoice = "scissors";}

compare(userChoice,computerChoice);

var compare = function(choice1, choice2)
{
	if (choice1===choice2)
	{
		return "The result is a tie!";
	};
	if(choice1==='rock')
	{
		if(choice2 == 'scissors'){
			return 'rock wins';
		}
		else {
			return 'paper wins';
		}
	}//end if choice1---rock
	if(choice1==='paper')
	{
		if (choice2==='rock'){
			return 'paper wins';
		}
		else {return 'scissors wins';}
	}//end if choice1===paper
	if(choice1==='scissors')
	{
		if (choice2==='rock'){
			return 'rock wins';
		}
		else {return 'scissors wins';}
	}//end if choice1===paper
};//end compare function