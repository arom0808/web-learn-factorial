function factorial(num){
	if(num>=-1&&num<=1)
		return(num);
	else
		if (num>0)
			return(num*factorial(num-1));
		else
			return(num*factorial(num+1));
}
function numberOfZerosAtTheEnd(num){
	num=num.toString()
	let i = num.length - 1;
  	while (i >= 0 && num.charAt(i) === '0') --i;
  	return(num.length - 1 -i);
}
function writeFactorial(){
	let res=factorial(parseInt(document.getElementById("valueInput").value));
	document.getElementById("result").innerHTML="result: "+res;
	document.getElementById("numberOfZerosAtTheEnd").innerHTML=
		"Number of zeros at the end: "+numberOfZerosAtTheEnd(res);
}
