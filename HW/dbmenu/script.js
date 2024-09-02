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

window.onload = () => {
    submenu()
}


function submenu() {
    const menu = document.querySelectorAll('.gnb > li')

    console.log(menu)


    // over, focusin
    menu.forEach((el, idx) => {
        el.addEventListener('mouseover', function () {
            onOver(idx)
        })
    })

    menu.forEach((el, idx) => {
        el.addEventListener('focusin', function () {
            onOver(idx)
        })
    })

    // on class 추가
    function onOver(idx) {
        let menuList = menu[idx].querySelector('.gnb .submenu')
        menuList.classList.add('on')
    }


    // out, focusout
    menu.forEach((el, idx) => {
        el.addEventListener('mouseout', function () {
            onOut(idx)
        })
    })

    menu.forEach((el, idx) => {
        el.addEventListener('focusout', function () {
            onOut(idx)
        })
    })

    // on class 제거
    function onOut(idx) {
        let menuList = menu[idx].querySelector('.gnb .submenu')
        menuList.classList.remove('on')
    }





}

// window.onload = () => {
//     submenu()
// }

// function submenu() {
//     const menu = document.querySelectorAll('.gnb > li')

//     menu.forEach((el, index) => {
//         el.addEventListener('mouseover', function() {
//             onOver(index)
//         })
//     })

//     function onOver(idx) {
//         const allSubmenus = document.querySelectorAll('.gnb .submenu')

//         // 모든 서브메뉴를 비활성화
//         allSubmenus.forEach(submenu => submenu.classList.remove('on'))

//         // 현재 인덱스에 해당하는 서브메뉴 활성화
//         const activeSubmenu = menu[idx].querySelector('.submenu')
//         if (activeSubmenu) {
//             activeSubmenu.classList.add('on')
//         }
//     }
// }