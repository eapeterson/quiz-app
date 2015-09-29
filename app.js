$(document).ready(function(){


	$(".openOverlay").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	$(".choiceHero").click(function(){
  		$(".overlay").fadeOut(1000);
  		//begin Hero quiz
  	});

  	$("choiceVillain").click(function(){
  		$(".overlay").fadeOut(1000);
  		//begin Villain quiz
  	});

	$(".tardis").css('opacity', 0.5);//change with every question correct

	//starting variables
	var currentQuestion = 0;
	var score = 0;

	var heroQuestions = [{
        question: "Question #1 of 5: Who is this character?",
        answers: ["The Master", "Rose Tyler", "Clara Oswald", "River Song"],
        correctAnswer : 3,
        picture: "images/River_Looks_Left.jpg"//'http://i.imgur.com/tIl2Gsst.jpg'
        },

        {
        question: "Question #2 of 5: What does TARDIS stand for?",
        answers: ["The Actual Returning Device In Skaro", "Time And Relative Dimension In Space", "Time Around Running Distance In Space", "Traveling And Returning Device In Space"],
        correctAnswer : 1,
        picture: "images/tardis.jpg"
        },

        {
        question: "Question #3 of 5: What planet is the Doctor from?",
        answers: ["Second Earth", "Cheem", "Gallifrey", "Skaro"],
        correctAnswer : 2,
        picture: "images/pandorica.jpg"
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
    }];

	console.log(heroQuestions[3]);

	function moveQuestion () {
		$("#questionBox").next('span').text(heroQuestions[0].answers[0].picture[0]);

	}

	$('#question').html(heroQuestions[0]);

	$('#submitAnswer').on("click", function () {
		moveQuestion();
		tardisFade();
		currentQuestion++;
		//$('#question').html(heroQuestions.next())
	});

	$(".tardis").css('opacity', 0.5);//change with every question correct

	function tardisFade() {
        var answer = $("input[type='radio']:checked").val();
        if (answer == heroQuestions[currentQuestion].correctAnswer) {
            score++;    
        }
        if (score == 1) {
            $(".tardis").css('opacity', 0.5);
        }
        else if (score == 2) {
            $(".tardis").css('opacity', 0.7);
        }
        else if (score == 3) {
            $(".tardis").css('opacity', 0.8);
        }
        else if (score == 4) {
           $(".tardis").css('opacity', 0.9);
        }
        else if (score == 5) {
            $(".tardis").css('opacity', 1.0);
        }
    }

	//$("#question").text(hq[0].q);
	//$("#opt0").next('span').text(hq[0].o[0]);

});