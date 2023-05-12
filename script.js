function text2Audio(){
	let quote = document.getElementById("quote").innerHTML;
                
                let speech = new SpeechSynthesisUtterance();
                speech.lang = "en-US";
                
                speech.text = quote;
                speech.volume = 0.5;
                speech.rate = 1.1;
                speech.pitch = 1.2;
                
                window.speechSynthesis.speak(speech);
}
document.getElementById('play').addEventListener('click', text2Audio)

/*hover effect for text to speech icon*/
function playOut() {
    document.getElementById('play').src = 'assets/Sound.svg'
}
document.getElementById('play').addEventListener('mouseout', playOut)
function playOver() {
    document.getElementById('play').src = 'assets/greenSound.svg'
}
document.getElementById('play').addEventListener('mouseover', playOver)