

window.onload = () => {
    const formData = new FormData();
}

class FormData {
    constructor() {
        this.init();
    }

    init() {
        /*
        init은 초기값을 의미하는 용어로, 시작값
        */
        this.selects = document.querySelectorAll('select')
        this.selects.forEach(el => {
            const selectItem = el.children.length;

            el.classList.add('select-hidden');
            const wrapper = document.createElement('div')
            wrapper.className = 'select';
            el.parentNode.insertBefore(wrapper, el);
            wrapper.appendChild(el);

            const styledSelect = document.createElement('div')
            styledSelect.className = 'select-styled';
            styledSelect.textContent = el.children[0].textContent;
            wrapper.appendChild(styledSelect);

            const list = document.createElement('ul');
            list.className = 'select-options';
            wrapper.appendChild(list);

            for (let i = 0; i < selectItem; i++) {
                const listItem = document.createElement('li');
                listItem.textContent = el.children[i].textContent;
                listItem.setAttribute('rel', el.children[i].value)
                list.appendChild(listItem)
            }

            this.bindingEvent(styledSelect, list, el);
            // 괄호 안의 값은 전달해줄 객체들
        })
    }


    bindingEvent(styledSelect, list, el) {
        const listItems = list.querySelectorAll('li')
        // console.log(listItems)

        //리스트 선택부분
        styledSelect.addEventListener('click', (e) => {
            e.stopPropagation();
            document.querySelectorAll('.select-styled.active').forEach(active => {
                if (active !== styledSelect) {
                    active.classList.remove('active');
                    active.nextElemetSibling.style.display = 'none';
                }
            })
            styledSelect.classList.toggle('activce');
            list.style.disply = list.style.display === 'block' ? 'none' : 'block'
        })

        //선택시 rel값을 넘겨주고 리스트를 닫음
        listItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                styledSelect.textContent = e.target.textContent;
                styledSelect.classList.remove('remove');
                el.value = e.target.getAttribute('rel');
                list.style.display = 'none';
            })
        })
    }
}