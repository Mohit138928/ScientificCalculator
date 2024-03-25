const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculate = (btnValue) => {
    if(btnValue === "=" && output !== ""){
        output = eval(output.replace("%", "/100"));
    }else if(btnValue === "AC"){
        output =""
    }else if(btnValue === "DEL"){
        output = output.toString().slice(0,-1);
    }else if(btnValue === "sin"){
        output = Math.sin(display.value);
    }else if(btnValue === "cos"){
        output = Math.cos(display.value);
    }else if(btnValue === "tan"){
        output = Math.tan(display.value);
    }else if(btnValue === "x^2"){
        output = Math.pow(display.value,2);
    }else if(btnValue === "x^3"){
        output = Math.pow(display.value,3);
    }else if(btnValue === "sqrt2"){
        output = Math.sqrt(display.value);
    }else if(btnValue === "cbrt"){
        output = Math.cbrt(display.value);
    }else{
        if(output === "" && specialChars.includes(btnValue)) return;
        output += btnValue
    }
    display.value = output;
}

buttons.forEach((button) => {
    button.addEventListener("click", e => calculate(e.target.dataset.value));
});

function sin(){
	display.value=Math.sin(display.value);
}
