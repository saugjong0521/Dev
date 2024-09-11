(() => {

    let yOffset = 0; // window.pageYoffset을 대입할 변수
    let prevScrollHeight = 0; // 현재 스크롤 위치보다 이전 스크롤 섹션의 값
    let currentSection = 0; // 현재 활성화된 섹션
    let newSection = false; // 새로운 섹션이 시작됨을 알려줌
    let acc = 0.2;
    let delayYoffset = 0;
    let rafId;
    let rafState;




    //2. 섹션 info
    const sectionInfo = [
        {
            type: 'sticky', // 화면에 보여질 방식
            heightNum: 5,   // 해당 섹션의 높이를 브라우저의 높이의 5배로 설정함
            // 고정된 화면에 이미지를 스크롤하기 위해서 여유 스크롤 영역을 만들기 위한 값
            scrollHeight: 0,    // 섹션의 실제 스크롤 높이(이벤트가 들어오면 계산)
            objs: {
                container: document.querySelector('#scroll-section-0'),
                canvas: document.querySelector('#video-canvas-0'),
                context: document.querySelector('#video-canvas-0').getContext('2d'),
                videoImages: [] // 이미지가 들어올 배열
            },
            values: {
                videoImageCount: 64,    // 사용될 이미지의 갯수
                imgSequence: [0, 64],   // 이미지 시퀀스(첫 프레임과 끝 프레임)
                canvas_opacity: [1, 0, { start: 0.9, end: 1 }]  // 캔버스의 투명도 조절
                // 1, 0 은 투명도를 나타내며, start: 와 end: 는 스크롤 비율을 나타낸다
                // 지금 내용은 스크롤 90%가 되면 투명해지기 시작하고 스크롤이 100%가 되면 완전 투명해짐
            }

        }
    ]

    //3. 캔버스에 적재할 이미지를 로드
    function setCanvasImage() {
        let imgItem;
        for (let i = 0; i < sectionInfo[0].values.videoImageCount; i++) {
            imgItem = new Image();  // 이미지 넣을 공간 생성
            imgItem.src = `./images/section01/00${i + 1}.png`  // 이미지 경로 설정
            sectionInfo[0].objs.videoImages.push(imgItem)

            // console.log(imgItem.src)
        }
    }


    //4. 각 섹션의 높이 설정 함수
    function setLayout() {
        for (let i = 0; i < sectionInfo.length; i++) {
            if (sectionInfo[i].type === 'sticky') {
                sectionInfo[i].scrollHeight = sectionInfo[i].heightNum * window.innerHeight
            }
            sectionInfo[i].objs.container.style.height = `${sectionInfo[i].scrollHeight}px`
        }

        // 현재 위치한 section을 body의 id로 넘겨줌
        yOffset = window.pageYOffset;
        let totalScrollHeight = 0;
        for (let i = 0; i < sectionInfo.length; i++) {
            totalScrollHeight += sectionInfo[i].scrollHeight;
            if (totalScrollHeight >= yOffset) {
                currentSection = i;
                break
            }
        }
        document.body.setAttribute('id', `show-section-${currentSection}`)
    }


    //5. 애니메이션 값이 스크롤 위치에 따라 어떻게 변화할지 계산, opacity 및 translate등을 계산해주는 함수 (val을 지정하지 않아서 현재는 확인 불가)
    function calcValue(val, currentY) {
        let resultValue;    // 최종적으로 반환할 계산된 값이 들어올 변수
        const scrollH = sectionInfo[currentSection].scrollHeight;   //현재 섹션의 전체 스크롤 길이
        const scrollRatio = currentY / scrollH; // 현재 섹션에서 스크롤된 비율

        // val의 배열 길이가 3이면, 애니메이션의 시작과 끝 범위가 정의된 경우
        if (val.length === 3) {
            const scrollStart = val[2].start * scrollH; // 애니메이션이 시작할 위치(스크롤 높이 기준)
            const scrollEnd = val[2].end * scrollH; //애니메이션이 끝나는 위치(스크롤 높이 기준)
            const scrollRealH = scrollEnd - scrollStart; //애니메이션이 진행되는 구간의 스크롤 높이

            // 현재 스크롤의 위치가 애니메이션 진행영역 내에 있는 경우
            if (currentY >= scrollStart && currentY <= scrollEnd) {
                resultValue = ((currentY - scrollStart) / scrollRealH) * (val[1] - val[0]) + val[0]
                // 애니메이션의 진행 비율을 계산하고 값으로 반환
            }
            // 스크롤이 애니메이션 범위보다 위에 있는 경우 시작값으로 지정
            else if (currentY < scrollStart) {
                resultValue = val[0]
            }
            // 스크롤이 애니메이션 범위보다 아래 있는 경우 종료값으로 지정
            else if (current > scrollEnd) {
                resultValue = val[1]
            }
        }
        // 배열의 길이가 2일경우 애니메이션 섹션 전체에서 발생, 스크롤 비율에 따라 값을 계산
        else {
            resultValue = scrollRatio * (val[1] - val[0]) + val[0]
        }
        return resultValue
    }

    //6. 
    function playAnimation() {
        const objs = sectionInfo[currentSection].objs;  // 현재 섹션의 객체
        const values = sectionInfo[currentSection].values;  // 현재 섹션의 설정값
        const currentYOffset = yOffset - prevScrollHeight;  // 섹션 내에서 스크롤의 위치
        const scrollH = sectionInfo[currentSection].scrollHeight;   //  섹션 내에서 스크롤의 높이
        const scrollRatio = currentYOffset / scrollH;   // 섹션 내에서 스크롤된 비율 (0~1 사이)

        switch (currentSection) {
            // 섹션의 index마다 다른 애니메이션이 적용되기 때문에 for문보다 switch문이 효과적

            case 0:
                objs.context.clearRect(0, 0, objs.canvas.width, objs.canvas.height);
                // 초기화
                objs.canvas.style.opacity = calcValue(values.canvas_opacity, currentYOffset);
                // 캔버스의 투명도를 계산해서 스크롤 비율에 따라 적용

                let sequence = Math.round(calcValue([0, values.videoImageCount - 1], currentYOffset))
                if (objs.videoImages[sequence]) {
                    objs.context.drawImage(objs.videoImages[sequence], 0, 0)
                }

        }
    }

    //7. 페이지를 스크롤할때, 현재 섹션을 체크해서, 새로운 섹션이 시작되었는지와 끝났는지를 판단하여 무한으로 적용되도록 함
    function scrollLoop() {
        newSection = false;
        prevScrollHeight = 0;
    }



    //0. 스크롤 이벤트 시작 및 각 함수를 적용
    window.addEventListener('load', () => {
        setLayout();
        window.addEventListener('scroll', () => {
            yOffset = window.pageYOffset;   // 스크롤시 위치를 다시 받아옴
            fixedMenu();
            playAnimation();
        })
    })
    setCanvasImage();
    /*
    최초 골자
        window.addEventListener('load', () => {
        window.addEventListener('scroll', () => {
            yOffset = window.pageYOffset;   // 스크롤시 위치를 다시 받아옴
            fixedMenu();
        })
    })
    */


    //1. 맨 위 상단메뉴
    function fixedMenu() {
        if (yOffset > 50) {
            document.body.classList.add('nav-fixed')
        } else {
            document.body.classList.remove('nav-fixed')
        }
    }


})()