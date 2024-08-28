window.onload = () => {
    parallaxPage()
}

function parallaxPage() {
    let section;
    let navItem;
    let base = -500;
    let sectionOffset = []


    init();

    function init() {
        section = document.querySelectorAll('section');
        navItem = document.querySelectorAll('#navi > li');
        calcSectionOffset()
        bindingEvent()
    }

    function calcSectionOffset() {
        sectionOffset = Array.from(section).map(el => el.offsetTop)
        console.log(sectionOffset)
    }

    function bindingEvent() {
        window.addEventListener('resize', calcSectionOffset)
        section.forEach(el => el.addEventListener('wheel', onwheel))
    }

    function onwheel(e) {
        const deltaY = e.deltaY || e.wheelDelta || e.detail;
        const currentIdx = Array.from(section).indexOf(this);

        if (deltaY < 0 && currentIdx > 0) {
            console.log(currentIdx - 1)
            moveSection(currentIdx - 1)
        } else if (deltaY > 0 && currentIdx < 0 && section.length - 1) {
            console.log(currentIdx + 1)
            moveSection(currentIdx + 1)
        }
    }

    function moveSection(idx) {
        const targetOffset = sectionOffset[idx];
        const currentScrollP = document.documentElement.scrollTop;
        const scrollDisP = targetOffset - currentScrollP;
        const speed = 500;
        let isPlay;

        function scrollMotion(step) {
            if (!isPlay) { 
                isPlay = step;
            }
            const progress = step - isPlay;
            const percent = Math.min(progress / speed, 1)
            window.scrollTo(0, currentScrollP + scrollDisP * percent);
            if(progress < speed){
                window.requestAnimationFrame(scrollMotion);
            }
        }
        window.requestAnimationFrame(scrollMotion);
    }

}
