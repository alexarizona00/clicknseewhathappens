function doStuff() {
    showAlert()
}
var vowels = "aeiou";
var result = ""


function showAlert() {

    var number = prompt("Type Something, except racecar")
    console.log(number)
    letterCount = number.length;
    console.log(letterCount)
    if (letterCount < 5) {
        alert("enter more text please")
    }
    else {


        console.log(result)
        brokenDownString = number.split('')
        var testy = '';
        console.log(brokenDownString)
        for (i=0; i < letterCount; i++){
                      
            testy += brokenDownString[i] + '.' + vowels.charAt(Math.floor(Math.random() * 4));

        }

        

        }
        alert(testy)
    }
