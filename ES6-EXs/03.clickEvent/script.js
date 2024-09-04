window.onload = () => {
    clickEvent()
}

function clickEvent(){
    /*
    1. 마우스를 클릭한 위치 알기
    2. 클릭한 위치에 특정한 객체를 생성
    3. 특정한 객체안에 랜덤한 이미지를 생성
    4. 애니메이션이 끝나면 객체는 삭제
    */

    const img = document.createElement('div');  //div를 생성


    let timer;

    img.id = 'click-img' //생성된 div에 id를 부여
    document.body.addEventListener('click', onImgShow);

    function onImgShow(e){
        //클릭한 마우스의 좌표(x축, y축)
        console.log(e)

        const positionX = e.pageX
        const positionY = e.pageY
        const randNum = Math.floor(Math.random() * 5) + 1

        //console.log(positionX)
        //console.log(positionY)
        console.log(randNum)


        if(img.parentNode){ //img가 parentNode에 존재한다면
            onImgOut()
        }


        document.body.appendChild(img)
        img.classList.add('active', `bg0${randNum}`)

        img.style.left = `${positionX}px`
        img.style.top = `${positionY}px`

        clearTimeout(timer);
        // clearTimeout을 하지 않으면 기존의 timer는 계속 돌기에, 리셋을 통해 갑자기 사라지는 것을 방지(버벅임 방지)

        timer = setTimeout(onImgOut, 1800)
    }

    function onImgOut(){
        img.remove()
        img.className = ''; //class초기화 하여 중복 방지
        /*
        클래스만 비우게 되면 객체는 여전히 문서 안에 남아 있게 되므로, 메모리적인 영향이 있으며,
        다른 스타일이나 이벤트에 영향(충돌)을 줄 가능성이 있으므로, 특별한 이유가 아니라면 완전 삭제 후 생성하는 것이 더 좋다.
        */

    }

}