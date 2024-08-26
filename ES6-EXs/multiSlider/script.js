window.onload = () => {
    const bgSlider = document.querySelector('#slider')
    const mSlider = document.querySelector('#slider2')
    const next = document.querySelector('.next')
    const prev = document.querySelector('.prev')

    const speed = 1000;

    mobileSlider()
    function mobileSlider() {
        const itemUl = document.querySelector('#slider2 ul')
        const itemLi = document.querySelectorAll('#slider2 ul li')
        const itemCount = itemLi.length;
        console.log(itemCount)

        itemUl.style.width = `${100 * itemCount}%`;
        itemUl.style.height = '100%';
        itemUl.style.marginLeft = `-100%`;
        console.log(itemUl.style.height)

        itemLi.forEach((el) => {
            el.style.width = `${100 / itemCount}%`;
            el.style.height = `100%`;
            el.style.float = 'left'
            itemUl.insertBefore(itemLi[itemCount - 1], itemUl.firstChild)
        })
    }

    next.addEventListener('click', function () {
        nextSlide()
    })

    function nextSlide() {
        const itemUl = document.querySelector('#slider2 ul')
        const itemLiW = document.querySelector('#slider2 ul li').offsetWidth;
        console.log(itemLiW)

        console.log(itemUl)

        itemUl.style.marginLeft = `-${itemLiW * 2}px`
        itemUl.style.transition = `margin-left ${speed}ms`;

        setTimeout(() => {
            itemUl.appendChild(itemUl.querySelector(`li:first-of-type`))
            itemUl.style.marginLeft = `-${itemLiW}px`
            itemUl.transition = '';
        }, speed)

    }

    prev.addEventListener('click', function () {
        prevSlide()
    })

    function prevSlide() {
        const itemUl = document.querySelector('#slider2 ul')
        const itemLiW = document.querySelector('#slider2 ul li').offsetWidth;
        console.log(itemLiW)

        console.log(itemUl)

        itemUl.style.marginLeft = `${itemLiW/2}px`
        itemUl.style.transition = `margin-left ${speed}ms`;

        setTimeout(() => {
            itemUl.appendChild(itemUl.querySelector(`li:first-of-type`))
            itemUl.style.marginLeft = `-${itemLiW}px`
            itemUl.transition = '';
        }, speed)
    }



}
