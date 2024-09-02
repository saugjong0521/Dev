

window.onload = () => {

    slider();
}

function slider() {

    const slider = document.querySelector('#slider');

    const panel = document.querySelector('.panel');
    const panelItem = document.querySelectorAll('.panel > li');
    const btnItem = document.querySelectorAll('.navi > li');

    const circle = document.querySelector('#circle');

    let speed = 500
    let timer;
    let enableClick = true


    btnItem.forEach((el) => {
        el.addEventListener('click', onClick)
        // el.enableClick = false;
    })

    function onClick() {
        const idx = Array.from(btnItem).indexOf(this)
        // console.log(idx)
        const paenlWith = parseInt(getComputedStyle(slider).width)
        //getComputedStyle(선택자) 선택자에 있는 모든 css 속성값을 반환
        // console.log(paenlWith)

        if (enableClick) {
            activeSlide(idx, btnItem);
            activeSlide(idx, panelItem);
            moveSlide(panel, { prop: 'left', val: -paenlWith * idx, duration: speed })
            enableClick = false;
        }

        circle.className = '';
        circle.classList.add(`rot${idx+1}`)
        
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
        //performance.now() 애니메이션이 실행되는데 걸리는 시간을 모니터링
        // console.log(startActive);
        let currentVal; //현재 애니메이션이 적용되는 객체의 속성을 전달해줄 변수

        if (opt.prop === 'opacity') {
            currentVal = parseFloat(getComputedStyle(el)[opt.prop])
            

        } else {
            currentVal = parseInt(getComputedStyle(el)[opt.prop])

        }
        //getComputedStyle로 left나 opaticy의 속성값을 가져옴
        //opacity는 소숫점 사용하기에 parseFloat, left는 정수이므로ㅓ parseInt

        if (currentVal !== opt.val) {
            requestAnimationFrame(slide)
        }

        function slide(time) {
            //slide는 requestAnimationFrame의 프레임을 처리
            let lastTime = time - startActive;
            //애니메이션이 시작된 이후 경과된 시간을 계산
            let currentTime = lastTime / opt.duration;
            //전체 애니메이션 시간에 대한 경과시간의 비율
            // console.log(currentTime)

            /*
            currentTime 은 애니메이션이 얼마나 진행되었는지 받아오는 변수
            보통 0~1 사이의 값을 가지고 있다.
            0 = 시작전, 1은 완료
            
            */

            if (currentTime < 0) {
                currentTime = 0
            }
            //currenttime이 0보다 작으면 currentitme을 0으로 설정
            //0보다 아래인 음수로 처리되는 경우를 방지하지 위해서 최소값을 0으로 제한
            if (currentTime > 1) {
                currentTime = 1
            }
            //currenttime이 1보다 클 경우 최대값을 1로 설정
            //duration값보다 애니메이션이 더 진행되는 것을 방지하기 위해서 설정
            // console.log(currentTime)



            if (currentTime < 1) {
                timer = requestAnimationFrame(slide);
            } else {
                cancelAnimationFrame(timer);
                enableClick = true
            }

            let result = currentVal + (opt.val - currentVal) * currentTime;
            if (opt.prop === 'opacity') {
                el.style[opt.prop] = result
            } else {
                el.style[opt.prop] = result + 'px'
            }
        }
    }


}

/*
requestAnimationFrame과 setinterval의 차이

requestAnimationFrame
-브라우저가 브라우저가 화면을 새로 갱신하기 전에 호출된 콜백 함수를 실행
-브라우저가 새로 갱신하는 시간이 보통 초당 60프레임을 실행
-브라우저가 갱신되는 시간과 동기화해서 사용
-화면갱신과 동기화해서 사용하기 때문에 애니메이션이 좀 더 부드럽게 실행
-메모리 사용면에서도 효율적
-브라우저가 표현할 수 있는 최적의 프레임(60fps, 16ms마다 한번씩 랜더링 할때마다 콜백함수를 실행)


setinerval
-특정 지점에서 애니메이션을 실행하도록 하는 메서드
-지정된 시간 간격마다 콜백함수를 반복 실행(화면이 랜더링되는 시간은 체크하지 않음)
-시간간격이 지날수록 프레임이 차이나기 시작
-브러ㅏ우저가 실행되고 있지 않아도 계속 실행되기 때문에 리소스의 낭비




*/