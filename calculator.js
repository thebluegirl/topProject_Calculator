const display = document.getElementById('calc-display')
const equalBtn = document.getElementById('equal-btn')
const delBtn = document.getElementById('del-btn')

function add(...num) {
    return num.reduce((total, currentNum) => {
        return total + currentNum;
    })
}

function subtract(...num) {
    return num.reduce((total, currentNum) => {
        return total - currentNum;
    })
}

function multiply(...num) {
    return num.reduce((total, currentNum) => {
        return total * currentNum;
    }, 1)
}

function divide(...num) {
    return num.reduce((total, currentNum) => {
        return total / currentNum;
    })
}

function operate(num1, operator, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
            break
        case '-':
            return subtract(num1, num2);
            break
        case '÷':
            return divide(num1, num2);
            break
        case 'x':
            return multiply(num1, num2);
            break
    }
}

function equate () {
    let ans;
    let equationParts = document.getElementById('calc-display').textContent.split(/\s/g);
    ans = operate(+equationParts[0], equationParts[1],+equationParts[2]) 
    if (equationParts.length > 3) {
        for (let i = 3; i < equationParts.length; i += 2){
            ans = operate(+ans, equationParts[i], +equationParts[i+1])
        }
    }
    display.innerText += ` \n= ${Math.round(+ans * 1000)/1000}` 
}

function disableBtn(para1, para2) {
    if (para1 == false) {
        para2.disabled = true;
    } else {
        para2.disabled = false;
    }
}

function delChar() {
    display.innerText = display.innerText.slice(0, -1)
}

document.addEventListener('click', e => {
    if (e.target.id === 'clr-btn') {
        display.innerText = ''
    } 
    
    if (e.target.tagName === 'BUTTON' && display.textContent.includes('=')){
        display.innerText = ''
        if (e.target === equalBtn){
            return
        }
    } 
    
    if (e.target === equalBtn) {
        equate ();
    } else if (e.target.nodeName === 'BUTTON') {
        display.innerText += e.target.textContent
    }

    disableBtn(display.innerText, equalBtn);
})

delBtn.addEventListener('click', e => {
    delChar()
})

document.addEventListener('keydown', e => {
    if (e && display.innerText.includes('=')) {
        display.innerText = ''
        if (e.key = '=') return;
    }

    if (e.key <= 9){
        display.innerText += e.key
    }

    if (e.key === 'x' || e.key === '*') {
        display.innerHTML += ' x&nbsp;'
    }

    if (e.key === '/'){
        display.innerHTML += ' ÷&nbsp;'
    }

    if (e.key === '-') {
        display.innerHTML += ' -&nbsp;'
    }

    if (e.key === '+') {
        display.innerHTML += ' +&nbsp;'
    }

    if (e.key === 'Backspace') {
        delChar();
    }

    if (e.key === 'Escape') {
        display.innerText = ''
    }

    if (e.key === '=' && equalBtn.disabled === false) {
        equate()
    }

    disableBtn(display.innerText, equalBtn);
})