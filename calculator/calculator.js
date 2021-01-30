
let div=document.createElement('div');
div.setAttribute('class','calculator-grid');

let inputText=document.createElement('input');
inputText.type='text';
inputText.id="screen";
inputText.name="screen";
inputText.className="output";
div.appendChild(inputText);

const buttonsArray = 
[
	{ class:"", text:"AC" },
	{ class:"", text:"DEL" },
	{ class:"", text:"%" },
	{ class:"", text:"/" },
	{ class:"", text:"(" },
	{ class:"", text:"1" },
	{ class:"", text:"2" },
	{ class:"", text:"3" },
	{ class:"", text:"*" },
	{ class:"", text:")" },
	{ class:"", text:"4" },
	{ class:"", text:"5" },
	{ class:"", text:"6" },
	{ class:"", text:"+" },
	{ class:"", text:"M+" },
	{ class:"", text:"7" },
	{ class:"", text:"8" },
	{ class:"", text:"9" },
	{ class:"", text:"-" },
	{ class:"", text:"M-" },
	{ class:"", text:"." },
	{ class:"", text:"0" },
	{ class:"span-two", text:"=" },
	{ class:"", text:"MC" }
];

buttonsArray.forEach(element => {
let buttonElement=document.createElement('button')
buttonElement.innerText=element.text
if(element.class) {
	buttonElement.className=element.class
}

div.appendChild(buttonElement)
});

document.body.appendChild(div);

let screen=document.getElementById('screen');
let buttons=document.querySelectorAll('button');
let screenvalue='';
let isNotDecimal = true;
let decimalNumber = '';
let flag = 0;

for(item of buttons) {
	item.addEventListener('click', (e)=> {
	performCalculation(e, 'click');
})
}

window.document.onkeydown = (e) => {
	if((e.keyCode>=48 && e.keyCode<=57) || (e.keyCode>=96 && e.keyCode<=105) ){
		performCalculation(e, 'onkeydown');
	} 
	else 
	{
		alert('Entered value is not a number');
		return false;
	}
}

performCalculation = (event, eventType) => {
	let buttonText = '';
	if(eventType === 'click') {
		buttonText = event.target.innerText;
	} 
	else 
	{
		buttonText = event.key;
	}

	if (buttonText ==='=') {
		screen.value = eval(screenvalue);
		screenvalue="";
	}
	else if (buttonText ==='AC'){
		isNotDecimal = true;
		decimalNumber = '';
		flag = 0;
		buttonText = '';
		screenvalue = '';
		screen.value = '';
		localStorage.removeItem('mrc');
	}
	else if(buttonText ==='DEL'){
		isNotDecimal = true;
		decimalNumber = '';
		flag = 0;
		screenvalue=screenvalue.substring(0,screenvalue.length-1)
		screen.value=screenvalue
	}
	else if(buttonText ==='M+'){
		let mrc = '';
		if(localStorage.getItem('mrc')) {
			mrc = localStorage.getItem('mrc');
		}
			mrc += '+' + screen.value;
			screen.value=""
			screenvalue=""
			localStorage.setItem('mrc', mrc);
	}
	else if(buttonText ==='M-'){
			let mrc = '';
		if(localStorage.getItem('mrc')) {
			mrc = localStorage.getItem('mrc');
		}
			mrc += '-' + screen.value;
			screen.value=""
			screenvalue=""
			localStorage.setItem('mrc', mrc);
	}
	else if(buttonText ==='MC'){
		screen.value = eval(localStorage.getItem('mrc'));
		localStorage.removeItem('mrc');
		screenvalue=''
	}
	else {
		if(buttonText === '+' || buttonText === '-' || buttonText === '/' || buttonText === '*'  || buttonText === '%') {
			isNotDecimal = true;
			decimalNumber = '';
		}
		if(buttonText !== '+' && buttonText !== '-' && buttonText !== '/' && buttonText !== '*' && buttonText !== '%') {
			decimalNumber += buttonText;
		}
			flag = 0;
		decimalNumber.split('').forEach(element => {
			if(element === '.') {
				flag++;
			}
		});
		if(flag>=2){
			isNotDecimal = false;
		} 
		else {
			isNotDecimal = true;
		}

	    let lastCharacter = screenvalue.charAt(screenvalue.length-1);
		if(
			(lastCharacter === buttonText) &&
			((lastCharacter === '+') ||
			(lastCharacter === '-') ||
			(lastCharacter === '/') ||
			(lastCharacter === '%') ||
			(lastCharacter === '*') ||
			(lastCharacter === '.') ||
			(lastCharacter === ')') ||
			(lastCharacter === '(') )) {
			return;
		} 
		else {
			if(isNotDecimal && buttonText === '.') {
				screenvalue += buttonText
				if(eventType === 'click') {
					screen.value = screenvalue;
				}
			}
			if(buttonText !== '.') {
				screenvalue += buttonText
				if(eventType === 'click' || eventType === 'onkeydown') {
					screen.value = screenvalue;
				}
			}
		}
	}
}

