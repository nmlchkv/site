document.addEventListener('DOMContentLoaded', () => {
  const text = document.getElementById('falling-text');
  const letters = text.querySelectorAll('span');

  letters.forEach(letter => {
    const randomDelay = Math.random() * 2 + 's';  // Random delay between 0 and 2 seconds
    letter.style.animationDelay = randomDelay;
  });
});
