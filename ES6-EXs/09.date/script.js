window.onload = () => {
    formData();
}

/*
    select를 찾아서 안의 option들의 값을 찾아서 내용을 새로 생성되는 ul > li 구조의 형태에 그대로 이식하는 것

    1. select에 있는 option의 갯수 파악
    2. option안에 있는 값을 출력
    3. 1,2 에 있는 새로 생성되는 태그에 이식
*/

function formData() {
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
        // console.log(list)


        for (let i = 0; i < selectItem; i++) {
            const listItem = document.createElement('li');
            listItem.textContent = el.children[i].textContent;
            listItem.setAttribute('rel', el.children[i].value)
            list.appendChild(listItem)
        }


        const listItems = list.querySelectorAll('li')
        console.log(listItems)
        // list는 미리 만들어진 요소가 아닌 중간에 스크립트로 추가된 요소이기 때문에
        // 추가되기 전에 미리 찾아놓게 되면 찾을 수 없는 에러가 나오게 된다.
        // 스크립트로 추가한 요소를 찾는 경우, 추가된 코드 다음에 찾아야 한다.

        styledSelect.addEventListener('click', () => {
            document.querySelectorAll('.select-styled.active').forEach(active => {
                if (active !== styledSelect){
                    active.classList.remove('active')
                }
            })
            styledSelect.classList.toggle('active');
            list.style.display = list.style.display === 'block' ? 'none' : 'block';
        })

        listItems.forEach(item => {
            item.addEventListener('click', (e)=>{
                styledSelect.textContent = e.target.textContent;
                // console.log(e.target.textContent)

                styledSelect.classList.remove('active')
                el.value = e.target.getAttribute('rel')
                // el.value에 li의 rel을 넣음 (서버에 전송을 위한 요소)

                list.style.display = 'none';
            })
        })

        document.addEventListener('click', ()=>{

            styledSelect.classList.remove('active')
            list.style.display = 'none';
        
        })
        

    })
}