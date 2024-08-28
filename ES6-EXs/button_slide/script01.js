window.onload = () => {
    slider();
}

function slider() {

    const slider = document.querySelector('#slider');
    const panel = document.querySelector('.panel')
    const panelItem = document.querySelectorAll('.panel > li');
    const btnItem = document.querySelectorAll('.navi > li');

    let speed = 500;
    let timer;
    let enableClick = true; // 애니메이션 중, 중복 클릭이되어 이상해지는 것을 방지

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

        if (enableClick = true) {
            activeSlide(idx, btnItem);
            activeSlide(idx, panelItem);
            moveSlide(panel, {
                prop: 'left',
                val: -panelWidth * idx,
                duration: speed
            })
        }
        enableClick = false;

        activeSlide(idx, btnItem);
        activeSlide(idx, panelItem);
        moveSlide(panel, {
            prop: 'left',
            val: -panelWidth * idx,
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

        if (opt.prop == 'opactiy') {
            currentVal = parseFloat(getComputedStyle(el)[opt.prop])
            console.log(currentVal)
        } else {
            currentVal = parseFloat(getComputedStyle(el)[opt.prop])
            console.log(currentVal)
        }

        if (currentVal !== opt.val) {
            requestAnimationFrame(slide)
        }

        function slide(time) {
            let lastTime = time - startActive;
            let currentTime = lastTime / opt.duration;

            /*
            currentTime은 애니메이션이 얼마나 진행되었는지 받아오는 변수
            보통 0~1 사이의 값을 가지고 있다.
            0 = 시작 전, 1 = 완료
            */

            console.log(currentTime)    // 1 초과

            // currentTime이 0보다 작으면 currentTime을 0으로 설정
            // 0보다 아래인 음수로 처리되는 경우를 방지하기 위해서 최소값을 0으로 제한
            if (currentTime < 0) {
                currentTime = 0
            }
            // currentTime이 1보다 클 경우 최대값을 1으로 설정
            // duration값보다 애니메이션이 더 진행되는 경우를 방지
            if (currentTime > 1) {
                currentTime = 1
            }
            console.log(currentTime)    // 1으로 고정



            if (currentTime < 1) {
                timer = requestAnimationFrame(slide)
            } else {
                cancelAnimationFrame(timer)
                enableClick = true;
            }

            let result = currentVal + (opt.val - currentVal) * currentTime;
            if (opt.prop === 'opacity') {
                el.style[opt.prop] = result;
            } else {
                el.style[opt.prop] = result + 'px';
            }
        }
    }



}