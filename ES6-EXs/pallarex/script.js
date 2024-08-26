/*
페럴렉스

1. 스크롤의 방향을 알아내서 윈도우의 높이값만큼 이동
2. 네비게이션 아이콘을 클릭하면 index에 해당하는 section으로 이동
3. section이 현재 사용자의 화면에 들어오게 되면 애니메이션을 전달
*/

window.onload = () => {
    const content = document.querySelectorAll('section');
    const dotList = document.querySelectorAll('#navi > li');
    let base = -500;

    let posArr = [];
    // secction이 가지고 있는 위치값을 배열로 반환
    // 창의 크기가 달라지게 되면 높이값이 달라지기 때문에 위치값을 미리 받아올 수 없다.
    // -> 이벤트에 연결해서 높이값을 받아오도록 설정 (resize event라고 함) 


    // 페이지 오픈시 실행
    onResize()
    // 사이즈 조절시 resize 실행
    window.addEventListener('resize', onResize);

    window.addEventListener('scroll', onScroll);

    [...content].forEach(el => {
        el.addEventListener('wheel', onWheel)
    });

    [...dotList].forEach(el => {
        el.addEventListener('click',onClick)
    })
    
    function onResize() {
        posArr = [...content].map((el) => el.offsetTop)
    }

    function onWheel(e) {
        // wheel 이벤트는 event를 받아와야 하므로 매개변수가 필요 (e, event)

        /*
        wheel과 scroll의 차이점
        wheel = 마우스 휠의 작동 유무를 판단
        scorll = 휠로 페이지 내부에서 위치값이 '얼마나' 이동했는지를 반환
        wheel 이벤트는 브라우저마다 적용되는 이벤트가 다르다.

        이전버전에서는 mouseWhell과 DOMMouseScroll이라는 이벤트로 분류해서 사용
        mouseWheel은 익스, 크롬
        DOMMouseScroll은 파폭

        최신에는 wheel로 대체됨
        */

        //console.log(e)
        const deltaY = e.deltaY || -e.whelDelta || e.datail;
        //console.log(deltaY)

        if (deltaY < 0) {
            if ([...content].indexOf(this) !== 0) {
                const idx = [...content].indexOf(this);
                moveScroll(idx - 1)
            }
        } else {
            if ([...content].indexOf(this) !== content.length - 1) {
                const idx = [...content].indexOf(this);
                moveScroll(idx + 1)
            }
        }

    } // wheel

    function moveScroll(index) {
        const targetP = posArr[index];
        // onWheel 이벤트에서 받아온 index에 해당하는 posarr에 들어잇는 offsettop 값 반환
        // 사용자가 이동하려는 섹션의 페이지 상단으로부터의 거리

        const currentP = document.documentElement.scrollTop;
        // 현재 스크롤의 위치값을 받아옴

        const distP = targetP - currentP
        // 현재 스크롤된 위치에서 목표 위치까지의 거리 계산(목표위치에서 현재 위치를 뺀 값)

        const duration = 500
        let isPlay
        // 애니메이션이 시작된 시간을 저장하는 변수, 이 변수는 step함수에서 처음 time값이 주어질때 설정

        function step(time) {
            // step은 requestAnimationFrame이 실행될때 실행되는 콜백함수로 작성
            // 각 프레임에서 애니메이션을 진행하는 역할

            //console.log(time)   // requestAnimationFrame에 의해 자동으로 전달되는 현재 진행된 시간
            if (!isPlay) {
                isPlay = time   //애니메이션이 시작전인지 판단
                // isPlay가 아직 시작되지 않았다면(undefined), 현재 time의 값을 isPlay에 저장해서
                // 애니메이션의 시작 시간을 저장
            }
            const progress = time - isPlay  //현재 애니메이션이 시작되고 경과된 시간
            const percent = Math.min(progress / duration, 1)    // 애니메이션의 진행도 1은 최소한의 비율
            window.scrollTo(0, currentP + distP * percent);
            // 스크롤 위치를 현재 위치에서 목표 위치까지 percent 비율만큼 이동

            if (progress < duration) {
                window.requestAnimationFrame(step)
            }
            // progress가 duration보다 작다면 애니메이션이 진행되는 뜻이므로,
            // window.requestAnimationFrame(step)를 호출해서 요청
        }
        window.requestAnimationFrame(step)
    }


    function onScroll() {
        const scrollTop = document.documentElement.scrollTop;
        // console.log(scrollTop)
        [...dotList].forEach((el, idx) => {
            if (scrollTop >= posArr[idx] + base) {
                dotList.forEach((el) => {
                    el.children[0].classList.remove('on');
                })
                el.children[0].classList.add('on');

                [...content].forEach((el) => {
                    el.classList.remove('on')
                })
                content[idx].classList.add('on')
            } 
        })
    }

    function onClick(){
        const idx = Array.from(dotList).indexOf(this);
        console.log(idx)
        moveScroll(idx)
    }


}