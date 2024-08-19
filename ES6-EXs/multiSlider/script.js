window.onload = () => {
    main()
}

function main() {

    /*
    1. 동작을 생각한다
    2. 선택자에 들어갈 메소드를 정리한다
    4. 동작에 따른 선택자 별 메소드를 넣을 변수를 설정한다
    5. 구현한다
    */

    const bgSlider = document.querySelector('#slider')
    const slider = document.querySelector('#slider2')

    const next = document.querySelector('.next')
    const prev = document.querySelector('.prev')

    phoneSlider();
    function phoneSlider() {
        const itemUl = slider.querySelector('ul')
        const itemLi = itemUl.querySelector('li')
        const itemSize = itemLi.length;
        console.log(itemSize)


        // ul 설정
        itemUl.style.width = `${100 * itemSize}%`;
        itemUl.style.height = `100%`;

        // li 설정
        itemLi.forEach((el) => {
            el.style.width = `${100 / itemSize}`
            el.style.height = `100%`
            el.style.float = 'left'
        })
    }


}