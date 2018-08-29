const container = document.querySelector('.container'),
	rent = document.querySelector('.rent'),
	buy = document.querySelector('.buy'),
	buttons = document.querySelector('button');

function roi() {
	let div = document.createElement('p'),
		x = rent.value * 12 / buy.value * 100,
		score = Math.round(x * 100) / 100;
	container.appendChild(div);

	if (score > 0) {
		div.innerHTML = 'Twój zwrot z inwestycji wyniesie ' + score + '%'
	} else {
		div.innerHTML = 'Wpisz poprawne dane'
	}
};

buttons.addEventListener('click', roi);
