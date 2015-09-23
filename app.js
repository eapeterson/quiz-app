$(document).ready(function(){

	//var image = $("#graphic")

	//image.html(span)

	//$(".answer")

	$("#graphic").attr('src', 'images/River_Looks_Left.jpg')

	$(".tardis").css('opacity', 0.5);//change with every question correct

	var hq { 
		q: ""//question asked
		o: [//array of answers]
		c: 0 //correct answer
		s: 'url' //image url
	}

	$("#question").text(hq[0].q);
	$("#opt0" + x).next('span').text(hq[0].o[0]);





}