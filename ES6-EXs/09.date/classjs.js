

window.onload = () => {
    const formData = new FormData();
}

class FormData {
    constructor() {
        this.selects = document.querySelectorAll('select')
        this.init();
    }

    init() {
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
            wrapper.appendChild(styledSelect)
        })
    }
}