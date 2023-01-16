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

function operate(num1, operator, num2) {
    if (operator === '+'){
        return add(num1, num2);
    } else if (operator === '-'){
        return subtract(num1, num2);
    } else if (operator === '/'){
        return divide(num1, num2);
    } else if (operator === 'x'){
        return multiply(num1, num2);
    }
}

document.addEventListener('click', e => {
    if (e.target.id === 'clr-btn') {
        display.innerHTML = ''
    } else if (e.target.id === 'equal-btn') {
        let ans;
        let equationParts = document.getElementById('calc-display').textContent.split(/\s/g);
        ans = operate(Number(equationParts[0]), equationParts[1], Number(equationParts[2])) 
        display.innerText += ` = ${ans}` 
    } else if (e.target.tagName === 'BUTTON' && display.textContent.includes('=')){
        display.innerHTML = ''
        display.innerText += e.target.textContent
    } else if (e.target.nodeName === 'BUTTON') {
        display.innerText += e.target.textContent
    }
})

