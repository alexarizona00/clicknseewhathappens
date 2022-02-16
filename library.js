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
number = number.split('').reverse().join('')
alert(number)
console.log(number)
}
}