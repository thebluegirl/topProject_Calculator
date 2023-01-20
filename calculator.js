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

    if (display.innerText == false) {
        equalBtn.disabled = true;
    } else {
        equalBtn.disabled = false;
    }
})

delBtn.addEventListener('click', e => {
    display.innerText = display.innerText.slice(0, -1)
})