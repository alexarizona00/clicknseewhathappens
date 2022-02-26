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
    var testy = ''
for(const brokenDownString of number){
    
    console.log(brokenDownString);
    testy +='.';

    alert(testy)

  
}
}
}