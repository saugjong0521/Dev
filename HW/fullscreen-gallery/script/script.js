window.onload = () => {

    const bg = document.querySelector('#gallery .showBox')
    const bgList = document.querySelectorAll('#gallery .controls ul li')
    const bgData = document.querySelectorAll('#gallery .controls ul li a')

    //li요소 반복 및 각 함수 호출
    bgList.forEach((el, index) => {

        el.addEventListener('click', function (e) {
            e.preventDefault();

            bgChange(index)
            numChange(index)
            letterBold(index)
            theme(index)

        })

    })

    //배경 변경
    function bgChange(i) {

        // getAttribute('href') 메소드 gpt를 통해 확인
        // 이후 forEach index 삽입 후 인덱스 전달 추가
        const bgSrc = bgData[i].getAttribute('href')
        //console.log(bgSrc)

        bg.style.backgroundImage = `url(${bgSrc})`
    }

    //페이지 번호 변경
    function numChange(i) {

        let parent = document.querySelector('.controls div')
        let newScript = document.createElement('strong')
        newScript.innerHTML = `<strong>${i + 1}</strong>`

        //div요소 node번호 확인
        //console.log(parent.childNodes)

        parent.replaceChild(newScript, parent.childNodes[1])
    }

    //글자 강조
    function letterBold(i) {

        //forEach문으로 a요소 color 초기화 후 선택한 index color #fff처리
        bgData.forEach(el => {
            el.style.color = '#999'
        })
        bgData[i].style.color = '#fff'
    }

    //제목 전달
    function theme(i) {

        const themeList = bgData[i].innerHTML
        //console.log(themeList)        
        const mainTheme = document.querySelector('#gallery h1')

        mainTheme.innerHTML = `${themeList}`
    }


}