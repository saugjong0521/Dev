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

/*
1. replaceChild는 기존의 태그를 다른 태그로 교체하는 용도로 사용하는데 
현재 html에는 strong이라는 태그가 이미 존재하므로 replacechild대신 다른 방식을 사용하는 것이 좋아 보여요
대신 strong 찾아서 내용을 바꾸는것도 좋은 방법 같아요
document.querySelector(".controls div strong").textContent
물론 replace도 상관은 없는데 불필요하게 dom을 조작하는 방식을 채택하고 있어서 대안으로 생각할 해결책과는 
거리가 있어 보입니다.

각각의 기능을 함수로 나눠서 정리해두신건 엄청 잘하신거 같아요(저도 생각안했던 부분)
-가독성이 엄청 올라가서 보기가 편하네요



하단에는 제가 정리한 다른 형식의 코드도 첨부했습니다.


*/

// window.onload = ()=>{
//     const total = document.querySelectorAll(".btns li").length;
//     document.querySelector(".controls div span").textContent = total;
    
//     document.querySelectorAll("#gallery .btns li a").forEach((anchor, index) => {
//         anchor.addEventListener("click", (e) => {
//             e.preventDefault();
//             const imgSrc = anchor.getAttribute("href");
//             const txt = anchor.textContent;
//             const i = index + 1;
            
//             document.querySelector(".showBox").style.backgroundImage = `url(${imgSrc})`;
//             document.querySelector("#gallery h1").textContent = txt;
//             document.querySelector(".controls div strong").textContent = i;     
            
//             document.querySelectorAll("#gallery .btns li a").forEach(a => a.style.color = "#888");
//             anchor.style.color = "#fff";
//         });
//     });
// }