window.onload = () => {
    changeListStyle();
}


function changeListStyle() {
    const selects = document.querySelectorAll('select')

    selects.forEach(el => {
        const selectItem = el.children.length;
        // console.log(selectItem)

        //vanila hidden 처리
        el.classList.add('hidden')


        // newList wrapper생성
        const wrapper = document.createElement('div')
        wrapper.className = 'list';

        el.parentNode.insertBefore(wrapper, el)
        wrapper.appendChild(el);


        // newList 생성
        const newList = document.createElement('div')
        newList.className = 'newList-style'
        newList.textContent = el.children[0].textContent; // 수정된 부분
        wrapper.appendChild(newList)


        const list = document.createElement('ul');
        list.className = 'newList-option';
        wrapper.appendChild(list);

        // console.log(list)

        for (let i = 0; i < selectItem; i++) {
            const listItem = document.createElement('li')
            listItem.textContent = el.children[i].textContent;
            listItem.setAttribute('rel', el.children[i].value)
            list.appendChild(listItem)
        }

        const listItems = list.querySelectorAll('li')
        // console.log(listItems)


        newList.addEventListener('click', (e) => { 
            e.stopPropagation();


            document.querySelectorAll('.newList-style.active').forEach(active => {
                if (active !== newList){
                    active.classList.remove('active')
                }
            })
            newList.classList.toggle('active');
            list.style.display = list.style.display === 'block' ? 'none' : 'block';
        })

        listItems.forEach(item => {
            item.addEventListener('click', (e)=>{
                newList.textContent = e.target.textContent;
                // console.log(e.target.textContent)
 
                newList.classList.remove('active')
                el.value = e.target.getAttribute('rel')
                // el.value에 li의 rel을 넣음 (서버에 전송을 위한 요소)

                list.style.display = 'none';
            })
        })

        document.addEventListener('click', ()=>{

            newList.classList.remove('active')
            list.style.display = 'none';
        })

    })
    // console.log(list)
}



