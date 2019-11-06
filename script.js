/* eslint-disable no-mixed-operators */
/* eslint-disable eqeqeq */
/* eslint-disable no-restricted-globals */
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

// Russian language
const arrLine1 = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
const arrLine2 = ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/', 'Esc'];
const arrLine3 = ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'];
const arrLine4 = ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'Shift'];
const arrLine5 = ['Ctrl', 'Cmd', 'Alt', 'Space', 'Alt', '◄', '▼', '►', 'Ctrl'];
const arrLine6 = ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/', 'Esc', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'Shift', 'Ctrl', 'Cmd', 'Alt', 'Space', 'Alt', '◄', '▼', '►', 'Ctrl'];

// English language
const arrLine2En = ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Esc', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift', 'Ctrl', 'Cmd', 'Alt', 'Space', 'Alt', '◄', '▼', '►', 'Ctrl'];

for (let i = 0; i < arrLine1.length; i += 1) {
  const key = document.createElement('button');
  key.className = 'key';
  key.innerText = arrLine1[i];
  row1.appendChild(key);
}

for (let i = 0; i < arrLine2.length; i += 1) {
  const key = document.createElement('button');
  key.className = 'key';
  key.innerText = arrLine2[i];
  row2.appendChild(key);
}

for (let i = 0; i < arrLine3.length; i += 1) {
  const key = document.createElement('button');
  key.className = 'key';
  key.innerText = arrLine3[i];
  row3.appendChild(key);
}

for (let i = 0; i < arrLine4.length; i += 1) {
  const key = document.createElement('button');
  key.className = 'key';
  key.innerText = arrLine4[i];
  row4.appendChild(key);
}

for (let i = 0; i < arrLine5.length; i += 1) {
  const key = document.createElement('button');
  key.className = 'key';
  key.innerText = arrLine5[i];
  row5.appendChild(key);
}

const button = document.getElementsByClassName('key');

keyboard.addEventListener('mousedown', () => {
  for (let i = 0; i < button.length; i += 1) {
    event.target.style.borderRadius = '50%';
    event.target.style.boxShadow = '3px 2px 15px 13px rgba(173,125,173,1)';
  }
});

keyboard.addEventListener('mouseup', () => {
  for (let i = 0; i < button.length; i += 1) {
    event.target.style.borderRadius = 'initial';
    event.target.style.boxShadow = 'none';
  }
});

keyboard.addEventListener('click', () => {
  const focus = document.querySelector('.textarea');
  focus.focus();

  const el = event.target.innerText;
  if (el !== 'Backspace' && el !== 'Space' && el !== 'Tab' && el !== 'Esc' && el !== 'CapsLock' && el !== 'Enter' && el !== 'Shift' && el !== 'Ctrl' && el !== 'Cmd' && el !== 'Alt' && el !== arrLine1 && el !== document.querySelector('.row1').innerText && el !== document.querySelector('.row2').innerText && el !== document.querySelector('.row3').innerText && el !== document.querySelector('.row4').innerText && el !== document.querySelector('.row5').innerText) {
    focus.value += el;
  } else if (el == 'Backspace') {
    const str = focus.value;
    focus.value = str.substr(0, str.length - 1);
  } else if (el == 'Space') {
    focus.value += ' ';
  } else if (el == 'Enter') {
    focus.value += '\n';
  } else if (el == 'CapsLock' && button[15].innerText == 'й' || button[15].innerText == 'q') {
    const l = 0;
    button[l].className += ' uppercase';
    for (let i = 15; i < 27; i += 1) {
      button[i].className += ' uppercase';
    }
    for (let j = 30; j < 41; j += 1) {
      button[j].className += ' uppercase';
    }
    for (let k = 43; k < 52; k += 1) {
      button[k].className += ' uppercase';
    }
  } else if (el == 'CapsLock' && button[15].innerText == 'Й' || button[15].innerText == 'Q') {
    button[0].classList.remove('uppercase');
    for (let d = 0; d < button.length; d += 1) {
      button[d].classList.remove('uppercase');
    }
  }
});

window.addEventListener('keydown', (event) => {
  for (let i = 0; i < button.length; i += 1) {
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

window.addEventListener('keyup', () => {
  for (let i = 0; i < button.length; i += 1) {
    button[i].style.borderRadius = '0';
    button[i].style.boxShadow = 'none';
  }
});

window.addEventListener('keydown', (event) => {
  let j = 0;
  let k = 0;
  if (event.ctrlKey && event.shiftKey && button[0].innerText == 'ё') {
    for (let i = 14; i < button.length; i += 1) {
      button[i].innerText = arrLine2En[j];
      j += 1;
      button[i].className += ' english';
    }
    button[0].innerText = '`';
    localStorage.setItem('button[i].className', button[26].className);
  } else if (event.ctrlKey && event.shiftKey && button[0].innerText == '`') {
    for (let i = 14; i < button.length; i += 1) {
      button[i].innerText = arrLine6[k];
      k += 1;
      button[i].className = 'key';
    }
    button[0].innerText = 'ё';
    localStorage.setItem('button[i].className', button[26].className);
  }
});

