window.onload = () => {
    menu()
}

function menu (){
    /*
    1. 메인메뉴를 over하면 선택된 메인메뉴의 서브메뉴만 드랍 다운
    2. 서브메뉴의 길이에 따라서 header의 height가 달라짐

    */

    const header = document.querySelector('.header')
    const mainMenu = document.querySelectorAll('.main-menu > li')
    const mainMenuItem = document.querySelectorAll('.main-menu > li > a')
    const headerH = header.offsetHeight;
    const subMenu = document.querySelectorAll('.sub-menu')
    console.log(headerH)
    

    
    mainMenu.forEach((el)=>{
        const mainMenuLink = el.querySelector('a');
        //각각의 mainmenu에 있는 a태그를 선택
        mainMenuLink.addEventListener('mouseenter', onMenu)
        mainMenuLink.addEventListener('focus', onMenu)  //접근성을 위한 장치(마우스를 못쓰는 경우), 이를 위하여 a 태그를 이용하여 만듦

        el.addEventListener('mouseleave',offMenu)
    })
    // mouseover, mouseout 으로 지정시에 하위 li로 간다면 focus가 풀림

    function onMenu(){
        offMenu()
        this.classList.add('on') //mainMenu
        const subMenuItem = this.nextElementSibling;
        console.log(subMenuItem)
        if(subMenuItem){
            subMenuItem.classList.add('on')
            headerHeight(subMenuItem);
        }
    }

    function headerHeight(subMenuItem){
        // 현재 over된 메인메뉴의 서브메뉴의 li를 찾아서, li의 높이값 * 갯수만큼 header의 높이값에 대입
        const subMenuLi = subMenuItem.querySelectorAll('li')
        const subMenuLiSize  = subMenuLi.length;
        console.log(subMenuLiSize)
        if (subMenuLiSize > 0) {
            const subMenuH = subMenuLi[0].offsetHeight;
            console.log(subMenuH)
            const gnbH = subMenuH * subMenuLiSize;
            console.log(gnbH)
            header.style.height = `${gnbH + headerH}px`
        }
    }

    function offMenu(){
        subMenu.forEach((el)=>{
            el.classList.remove('on')
        })
        mainMenuItem.forEach((el)=>{
            el.classList.remove('on')
        })
        header.style.height = `${headerH}px`
    }



}