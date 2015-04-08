$(document).ready(function(){

$('#btn1').click(function(){
	return fbGame();
});

var fbGame = function() {
var un = +prompt("Enter a number from 1 to infinity");
var fizz = "<ol>" + "FIZZ!" + "</ol>";
var buzz = "<ol>" + "BUZZ!" + "</ol>";
var fizzBuzz = "<ol>" + "FIZZBUZZ!" + "</ol>";






if (un % 1 != 0) {
	alert("no decimals and no letters allowed");
}

else {
	for (var i = 1; i <= un; i++) {
		if (i % 15 === 0) {
			$("p").append(fizzBuzz);
}
		else if (i % 3 === 0) {
			$("p").append(fizz);
}
		else if (i % 5 === 0) {
			$("p").append(buzz);
}
		else {
			var num = "<ol>" + i + "</ol>";
			$("p").append(num);

}
}
}
}
});

