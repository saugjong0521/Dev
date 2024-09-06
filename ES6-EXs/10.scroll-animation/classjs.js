class ScrollAnimation {
    constructor(option = {}) {
        // 위의 option은 생성자에 전달되는 매개변수
        this.opt = Object.assign({
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
        // 아래의 경우, 이미지가 한장만 로드되는 것이 아닌, 여러장을 묶어서 로드해야 하기 때문에, 초기값으로 이미지를 넣고, 이후 init에서 함수를 통해 분리해서 지연시간을 가지게 한다.
        this.el.appendChild(this.canvas);
        for (let i = 0; i < this.imgLength; i++) {
            const img = new Image();    // 반복문을 돌면서 계속 새로운 이미지 객체를 생성
            const imgPath = `${this.imgSrc}${i}${this.imgFormat}`;  // 이미지 경로 생성
            img.src = imgPath;  // 적용

            img.onload = () => {
                this.currentImg += 1;
                if (this.currentImg === this.imgLength) {
                    this.setProperty();
                    this.scrollFunc();
                }
            }
            this.imgArr.push(img)
        }
    }
    setProperty() {
        this.scrollHeight = this.scrollBody.offsetHeight;
        this.winScrollTop = window.pageYOffset;
        this.sectionOffsetTop = this.scrollBody.getBoundingClientRect().top + this.winScrollTop;
        this.scrollRealHeight = this.scrollHeight - window.innerHeight;
        this.sectionScrollTop = this.winScrollTop - this.sectionOffsetTop;
        this.scrollPercent = this.sectionScrollTop / this.scrollRealHeight;
        this.percent = this.scrollPercent * 100;

        //스크롤 높이가 0이하일때 처리
        if (this.scrollRealHeight <= 0) {
            this.scrollPercent = 0;
        }

        this.canvas.width = this.imgWidth;
        this.canvas.height = this.imgHeight
    }

    scrollFunc() {
        const sequence = Math.min(this.imgLength - 1, Math.max(0, Math.floor(this.imgLength * this.scrollPercent)))
        if (this.imgArr[sequence]) {
            this.renderCanvas(sequence);
        }
    }
    renderCanvas(sequence) {
        this.ctx.clearRect(0, 0, this.imgWidth, this.imgHeight);
        this.ctx.drawImage(this.imgArr[sequence], 0, 0, this.imgWidth, this.imgHeight);
    }
}