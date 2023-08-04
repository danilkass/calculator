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
		sign = btn;
		result.textContent = sign;
		console.log(sign);
		return
	}

	const video = document.querySelector('.video');
	if (btn === '=') {
		if (b === '') b = a;
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
					video.classList.remove("hidden");
					video.currentTime = 0.25;
					video.play();
					video.addEventListener("ended", () => {
						video.classList.add("hidden");
					 });


					result.textContent = '0';
					a = '';
					b = '';
					sign = '';
					return;
				}
				a = a / b;
				break;
		}
		finish = true;
		result.textContent = a;
		console.log (a, b, sign);
	}
	
}