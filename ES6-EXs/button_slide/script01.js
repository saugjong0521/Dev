window.onload = () => {
    slider();
}

function slider(){

    const slider = document.querySelector('#slider');
    const panelItem = document.querySelectorAll('.panel > li');
    const btnItem = document.querySelectorAll('.navi > li');

    const circle = document.querySelector('#clrcle');

    btnItem.forEach(el => {
        el.addEventListener('click', onClick)
    })

    function onClick (){
        const idx = Array.from(btnItem).indexOf(this)
        //console.log(idx)
        const panelWidth = parseInt(getComputedStyle(slider).width);
        // getComputedStyle(선택자): 선택자에 있는 모든 css속성값을 반환
        // console.log(panelWidth)

        moveItem(idx)

    }
}