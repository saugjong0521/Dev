(() => {

//전역 변수 설정
let yOffset = 0; //window.pageYOffset 대입 변수
let prevScrollHeight = 0;
let currentSection = 0;
let newSection = false;
let acc = 0.3;
let delayYOffset = 0;
let rafId;
let refState;


//02. section 정리
//애니메이션이 들어가지 않는 section은 type을 normal.
//애니메이션이 들어가는 section은 type을 sticky로 지정
const sectionInfo = [

    {
        type: 'sticky',
        heightNum : 3, //해당 섹션의 높이를 화면 기준으로 배수로 늘림 (1080*3), //normal에서는 사용할 필요는 없다.
        scrollHeight : 0, //섹션의 실제 스크롤 높이 (이벤트가 들어오면서 계산)
        objs:{
            container : document.querySelector('#scroll-section-0'),
            canvas : document.querySelector('#video-canvas-0'),
            context : document.querySelector('#video-canvas-0').getContext('2d'),
            title : document.querySelector('.section-0-title'),
            title_text : document.querySelector('.section-0-title .title'),
            text: document.querySelector('section-0-text'),
            videoImages : []    //이미지를 저장할 배열
        },
        values : {
            videoImageCount : 64, //사용할 이미지의 갯수
            imgSequence : [0, 64],   //이미지 시퀀스 지정(첫 프레임과 끝 프레임 설정)
            canvas_opacity : [1, 0, {start : 0.0, end : 0.5}], //캔버스의 투명도를 스크롤 비중에 따라 조절

            title_opacity : [1, 0, {start: 0.1, end: 0.55}],
            title_scale : [1, 1.3, {start: 0.1, end: 0.65}],

            text_opacity : [1, 0, {start: 0.7, end: 0.9}],
            text_scale : [1, 1.3, {start: 0.7, end: 0.9}],
        }
    }
]


//03.
function setCanvasImage () {
    //캔버스에 보여줄 이미지를 로드
    let imgItem;
    //section01
    for(let i = 0; i < sectionInfo[0].values.videoImageCount; i++){
        imgItem = new Image();
        imgItem.src = `./images/section01/00${i+1}.png`;    //이미지 경로 설정
        sectionInfo[0].objs.videoImages.push(imgItem)
        // console.log(imgItem)
    }
}

//04.
function setLayOut (){
    //sectionInfo에서 받은 heightNum을 받아서 section길이를 늘려주는 함수

    for (let i = 0; i < sectionInfo.length; i++){
        if(sectionInfo[i].type === 'sticky'){
            sectionInfo[i].scrollHeight = sectionInfo[i].heightNum * window.innerHeight;
        } else if(sectionInfo[i].type === 'normal'){
            sectionInfo[i].scrollHeight = sectionInfo[i].objs.container.offsetHeight;
        }
        sectionInfo[i].objs.container.style.height = `${sectionInfo[i].scrollHeight}px`;
    }

    yOffset = window.pageYOffset;
    let totalScrollHeight = 0;

    for(let i = 0; i < sectionInfo.length; i++){
        totalScrollHeight += sectionInfo[i].scrollHeight;
        if(totalScrollHeight >= yOffset){
            currentSection = i;
            break;
        }
    }
    document.body.setAttribute('id',`show-section-${currentSection}`)
}


//05.
function scrollLoop(){
    //스크롤 애니메이션
    newSection = false;
    prevScrollHeight = 0;

    for(let i = 0; i < currentSection; i++){
        prevScrollHeight += sectionInfo[i].scrollHeight;
    }
    
    const currentScrollHeight = sectionInfo[currentSection].scrollHeight;

    //다음 섹션으로 전환
    if(yOffset > prevScrollHeight + currentScrollHeight){
        if(currentSection < sectionInfo.length - 1){
            newSection = true;
            currentSection ++;
        }
        document.body.setAttribute('id', `show-section-${currentSection}`)
    } else if(yOffset < prevScrollHeight){
        if(currentSection > 0){
            newSection = true;
            currentSection --;
        }else{
            currentSection = 0;
        }
        document.body.setAttribute('id', `show-section-${currentSection}`)
    }

    //currentSection이 변경된 후에 prevscrollHeight값을 재계산
    prevScrollHeight = 0;
    for(let i = 0; i < currentSection; i++){
        prevScrollHeight += sectionInfo[i].scrollHeight;
    }

    if(newSection) return; //새로운 섹션이 있을때에는 애니메이션을 실행시키지 않음

}


//06.
function loop(){
    //requestAnimationFrame을 사용해서 화면 갱신마다 애니메이션을 부드럽게 실행해주는 함수
    delayYOffset = delayYOffset + (yOffset - delayYOffset) * acc;
    //애니메이션의 부드러움을 제어하는 코드
    //스크롤의 지연 효과를 만들어 스크롤이 즉시 반영이 아니라 부드럽게 따라오도록 만들어 줌

    //새로운 section에 진입하지 않았다면 애니메이션 효과 적용
    if(!newSection){
        if(currentSection === 0){
            const currentYOffset = delayYOffset - prevScrollHeight;
            const objs = sectionInfo[currentSection].objs; //현재 섹션에 있는 객체를 찾음
            const values = sectionInfo[currentSection].values;  //현재 섹션의 효과 찾기
            objs.context.clearRect(0, 0, objs.canvas.width, objs.canvas.height);
            let sequence = Math.round(calcValue(values.imgSequence, currentYOffset))

            if(objs.videoImages[sequence]){
                objs.context.drawImage(objs.videoImages[sequence],0 ,0)
            }
        }
    }

    if(delayYOffset < 1){
        scrollLoop();
    }
    rafId = requestAnimationFrame(loop)
    //스크롤의 위치가 지연된 스크롤 위치와 차이가 없으면 애니메이션이 중단
    
    if(Math.abs(yOffset - delayYOffset) < 1){
        cancelAnimationFrame(rafId)
        refState = false; //애니메이션이 실행중이지 않음 체크
    }
}


//07.
function calcValue(val, currentY){
    let resultValue; //최정적으로 반환할 계산된 값이 들어올 변수
    const scrollH = sectionInfo[currentSection].scrollHeight;   //현재 섹션의 전체 스크롤 길이
    const scrollRatio = currentY / scrollH; //현재 섹션에서 스크롤된 비율

    //val의 배열 길이가 3이면, 애니메이션의 시작과 끝 범위가 지정된 경우로 봄
    if(val.length === 3){
        const scrollStart = val[2].start * scrollH; //애니메이션이 시작할 위치(스크롤의 높이 기준)
        const scrollEnd = val[2].end * scrollH; //애니메이션이 끝나는 위치(스크롤의 높이 기준)
        const scrollRealH = scrollEnd - scrollStart; //애니메이션이 진행되는 구간의 스크롤 높이

        //현재 스크롤의 위치가 애니메이션 진행 영역 안에 있는 경우
        if(currentY >= scrollStart && currentY <= scrollEnd){
            resultValue = ((currentY - scrollStart) / scrollRealH) * (val[1] - val[0]) + val[0]
            //애니메이션의 진행 비율을 계산하고 값으로 반환 -> 각 이벤트에서 애니메이션의 진행률을 0~1로 표현
        } else if(currentY < scrollStart){
            resultValue = val[0];
            //스크롤이 애니메이션 범위보다 위에 있으면 시작값으로 지정
        } else if(currentY > scrollEnd){
            resultValue = val[1];
            //스크롤이 애니메이션 범위보다 아래에 있으면 종료값으로 지정
        }
    } else {
        //배열의 길이가 2일 경우 애니메이션 섹션 전체에서 발생
        //스크롤 비율에 따라 값을 계싼
        resultValue = scrollRatio * (val[1] - val[0] + val[0]);
    }
    console.log(resultValue)

    return resultValue;
}


window.addEventListener('load', ()=> {
    setLayOut();
})


//01. 메뉴 fixed
function fixedMenu (){
    if(yOffset > 1){
        document.body.classList.add('nav-fixed')
    } else {
        document.body.classList.remove('nav-fixed')
    }
}


window.addEventListener('scroll', () => {
    yOffset = window.pageYOffset;
    fixedMenu()
    scrollLoop()

    if(!refState){
        rafId = requestAnimationFrame(loop);
        refState = true;
    }
})

    setCanvasImage()    //스크립트 실행과 함께 이미지를 로드 처리


})()