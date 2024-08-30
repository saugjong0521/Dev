
window.onload = () => {
    textAnimation();
}

function textAnimation() {
    const item = document.querySelectorAll('.word-box');
    let currentIndex = 0;

    function toggleAnimation() {

        item[currentIndex].classList.remove('in');
        item[currentIndex].classList.add('out');

        currentIndex = (currentIndex + 1) % item.length;
        item[currentIndex].classList.remove('out');
        item[currentIndex].classList.add('reset');
        item[currentIndex].style.opacity = 0;

        item[currentIndex].classList.remove('reset');
        item[currentIndex].classList.add('in');
        item[currentIndex].style.opacity = 1;
    }

    item[currentIndex].classList.add('in');
    item[currentIndex].style.opacity = 1;
    setInterval(toggleAnimation, 1500)
}