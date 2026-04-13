class Tag {
    constructor(tag) {
        this.tag = tag;
    }
}

const form = document.querySelector('form');
const input = document.querySelector('input');
const pre = document.querySelector('pre');

let tag;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!tag) tag = new Tag(input.value);
    if (!tag.text) tag.text = input.value;
    pre.textContent = `<${tag.tag}>${tag.text || ''}</${tag.tag}>`;
    input.value = '';
});