$(document).ready(function(){
	var trivia = {
		winCount: 0,
		lossCount: 0,
		rightAnswer: "",
		answerOrder: [],
		answerNum: 0,
		q:0,
		BtnPress: false,
		tick:5,
		gameStart:false,

		clock:{
			intervalId: null,
			time: 20,
			clockRunning: false,

		},

		questions: [],


		newGame: function(){
			this.gameStart = true;
			this.winCount = 0;
			this.lossCount = 0;
			this.questions = [{
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
				choices: ["Suprise, Fear, Efficiency", "Fear, Surprise, Devotion.", "I'll come in again.", "Sword, bow, axe, hobbits..."],
			},
			// question 4
			{
				question: "What...is your quest?",
				answer: "We seek... a Shrubbery!",
				choices: ["African or European?", "We seek... a Shrubbery!", "I don't know that!", "Blue! ...no, Yellow!"],
			}
			// question 5
			],

			this.tick = trivia.questions.length;
			this.q = 0;
			this.clock.clockRunning = false;
			this.wrongBtnPress = false;
			this.clock.time = 10;
			this.stop();
			this.frame();

			$("#win_counter").text(this.winCount);
			$("#loss_counter").text(this.lossCount);

		},

		frame: function(){
			if (this.tick <= 0) {
				$("#question_div").text("Game Over!");
			}

			else{
				this.BtnPress = false;
				this.clock.time = 10;
				$("#clock").text(trivia.clock.time);
				this.q = Math.floor(Math.random() * this.tick); //placeholder
				console.log("clock time: "+this.clock.time);
				for (var i = 0; i < 4; i++) {
					$("#question_div").text(this.questions[this.q].question);
					$("#answer_"+i).text(this.questions[this.q].choices[i]);
					this.answerOrder[i] = this.questions[this.q].choices[i];
				};

				console.log(this.answerOrder);
				for (var j = 0; j < this.answerOrder.length; j++) {
					if (this.answerOrder[j] === this.questions[this.q].answer) {
						this.rightAnswer = this.answerOrder[j];
						this.answerNum = j;
						console.log("answerNum:");
						console.log(this.answerNum);
						console.log("rightAnswer:");
						console.log(this.rightAnswer);
					} 
				}

				this.questions.splice(this.q, 1);
				console.log(this.questions);
				this.tick--;
				console.log(this.tick);

				trivia.start();
			}

		},//end of function

		btnPress: function(val){
			var btnAnswer = val;
			console.log("button presed:");
			console.log(btnAnswer);

			// compare button pressed to the right answer
			if (this.BtnPress === true) {}

			else{
				if (btnAnswer == this.answerNum) {
					this.stop();
					console.log("Correct");
					$("#question_div").text("Correct!");
					console.log(trivia.questions)
					this.winCount++;
					$("#win_counter").text(this.winCount);
					this.BtnPress = true

					setTimeout(function(){ trivia.frame(); }, 3000);
				}

				else {
					this.stop();
					console.log("nope");
					$("#question_div").text("Wrong!");
					this.lossCount++;
					$("#loss_counter").text(this.lossCount);
					this.BtnPress = true

					setTimeout(function(){ trivia.frame(); }, 3000);
				}
			}
			

		},//end function

		start: function() {

	      if (trivia.clock.clockRunning === false) {
	        trivia.clock.intervalId = setInterval(trivia.count, 1000);
	        trivia.clock.clockRunning = true;
	      }

	  	},//end function

	  	stop: function() {

		    //  TODO: Use clearInterval to stop the count here and set the clock to not be running.
		    clearInterval(trivia.clock.intervalId);
		    trivia.clock.clockRunning = false;

		},

	  	count: function() {

		    //  TODO: increment time by 1, remember we cant use "this" here.
		    trivia.clock.time--;

		    //  TODO: Get the current time, pass that into the stopwatch.timeConverter function,
		    //        and save the result in a variable.
		    var currentTime = trivia.clock.time;

		    //  TODO: Use the variable you just created to show the converted time in the "display" div.
		    $("#clock").text(currentTime);

		    if (trivia.clock.time === 0) {
		    	trivia.stop();
		    	this.lossCount++;
				$("#loss_counter").text(this.lossCount);
		    	$("#question_div").text("Wrong!");
		    	setTimeout(function(){ trivia.frame(); }, 3000);
		    };
	  	},//end function

	}//end object



	// if wrongBtnPrss === false{}

	$(".answer_space").on("click", function(){
		if (trivia.gameStart === true) {
			trivia.btnPress($(this).attr("value"));
		}
		else{}
	});

	// else {}

	$("#reset_button").on("click", function(){
		trivia.newGame();
	});


});