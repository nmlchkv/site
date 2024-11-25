let character = document.getElementById('character');
let lettersContainer = document.getElementById('letters');
let gameOverText = document.getElementById('game-over');
let isJumping = false;
let score = 0;

// Текст, через который персонаж будет прыгать
const text = "404 - Page Not Found";

// Функция для создания букв
function createLetters() {
    let letters = text.split('');
    lettersContainer.innerHTML = '';
    
    letters.forEach((char, index) => {
        let letter = document.createElement('span');
        letter.textContent = char;
        letter.classList.add('letter');
        letter.style.animationDelay = `${index * 0.2}s`;
        lettersContainer.appendChild(letter);
    });
}

// Функция прыжка
function jump() {
    if (isJumping) return;
    isJumping = true;
    character.style.transform = 'translateY(-150px)'; // Прыжок
    setTimeout(() => {
        character.style.transform = 'translateY(0)';
        isJumping = false;
    }, 300);
}

// Обработчик нажатия клавиши
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        jump();
    }
});

// Проверка столкновений с буквами
function checkCollisions() {
    let characterRect = character.getBoundingClientRect();
    let letters = document.querySelectorAll('.letter');

    letters.forEach((letter) => {
        let letterRect = letter.getBoundingClientRect();

        if (
            characterRect.bottom >= letterRect.top &&
            characterRect.top <= letterRect.bottom &&
            characterRect.right >= letterRect.left &&
            characterRect.left <= letterRect.right
        ) {
            gameOver();
        }
    });
}

// Функция окончания игры
function gameOver() {
    gameOverText.style.display = 'block';
    lettersContainer.style.animationPlayState = 'paused'; // Останавливаем движение букв
    clearInterval(gameLoop);
}

// Основной игровой цикл
function gameLoop() {
    createLetters();
    checkCollisions();
}

// Запуск игрового цикла
setInterval(gameLoop, 100);

// Стартовая анимация
createLetters();
