

const wordEl = document.querySelector('#word');
const wrongLetterEl = document.querySelector('#wrong-letters');
const playAgainButton = document.querySelector('#play-button');
const popup = document.querySelector('#container-popup');
const notification = document.querySelector('#container-notification');
const finalMessage = document.querySelector('#final-message');
const figureParts = document.querySelectorAll('.figure-part');

// Set of Words
const words = ['black', 'white', 'pink', 'silver', 'blue', 'navy'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = [];
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

// Update the wrong letters
function updateWrongLettersEl(){
    wrongLetterEl.innerHTML = `
        ${wrongLetters.length > 0 ? '<p>Wrong</p>' : ''}
        ${wrongLetters.map(letter => `<span>${letter}</span>`)}
    `;

    // Add figure parts
    figureParts.forEach((part, index) => {
        const errors = wrongLetters.length;

        if(index < errors){
            part.style.display = 'block';
        } else {
            part.style.display = 'none';
        }
    });
}

// Show notification
function showNotification(){
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show')
    }, 1000);

}

// Keydown letter press
window.addEventListener('keydown', (e) => {
    // Only letters allowed
    if(e.keyCode >= 65 && e.keyCode <= 90){
        const letter = e.key;
        
        if(selectedWord.includes(letter)){

            if(!correctLetters.includes(letter)){

                correctLetters.push(letter);
                displayWord();

            } else {
                showNotification();
            }
            
        } else {
            if(!wrongLetters.includes(letter)){
                wrongLetters.push(letter);
                updateWrongLettersEl();
            } else {
                showNotification();
            }
        }

    }


}) ;


// Reload page
playAgainButton.addEventListener('click', () => window.location.reload());