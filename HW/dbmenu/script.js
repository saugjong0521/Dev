/*
메뉴 만들기
https://www.db-dvp.co.kr/ 참고 (해당 사이트에 포커스는 구현되어 있지 않습니다.)

1. 메인메뉴에 마우스를 오버하면 해당하는 메인메뉴의 서브메뉴만 출력됩니다.
2. 다른 메뉴로 옮겨지면 기존의 서브메뉴를 닫히고 새로운 서브메뉴가 출력됩니다.
3. 위의 행동은 css에서 힌트를 얻을수 있습니다.

4. tab키로 메인메뉴에 접근하면 서브메뉴가 내려옵니다.
5. tab키는 메인메뉴와 그 서브뮤네를 순차적으로 순회하며 해당 메인메뉴의 서브메뉴의 마지막 서브메뉴에 포커스가 벗어나면 
서브메뉴는 사라집니다.
6. 위의 행동은 css에서 힌트를 얻을수 있습니다.
*/

// window.onload = () => {
//     submenu()
// }


// function submenu() {
//     const menu = document.querySelectorAll('.gnb > li')

//     console.log(menu)


//     // over, focusin
//     menu.forEach((el, idx) => {
//         el.addEventListener('mouseover', function () {
//             onClass(idx)
//         })
//     })

//     menu.forEach((el, idx) => {
//         el.addEventListener('focusin', function () {
//             onClass(idx)
//         })
//     })

//     // on class 추가
//     function onClass(idx) {
//         let menuList = menu[idx].querySelector('.gnb .submenu')
//         menuList.classList.add('on')
//     }


//     // out, focusout
//     menu.forEach((el, idx) => {
//         el.addEventListener('mouseout', function () {
//             outClass(idx)
//         })
//     })

//     menu.forEach((el, idx) => {
//         el.addEventListener('focusout', function () {
//             outClass(idx)
//         })
//     })

//     // on class 제거
//     function outClass(idx) {
//         let menuList = menu[idx].querySelector('.gnb .submenu')
//         menuList.classList.remove('on')
//     }

//     /*
//     focus에서 각 submenu 내의 각 li요소부분에 줄 수 있으나, 큰 차이는 없을 것으로 예상됨
//     현재 코드에서 추가로 생각 가능한 3가지는,

//     1. mousein 상황에서 focusin 시 2가지 서브메뉴가 나타남
//     2. focusin 으로 submenu 에서 css가 일어나지 않음
//     3. focusin으로 li요소에 갔다가 다시 shift+tab으로 submenu로 갔을 시, li요소가 사라지지 않음
//         -> li 요소의 index에 in out으로 해결 가능, 다만 해당 방식으로 작성시 코드가 더러워지며, 가독성이 안좋아 질 것으로 예상

//     위 3가지 상황이 생각되나, 사소한 것으로 생각됨
//     */

// }



// 리팩토링
window.onload = () => {
    slider()
}

function slider() {

    let headList;
    let subList;

    init();
    function init() {
        headList = document.querySelectorAll('.gnb > li')
        subList = document.querySelectorAll('.gnb > li > .submenu')
    }

    console.log(headList)
    console.log(subList)


    menuAction();
    function menuAction() {
        headList.forEach(el => {
            el.addEventListener('mouseover', onMenu);
            el.addEventListener('focusin', onMenu);
            el.addEventListener('mouseout', offMenu);
            el.addEventListener('focusout', offMenu);
        });
    }

    function onMenu() {
        let idx = Array.from(headList).indexOf(this);
        subList[idx].classList.add('on');
    }
    function offMenu(){
        let idx = Array.from(headList).indexOf(this);
        subList[idx].classList.remove('on');
    }

}


