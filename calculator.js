const display = document.getElementById('calc-display')


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

function operate(operator, num1, num2) {
    if (operator === '+'){
        return add(num1, num2);
    } else if (operator === '-'){
        return subtract(num1, num2);
    } else if (operator === '/'){
        return divide(num1, num2);
    } else if (operator === '*'){
        return multiply(num1, num2);
    }
}

document.addEventListener('click', e => {
    if (e.target.id === 'clr-btn') {
        display.innerHTML = ''
    }
    else if (e.target.nodeName === 'BUTTON') {
        display.innerText += e.target.textContent
    }
})

