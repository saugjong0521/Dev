class ScrollAnimation {
    constructor(option = {}) {
        // 위의 option은 생성자에 전달되는 매개변수
        this.opt = object.assign({
            canvasWrap: this.canvasWrap,
            scrollBody: this.scrollBody,
            imgSrc: this.imgSrc,
            imgFormat: this.imgFormat,
            imgLength: this.imgLength
            // 객체를 만들어 두고 이후 window.onload를 통하여 어떤 값인지를 넣어줌
        }, option)
        // 여기의 option은 다른 함수에 전달될 매개변수

        //Object.assign은 객체를 복사해서 하나의 새로운 객체를 생성해주는 함수
        //주로, 여러개의 속성을 하나의 객체로 병합할때 쓰임

        //constructor에서 받아온 값
        this.el = document.querySelector(this.opt.canvasWrap)
        this.scrollBody = document.querySelector(this.opt.scrollBody)
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d')
        this.imgSrc = this.opt.imgSrc;
        this.imgFormat = this.opt.imgFormat;
        this.imgLength = this.opt.imgLength;

        //따로 설정되는 값
        this.imgWidth = window.innerWidth;
        this.imgHeight = window.innerHeight;
        this.imgArr = [];
        this.currentImg = 0;
        this.scrollHeight = 0;
        this.sectionOffsetTop = 0;
        this.sectionScrollTop = 0;
        this.scrollRealHeight = 0;
        this.winScrollTop = 0;
        this.scrollPercent = 0;
        this.percent = 0;

        this.init()
    }

    init() {
        this.el.appendChild(this.canvas);
        for (let i = 0; i < this.imgLength; i++) {

        }
    }
}