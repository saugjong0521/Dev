window.onload = () => {

    /*
    가로 스크롤의 값을 세로 스크롤 값에 추가해서 전체 스크롤의 길이를 늘리는 구조

    */

    const wScrollTop = window.pageYOffset;  // 현재 나의 스크롤 위치
    const winH = window.innerHeight;    //브라우저 창의 높이
    const winW = window.innerWidth; //브라우저 창의 넓이
    console.log(wScrollTop)
    console.log(winH)
    
    const itemClass = 'slider';
    const itemActive = `${itemClass}-active`
    const itemEnd = `${itemClass}-end`

    const sliderSection = document.querySelectorAll('.horizental-scroll');

    sliderSection.forEach(el => {
        // 현재 sliderSection이 가지고 있는 위치값
        // sliderSection이 가지고 있는 가로 컨텐츠의 길이를 받아와야 함
        setActive(el);
        // setScroll();
    })
    console.log(contentY)


    function setActive(el){
        const contentY = el.getBoundingClientRect()
        // 각 요소의 크기와 위치를 받아옴 (현재 화면에 보이는지 체크하기 위함)
        el.querySelectorAll(`.${itemClass}`).forEach((itemClassEl) => {
            // 특정 요소에 있는 클래스를 제거
            itemClassEl.classList.remove(itemActive)
            itemClassEl.classList.remove(itemEnd)
        })

        if(contentY.bottom < 0){
            el.querySelectorAll(`${itemClass}`).forEach((itemClass) => {
                itemClassEl.classList.add(itemEnd)
            })
        }
    }

    function setScroll () {

    }

}