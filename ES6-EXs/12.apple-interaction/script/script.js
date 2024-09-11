(() => {

    let yOffset = 0; // window.pageYoffset을 대입할 변수
    let prevScrollHeight = 0; // 현재 스크롤 위치보다 이전 스크롤 섹션의 값
    let currentSection = 0; // 현재 활성화된 섹션
    let newSection = false; // 새로운 섹션이 시작됨을 알려줌
    let acc = 0.5;
    let delayYoffset = 0;
    let rafId;
    let rafState;


    //2. 섹션 info
    const sectionInfo = [
        {
            type: 'sticky', // 화면에 보여질 방식
            heightNum: 2,   // 해당 섹션의 높이를 브라우저의 높이의 5배로 설정함
            // 고정된 화면에 이미지를 스크롤하기 위해서 여유 스크롤 영역을 만들기 위한 값
            scrollHeight: 0,    // 섹션의 실제 스크롤 높이(이벤트가 들어오면 계산)
            objs: {
                container: document.querySelector('#scroll-section-0'),
                canvas: document.querySelector('#video-canvas-0'),
                context: document.querySelector('#video-canvas-0').getContext('2d'),
                title: document.querySelector('.section-0-title'),
                videoImages: [] // 이미지가 들어올 배열
            },
            values: {
                videoImageCount: 64,    // 사용될 이미지의 갯수
                imgSequence: [0, 64],   // 이미지 시퀀스(첫 프레임과 끝 프레임)
                canvas_opacity: [1, 0, { start: 0.9, end: 1 }],  // 캔버스의 투명도 조절
                // 1, 0 은 투명도를 나타내며, start: 와 end: 는 스크롤 비율을 나타낸다
                // 지금 내용은 스크롤 90%가 되면 투명해지기 시작하고 스크롤이 100%가 되면 완전 투명해짐

                title_opacity: [1, 0, { start: 0.1, end: 0.7 }],
                title_scale: [1, 1.3, { start: 0, end: 0.8 }]
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
        // const heightRatio = window.innerHeight / 720;
        // sectionInfo[0].objs.canvas.style.transform = `translate(-50%, -50%) scale(${heightRatio})`
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
            else if (currentY > scrollEnd) {
                resultValue = val[1]
            }
        }
        // 배열의 길이가 2일경우 애니메이션 섹션 전체에서 발생, 스크롤 비율에 따라 값을 계산
        else {
            resultValue = scrollRatio * (val[1] - val[0]) + val[0]
        }
        return resultValue
    }

    //6. 이미지를 스크롤 비율에 따라 적용
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
                    // drawImage(들어올 이미지, x좌표, y좌표)
                }
                objs.title.style.opacity = calcValue(values.title_opacity, currentYOffset);
                objs.title.style.transform = `scale(${calcValue(values.title_scale, currentYOffset)})`
            //타이틀


        }
    }

    //7. 페이지를 스크롤할때, 현재 섹션을 체크해서, 새로운 섹션이 시작되었는지와 끝났는지를 판단하여 무한으로 적용되도록 함
    function scrollLoop() {
        newSection = false; // 새로운 섹션에 진입했는지 여부 (진입 시, true를 반환하도록 함)
        prevScrollHeight = 0;   // 이전 섹션들의 총 스크롤 길이를 초기화

        playAnimation();    // 각 섹션에 들어오면 해당 애니메이션이 실행 (ScrollLoop의 맨 앞에 넣어서 스크롤 발생시 시작하도록 함)

        for (let i = 0; i < currentSection; i++) {
            prevScrollHeight += sectionInfo[i].scrollHeight;
        }   // 현재 섹션 이전의 모든 섹션의 스크롤 높이를 더해서, 현재 스크롤 위치를 계산

        if (delayYoffset < prevScrollHeight + sectionInfo[currentSection].scrollHeight) {
            // 현재 스크롤 위치가 마지막 섹션의 끝을 넘었는지를 확인
            // 끝나지 않은 경우 특정한 방법으로 체크
            document.body.classList.remove('scroll-effect-end')
            // 끝나지 않은 경우 scroll-effect-end 클래스를 삭제
        }

        if (delayYoffset > prevScrollHeight + sectionInfo[currentSection].scrollHeight) {
            newSection = true;
            //스크롤이 현재 섹션의 끝을 넘었을때 다음 섹션으로 넘어가게 처리

            if (currentSection === sectionInfo.length - 1) {
                document.body.classList.add('scroll-effect-end')
                // 마지막 섹션일 경우 클래스로 체크
            }
            if (currentSection < sectionInfo.length - 1) {
                currentSection++;
                // 섹션에 추가
            }
            document.body.setAttribute('id', `show-section-${currentSection}`)

        }
    }


    //8. requestAnimationFrame을 사용해서 화면을 갱신할때마다 부드럽게 애니메이션을 실행
    function loop() {
        delayYoffset = delayYoffset + (yOffset - delayYoffset) * acc;

        // 새로운 섹션에 진입되지 않았다면 애니메이션 효과 적용
        if (!newSection) {
            const currentYOffset = delayYoffset - prevScrollHeight;
            const objs = sectionInfo[currentSection].objs;  // 현재 섹션의 객체
            const values = sectionInfo[currentSection].values;  //현재 섹션의 효과값 찾기
        }

        if (delayYoffset < 1) {
            scrollLoop();
            // 스크롤 상태 업데이트 시, 섹션 전환처리

            sectionInfo[0].objs.canvas.style.opacity = 1;
            sectionInfo[0].objs.context.drawImage(sectionInfo[0].objs.videoImages[0], 0, 0)
        }
        rafId = requestAnimationFrame(loop)
        // 스크롤 위치가 지연된 스크롤 위치와 차이가 없으면 애니메이션 중단
        if (Math.abs(yOffset - delayYoffset) < 1) {
            cancelAnimationFrame(rafId)
            rafState = false;   // 애니메이션이 실행중이지 않음 체크
        }
    }



    //0. 스크롤 이벤트 시작 및 각 함수를 적용
    window.addEventListener('load', () => {
        setLayout();

        setTimeout(() => {
            sectionInfo[0].objs.context.drawImage(sectionInfo[0].objs.videoImages[0], 0, 0);
            document.querySelector('.fixed-el-canvas').classList.add('active')
            document.querySelector('.section-0-title').classList.add('active')
        }, 500);

        // 페이지 새로고침 시 초기 상태 설정
        window.scrollTo(0, 0);
        yOffset = window.pageYOffset;

        window.addEventListener('scroll', () => {
            yOffset = window.pageYOffset;
            fixedMenu();
            scrollLoop();

            if (!rafState) {
                rafId = requestAnimationFrame(loop);
                rafState = true;
            }
        });
    });


        window.addEventListener('scroll', () => {
            yOffset = window.pageYOffset;   // 스크롤시 위치를 다시 받아옴
            fixedMenu();
            scrollLoop();

            if (!rafState) {
                rafId = requestAnimationFrame(loop);
                rafState = true;
            }
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