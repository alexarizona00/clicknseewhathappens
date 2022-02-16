function doStuff(){

    changeColor()
    alert(randomWords())


}



function changeColor() {
    document.getElementById("titlename").style.color = randomColors();
    document.body.style.background = randomColors();
  

   
}

function randomColors() {
    return 'rgb('+getSmallinteger(255)+','+getSmallinteger(255)+','+getSmallinteger(255)+')'

}


function getSmallinteger(max) {

   var small = Math.random() * max 
   small = Math.round(small) 
   return small
  }

function randomWords() {
var sentences= [
    'out of words',
    'your internet supply has been depleted',
    'the time has run out',
    'the internet has disappeared',
    'you have become invisible',
'asdasdasdasdasdasd',]
var small = getSmallinteger(sentences.length);
console.log(small)
    return sentences[small]
}

