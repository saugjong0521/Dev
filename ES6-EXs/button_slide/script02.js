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

    init() { //class 내에서 function은 생략
        let elOpt = {
            // 기본 선택자를 지정
            panel: this.panel,
            btns: this.btns,
            slideSpeed: this.slideSpeed

        }

        this.opt = Object.assign({}, elOpt, opt)
        // 선택자 객체에서 나열이 가능한 속성으로 복사해서 객체로 변환
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
    }

}