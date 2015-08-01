var box = document.getElementById('output');

function buttonClick(x)
{
	box.value += x; 
}


function calculate()
{
	x = box.value;
	x = eval(x);
	box.value = x;
}


function clearAll ()
{
	box.value = '';
}


function clearEntry () {
	
	var num = box.value;
	var len = num.length-1;
	var newNum = num.substring(0,len);
	box.value = newNum;
}
