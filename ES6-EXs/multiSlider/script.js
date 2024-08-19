window.onload = () => {


    const bgSlider = document.querySelector('#slider')
    const slider = document.querySelector('#slider2')

    const next = document.querySelector('.next')
    const prev = document.querySelector('.prev')

    const speed = 1000;

    phoneSlider();
    function phoneSlider() {
        const itemUl = slider.querySelector('ul')
        const itemLi = itemUl.querySelectorAll('li')
        const itemSize = itemLi.length;
        console.log(itemSize)


        // ul 설정
        itemUl.style.width = `${100 * itemSize}%`;
        itemUl.style.height = `100%`;
        itemUl.style.marginLeft = `-100%`

        // li 설정
        itemLi.forEach((el) => {
            el.style.width = `${100 / itemSize}`
            el.style.height = `100%`
            el.style.float = 'left'
        })
        itemUl.insertBefore(itemLi[itemSize - 1], itemUl.firstChild)
    }

    next.addEventListener('click', function () {
        nextSlider();
    })

    function nextSlider() {
        const itemUl = slider.querySelector('ul')
        const itemLiW = itemUl.querySelector('li').offsetWidth
        console.log(itemLiW)

        itemUl.style.transition = `margin-left ${speed}ms`;
        itemLiW.style.marginLeft = `-${itemLiW * 2}px`

        setTimeout(()=>{
            itemUl.appendChild(itemUl.querySelector(`li:first-of-child`))
            itemUl.style.marginLeft = `-${itemLiW}px`
        },speed)
    }

}