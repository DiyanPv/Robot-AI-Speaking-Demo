const submitBtn = document.querySelector(`#btn`);
console.log(submitBtn);
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition()
submitBtn.classList.add(`initial`)


recognition.onstart = function () {
    console.log(`Speech recognition started`);
    submitBtn.textContent = `Listening...`
    submitBtn.style.backgroundColor = `gray`
    submitBtn.classList.add(`btn-before`)




}

recognition.onresult = function (e) {
    let sentence = e.results[0][0].transcript;
    console.log(sentence);
    computerSpeech(sentence);
    submitBtn.textContent = `Ask me a question`
    submitBtn.style.backgroundColor = `gray`
    submitBtn.style.width = `30%`

    submitBtn.classList.remove(`btn-before`)
    submitBtn.classList.add(`initial`)

}
function computerSpeech(sentenceInput) {
    const speech = new SpeechSynthesisUtterance();
    speech.lang = `en-US`;
    speech.pitch = 1.4;
    speech.volume = 1.1;
    speech.rate = 1.4;
    speech.text = sentenceInput
    determineFeedback(sentenceInput, speech);
    window.speechSynthesis.speak(speech)
}

function determineFeedback(input, output) {
    if (input.includes(`how are you`)) {
        output.text = `I am fine, thank you very much!`
    }
    if (input.includes(`hungry`)) {
        output.text = `It would be best to eat then!`
    }
    else if (input.includes(`Facebook`)) {
        output.text = `Opening Facebook!`;
        window.open(`https://www.facebook.com/`)

    }
    if (input.includes(`YouTube`)) {
        output.text = `Opening Youtube so you may watch videos immediately`;
        window.open(`https://www.youtube.com/`)
    }
    if (input.includes(`Instagram`)) {
        output.text = `Opening Instagram`
        window.open(`https://www.instagram.com/`)
    }
    if (input.includes(`weather today`)) {
        output.text = `Look out of your window please`
    }
    if (input.includes(`i want a phone`)) {
        output.text = `Go buy one from the store nearby!`
    }
    if (input.includes(`sad`)) {
        output.text = `Everything will get better, I promise`
    }
    if (input.includes(` a joke`)) {
        output.text = `I am not trained enough yet!`
    }
    if (input.includes(`you smart`)) {
        output.text = `You can answer that yourself based on your experience with me!`
    }
    if (input.includes(`I smart`)) {
        output.text = `You sure are smart!`
    }
    if (input.includes(`zoo`)) {
        output.text = `Please show me pictures of the animals when you come back!`
    }
    if (input.includes(`do you have friends`)) {
        output.text = `You are one of my best friends!`
    }
    if (input.includes(`should I have friends`)) {
        output.text = `Be extra careful when choosing your friends!`
    }

}




submitBtn.addEventListener(`click`, (e) => {
    recognition.start()
})
