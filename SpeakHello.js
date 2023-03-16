var speakWord = "Hello";

var helloSpeaker = {}
helloSpeaker.speak = function speak(name) {
    console.log(speakWord + " " + name);
    document.write(`<h3>${speakWord+ " " + name} </h3>`)
}
