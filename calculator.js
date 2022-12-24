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