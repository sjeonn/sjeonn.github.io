function add(x, y) {return x + y;}

function sub(x, y) {return x - y;}

function mult(x, y) {return x * y;}

function divide(x, y) {return x / y;}

function operate(func, x, y) {
    let fn = window[func];
    if (typeof fn === "function") {
        return fn(x, y);
    }
}

function updateScreen(newVal) {
    let currVal = displayObj.innerText;
    let lastInput = inputs[inputs.length-1];
    if (typeof lastInput == "string") { //9.0 cannot count as string
        displayObj.innerText = newVal;
        inputs.push(newVal);
    } else if (decimal) {
        if (String(currVal).length < 7) {
            displayObj.innerText = currVal + newVal;
            inputs[inputs.length-1] = Number(currVal + newVal);
        }
    } else if (currVal == 0) {
        displayObj.innerText = newVal;
        inputs[inputs.length-1] = newVal;
    } else {
        console.log(String(currVal).length);
        if (String(currVal).length < 7) {
            currVal = Number(currVal);
            currVal = (currVal*10) + newVal;
            displayObj.innerText = currVal;
            inputs[inputs.length-1] = currVal;
        }
    }
}

function clearEntry() { //doesnt do anything if last input was operator
    let lastInput = inputs[inputs.length-1];
    if (typeof lastInput == "number") {
        inputs[inputs.length-1] = 0;
        displayObj.innerText = 0;
    }
}

function clearAll() {
    inputs = [0];
    displayObj.innerText = 0;
}

////////

var displayObj = document.querySelector(".screen");
var inputs = [0];

const nums = document.querySelectorAll(".num");
nums.forEach(num => num.addEventListener("click", () => {
    let btnVal = Number(num.innerText);
    updateScreen(btnVal);
}));

const ce = document.querySelector("#ce");
ce.addEventListener("click", clearEntry);
const ac = document.querySelector("#ac");
ac.addEventListener("click", clearAll);

const ops = document.querySelectorAll(".op");
ops.forEach(op => op.addEventListener("click", () => {
    inputs.push(op.id);
    decimal = false;
}));

const eq = document.querySelector("#eq");
eq.addEventListener("click", () => {
    if (inputs.length % 2 != 1) {
        inputs.pop()
    }
    let total = inputs[0];
    for (let i = 0; i < inputs.length-2; i += 2) {
        x = total;
        f = inputs[i+1];
        y = inputs[i+2];
        total = operate(f, x, y);
    }
    if (String(total).length < 7) {
        displayObj.innerText = total;
        inputs = [total];
    } else {
        displayObj.innerText = "Ovrflw"
        inputs = [0];
    }
    
});


const sign = document.querySelector("#sign");
sign.addEventListener("click", () => {
    let currVal = Number(displayObj.innerText);
    displayObj.innerText = currVal * -1;
    inputs[inputs.length-1] = currVal * -1;
})

var decimal = false;

const dec = document.querySelector("#dec"); // remove if dec == true
dec.addEventListener("click", () => {
    decimal = true;
    if (!displayObj.innerHTML.includes(".")) {
        displayObj.innerHTML = displayObj.innerHTML + "."
    }
});

/*
document.addEventListener('click', () => {
    console.log(inputs);
});
*/
