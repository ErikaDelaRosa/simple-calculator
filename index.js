
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

/* second calculator */

function getHistory(){
	return document.getElementById("history-value").innerText;
}
function printHistory(num){
	document.getElementById("history-value").innerText=num;
}
function getOutput(){
	return document.getElementById("output-value").innerText;
}
function printOutput(num){
	if(num==""){
		document.getElementById("output-value").innerText=num;
	}
	else{
		document.getElementById("output-value").innerText=getFormattedNumber(num);
	}	
}
function getFormattedNumber(num){
	if(num=="-"){
		return "";
	}
	var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
}
function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}
var operator = document.getElementsByClassName("operator");
for(var i =0;i<operator.length;i++){
	operator[i].addEventListener('click',function(){
		if(this.id=="clear"){
			printHistory("");
			printOutput("");
		}
		else if(this.id=="backspace"){
			var output=reverseNumberFormat(getOutput()).toString();
			if(output){//if output has a value
				output= output.substr(0,output.length-1);
				printOutput(output);
			}
		}
		else{
			var output=getOutput();
			var history=getHistory();
			if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
			if(output!="" || history!=""){
				output= output==""?output:reverseNumberFormat(output);
				history=history+output;
				if(this.id=="="){
					var result=eval(history);
					printOutput(result);
					printHistory("");
				}
				else{
					history=history+this.id;
					printHistory(history);
					printOutput("");
				}
			}
		}
		
	});
}
var number = document.getElementsByClassName("number");
for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		var output=reverseNumberFormat(getOutput());
		if(output!=NaN){ //if output is a number
			output=output+this.id;
			printOutput(output);
		}
	});
}




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
