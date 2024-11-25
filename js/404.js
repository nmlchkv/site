
document.addEventListener('DOMContentLoaded', () => {
    console.log('404 Page Loaded');
    const title = document.querySelector('.error-title');
    title.style.transition = 'transform 1s ease-in-out';
    title.style.transform = 'rotate(360deg)';
});
