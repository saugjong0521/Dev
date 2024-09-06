

window.onload = () => {
    const formData = new FormData();
}

class FormData {
    constructor() {
        
        this.init();
        this.bindingEvent();
    }

    init() {
        /*
        init는 초기값을 의미하는 말로, 선택자; 시작값; 등을 작성

        다만 안에서 선언 시, 지역변수가 되기에
        밖에서 선언 이후 값을 init에다가 값을 작성
        */
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
                listItem.setAttribute('rel', el.childre[i].value)
                list.appendChild()
            }
        })
    }
}