/*

window.onload = () => {

    // 마우스가 스크롤 할 때마다 이미지가 확대되는 모션
    // 이미지의 확대되는 값은 모두 다르게 적용
    // 스크롤되는 양은 컨텐츠의 양과 비례

    const progress = document.querySelector('.progress');
    const imgs = document.querySelectorAll('.parallax_image');
    const imgsNum = imgs.length;

    // 문서의 전체 길이를 100%로 가정하고, 현재 스크롤되는 문서의 위치를 백분율로 표시
    let scrollTop = 0; //최초로 시작하는 스크롤 위치

    // 문서의 전체길이를 100%로 가정하고 현재 스크롤되는 문서의 위치를 백분률로 표시

    window.addEventListener('scroll', onScroll);

    function onScroll() {
        scrollTop = document.documentElement.scrollTop;
        // console.log(scrollTop)

        let documentH = document.body.clientHeight;
        let windowH = window.innerHeight;
        // console.log(documentH)

        const percent = Math.ceil(scrollTop / (documentH - windowH) * 100);
        console.log(percent)

        progress.style.width = percent + '%'

        imgs.forEach((el, index) => {
            const transZ = scrollTop / (imgsNum * (imgsNum - index))
            el.style.transform = `perspective(300px) translateZ(${transZ}px)`
        })

    }

}

*/


// 함수 리팩토링 작업

/*
리팩토링의 목적
1. 가독성
2. 유지보수
*/


window.onload = () => {
    perspectivePage()
}

function perspectivePage() {

    // 사용되는 변수를 선언
    let progress;
    let imgs;
    let imgsNum;
    let scrollTop;
    let documentH;
    let windowH;
    let percent;
    let transZ;

    // 실행 시점에 문서 높이와 창 높이를 초기화
    updateDemensions() 

    // 기능별 함수 분리
    init()  // 초기화, 초깃값 함수
    bindingEvent()  // 이벤트 함수들

    function init() {   // 초기화가 필요하거나, 초깃값이 정해져 있는 변수들
        progress = document.querySelector('.progress');
        imgs = document.querySelectorAll('.parallax_image');
        imgsNum = imgs.length;
        scrollTop = 0;
    }

    function bindingEvent() {
        window.addEventListener('scroll', onScroll)
    }

    function updateDemensions() {
        documentH = document.body.clientHeight;
        windowH = window.innerHeight;
    }

    function onScroll(){
        scrollTop = document.documentElement.scrollTop;
        percent = Math.ceil(scrollTop / (documentH - windowH) * 100)

        progress.style.width = percent + '%'

        imgs.forEach((el, idx) => {
            transZ = scrollTop / (imgsNum * (imgsNum - idx));
            el.style.transform = `perspective(300px) translateZ(${transZ}px)`
        });

    }

}