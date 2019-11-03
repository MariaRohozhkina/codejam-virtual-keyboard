const container = document.createElement('div');
container.className = 'container';
document.body.appendChild(container);

const textarea = document.createElement('textarea');
textarea.className = 'textarea';
textarea.setAttribute('rows', '15');
textarea.setAttribute('cols', '100');
container.appendChild(textarea);

const keyboard = document.createElement('div');
keyboard.className = 'keyboard';
container.appendChild(keyboard);

const row1 = document.createElement('div');
row1.className = 'row row1';
keyboard.appendChild(row1);
const row2 = document.createElement('div');
row2.className = 'row row2';
keyboard.appendChild(row2);
const row3 = document.createElement('div');
row3.className = 'row row3';
keyboard.appendChild(row3);
const row4 = document.createElement('div');
row4.className = 'row row4';
keyboard.appendChild(row4);
const row5 = document.createElement('div');
row5.className = 'row row5';
keyboard.appendChild(row5);

const arrLine1 = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
const arrLine2 = ['Tab','й', 'ц', 'у', 'к', 'е', 'н','г', 'ш', 'щ', 'з', 'х','ъ','/', 'Esc'];
const arrLine3 = ['CapsLock','ф','ы','в','а','п','р','о','л','д','ж','э','Enter'];
const arrLine4 = ['Shift','я','ч','с','м','и','т','ь','б','ю','.','▲','Shift'];
const arrLine5 = ['Ctrl','Cmd','Alt','','Alt','◄','▼','►','Ctrl'];

for (let i = 0; i < arrLine1.length; i++) {
const key = document.createElement('button');
key.className = 'key';
key.innerText = arrLine1[i];
row1.appendChild(key);
}

for (let i = 0; i < arrLine2.length; i++) {
    const key = document.createElement('button');
    key.className = 'key';
    key.innerText = arrLine2[i];
    row2.appendChild(key);
}

for (let i = 0; i < arrLine3.length; i++) {
    const key = document.createElement('button');
    key.className = 'key';
    key.innerText = arrLine3[i];
    row3.appendChild(key);
}

for (let i = 0; i < arrLine4.length; i++) {
    const key = document.createElement('button');
    key.className = 'key';
    key.innerText = arrLine4[i];
    row4.appendChild(key);
}

for (let i = 0; i < arrLine5.length; i++) {
    const key = document.createElement('button');
    key.className = 'key';
    key.innerText = arrLine5[i];
    row5.appendChild(key);
}

const button = document.getElementsByClassName('key');

keyboard.addEventListener('mousedown', () => {
    for (var i = 0; i < button.length; i++) {
    event.target.style.borderRadius = '50%';
    event.target.style.boxShadow = '3px 2px 15px 13px rgba(173,125,173,1)';
    }
});

keyboard.addEventListener('click', (еvent) => {
    const focus = document.querySelector('.textarea');
    focus.focus();

    let el = event.target.innerText;
    focus.innerHTML += el;
})

keyboard.addEventListener('mouseup', () => {
    for (var i = 0; i < button.length; i++) {
        event.target.style.borderRadius = 'initial';
        event.target.style.boxShadow = 'none';
    }
});

window.addEventListener('keydown', (event) => {
    for (var i = 0; i < button.length; i++) {
    if (event.key == button[i].innerText) {
        button[i].style.borderRadius = '50%';
        button[i].style.boxShadow = '3px 2px 15px 13px rgba(173,125,173,1)';
    } else if (event.key == 'Control') {
        button[55].style.borderRadius = '50%';
        button[63].style.borderRadius = '50%';
        button[55].style.boxShadow = '3px 2px 15px 13px rgba(173,125,173,1)';
        button[63].style.boxShadow = '3px 2px 15px 13px rgba(173,125,173,1)';
    } else if (event.key == 'ArrowUp') {
        button[53].style.borderRadius = '50%';
        button[53].style.boxShadow = '3px 2px 15px 13px rgba(173,125,173,1)';
    } else if (event.key == 'ArrowLeft') {
        button[60].style.borderRadius = '50%';
        button[60].style.boxShadow = '3px 2px 15px 13px rgba(173,125,173,1)';
    } else if (event.key == 'ArrowRight') {
        button[62].style.borderRadius = '50%';
        button[62].style.boxShadow = '3px 2px 15px 13px rgba(173,125,173,1)';
    } else if (event.key == 'ArrowDown') {
        button[61].style.borderRadius = '50%';
        button[61].style.boxShadow = '3px 2px 15px 13px rgba(173,125,173,1)';
    } else if (event.key == 'Meta') {
        button[56].style.borderRadius = '50%';
        button[56].style.boxShadow = '3px 2px 15px 13px rgba(173,125,173,1)';
    } else if (event.key == 'Escape') {
        button[28].style.borderRadius = '50%';
        button[28].style.boxShadow = '3px 2px 15px 13px rgba(173,125,173,1)';
    }
    }

    const focus = document.querySelector('.textarea');
    focus.focus();
});

window.addEventListener('keyup', (event) => {
    for (var i = 0; i < button.length; i++) {
        button[i].style.borderRadius = '0';
        button[i].style.boxShadow = 'none';
    }
    }
);

