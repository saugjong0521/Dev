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
    const headerH = header.offsetHeight;
    console.log(headerH)
    


    mainMenu.forEach((el)=>{
        const mainMenuLink = el.querySelector('a');
        //각각의 mainmenu에 있는 a태그를 선택
        mainMenuLink.addEventListener('mouseover', onMenu)
    })

    function onMenu(){
        this.classList.add('on')
        const subMenuItem = this.nextElementSibling;
        // console.log(subMenuItem)
        subMenuItem.classList.add('on')
        if(subMenuItem){
            subMenuItem.classList.add('on')
        }

    }

    // const mainMenuItem = document.querySelectorAll('.main-menu li a')


}