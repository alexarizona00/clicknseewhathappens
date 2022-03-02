function doStuff() {
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

        console.log(result)
        var testy = '';
        for (const brokenDownString of number) {

            console.log(brokenDownString);
            testy += brokenDownString + vowels.charAt(Math.floor(Math.random() * 4));

        }
        alert(testy)
    }
}
