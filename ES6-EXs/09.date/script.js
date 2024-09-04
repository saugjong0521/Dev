window.onload = () => {
    formData();
}

/*
    select를 찾아서 안의 option들의 값을 찾아서 내용을 새로 생성되는 ul > li 구조의 형태에 그대로 이식하는 것

    1. select에 있는 option의 갯수 파악
    2. option안에 있는 값을 출력
    3. 1,2 에 있는 새로 생성되는 태그에 이식
*/

function formData(){
    const selects = document.querySelectorAll('select')
    console.log(selects)

    selects.forEach(el => {

    })
}