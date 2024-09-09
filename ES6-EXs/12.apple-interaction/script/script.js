(() => {

    let yOffset = 0; // window.pageYoffset을 대입할 변수
    let prevScrollHeight = 0; // 현재 스크롤 위치보다 이전 스크롤 섹션의 값
    let currentSection = 0; // 현재 활성화된 섹션
    let newSection = false; // 새로운 섹션이 시작됨을 알려줌
    let acc = 0.2;
    let delayYoffset = 0;
    let rafId;
    let rafState;




    //3. 
    const sectionInfo = [
        {
            type: 'sticky', // 화면에 보여질 방식
            heightNum: 5,   // 해당 섹션의 높이를 브라우저의 높이의 5배로 설정함
            // 고정된 화면에 이미지를 스크롤하기 위해서 여유 스크롤 영역을 만들기 위한 값
            scrollHeight: 0,    // 섹션의 실제 스크롤 높이(이벤트가 들어오면 계산)
            objs: {
                container: document.query('#scroll-section-0'),
                canvas: document.querySelector('#video-canvas-0'),
                context: document.querySelector('#video-canvas-0').getContext('2d'),
                videoImages: [] // 이미지가 들어올 배열
            },
            values: {
                videoImageCount: 64,    // 사용될 이미지의 갯수
                imgSequence: [0, 64],   // 이미지 시퀀스(첫 프레임과 끝 프레임)
                canvas_opacity: [1, 0, { start: 0.9, end: 1 }]
            }

        }
    ]



    //1. 스크롤 이벤트 시작
    window.addEventListener('load', () => {
        window.addEventListener('scroll', () => {
            yOffset = window.pageYOffset;   // 스크롤시 위치를 다시 받아옴
            fixedMenu();
        })
    })

    //2. 맨 위 상단메뉴
    function fixedMenu() {
        if (yOffset > 50) {
            document.body.classList.add('nav-fixed')
        } else {
            document.body.classList.remove('nav-fixed')
        }
    }


})()