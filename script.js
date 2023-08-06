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
			a = a + btn;
			result.textContent = a;
			finish = false;
	  } else {
			if (btn === "." && b.includes(".")) {
				 result.textContent = b;
				 finish = false;
				 return btn;
			}
			b = b + btn;
			result.textContent = b;
			finish = false;
	  }

	  if (b === '' && sign === '' && finish) {
			if (btn === "." && a.includes(".")) {
				 result.textContent = a;
				 return btn;
			}
			a = a + btn;
			result.textContent = a;
			finish = false;
	  }


		console.log (a, sign, b);
		return;
	
	}

	 

	if (action.includes(btn)) {
		if (sign === '') {
			finish = false;
			sign = btn;
      	result.textContent = sign;
   		console.log(sign);
    	} 
		else {
      	count();
			finish = false;
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
	result.textContent = a;
	console.log (a, sign, b);
	
}

