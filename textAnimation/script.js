
window.onload = () => {
    textAnimation();
}

function textAnimation() {
    const item = document.querySelectorAll('.word-box');
    let currentIndex = 0;

    currentIndex = (currentIndex + 1) % item.length;
}