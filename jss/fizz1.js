$(document).ready(function(){

	$("#btn1").click(function(){
		$("#numbers").empty();
	});

	$("#btn2").click(function(){
		for (i=1; i<=100; i++) {
			if (i%15 == 0) {
				var fizzbuzz = "<ol>" + "FizzBuzz!" + "</ol>";
				$("#numbers").append(fizzbuzz);
			}
			else if (i%3 ==0) {
				var fizz = "<ol>" + "Fizz!" + "</ol>";
				$("#numbers").append(fizz);
			}
			else if (i%5 == 0) {
				var buzz = "<ol>" + "Buzz!" + "</ol>";
				$("#numbers").append(buzz);
			}
			else {
				var num = "<ol>" + i + "</ol>";
				$("#numbers").append(num);
			}
		}
	});



});
