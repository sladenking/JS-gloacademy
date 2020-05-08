const inputDigits = () => {
	const calcItems = document.querySelector('.calc-block');
	calcItems.addEventListener('input', event => {
		const target = event.target;

		if (target.tagName === 'INPUT') {
			target.value = target.value.replace(/\D/gi, '');
		}
	});
};

export default inputDigits;

