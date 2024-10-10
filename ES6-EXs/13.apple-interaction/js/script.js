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

//메뉴 fixed
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