//简易计算器的代码

//获取运算符
var b_add = document.getElementById("add");
var b_sub = document.getElementById("sub");
var b_mul = document.getElementById("mul");
var b_div = document.getElementById("div");

//结果相关元素及数值
var show_res = document.getElementById("res");
var res;
//var number1_float;
//var number2_float;

function getInputNums(){
    //获取运算数值
    var number1 = document.getElementById("num1").value;
    var number2 = document.getElementById("num2").value;
    //转为浮点类型
    number1_float = parseFloat(number1);
    number2_float = parseFloat(number2);
}

//四则运算函数
function addition(num1, num2){
    return num1 + num2;
}
function substraction(num1, num2){
    return num1 - num2;
}
function multiplication(num1, num2){
    return num1 * num2;
}
function division(num1, num2){
    if(num2 == 0){
       alert("0不能做除数");
       return null;
    }
    else{
       return num1 / num2;
    }
}


b_add.onclick = function(){
    getInputNums();
    res = addition(number1_float, number2_float);
    show_res.innerHTML = res;
};
b_sub.onclick = function(){
    getInputNums();
    res = substraction(number1_float, number2_float);
    show_res.innerHTML = res;
};
b_mul.onclick = function(){
    getInputNums();
    res = multiplication(number1_float, number2_float);
    show_res.innerHTML = res;
};
b_div.onclick = function(){
    getInputNums();
    res = division(number1_float, number2_float);
    show_res.innerHTML = res;
};

