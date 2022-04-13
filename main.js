const texts = document.querySelector('.texts');

window.SpeechRecognition = SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();

recognition.interimResults = true;

let p = document.createElement('p');

recognition.addEventListener('result', (e) => {
    console.log(e.results);
})

recognition.start();
