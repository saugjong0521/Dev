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
    }

    function calcSectionOffset() {
        sectionOffset = Array.from(section).map(el => el.offsetTop)
        
    }

}