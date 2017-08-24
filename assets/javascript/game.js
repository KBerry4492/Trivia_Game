var trivia = {
	winCount: 0,
	lossCount: 0,
	q:0,

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
		q = Math.floor(Math.random() * 4);
		console.log(q)
		for (var i = 0; i < 4; i++) {
			$("#question_div").text(trivia.questions[q].question);
			$("#answer_"+i).text(trivia.questions[q].choices[i]);
		};
	},//end of function

	btnPress: function(val){
		var btnAnswer = $("answer_"+val);
		console.log(btnAnswer);

	},
}

$(".answer_space").on("click ", function(){
		trivia.btnPress(this.value);
		console.log(this.value);
	});

$("#reset_button").on("click", function(){
	trivia.newGame();
})

trivia.newGame();