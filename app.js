$(document).ready(function(){

	//starting variables
	var currentQuestion = 0;
	var score = 0;
	var currentQuiz= "heroQuestions";

    $("#questionBox").hide();

	$(".openOverlay").click(function(){
    	$(".overlay").fadeIn(1000);
        $("#questionBox").hide();
        
  	});

  	$(".choiceHero").click(function(){
  		$(".overlay").fadeOut(1000);
        $("#questionBox").show();
  		currentQuiz = "heroQuestions";
        resetQuiz();

        console.log(currentQuiz);
        console.log(currentQuestion);
        
  		//begin Hero quiz
  	});

  	$(".choiceVillain").click(function(){
  		$(".overlay").fadeOut(1000);
        $("#questionBox").show();
        currentQuiz = "villainQuestions";
        resetQuiz();
        
        console.log(currentQuiz);
        console.log(currentQuestion);
  		//begin Villain quiz
  	});
	
	var quizzes = {
	heroQuestions: [{
        question: "Question #1 of 5: Who is pictured above?",
        answers: ["The Master", "Rose Tyler", "Clara Oswald", "River Song"],
        correctAnswer : 3,
        picture: "images/River_Looks_Left.jpg"
        },

        {
        question: "Question #2 of 5: What does TARDIS stand for?",
        answers: ["The Actual Returning Device In Skaro", "Time And Relative Dimension In Space", "Time Around Running Distance In Space", "Traveling And Returning Device In Space"],
        correctAnswer : 1,
        picture: "images/flyingtardis.jpg"
        },

        {
        question: "Question #3 of 5: What planet is the Doctor from?",
        answers: ["Second Earth", "Cheem", "Gallifrey", "Skaro"],
        correctAnswer : 2,
        picture: "images/Gallifrey.jpg"
        },

        {
        question: "Question #4 of 5: Which of these people NEVER had a crush on the Doctor?",
        answers: ["Donna Noble", "Amy Pond", "Martha Jones", "Jack Harkness"],
        correctAnswer : 0,
        picture: "images/heartbeat.jpg"
        },

        {
        question: "Question #5 of 5: Which character protected someone for 2000 years?",
        answers: ["Amy Pond", "The Face of Bo", "Danny Pink", "Rory Williams"],
        correctAnswer : 3,
        picture: "images/pandorica.jpg"
    }],
    villainQuestions: [{
    	question: "Question #1 of 5: Who created the Daleks?",
        answers: ["Winston Churchill", "The Master", "Davros", "The Cybermen"],
        correctAnswer : 2,
        picture: "images/daleks.jpg"
        },

        {
        question: "Question #2 of 5: What is the Weeping Angels' weakness?",
        answers: ["Fire", "Being watched", "Water", "Gamma radiation"],
        correctAnswer : 1,
        picture: "images/weepingangels.jpg"
        },

        {
        question: "Question #3 of 5: Which enemies of The Doctor wish to upgrade everyone?",
        answers: ["The Cybermen", "The Daleks", "The Silence", "The Vashta Nerada"],
        correctAnswer : 0,
        picture: "images/enemies.jpg"
        },

        {
        question: "Question #4 of 5: Which of these is not the name of one of The Doctor's adversaries?",
        answers: ["Kandy Man", "The Family Slitheen", "The Sontarens", "The Beebles"],
        correctAnswer : 3,
        picture: "images/doctor.jpg"
        },

        {
        question: "Question #5 of 5: The Silurians are natives of what planet?",
        answers: ["Skaro", "Mars", "Gallifrey", "Earth"],
        correctAnswer : 3,
        picture: "images/silurian.jpg"
    }]
	};	

	function isCorrect () {
		var bool = false;
        var answer = $("input[type='radio']:checked").next("span").text();
        var c = quizzes[currentQuiz][currentQuestion].correctAnswer;
        if (answer == quizzes[currentQuiz][currentQuestion].answers[c]) {
            bool = true;   
        }
        return bool;        
	};

	$(".tardis").css('opacity', 0.1);//change with every question correct

	function tardisFade() {
		        
        if (score == 1) {
            $(".tardis").css('opacity', 0.3);
        }
        else if (score == 2) {
            $(".tardis").css('opacity', 0.5);
        }
        else if (score == 3) {
            $(".tardis").css('opacity', 0.7);
        }
        else if (score == 4) {
           $(".tardis").css('opacity', 0.9);
        }
        else if (score == 5) {
            $(".tardis").css('opacity', 1.0);
        }
    };

    function clearBox () {
        $("#question").empty();
        $("#graphic").empty();
        $("#answerBox").empty();
        $("#submitAnswer").hide();
    };

    function resetQuiz () {
        currentQuestion = 0
        score = 0;
        $("#result").empty();
        $("#submitAnswer").show();
        $(".tardis").css('opacity', 0.1);
        questionBuilder();
        pictureBuilder();
    }

	$('#submitAnswer').on("click", function () {
        var percent = (score/5) * 100 + 20;
		var correct = isCorrect();
		adjustScore(correct);
		tardisFade(); //---not working
		$("input:radio").prop('checked', false);
		currentQuestion++;
        if (quizzes[currentQuiz].length != currentQuestion) {
    		questionBuilder();
    		pictureBuilder();
    		showResults(correct); 
        }
        else {
            clearBox();
            $("#result").html("Congratulations, you got " + percent + " % correct! Ready to try again? Click Allons-Y!");
        }
	});

	function adjustScore (b) {
		if (b) {
			score++;
		}
	}
	function showResults (b) {
		
		if (b) {
			 $("#result").html("Correct! You must like your fish fingers and custard!");
		}
		else {
			$("#result").html("Incorrect. What are you, a Dalek!?");
		}        
	};


	function questionBuilder () {
		$('#question').html(quizzes[currentQuiz][currentQuestion].question);
		for (var i=0; i< quizzes[currentQuiz][currentQuestion].answers.length; i++) {
			$("#opt"+i).next("span").html(quizzes[currentQuiz][currentQuestion].answers[i]);
		};
		
	};
	questionBuilder();

	function pictureBuilder () {
		$('#graphic img').attr("src", quizzes[currentQuiz][currentQuestion].picture);
	}
	pictureBuilder();


});