

window.onload = () => {
    const formData = new FormData();
}

class FormData {
    constructor() {
        this.init();
        this.bindingEvent();
    }

    init() {
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
                listItem.setAttribute('rel', el.childre[i].value)
                list.appendChild(listItem)
            }
        })
    }
}