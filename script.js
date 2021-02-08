function factorial(num){
	if(num>=-1&&num<=1) return(num);
	let res=BigInt(1);
	for(let i=num;num>0?i>0:i<0;num>0?--i:++i) res*=i;
	return (res);
}
function numberOfZerosAtTheEnd(num){
	num=num.toString();
	let i = num.length - 1;
  	while (i >= 0 && num.charAt(i) === '0') --i;
  	return(num.length - 1 -i);
}
function writeFactorial(){
	let res=factorial(BigInt(document.getElementById("valueInput").value));
	document.getElementById("result").innerHTML="result: "+res.toString();
	document.getElementById("numberOfZerosAtTheEnd").innerHTML=
		"Number of zeros at the end: "+numberOfZerosAtTheEnd(res).toString();
}