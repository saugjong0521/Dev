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

    const subMenuItem = document.querySelectorAll('.sub-menu > li > a')

    console.log(headerH)
    

    
    mainMenu.forEach((el)=>{
        const mainMenuLink = el.querySelector('a');
        //각각의 mainmenu에 있는 a태그를 선택
        mainMenuLink.addEventListener('mouseenter', onMenu)
        mainMenuLink.addEventListener('focus', onMenu)  //접근성을 위한 장치(마우스를 못쓰는 경우), 이를 위하여 a 태그를 이용하여 만듦
        
        el.addEventListener('mouseleave',offMenu)

        el.addEventListener('focusout',function(e){
            if(!el.contains(e.relatedTarget)){
                offMenu()
            }
            // !el.contains = 특정 요소가 다른 요소를 포함하는지 여부를 확인하는 메소드
            // 현재 로직에서는 포커스가 mainMenu(el)의 자식인지 확인하는 용도로 쓰임
            // relatedTarget = 이벤트가 발생할때 포커스가 새로운 대상을 참조
        })
    })
    // mouseover, mouseout 으로 지정시에 하위 li로 간다면 focus가 풀림


    // 해당 구문은 위의 mainMenu내에서 같이 돌면 안된다 -> mainMenu에 focus되는것이 아닌 li요소들에 focus되는 것이기 때문에
    subMenuItem.forEach((el)=>{
        el.addEventListener('focus',function(){
            subMenuItem.forEach((link)=>{
                link.classList.remove('on')
            })
            this.classList.add('on')
        })
    })


    function onMenu(){
        offMenu() //초기화
        this.classList.add('on') //mainMenu
        header.classList.add('on')
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