var trivia = {
	winCount: 0,
	lossCount: 0,
	q:0,
	rightAnswer: "",
	answerOrder: [],
	answerNum: 0,
	wrongBtnPress: false,

	questions: 
	[	{
		question: "You must cut down a tree with...",
		answer: "A herring!",
		choices: ["An axe!", "A sword!", "A herring!", "A saw!"],
		},
		// question 1
		{
			question: "The best kind of parrot is a...",
			answer: "Norwegian Blue.",
			choices: ["Maccaw.", "Cockatiel", "Tucan.","Norwegian Blue."],
		}, 
		// question 2
		{
			question: "What is your Quest?",
			answer: "To find the Holy Grail!",
			choices: ["To find the Holy Grail!", "Futile!", "Quite dangerous!", "Fountain of Youth!"],
		},
		// question 3
		{
			question: "Our chief weapons are...",
			answer: "I'll come in again.",
			choices: ["Sword, bow, axe, hobbits...", "Suprise, Fear, Efficiency", "Fear, Surprise, Devotion.", "I'll come in again."],
		},
		// question 4
		{
			question: "What...is your quest?",
			answer: "We seek... a Shrubbery!",
			choices: ["African or European?", "We seek... a Shrubbery!", "I don't know that!", "Blue! ...no, Yellow!"],
		}],

	newGame: function(){
		this.wrongBtnPress = false;
		q = Math.floor(Math.random() * 4); //placeholder
		console.log(q);
		for (var i = 0; i < 4; i++) {
			$("#question_div").text(this.questions[q].question);
			$("#answer_"+i).text(this.questions[q].choices[i]);
			this.answerOrder[i] = this.questions[q].choices[i];
		};

		console.log(this.answerOrder);
		for (var j = 0; j < this.answerOrder.length; j++) {
			if (this.answerOrder[j] === this.questions[q].answer) {
				this.rightAnswer = this.answerOrder[j];
				this.answerNum = j;
				console.log("answerNum:");
				console.log(this.answerNum);
				console.log("rightAnswer:");
				console.log(this.rightAnswer);
			} 
		}
	},//end of function

	btnPress: function(val){
		var btnAnswer = val;
		console.log("button presed:");
		console.log(btnAnswer);

		// compare button pressed to the right answer

		if (btnAnswer == this.answerNum) {
			console.log("Correct");
			$("#question_div").text("Correct!");
		}

		else {
			console.log("nope");
			$("#question_div").text("Wrong!");
			this.wrongBtnPress = true
		}

		// if they match then wins ++
		// display Correct and wait 2000ms
		//  go to next 

		// if not losses++ or if timeOut is true
		// display Wrong and wait 2000ms 
		//  go to next 

		// else
		// What did you do?
		//  go to next 
		

	},
}

$(document).ready(function(){

	trivia.newGame();

	// if wrongBtnPrss === false{}

	$(".answer_space").on("click", function(){
		trivia.btnPress($(this).attr("value"));
	});

	// else {}

	$("#reset_button").on("click", function(){
		trivia.newGame();
	});
});