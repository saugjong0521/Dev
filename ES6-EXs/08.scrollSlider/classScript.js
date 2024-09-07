class ScrollAction {
    constructor() {

        this.currentScrollH = window.pageYOffset;
        this.winH = window.innerHeight;
        this.winW = window.innerWidth;

        // Object.assign으로 가능
        this.itemClass.className = `slider`;
        this.itemActive.className = `slider-active`;
        this.itemEnd.className = `slider-end`;
        this.horizonSection = document.querySelectorAll('.horizontal-scroll')

        bindingEvent();



        /*
        1. bindingEvent = scroll시 일어날 함수들 입력
        2. 현재 위치를 읽어올 함수 -> el로 위치값 전달
        3. 특정 위치(horizonSection에 도달하면) slider-active적용
        4. 특정 위치가 끝나면 slider-end적용
        5. 해당 위치에

        */


    }

    bindingEvent() {
        window.addEventListener('scroll', () => {
            this.horizonSection.forEach(el, () => {
                activeScroll(el)

            })
        })
    }

    activeScroll(el){
        this.contentY = el.getBoundingClientRect();

        el.querySelectorAll(this.itemClass).forEach(e => {
            e.classList.remove(this.itemActive);
            e.classList.remove(this.itemEnd);
        })

        if(contentY < 0){
            el.classList.add(this.itemEnd)
        }



    }

}