$(document).ready(function(){

$('#btn1').click(function(){
	return fbGame();
});

var fbGame = function() {
var un = +prompt("Enter a number from 1 to infinity");
var fizz = "FIZZ!";
var buzz = "BUZZ!";
var fizzBuzz = "FIZZBUZZ!!";






if (un % 1 != 0) {
	alert("no decimals and no letters allowed");
}

else {
	for (var i = 1; i <= un; i++) {
		if (i % 15 === 0) {
			$("p").append("FIZZBUZZ");
}
		else if (i % 3 === 0) {
			$("p").append("FIZZ");
}
		else if (i % 5 === 0) {
			$("p").append("BUZZ");
}
		else {
			$("p").append(i);
}
}
}
}
});