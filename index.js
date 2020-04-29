
/*
function sumValue () {
   // var num1, num2, result;
    num1 = Number(document.formCalculator.num1.value);
    num2 = Number(document.formCalculator.num2.value);
    res = num1 + num2 ; 
    document.formCalculator.result.value = res;
};
*/
function add () {
    var a = document.getElementById("one").value;
    var b = document.getElementsById("two").value;
    var c = a + b;
    document.getElementById("answer").value=+c;
}
function sub () {
    var a = document.getElementById("one").value;
    var b = document.getElementsById("two").value;
    var c= a - b;
    document.getElementById("answer").value=+c;
}
function mul () {
    var a = document.getElementById("one").value;
    var b = document.getElementsById("two").value;
    var c= a * b;
    document.getElementById("answer").value=+c;
}
function div () {
    var a = document.getElementById("one").value;
    var b = document.getElementsById("two").value;
    var c= a % b;
    document.getElementById("answer").value=+c;
}


