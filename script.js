let a = ''; //first number
let b = ''; //second number
let sign = ''; // знак операции
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const action = ['-','+','*','/',];

const result = document.getElementById('result');

function clear() {
	a = '';
	b = '';
	sign = '';
	finish = false;
	result.textContent = 0;
}
document.getElementById('clear').onclick = clear;

const video = document.querySelector('.video');
	startVideo = function() {
		video.classList.remove("hidden");
		video.currentTime = 0.25;
		video.play();
		video.addEventListener("ended", () => {
			video.classList.add("hidden");
		 });
		}


document.querySelector('.calculator_keys').onclick = (event) => {
	if(!event.target.classList.contains('key')) return;
	if(event.target.classList.contains('c')) return;
		
	result.textContent = '';
		
	const btn = event.target.textContent
		
	if (digit.includes(btn)) {
		
		if (b==='' && sign === '') {
			a += btn;
			result.textContent = a;
		}
		
		else if (a!== '' && b!=='' && finish) {
				b = btn;
				finish = false;
				result.textContent = b;
		}
		
		else{
			b += btn;
			result.textContent = b;
		}
		
		console.log (a, b, sign);
		return;
	}
		

	if (action.includes(btn)) {

		
		if (sign === '') {
      // If not, set sign to btn and update the result.textContent
     		sign = btn;
      	result.textContent = sign;
   		console.log(sign);
    	} else {
      // If yes, call the count() function
      	count();
			sign = btn;
			result.textContent = sign
			console.log(sign);
   	} 

	}
	
	if (btn === '=') count();

}

const count = function() {
	switch (sign) {
		case '+':
			a = (+a) + (+b);
			
			break;
		case '-':
			a = a - b;
			
			break;
		case '*':
			a = a * b;
			
			break;
		case '/':
			if (b === '0'){
				startVideo();
				result.textContent = '0';
				a = '';
				
				return;
			}
			a = (a / b).toFixed(1);
			
			break;
	}
	b = '';
	sign = '';
	finish = true;
	result.textContent = a;
	console.log (a, b, sign);
}

