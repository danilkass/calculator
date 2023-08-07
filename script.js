let a = ''; 
let b = ''; 
let sign = ''; 
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-','+','*','/',];

const result = document.getElementById('result');

function clear() {
	a = '';
	b = '';
	sign = '';
	finish = false;
	result.textContent = '';
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
		if (b === '' && sign === '') {
			 if (btn === "." && a.includes(".")) {
				  result.textContent = a;
				  return btn;
			 }
			 if (a.length < 8) {
				  a = a + btn;
				  result.textContent = a;
				  finish = false;
			 } else result.textContent = a;
		} else {
			 if (btn === "." && b.includes(".")) {
				  result.textContent = b;
				  finish = false;
				  return btn;
			 }
			 if (b.length < 8) {
				  b = b + btn;
				  result.textContent = b;
				  finish = false;
			 } else result.textContent = b;
		}
  
		if (b === '' && sign === '' && finish) {
			 if (btn === "." && a.includes(".")) {
				  result.textContent = a;
				  return btn;
			 }
			 if (a.length < 8) {
				  a = a + btn;
				  result.textContent = a;
				  finish = false;
			 } else result.textContent = a;
		}
  
		console.log(a, sign, b);
		return;
  }
  


	if (action.includes(btn)) {


		if (a === '' && (btn === '*' || btn === '/')) return
		else {

			if (sign === '') {
				finish = false;
				sign = btn;
				result.textContent = sign;
				console.log(sign);
			 } else if (a !== '' && b !== '' && sign !== '' && action.includes(btn) ) {
				count();
				sign = btn;
				result.textContent = sign;
				console.log(sign);
			 } else if (sign !== '') {
				sign = btn;
				result.textContent = sign;
				finish = false;
				console.log(sign);
			 } else {
				count();
				finish = false;
				sign = btn;
				result.textContent = sign;
				console.log(sign);
			 }
			 
		}

	}



	if (btn === '=') {
		if (b ==='' && sign === ''){
			result.textContent = a;
		} else if(b ==='' && sign !== ''){
			result.textContent = sign;
		} else count();
}
}

const count = function() {
	switch (sign) {
		case '+':
            a = (parseFloat(a) + parseFloat(b)).toFixed(2);
            break;
        case '-':
            a = (parseFloat(a) - parseFloat(b)).toFixed(2);
            break;
        case '*':
            a = (parseFloat(a) * parseFloat(b)).toFixed(2);
            break;
        case '/':
            if (b === '0') {
                startVideo();
                result.textContent = '0';
                a = '';
                b = '';
                return;
            }
            a = (parseFloat(a) / parseFloat(b)).toFixed(2);
            break;
    }

	a = a.toString();
	b = '';
	sign = '';
	finish = true;
	result.textContent = a.slice(0, 8);;
	console.log (a, sign, b);
	
}

