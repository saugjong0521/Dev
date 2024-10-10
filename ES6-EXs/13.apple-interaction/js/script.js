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
        prevScrollHeight += sectionInfo[i].scrollHeight
    }

    if(newSection) return; //새로운 섹션이 있을때에는 애니메이션을 실행시키지 않음

}


//06.
function loop(){
    //requestAnimationFrame을 사용해서 화면 갱신마다 애니메이션을 부드럽게 실행해주는 함수
    delayYOffset = delayYOffset + (yOffset - delayYOffset) * acc;
    //애니메이션의 부드러움을 제어하는 코드
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
})

    setCanvasImage()    //스크립트 실행과 함께 이미지를 로드 처리


})()