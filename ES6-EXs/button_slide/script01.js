window.onload = () => {
    slider();
}

function slider() {

    const slider = document.querySelector('#slider');
    const panel = document.querySelector('.panel')
    const panelItem = document.querySelectorAll('.panel > li');
    const btnItem = document.querySelectorAll('.navi > li');

    let speed = 500;

    const circle = document.querySelector('#clrcle');

    btnItem.forEach(el => {
        el.addEventListener('click', onClick)
    })

    function onClick() {
        const idx = Array.from(btnItem).indexOf(this)
        //console.log(idx)
        const panelWidth = parseInt(getComputedStyle(slider).width);
        // getComputedStyle(선택자): 선택자에 있는 모든 css속성값을 반환
        // console.log(panelWidth)

        /*
        btnItem.forEach(el => {
            el.classList.remove('on')
        })
        btnItem[idx].classList.add('on')

        panelItem.forEach(el => {
            el.classList.remove('on')
        })
        panelItem[idx].classList.add('on')
        */

        activeSlide(idx, btnItem);
        activeSlide(idx, panelItem);
        moveSlide(panel, {
            prop: 'left',
            val: panelWidth * idx,
            duration: speed
        })
    }

    function activeSlide(idx, item) {
        item.forEach(el => {
            el.classList.remove('on')
        })
        item[idx].classList.add('on')
    }

    function moveSlide(el, opt) {
        // console.log(opt)
        let startActive = performance.now();
        //performance.now(): 애니메이션이 실행되는데 걸리는 시간을 모니터링
        console.log(startActive)
        let currentVal; // 현재 애니메이션이 적용되는 객체의 속성을 전달해줄 변수

        if(opt.prop == 'opactiy'){
            currentVal = parseFloat(getComputedStyle(el)[opt.prop])
            console.log(currentVal)
        } else{
            currentVal = parseFloat(getComputedStyle(el)[opt.prop])
            console.log(currentVal)
        }

        if(currentVal !== opt.val){
            requestAnimationFrame(slide)
        }

    }



}