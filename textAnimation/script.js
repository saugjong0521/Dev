
window.onload = () => {
    textAnimation();
}

function textAnimation() {
    const item = document.querySelectorAll('.word-box');
    let currentIndex = 0;

    currentIndex = (currentIndex + 1) % item.length;
    item[currentIndex].classList.remove('out');
    item[currentIndex].style.opacity = 0;

    item[currentIndex].classList.add('in')
}