(() => {

    let yOffset = 0; // window.pageYoffset을 대입할 변수
    let prevScrollHeight = 0; // 현재 스크롤 위치보다 이전 스크롤 섹션의 값
    let currentSection = 0; // 현재 활성화된 섹션
    let newSection = false; // 새로운 섹션이 시작됨을 알려줌
    let acc = 0.5;
    let delayYOffset = 0;
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
                text: document.querySelector('.section-0-text'),
                videoImages: [] // 이미지가 들어올 배열
            },
            values: {
                videoImageCount: 64,    // 사용될 이미지의 갯수
                imgSequence: [0, 64],   // 이미지 시퀀스(첫 프레임과 끝 프레임)
                canvas_opacity: [1, 0, { start: 0.4, end: 0.5 }],  // 캔버스의 투명도 조절
                // 1, 0 은 투명도를 나타내며, start: 와 end: 는 스크롤 비율을 나타낸다
                // 지금 내용은 스크롤 90%가 되면 투명해지기 시작하고 스크롤이 100%가 되면 완전 투명해짐

                title_opacity: [1, 0, { start: 0.1, end: 0.3 }],
                title_scale: [1, 1.3, { start: 0, end: 0.6 }],

                text_opacity_in: [0, 1, { start: 0.5, end: 0.6 }],
                text_scale: [0.8, 1, { start: 0.55, end: 0.60 }],
                text_opacity_out: [1, 0, { start: 0.4, end: 0.6 }]
            }
        },

        {
            type: 'text',
            heightNum: 2,
            scrollHeight: 0,
            objs: {
                container: document.querySelector('.scroll-1-text'),
                words: [],   // 나눠진 텍스트를 배열에 저장
            },
            values: {
                opacity_in: [0.5, 1, { start: 0, end: 1 }],
            }
        },

        {
            type: 'sticky',
            heightNum: 3,
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-2'),
                canvas: document.querySelector('#video-canvas-1'),
                context: document.querySelector('#video-canvas-1').getContext('2d'),
                videoImages: [],
            },
            values: {
                videoImageCount: 3,
                imgSequence: [0, 3],    // 이미지의 프레임이기에 0~3

                //첫번째 이미지
                canvas_opacity_in_1: [1, 0, { start: 0.1, end: 0.2 }],
                canvas_scale_in_1: [1, 0.9, { start: 0.1, end: 0.2 }],

                //두번째 이미지
                canvas_opacity_in_2: [1, 0, { start: 0.3, end: 0.4 }],
                canvas_scale_in_2: [1, 0.9, { start: 0.3, end: 0.4 }],

                //세번째 이미지
                canvas_opacity_in_3: [1, 0, { start: 0.5, end: 0.6 }],
                canvas_scale_in_3: [1, 0.9, { start: 0.5, end: 0.6 }],

            }
        }
    ]



    //3, 11. 캔버스에 적재할 이미지를 로드
    function setCanvasImage() {
        let imgItem;
        for (let i = 0; i < sectionInfo[0].values.videoImageCount; i++) {
            imgItem = new Image();  // 이미지 넣을 공간 생성
            imgItem.src = `./images/section01/00${i + 1}.png`  // 이미지 경로 설정
            sectionInfo[0].objs.videoImages.push(imgItem)

            // console.log(imgItem.src)
        }

        for (let i = 0; i < sectionInfo[2].values.videoImageCount; i++) {
            imgItem = new Image();
            imgItem.src = `./images/section02/00${i + 1}.jpg`;
            sectionInfo[2].objs.videoImages.push(imgItem)

            // console.log(imgItem.src)
        }
    }


    //4. 각 섹션의 높이 설정 함수
    function setLayout() {
        for (let i = 0; i < sectionInfo.length; i++) {
            if (sectionInfo[i].type === 'sticky' || sectionInfo[i].type === 'text') {
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
    //10. section1 텍스트 이벤트
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

                if (scrollRatio <= 0.6) {
                    objs.text.style.opacity = calcValue(values.text_opacity_in, currentYOffset);
                    objs.text.style.transform = `translate(-50%, -50%) scale(${calcValue(values.text_scale, currentYOffset)})`;
                } else {
                    objs.text.style.opacity = calcValue(values.text_opacity_out, currentYOffset);
                }

                break

            case 1:
                objs.words.forEach(el => {
                    el.style.opacity = 0.5;    //values내의 opacity로도 가능
                })
                const span = objs.words;
                const triggerPoint = window.innerHeight * 0.7;    // 타이밍 조정
                let lastIdx = -1;

                span.forEach((el, idx) => {
                    const spanTop = el.getBoundingClientRect().top;
                    const spanBottom = el.getBoundingClientRect().bottom;

                    if (spanTop <= triggerPoint && spanBottom >= 0) {
                        el.style.opacity = 1;
                        lastIdx = idx;
                    }
                })
                if (lastIdx !== -1) {
                    span.forEach((el, idx) => {
                        if (idx < lastIdx) {
                            el.style.opacity = 0.5
                        }
                    })
                }
                break

            case 2:
                objs.context.clearRect(0, 0, objs.canvas.width, objs.canvas.height);
                let sequence2 = Math.round(calcValue([0, values.videoImageCount], currentYOffset))
                console.log(sequence2)

                if (objs.videoImages[sequence2]) {
                    const img = objs.videoImages[sequence2];
                    const cw = objs.canvas.width;
                    const ch = objs.canvas.height;
                    const iw = img.width;
                    const ih = img.height;
                    const x = (cw - iw) / 2
                    const y = (ch - ih) / 1.2

                    objs.context.drawImage(objs.videoImages[sequence2], x, y)
                }
                objs.canvas.style.opacity = 0;

                const opacityValue = values[`canvas_opacity_in_${sequence2 + 1}`];
                const scaleValue = values[`canvas_scale_in_${sequence2 + 1}`];
                if (opacityValue && scaleValue) {
                    objs.canvas.style.opacity = calcValue(opacityValue, currentYOffset);
                    objs.canvas.style.transform = `translate(-50%, -50%) scale(${calcValue(scaleValue, currentYOffset)})`;
                }

        }
    }


    /*
    //7. 페이지를 스크롤할때, 현재 섹션을 체크해서, 새로운 섹션이 시작되었는지와 끝났는지를 판단하여 무한으로 적용되도록 함
    function scrollLoop() {
        newSection = false; // 새로운 섹션에 진입했는지 여부 (진입 시, true를 반환하도록 함)
        prevScrollHeight = 0;   // 이전 섹션들의 총 스크롤 길이를 초기화
        const sectionBottom = sectionInfo[currentSection].objs.container.getBoundingClientRect().bottom;
        const triggerPoint = window.innerHeight;

        // console.log(sectionBottom)
        // console.log(triggerPoint)

        for (let i = 0; i < currentSection; i++) {
            prevScrollHeight += sectionInfo[i].scrollHeight;
        }   // 현재 섹션 이전의 모든 섹션의 스크롤 높이를 더해서, 현재 스크롤 위치를 계산

        playAnimation();    // 각 섹션에 들어오면 해당 애니메이션이 실행 (스크롤 위치를 계산하는 for문 뒤에 작성)

        if (sectionBottom <= triggerPoint) {
            if (currentSection < sectionInfo.length - 1) {
                currentSection++;
                newSection = true;
                document.body.setAttribute('id', `show-section-${currentSection}`);
            }
        }
        if (yOffset < prevScrollHeight) {
            if (currentSection > 0) {
                currentSection--;
                newSection = true;
                document.body.setAttribute('id', `show-section-${currentSection}`);
            }
        }

        if (delayYOffset < prevScrollHeight + sectionInfo[currentSection].scrollHeight) {
            document.body.classList.remove('scroll-effect-end');
        }
        if (delayYOffset > prevScrollHeight + sectionInfo[currentSection].scrollHeight) {
            //스크롤이 현재 섹션의 끝을 넘었을때 다음 섹션으로 넘어가게 처리
            newSection = true;
            if (currentSection === sectionInfo.length - 1) {
                document.body.classList.add('scroll-effect-end');
                //마지막 섹션일 경우 클래스로 체크
            }
        }
        if (newSection) return



        // if (delayYOffset < prevScrollHeight + sectionInfo[currentSection].scrollHeight) {
        //     // 현재 스크롤 위치가 마지막 섹션의 끝을 넘었는지를 확인
        //     // 끝나지 않은 경우 특정한 방법으로 체크
        //     document.body.classList.remove('scroll-effect-end')
        //     // 끝나지 않은 경우 scroll-effect-end 클래스를 삭제
        // }

        // if (delayYOffset > prevScrollHeight + sectionInfo[currentSection].scrollHeight) {
        //     newSection = true;
        //     //스크롤이 현재 섹션의 끝을 넘었을때 다음 섹션으로 넘어가게 처리

        //     if (currentSection === sectionInfo.length - 1) {
        //         document.body.classList.add('scroll-effect-end')
        //         // 마지막 섹션일 경우 클래스로 체크
        //     }
        //     if (currentSection < sectionInfo.length - 1) {
        //         currentSection++;
        //         // 섹션에 추가
        //     }
        //     document.body.setAttribute('id', `show-section-${currentSection}`)

        // }
    }
*/


    //7-1. scrollLoop 개선

    function scrollLoop() {
        newSection = false;
        prevScrollHeight = 0;

        for(let i = 0; i < sectionInfo.length; i++){
            prevscrollHeight += sectionInfo[i].scrollHeight;
            if(prevScrollHeight >= yOffset){
                if(currentSection !== i){
                    currentSection = i;
                    newSection = true;
                    document.body.setAttribute('id', `show-section-${currentSection}`)
                }
            }
            break
        }



    }


    //8. requestAnimationFrame을 사용해서 화면을 갱신할때마다 부드럽게 애니메이션을 실행
    function loop() {
        delayYOffset = delayYOffset + (yOffset - delayYOffset) * acc;

        // 새로운 섹션에 진입되지 않았다면 애니메이션 효과 적용
        if (!newSection) {
            const currentYOffset = delayYOffset - prevScrollHeight;
            const objs = sectionInfo[currentSection].objs;  // 현재 섹션의 객체
            const values = sectionInfo[currentSection].values;  //현재 섹션의 효과값 찾기
        }

        if (delayYOffset < 1) {
            scrollLoop();
            // 스크롤 상태 업데이트 시, 섹션 전환처리

            sectionInfo[0].objs.canvas.style.opacity = 1;
            sectionInfo[0].objs.context.drawImage(sectionInfo[0].objs.videoImages[0], 0, 0)
        }
        rafId = requestAnimationFrame(loop)
        // 스크롤 위치가 지연된 스크롤 위치와 차이가 없으면 애니메이션 중단
        if (Math.abs(yOffset - delayYOffset) < 1) {
            cancelAnimationFrame(rafId)
            rafState = false;   // 애니메이션이 실행중이지 않음 체크
        }
    }


    //9 section1의 문자 text 추가
    function setWords() {
        const splitWords = sectionInfo[1].objs.container;
        const content = splitWords.innerText;
        // console.log(content);

        const words = content.split(/\./)
        // console.log(words)
        // 마침표는 특수문자이므로 정규식 \.처럼 이스케이프 처리를 해서 적용 ([\u002E] -> unicode도 가능)
        // 특수문자를 문자처럼 처리하기 위해서는 이스케이프 처리가 필요
        // 단순문자 분리에는 '.'로 사용해도 됨

        splitWords.innerHTML = '';
        words.forEach((el, idx) => {
            const text = document.createElement('span')
            text.innerHTML = `${el.trim()}. `;
            sectionInfo[1].objs.words.push(text);
            splitWords.appendChild(text);
        })
    }




    //0. 스크롤 이벤트 시작 및 각 함수를 적용
    window.addEventListener('load', () => {
        setLayout();

        setTimeout(() => {
            sectionInfo[0].objs.context.drawImage(sectionInfo[0].objs.videoImages[0], 0, 0);
            document.querySelector('.fixed-el-canvas').classList.add('active')
            document.querySelector('.section-0-title').classList.add('active')
        }, 100);

        //새로고침할 경우, 스크롤값 찾아서 애니메이션 적용
        let tempYoffset = yOffset;
        let tempScrollCount = 0;
        if (tempYoffset > 0) {
            let item = setInterval(() => {
                scrollTo(0, tempYoffset)
                tempYoffset += 5
                if (tempScrollCount > 20) {
                    clearInterval(item);
                }
                tempScrollCount++;
            }, 20)
        }


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
    setWords();
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
        if (yOffset > 1) {
            document.body.classList.add('nav-fixed')
        } else {
            document.body.classList.remove('nav-fixed')
        }
    }


})()