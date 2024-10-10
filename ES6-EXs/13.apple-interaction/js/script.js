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
        height : 3, //해당 섹션의 높이를 화면 기준으로 배수로 늘림 (1080*3), //normal에서는 사용할 필요는 없다.
        scrollHeight : 0, //섹션의 실제 스크롤 높이 (이벤트가 들어오면서 계산)
        objs:{
            container : document.querySelector('#scroll-section-0'),
            canvas : document.querySelector('#video-canvas-0'),
            context : document.querySelector('#video-canvas-0').getContext('2d'),
            
        }
    }

]



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
})



})