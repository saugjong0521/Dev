window.onload = () => {
    /*
    스크롤이 되는 값을 받아와서, 특정 위치에서 이미지를 교체해서 애니메이션처럼 보이게 하기

    특정 스크롤 위치에서 텍스트 나오게 하기
    */
    const scrollBody = document.querySelector('.fix_motion')
    const wrapper = document.querySelector('.canvas_wrap')
    const canvas = document.createElement('canvas') // canvas 태그 생성
    // console.log(canvas)
    // canvas 태그는 그래픽을 그리는 도화지의 기능을 하는 태그

    const ctx = canvas.getContext('2d')
    // getContext(): canvas태그에서 사용하는 메소드 중, 그림을 그리는 기능을 제공하는 메소드

    const imgSrc = './images/seq/';
    const imgFormat = '.jpg';
    const imgLength = 116;  // 들어갈 이미지의 갯수

    const imgArr = [];
    let imgCurrent = 0;
    // 이미지가 들어갈 배열

    let scrollH;
    let sectionOffsetTop;
    let sectionTop;
    let sectionRealH;
    let scrollW;
    let scrollPercent;
    let percent;
    // canvas를 넣기 위한 위치 요소

    init();

    function init() {
        wrapper.appendChild(canvas)

        for (let i = 0; i < imgLength; i++) {
            const img = new Image();
            const imgPath = `${imgSrc}${i}${imgFormat}`
            // console.log(imgPath) // 이미지 들어간 것 확인

            img.src = imgPath;

            img.onload = () => {
                imgCurrent += 1;
                if (imgCurrent === imgLength) {
                    setProperty();
                }
            }
        }

    }

    function setProperty(){
        scrollH = scrollBody.offsetHeight;  // scrollBody의 높이
        scrollW = window.pageYOffset;   //현재 스크롤의 위치
        sectionOffsetTop = scrollBody.getBoundingClientRect().top + scrollW;  // 페이지 상단에서 scrollBody의 위치
        console.log(sectionOffsetTop)

        sectionRealH = scrollH - window.innerHeight;
        sectionTop = scrollW - sectionOffsetTop;
        scrollPercent = sectionTop / sectionRealH * 100;

        console.log(        window.innerHeight
        )


        if(sectionRealH < 0){   //  최솟값 설정
            scrollPercent = 0
        }
        console.log(scrollPercent)

        
    }




}