console.log("Test")


document.querySelector('.speaker').addEventListener('click', function() {
    const speechText = 'Wat zie je om je heen met een blauwe kleur?';
    const utterance = new SpeechSynthesisUtterance(speechText);
    utterance.lang = 'nl-NL';
    speechSynthesis.speak(utterance);
});

