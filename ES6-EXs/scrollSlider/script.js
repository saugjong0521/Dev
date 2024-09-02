window.onload = () => {

    /*
    가로 스크롤의 값을 세로 스크롤 값에 추가해서 전체 스크롤의 길이를 늘리는 구조

    1. 가로 스크롤에 진입했을때에 itemActive 를 받아와야 함
    2. 가로 스크롤이 종료시에 itemEnd 를 받아와야 함
    3. 

    */

    let wScrollTop = window.pageYOffset;  // 현재 나의 스크롤 위치
    const winH = window.innerHeight;    //브라우저 창의 높이
    const winW = window.innerWidth; //브라우저 창의 넓이
    console.log(wScrollTop)
    console.log(winH)

    const itemClass = 'slider';
    const itemActive = `${itemClass}-active`;
    const itemEnd = `${itemClass}-end`;

    const sliderSection = document.querySelectorAll('.horizontal-scroll');

    sliderSection.forEach(el => {
        // 현재 sliderSection이 가지고 있는 위치값
        // sliderSection이 가지고 있는 가로 컨텐츠의 길이를 받아와야 함
        setScroll(el);  // sliderSection이 가지고 있는 가로 스크롤 값 세팅
        setActive(el);
    })

    window.addEventListener('scroll', () => {
        wScrollTop = window.pageYOffset; // 스크롤 이벤트가 실행되면 Y값을 새로 받아옴
        sliderSection.forEach((el) => {
            setActive(el);
            activeScroll(el);
        })
    })

    function setActive(el) {
        const contentY = el.getBoundingClientRect()
        // getBoundingClientRect: 각 요소의 크기와 위치를 받아옴 (현재 화면에 보이는지 체크하기 위함)
        // console.log(contentY)
        el.querySelectorAll(`.${itemClass}`).forEach((itemClassEl) => {
            // 특정 요소에 있는 클래스를 제거
            itemClassEl.classList.remove(itemActive);
            itemClassEl.classList.remove(itemEnd);
        })

        if (contentY.bottom < 0) {
            el.querySelectorAll(`.${itemClass}`).forEach((itemClassEl) => {
                itemClassEl.classList.add(itemEnd)
            })
        } else {
            el.querySelectorAll(`.${itemClass}`).forEach((itemClassEl) => {
                if (contentY.top <= 0) {
                    itemClassEl.classList.add(itemActive);
                } else if (contentY.bottom <= winH) {
                    itemClassEl.classList.add(itemEnd)
                }
            })
        }
    }

    function setScroll(el) {
        const sectionClass = el.classList[0]
        // console.log(sectionClass)
        const contentWrapper = el.querySelector(`.${sectionClass}-item`);
        // console.log(contentWrapper)

        const contentWrapperScrollW = contentWrapper.scrollWidth;
        // contentWrapper안에 있는 전체 컨텐츠의 가로 길이 (보이지 않는 컨텐츠 길이 포함)
        // console.log(contentWrapperScrollW)

        el.contentWrapper = contentWrapper;
        el.contentWrapperScrollW = contentWrapperScrollW

        el.rightMax = -(contentWrapperScrollW - winW)
        //컨텐츠를 완전하게 스크롤하기 위해서 필요한 최대 왼쪽값을 반환
        // console.log(el.rightMax)
        el.style.height = `${el.contentWrapperScrollW}px`
        el.innerHeight = el.offsetHeight;
        // 요소의 높이에 offsetHeight 값을 대입해서 컨텐츠 전체 높이를 저장

        el.init = true; // 초기화 여부 boolean값으로 반환
        el.transformX = '0'; // 초기 위치값 설정
        el.classList.add(`${sectionClass}-init`)
    }

    function activeScroll(el) { 
        const scrollP = wScrollTop - el.offsetTop;
        // scrollP는 scroll이벤트가 발생하면 새로 받아오는 wScrollTop 값에 el이 가지고 있는 offsetTop 만큼 빼서 스크롤 위치를 계산

        const scrollCenter = scrollP / (el.innerHeight - (winH - winW))
        // 해당 컨텐츠가 세로로 스크롤된 비율을 반환하는 값
        // console.log(scrollCenter)

        const transformP = scrollCenter * el.contentWrapperScrollW;
        // 세로 스크롤 위치에 따라 가로로 얼마나 이동해야하는지 계산해주는 값
        // console.log(transformP)

        let toTransform = -(transformP)

        toTransform = Math.min(0, toTransform);
        // 0보다 크면 0이 반환, 0이하면 toTransfrom값이 반환
        // 처음 위치보다 더 왼쪽으로 가지 못하도록 제한
        toTransform = Math.max(toTransform, el.rightMax)
        // toTransform의 값이 0보다 작은지
        // toTransform의 값이 현재 움직이는 transform의 el.rightMax보다 큰지 판단
        // 0보다 작거나 el.rightMax보다 크면, 영역을 벗어나지 못하도록 제어

        el.transformX = toTransform;
        el.contentWrapper.style.transform = `translateX(${el.transformX}px)`


    }


}