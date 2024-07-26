

const wordEl = document.querySelector('#word');
const wrongLetterEl = document.querySelector('#wrong-letter');
const playAgainButton = document.querySelector('#play-button');
const popup = document.querySelector('#container-popup');
const notification = document.querySelector('#container-notification');
const finalMessage = document.querySelector('#final-message');
const figureParts = document.querySelectorAll('.figure-part');

// Set of Words
const words = ['black', 'white', 'pink'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = ['p', 'i', 'n', 'k'];
const wrongLetters = [];

// Show hidden word
function displayWord(){
    wordEl.innerHTML = `
    ${selectedWord.split('').map(letter => `<span class="letter">${correctLetters.includes(letter) ? letter : ''}</span>`).join('')}
    `;

    const innerWord = wordEl.innerText.replace(/\n/g, '');
    
    if(innerWord === selectedWord){
        finalMessage.innerText = 'Congratulations';
        popup.style.display = 'flex';
    }
};  
displayWord();

// Reload page
playAgainButton.addEventListener('click', () => window.location.reload());