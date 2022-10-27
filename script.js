const texts = document.querySelector('.texts');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');

recognition.addEventListener('result', (e) => {
    const text = Array.from(e.results).map(result => result[0].transcript).join(" ");
    
    p.innerText = text;
    texts.appendChild(p)

    if(e.results[0].isFinal){
        if(text.includes('hello')){
            p = document.createElement('p');
            p.classList.add('reply');
            p.innerText = 'Hi';
            texts.appendChild(p)
        }

        if(text.includes('what is your name') || text.includes("what's your name")){
            p = document.createElement('p');
            p.classList.add('reply');
            p.innerText = 'Hi, My name is Saniya, Yours?';
            texts.appendChild(p)
        }

        if(text.includes('open YouTube') || text.includes('open my YouTube')){
            p = document.createElement('p');
            p.classList.add('reply');
            p.innerText = 'Opening YouTube';
            texts.appendChild(p);
            window.open('https://youtube.com')
        }

        if(text.includes('open Google')){
            p = document.createElement('p');
            p.classList.add('reply');
            p.innerText = 'Opening Google';
            texts.appendChild(p);
            window.open('https://google.com')
        }

        if(text.includes('open image')){
            p = document.createElement('p');
            p.classList.add('reply');
            texts.appendChild(p);
            window.open('giphy.gif')
        }

        p = document.createElement('p');
    }
})

recognition.addEventListener('end', () => {
    recognition.start();
})

recognition.start();