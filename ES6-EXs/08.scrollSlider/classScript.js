window.onload = () => {

    const scrollAction = new ScrollAction();
}

class ScrollAction {
    constructor() {

        // init으로 따로 빼면 가독성이 오히려 줄어들 것 같음
        this.currentScrollH = window.pageYOffset;
        this.winH = window.innerHeight;
        this.winW = window.innerWidth;
        this.itemClass = `slider`;
        this.itemActive = `slider-active`;
        this.itemEnd = `slider-end`;
        this.horizonSection = document.querySelectorAll('.horizontal-scroll')

        this.bindingEvent();
        

    }

    bindingEvent() {

        // 스크롤과 관련되어 정리
        window.addEventListener('scroll', () => {
            this.currentScrollH = window.pageYOffset;
            this.horizonSection.forEach(el => {
                this.setActive(el)
                this.activeScroll(el)   // 스크롤시 좌우 스크롤 적용

            })
        })

        // horizonSection과 관련되어 정리
        this.horizonSection.forEach(el => {
            this.setScroll(el);  
            this.setActive(el); // 좌우 스크롤 공간만큼 세로 스크롤에 만들어줌
        })


    }

    // horizonSection에 진입/진출 확인 및 클래스 추가/제거
    setActive(el) {
        const contentY = el.getBoundingClientRect();
                // console.log(contentY)

        el.querySelectorAll(`.${this.itemClass}`).forEach(e => {
            e.classList.remove(this.itemActive);
            e.classList.remove(this.itemEnd);
        })

        if (contentY.bottom < 0) {
            el.querySelectorAll(`.${this.itemClass}`).forEach((el) => {
                el.classList.add(this.itemEnd)
            })
        } else {
            el.querySelectorAll(`.${this.itemClass}`).forEach((el) => {
                if (contentY.top <= 0) {
                    el.classList.add(this.itemActive);
                } else if (contentY.bottom <= this.winH) {
                    el.classList.add(this.itemEnd)
                }
            })

        }

    }

    // 스크롤에 가로길이를 더하여 길이를 늘림
    setScroll(el){

        const sectionClass = el.classList[0]
        const contentWrapper = el.querySelector(`.${sectionClass}-item`);
        const contentWrapperScrollW = contentWrapper.scrollWidth;

        // 초기화, el(horizonSection의 내용을 받아와 넣어줌)
        el.contentWrapper = contentWrapper;
        el.contentWrapperScrollW = contentWrapperScrollW
        // console.log(this.contentWrapper)
        // console.log(el.contentWrapper)

        el.rightMax = -(el.contentWrapperScrollW - this.winW)

        el.style.height = `${el.contentWrapperScrollW}px`
        el.innerHeight = el.offsetHeight;
        
        el.transformX = '0';
        el.classList.add(`${sectionClass}-init`)

    }


    // 스크롤시 좌우 스크롤 적용
    activeScroll(el) {
        const scrollP = this.currentScrollH - el.offsetTop;
        const scrollCenter = scrollP / (el.innerHeight - (this.winH - this.winW))
        const transformP = scrollCenter * el.contentWrapperScrollW;
        let toTransform = -(transformP)
        toTransform = Math.min(0, toTransform);
        toTransform = Math.max(toTransform, el.rightMax)
        el.transformX = toTransform;
        el.contentWrapper.style.transform = `translateX(${el.transformX}px)`

    }


}
