const display = document.querySelector("#display");
const plus = document.querySelector(".plus-btn");
const dot = document.querySelector(".dot-btn");
const times = document.querySelector(".times-btn");
const minus = document.querySelector(".minus-btn");
const divide = document.querySelector(".divide-btn");
const calculator = document.querySelector(".equal-btn");

plus.addEventListener('click', function(){
    let lastChar = display.value.charAt(display.value.length - 1);
    if (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "."  || lastChar === "/") {
        
    } else {
        display.value += "+";
    }
});

dot.addEventListener('click', function(){
    let lastChar = display.value.charAt(display.value.length - 1);
    if (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "."  || lastChar === "/") {
        
    } else {
        display.value += ".";
    }
});

divide.addEventListener('click', function(){
    let lastChar = display.value.charAt(display.value.length - 1);
    if (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "."  || lastChar === "/") {
        
    } else {
        display.value += "÷";
    }
});

times.addEventListener('click', function(){
    let lastChar = display.value.charAt(display.value.length - 1 && display.value.length - 1);
    let twolastChar = display.value.charAt(display.value.length - 1 && display.value.length - 2);
    if (lastChar === "+" || lastChar === "-" || lastChar === "."  || lastChar === "/") {
        
    } else if (twolastChar === "*" && lastChar === "*") {
        
    } else {
        display.value += "×";
    }
});

minus.addEventListener('click', function(){
    let lastChar = display.value.charAt(display.value.length - 1);
    if (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "."  || lastChar === "/") {
        
    } else {
        display.value += "-";
    }
});

calculator.addEventListener('click', function(){
    let char = display.value.slice(-1);
    if (char === "+" || char === "-" || char === "*" || char === "." || char === "/") {
        
    } else {
        let expression = display.value.replace(/×/g, "*").replace(/÷/g, "/");
        display.value = eval(expression);
      }
});
