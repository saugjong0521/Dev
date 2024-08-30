/*
slick이나 swiper같은 라이브러리 형태로 특정 기능을 구현하여 객체화 하기

인스턴스의 갯수, 인스턴스가 사용하는 리소스의 양, 코드에 의해서 달라지지만
평균적으로 본다면 10개 미만에서는 큰 문제가 발생할 여지는 적다.

*/

class Slider {
    constructor(el, opt) {
        this.init(el, opt);
        this.bindingEvent();
    }

    init(el, opt) { //class 내에서 function은 생략
        let elOpt = {
            // 기본 선택자를 지정
            panel: this.panel,
            btns: this.btns,
            slideSpeed: this.slideSpeed

        }

        this.opt = Object.assign({}, elOpt, opt)
        // 선택자 객체에서 나열이 가능한 속성으로 복사해서 객체로 변환
        /*
        Object.assign() 하나 이상의 소스 객체에서 대상 객체로 속성을 복사해서 병합해주는 메소드
        첫번째로 받은 객체를 반환

        {}: 빈 객체를 생성 elOpt와 opt의 속성이 병합되서 들어감
            elOpt: 빈 객체에 복사될 객체
            opt: 객체의 속성이 elOpt에서 복사된 속성에 덮어쓰기 됨
        */
        this.frame = document.querySelector(el);
        this.panel = this.frame.querySelector(this.opt.panel);
        this.panelItem = this.panel.querySelectorAll('li');

        this.btns = this.frame.querySelector(this.opt.btns);
        this.btnsItem = this.btns.querySelectorAll('li');

        this.btnsArr = Array.from(this.btnsItem); // li를 배열로 변환
        this.slideSpeed = this.opt.slideSpeed; // 진행 시간을 설정
        this.enableClick = true;
        this.timer;

        console.log(el);
        console.log(this.opt)
        console.log(this.frame)
        console.log(this.panel)
        console.log(this.panelItem)
        console.log(this.btns)
        console.log(this.btnsItem)
        console.log(this.btnsArr)
    } // init

    bindingEvent() {
        this.btnsItem.forEach((el) => {
            el.addEventListener('click', () => {
                let activeIndex = this.btnsArr.indexOf(el) // this를 넣을시 오류(-1이 뜸) -> index를 못찾음 (화살표 함수)
                let isOn = el.classList.contains('on')
                let panelWidth = parseInt(getComputedStyle(this.frame).width)
                console.log(el)
                console.log(activeIndex)
                console.log(isOn)
                /*
                this를 사용하지 않는 이유
                 - this는 인스턴스 자체를 의미하기 때문에 현재 이벤트에서 찾으려는 객체와 거리가 멀다.
                 (일반 함수에서 this와 class에서의 this의 차이)
                */

                if (isOn) {
                    return;
                } // isOn이 true이면 슬라이드를 실행하지 않고 즉시 종료
                if (this.enableClick) {
                    this.animate(this.panel, {
                        prop: 'left',
                        val: -panelWidth * activeIndex,
                        duration: this.slideSpeed
                    })
                    this.activeSlide(activeIndex, this.btnsItem);
                    this.activeSlide(activeIndex, this.panelItem);
                    this.enableClick = false; // 초기화
                }
            })
        })


        /*
        구버전식 함수 -> 화살표 함수에 비해 구조가 매우 복잡해진다 (this의 의미가 다르기에)
        bindingEvent() {
            const self = this
            this.btnsItem.forEach(function (el) {
                el.addEventListener('click', function () {
                    let activeIndex = self.btnsArr.indexOf(el)
                    console.log(activeIndex)
                    console.log(this)
                })
            })
        }
            */
    } // event

    animate(item, option) {
        let startActive = performance.now()
        let currentVal;
        let self = this;
        /*
        this를 사용할때 변수에 담아서 사용하는 것과 this자체로 사용하는 것의 차이
        함수와 콜백함수를 처리할때 특정 컨텍스트 내에서 사용할때 차이가 발생
        let self = this 는 특정 컨텍스트 내부에서 this의 값을 캡쳐해서 저장한 값이 담겨져
        의미를 변하지 않도록 한다.
        */
        if (option.prop === 'opacity') {
            currentVal = parseFloat(getComputedStyle(item)[option.prop])
        } else {
            currentVal = parseInt(getComputedStyle(item)[option.prop])
        }

        if (currentVal !== option.val) {
            requestAnimationFrame(active);
        }

        function active(time) {
            let lastTime = time - startActive;
            let currentTime = lastTime / option.duration;

            if (currentTime < 0) {
                currentTime = 0;
            }
            if (currentTime > 1) {
                currentTime = 1;
            }
            if (currentTime < 1) {
                self.timer = requestAnimationFrame(active)
            } else {
                cancelAnimationFrame(self.timer);
                self.enableClick = true;
            }

            let result = currentVal + (option.val - currentVal) * currentTime;

            if (option.prop === 'opacity') {
                el.style[option.prop] = result
            } else {
                item.style[option.prop] = result + 'px';
            }
        }
    }

}