window.onload = () => {
    main()
}

function main() {

    /*
    1. 동작을 생각한다
    2. 선택자에 들어갈 메소드를 정리한다
    4. 동작에 따른 선택자 별 메소드를 넣을 변수를 설정한다
    5. 구현한다
    */

    const bgSlider = document.querySelector('#slider')
    const mSlider = document.querySelector('#slider2')

    const next = document.querySelector('.next')
    const prev = document.querySelector('.prev')

    phoneSlider();
    function phoneSlider() {
        itemSize = mSlider.querySelectorAll('li').length;
        console.log(itemSize)
    }


}