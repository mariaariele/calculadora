const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

buttons.forEach(btn => {
    btn.addEventListener('click', () => handleInput(btn.innerText));
});

function handleInput(value) {
    if (value === 'C') {
        display.innerText = '0';
    }   else if (value === '=') {
        try {
            display.innerText = eval(display.innerText
                .replace('x','*')
                .replace('÷','/'));
        }   catch {
            display.innerText = 'Erro';
        }
    }   else {
        if (display.innerText === '0') {
            display.innerText = value;
        } else {
            display.innerText += value;
        }
    }
}

// suporte ao teclado