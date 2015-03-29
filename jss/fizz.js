$(document).ready(function(){


$("#btn2").click(function(){
     
for (i=1; i<=100; i++) {
var p = document.createElement("p");
p.textContent = i;
document.getElementById("numbers").appendChild(p);

if (i%15 == 0) {
p.textContent = "fizzbuzz";

}else if (i%3 == 0) {
p.textContent = "fizz";
}else if (i%5 == 0) {
p.textContent = "buzz";
}
}

});	






});
//for(i=1; i<=100; i++) {
    //if (i%15==0) {
    //console.log("FizzBuzz");
//}
    
    //else if (i%3==0) {
    //console.log("Fizz");
//}

    //else if (i%5==0) { 
    //console.log("Buzz");
//}

    //else {
    //console.log(i);      
//}
//}

