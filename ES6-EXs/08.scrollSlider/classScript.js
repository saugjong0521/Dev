window.onload = () => {

    const scrollAction = new ScrollAction();
}

class ScrollAction {
    constructor() {

        this.currentScrollH = window.pageYOffset;
        this.winH = window.innerHeight;
        this.winW = window.innerWidth;

        // Object.assign으로 가능
        this.itemClass = `slider`;
        this.itemActive = `slider-active`;
        this.itemEnd = `slider-end`;
        this.horizonSection = document.querySelectorAll('.horizontal-scroll')

        this.bindingEvent();


        /*
        1. bindingEvent = scroll시 일어날 함수들 입력
        2. 현재 위치를 읽어올 함수 -> el로 위치값 전달
        3. 특정 위치(horizonSection에 도달하면) slider-active적용
        4. 특정 위치가 끝나면 slider-end적용
        5. 해당 위치에

        */


    }

    bindingEvent() {

        this.horizonSection.forEach(el => {
            this.setScroll(el);
            this.setActive(el);
        })

        window.addEventListener('scroll', () => {
            this.currentScrollH = window.pageYOffset;
            this.horizonSection.forEach(el => {
                this.setActive(el)
                this.activeScroll(el)

            })
        })
    }

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

    setScroll(el){

        const sectionClass = el.classList[0]
        const contentWrapper = el.querySelector(`.${sectionClass}-item`);
        const contentWrapperScrollW = contentWrapper.scrollWidth;

        el.contentWrapper = contentWrapper;
        el.contentWrapperScrollW = contentWrapperScrollW

        el.rightMax = -(el.contentWrapperScrollW - this.winW)

        el.style.height = `${el.contentWrapperScrollW}px`
        el.innerHeight = el.offsetHeight;
        
        el.init = true;
        el.transformX = '0';
        el.classList.add(`${sectionClass}-init`)

    }



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
