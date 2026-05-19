let btn = document.querySelector('#btn');
let box = document.querySelector('#paragraph');


btn.onclick = () => {
    if (box.style.display == 'none') {
        box.style.display = 'block';
    } else {
        box.style.display = 'none';
    }
}