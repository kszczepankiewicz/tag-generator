class Tag {
    constructor(tag) {
        this.tag = tag;
    }
}

const form = document.querySelector('form');
const input = document.querySelector('input');
const pre = document.querySelector('pre');
const reset = document.getElementById('reset');

let tag;

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!input.value)
        if (!tag) alert('No tag');
        else {
            try {
                navigator.clipboard.writeText(pre.textContent);
            }
            catch (error) {
                alert('Not copied')
            }
        }

    if (!tag) tag = new Tag(input.value);
    else if (!tag.text) tag.text = input.value;
    pre.textContent = `<${tag.tag}>${tag.text || ''}</${tag.tag}>`;
    input.value = '';
});

reset.addEventListener('click', (e) => {
    tag = undefined;
    pre.textContent = '';
});