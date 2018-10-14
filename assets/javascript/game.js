// These are the variables
var gem = {
	win:0,
	lose:0,
	totalScore:0,
	gems: [1, 2, 3, 4], 

//Getting a random number
	randomNumber:function(first, second){
		var result = Math.floor(Math.random() * second) + first;
		return result;
	}, 
	result:0


};

//Getting the total score
gem.totalScore = gem.randomNumber(19, 120);
$(".totalscore").html(gem.totalScore);



// Random number for the gems
function random(){
	for(var i = 0; i < gem.gems.length; i++){
	gem.gems[i] = gem.randomNumber(1, 12);
	};

} 
random();


// getting the gem numbers
var invisibleNumber = $(".gem p");

function gemRandom(){
	for(var i = 0;  i < invisibleNumber.length; i++){
		$(invisibleNumber[i]).html(gem.gems[i]);
	}
}

gemRandom();






// adding to total score
$(".gem").on("click", function(){

	var value = $(this).children(this).text(),
		number = parseInt(value);
		
		gem.result += number;

	$(".result").html(gem.result);


	if(gem.totalScore === gem.result){

		gem.win++;
		$('.win').html("You win : " + gem.win);
		reset();
	} 

	else if(gem.result > gem.totalScore ){
		gem.lose++;
		$('.lose').html("You lose: " + gem.lose);
		reset();
	} 
}); 

// restarting the game
function reset(){
	random()
	gem.totalScore = gem.randomNumber(19, 120);
	$(".totalscore").html(gem.totalScore);
	gemRandom();
	gem.result = 0;
	$(".result").html(gem.result);
} 