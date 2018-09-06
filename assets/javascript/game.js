$(document).ready(function() {

var computerChoice = Math.floor(Math.random()*(120 - 19 + 1) + 19);
var winCount = 0;
var loseCount = 0;
var diamondChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var rubyChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var emeraldChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var citrineChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var userTotalScore = 0;


function crystalValue(){
	diamondChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
	rubyChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
	emeraldChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
	citrineChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
}


function gamePlay(){
	if(userTotalScore === computerChoice){
		winCount++;
		$('#winCounter').text(winCount);
		$('#winLose').text('You win!');
		computerChoice = Math.floor(Math.random()*(120 - 19 + 1) + 19);
		$('#randomNumber').text(computerChoice);
		userTotalScore = 0;
		$('#currentScoreCounter').text(userTotalScore);
		crystalValue();
	} else if(userTotalScore > computerChoice){
		loseCount++;
		$('#loss-counter').html(loseCount);
		$('#winLose').text('You lose!');
		computerChoice = Math.floor(Math.random()*(120 - 19 + 1) + 19);
		$('#randomNumber').text(computerChoice);
		userTotalScore = 0;
		$('#currentScoreCounter').text(userTotalScore);
		crystalValue();
	}
}



$('#randomNumber').text(computerChoice);



$('#diamond').on('click', function(){
	userTotalScore += diamondChoice;
	$('#currentScoreCounter').text(userTotalScore);
	gamePlay();
});


$('#ruby').on('click', function(){
	userTotalScore += rubyChoice;
	$('#currentScoreCounter').text(userTotalScore);
	gamePlay();
});


$('#emerald').on('click', function(){
	userTotalScore += emeraldChoice;
	$('#currentScoreCounter').text(userTotalScore);
	gamePlay();
});


$('#citrine').on('click', function(){
	userTotalScore += citrineChoice;
	$('#currentScoreCounter').text(userTotalScore);
	gamePlay();
});
});
