class ScrollAction {
    constructor(el) {
        init(el)  
        checkPosition() //현재 위치를 찾고 전달
        activeScroll()  //횡스크롤 시작
        endScroll() //횡스크롤 종료
    }

    init(el) {
        this.currentScroll = window.pageYOffset
        this.winH = window.innerHeight
        this.winW = window.innerWidth

        this.itemActive = `slider-active`
        this.itemEnd = `slider-end`

        this.sliderSection = document.querySelectorAll(el)
    }
    
    checkPosition () {

        
    }

}