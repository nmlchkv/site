document.addEventListener('DOMContentLoaded', () => {
    const text = "404 - Page Not Found";
    const container = document.getElementById('text-container');

    // Разделяем текст на буквы и создаём элементы
    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.classList.add('letter');
        // Задаём задержку для каждой буквы
        span.style.animationDelay = `${index * 0.2}s`;
        container.appendChild(span);
    });
});
