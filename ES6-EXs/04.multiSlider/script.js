/*
window.onload = () => {
    const bgSlider = document.querySelector('#slider')
    const mSlider = document.querySelector('#slider2')
    const next = document.querySelector('.next')
    const prev = document.querySelector('.prev')

    const speed = 1000;

    mobileSlider()
    function mobileSlider() {
        const itemUl = mSlider.querySelector('ul')
        const itemLi = itemUl.querySelectorAll('li')
        const itemCount = itemLi.length;
        console.log(itemCount)

        itemUl.style.width = `${100 * itemCount}%`;
        itemUl.style.height = '100%';
        itemUl.style.marginLeft = `-100%`;
        console.log(itemUl.style.height)

        itemLi.forEach((el) => {
            el.style.width = `${100 / itemCount}%`;
            el.style.height = `100%`;
            el.style.float = 'left';
        })
        itemUl.insertBefore(itemLi[itemCount - 1], itemUl.firstChild)

    }

    next.addEventListener('click', function () {
        nextSlide()
    })

    function nextSlide() {
        const itemUl = mSlider.querySelector('ul')
        const itemLiW = itemUl.querySelector('li').offsetWidth;

        itemUl.style.transition = `margin-left ${speed}ms`;
        itemUl.style.marginLeft = `-${itemLiW * 2}px`

        setTimeout(() => {
            itemUl.appendChild(itemUl.querySelector('li:first-of-type'))
            itemUl.style.marginLeft = `-${itemLiW}px`
            itemUl.style.transition = '';
        }, speed)

    }

    prev.addEventListener('click', function () {
        prevSlide()
    })

    function prevSlide() {
        const itemUl = mSlider.querySelector('ul')
        const itemLiW = itemUl.querySelector('li').offsetWidth;

        itemUl.style.transition = `margin-left ${speed}ms`;
        itemUl.style.marginLeft = `0px`
        //0px는 이동거리가 아닌 좌표에 대한 값

        setTimeout(() => {
            itemUl.prepend(itemUl.querySelector('li:last-of-type'))
            itemUl.style.marginLeft = `-${itemLiW}px`
            itemUl.style.transition = '';
        }, speed)
    }

}
*/


window.onload = () => {
    const slider01 = document.querySelector('#slider')
    const slider02 = document.querySelector('#slider2')

    //버튼
    const next = document.querySelector('.next')
    const prev = document.querySelector('.prev')

    //기타
    const speed = 1000

    let timer;
    let nextTimer;
    let enableClick = true;
    //버튼을 클릭할때 임의적으로 상태값을 전달


    autoSlider()

    init(slider01, slider02)  // init = 초기값을 설정하는 함수를 지칭할때 init이라는 함수명을 자주 사용한다.

    function init(...items) {
        console.log(items)
        items.forEach((el) => {
            const itemCount = el.querySelectorAll('li').length;
            const itemUl = el.querySelector('ul')
            const itemLi = el.querySelectorAll('li')

            //ul
            itemUl.style.width = `${100 * itemCount}%`
            itemUl.style.height = `100%`
            itemUl.style.marginLeft = `-100%`

            //li
            itemLi.forEach((li) => {
                li.style.width = `${100 / itemCount}%`
                li.style.height = `100%`
                li.style.float = 'left'

            })
            itemUl.insertBefore(itemLi[itemCount - 1], itemUl.firstChild)
        })
    }

    //next
    next.addEventListener('click', () => {
        //nextSlider(slider01);
        //nextSlider(slider02)

        if(enableClick){
            clearInterval(timer)
            clearTimeout(nextTimer)
            nextSlider(slider01, slider02);
            enableClick = false;

            nextTimer = setTimeout(()=>{
                autoSlider()
            },5000)
        }
    })
    /*
    버튼을 클릭해서 슬라이드 이동시 조건
    1. 버튼을 여러번 클릭했을때에도 이벤트가 중첩되지 않아야 함
    2. 자동 슬라이드 기능이 멈춰야 함
    3. next버튼이 활성화될 수 있도록 enableClick의 값을 true로 바꾸는 시점?
    4. 버튼을 클릭 후 일정시간동안 다른 입력이 없다면 오토슬라이드를 실행
    */

    function nextSlider(...items) {
        items.forEach((el) => {
            onNextSlider(el)
        })
    }

    function onNextSlider(el) {
        const itemUl = el.querySelector('ul')
        const itemLiW = el.querySelector('li').offsetWidth;

        itemUl.style.transition = `margin-left ${speed}ms`
        itemUl.style.marginLeft = `-${itemLiW * 2}px`

        setTimeout(() => {
            itemUl.appendChild(itemUl.querySelector('li:first-of-type'))
            itemUl.style.marginLeft = `-${itemLiW}px`
            itemUl.style.transition = '';
            enableClick = true; // 한번의 슬라이드 전환이 완료되면 다음 클릭이벤트를 실행할 수 있도록 true로 변경
        }, speed)
        /* 이벤트에서 전개 연산자(...items)을 사용하지 않는 이유는 nextslider와 같은 함수는 특정 슬라이더에
        대한 동작을 정의하기 때문에 매번 한개의 객체를 받아와서 처리하도록 하는 것이 안정하다.addEventListener
        
        전개연산자 특성상 여러 인자를 배열 형태로 받아오게 되는데, 한번에 초기화 하거나 처리할때에 유용하다.addEventListener
        */
    }

    prev.addEventListener('click', function () {
        prevSlider(slider01, slider02)
    })

    function prevSlider(...items) {
        items.forEach((el) => {
            onPrevSlider(el)
        })
    }

    function onPrevSlider(el) {
        const itemUl = el.querySelector('ul')
        const itemLiW = el.querySelector('li').offsetWidth;

        itemUl.style.transition = `margin-left ${speed}ms`
        itemUl.style.marginLeft = `0px`

        setTimeout(() => {
            itemUl.prepend(itemUl.querySelector('li:last-of-type'))
            itemUl.style.marginLeft = `-${itemLiW}px`
            itemUl.style.transition = '';
        }, speed);

    }


    function autoSlider() {
        timer = setInterval(() => {
            nextSlider(slider01)
            nextSlider(slider02)
        }, 2000)
    }
}









