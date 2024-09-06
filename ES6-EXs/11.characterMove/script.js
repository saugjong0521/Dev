window.onload = () => {


    window.addEventListener('mousemove', (e) => {
        const img = document.querySelector('.pic li.on img');
        const deco2 = document.querySelector('.deco2 img');
        const deco3 = document.querySelector('.deco3 img');

        moveImg(img, e, 30, true);  //괄호 안의 내용은 넘겨줄 애들
        moveImg(deco2, e, 100, false)
        moveImg(deco3, e, 100, false)

    })

    function moveImg(el, e, speed, reverse) {
        let x;
        let y;
        if (reverse) {
            x = -e.pageX;
            y = -e.pageY
        } else {
            x = e.pageX;
            y = e.pageY
        }

        el.style.left = x / speed + 'px';
        el.style.top = y / speed + 'px';
    }

}