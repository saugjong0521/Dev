class ScrollAnimation {
    constructor(option = {}) {
        this.opt = object.assign({
            canvasWrap: this.canvasWrap,
            scrollBody: this.scrollBody,
            imgSrc: this.imgSrc,
            imgFormat: this.imgFormat,
            imgLength: this.imgLength
            // 객체를 만들어 두고 이후 window.onload를 통하여 어떤 값인지를 넣어줌
        }, option)
    }
}