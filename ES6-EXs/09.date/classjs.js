

window.onload = () => {
    const formData = new FormData();
}

class FormData {
    constructor() {
        this.init();
    }

    init() {
        /*
        init은 
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

            for(let i = 0; i < selectItem; i++){
                const listItem = document.createElement('li');
                listItem.textContent = el.children[i].textContent;
                listItem.setAttribute('rel', el.children[i].value)
                list.appendChild(listItem)
            }

            this.bindingEvent(styledSelect, list, el);
            // 괄호 안의 값은 전달해줄 객체들
        })
    }


    bindingEvent (styledSelect, list, el){
        const listItems = list.querySelectorAll('li')
        console.log(listItems)
    }
}