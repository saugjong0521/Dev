window.onload = () => {


    window.addEventListener('mousemove', (e) => {
        const img = document.querySelector('pic li.on img');
        const deco2 = document.querySelector('deco2 img');
        const deco3 = document.querySelector('deco3 img');

        moveImg(img, e, 30, true);  //넘겨줄 애들
    })

    function moveImg(el, e, speed, reverse) {
        let x;
        let y;
        if (reversex) {
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