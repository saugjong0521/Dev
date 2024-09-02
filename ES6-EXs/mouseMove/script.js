window.onload = () => {
    /*
    1. 마우스가 움직일 때마다 이미지의 순번을 바꿔서 이미지가 교체
    2. 이미지의 총 갯수가 영역의 가로 사이즈와 매치
    3. 대입된 순번의 이미지를 백그라운드 경로에 대입
    4. 이미지가 들어갈 div를 동적으로 생성

    */

    const canvas = document.querySelector('.canvas')
    
    let imgCount = 200;
    let item = '<div></div>';   //이미지가 들어갈 단일 div 생성

    console.log(canvas.children)
    canvas.innerHTML = item;
    console.log(canvas.children)
    // 지금은 canvas 안에 div를 생성하기 때문에, 생성을 먼저 한 후 다른 값을 넣어야 한다.

    let div = document.querySelector('.canvas > div')

    window.addEventListener('mousemove', function(e){
        let mouseX = e.pageX;   // 현재 마우스 위치
        let winX = window.innerWidth;   // 윈도우에서의 마우스 위치

        let percent = parseInt((mouseX / winX) * imgCount + 1)
        console.log(percent)
    })


}