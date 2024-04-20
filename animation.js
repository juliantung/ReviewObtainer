// Animation for text
const text1 = document.querySelector('.text1');
const text2 = document.querySelector('.text2');

text1.addEventListener('animationend', () => {
    window.location.href = 'rating.html'; // Redirect to the main rating program
});
