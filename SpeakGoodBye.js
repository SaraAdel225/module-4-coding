

var speakWord = "Good Bye"; 
var byeSpeaker = {}
byeSpeaker.speak = function speak(name) {
    console.log(speakWord + " " + name);
    document.write(`<h3>${speakWord+ " " + name} </h3>`)
}