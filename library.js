function doStuff(){
    showAlert()
}



function showAlert() {

var number = prompt("Type Something, except racecar")
console.log(number)
letterCount = number.length;
console.log(letterCount)
if (letterCount < 5) {
alert("enter more text please")
}
else {
    var vowels = "aeiou";
var result = ""
var vowelsLength = vowels.length;
    result += vowels.charAt(Math.floor(Math.random() * vowelsLength));
}

console.log(result)
    var testy = '';
    var chosenOne = result
    console.log(chosenOne)
for(const brokenDownString of number){
    
    console.log(brokenDownString);
    testy += brokenDownString + chosenOne
 
}
alert(testy)
}
