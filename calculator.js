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
        ans = operate(+equationParts[0], equationParts[1],+equationParts[2]) 
        if (equationParts.length > 3) {
            for (let i = 3; i < equationParts.length; i += 2){
                ans = operate(+ans, equationParts[i], +equationParts[i+1])
                console.log(ans)
            }
        }
        display.innerText += ` = ${ans}` 
    } else if (e.target.tagName === 'BUTTON' && display.textContent.includes('=')){
        display.innerHTML = ''
        display.innerText += e.target.textContent
    } else if (e.target.nodeName === 'BUTTON') {
        display.innerText += e.target.textContent
    }
})

