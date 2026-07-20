
let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let result = document.getElementById("result")

document.getElementById("btnAdd").addEventListener("click",function(){
    calculate("+")
})

document.getElementById("btnSub").addEventListener("click", function(){
 calculate("-")
})

document.getElementById("btnMul").addEventListener("click",function(){
    calculate("*")
})

document.getElementById("btnDiv").addEventListener("click", function(){
    calculate("/")
})

function calculate(operator) {
    let number1 = Number(num1.value);
    let number2 = Number(num2.value);

    if(num1.value =="" || num2 == ""){
        alert("Please Enter both value")
    }

    let ans;

    if(operator == "+"){
        ans = number1 + number2
    }

    else if(operator == "-"){
        ans = number1 - number2
    }

    else if(operator == "*"){
        ans = number1 * number2
    }

    else if(operator == "/"){
        ans = number1 / number2
    }

    else {
        alert("Something went  wrong")
    }

    result.innerHTML = "Result :" + ans;
 
}

