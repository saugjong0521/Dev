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
    // console.log(selects)

    selects.forEach(el => {
        const selectItem = el.children.length;
        // console.log(selectItem)
        
        el.classList.add('select-hidden');
        // 기존의 li에 hidden을 줘서 display:none 처리

        const wrapper = document.createElement('div');
        wrapper.className = 'select';   // 새로 생성된 
        // console.log(wrapper)

        el.parentNode.insertBefore(wrapper, el)
        wrapper.appendChild(el);

        // 제목
        const styledSelect = document.createElement('div')
        styledSelect.className = 'select-styled'
        styledSelect.textContent = el.children[0].textContent;
        wrapper.appendChild(styledSelect)
        // console.log(styledSelect)

        const list = document.createElement('ul');
        list.className = 'select-options';
        wrapper.appendChild(list);


        for (let i = 0; i < selectItem; i++){
            const listItem = document.createElement('li');
            listItem.textContent = el.children[i].textContent;
            listItem.setAttribute('rel', el.children[i].value)
            list.appendChild(listItem)
        }

    })
}