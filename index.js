
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
    let a = Number(document.getElementById("one").value);
    console.log(a);
    let b = Number(document.getElementsById("two").value);
    console.log(b);
    let c = a + b;
    let result = document.getElementById("answer").value=c;
    console.log(c);
};

/*function sub () {
    var a = document.getElementById("one").value;
    var b = document.getElementsById("two").value;
    var c= a - b;
    document.getElementById("answer").value;
};
function mul () {
    var a = document.getElementById("one").value;
    var b = document.getElementsById("two").value;
    var c= a * b;
    document.getElementById("answer").value=c;
};
function div () {
    var a = document.getElementById("one").value;
    var b = document.getElementsById("two").value;
    var c= a % b;
    document.getElementById("answer").value=c;
};

*/
// this is for the last "calculadora"
function calc()
{
    var n1 = parseFloat(document.getElementById('n1').value);
    var n2 = parseFloat(document.getElementById('n2').value);
    
    var oper = document.getElementById('operators').value;
    
    if(oper === '+')
    {
        document.getElementById('resultado').value = n1+n2;
    }
    
    if(oper === '-')
    {
        document.getElementById('resultado').value = n1-n2;
    }
    
    if(oper === '/')
    {
        document.getElementById('resultado').value = n1/n2;
    }
    
    if(oper === 'X')
    {
        document.getElementById('resultado').value = n1*n2;
    }
}

