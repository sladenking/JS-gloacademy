const togglePopUp = () => {
	const popup = document.querySelector('.popup'),
		popupContent = popup.querySelector('.popup-content');

	let flyInterval, count = -40, animateStart = true;

	const startAnimate = () => {
		if (document.documentElement.clientWidth < 768) {
			popup.style.display = 'block';
			popupContent.style.top = '10%';
			return;
		}
		flyInterval = requestAnimationFrame(startAnimate);
		count++;
		if (count < 10) {
			popupContent.style.top = count * 2 + '%';
			popup.style.display = 'block';
		} else {
			count = -40;
			cancelAnimationFrame(flyInterval);
		}
	};

	document.body.addEventListener('click', event => {
		let target = event.target;

		if (target.classList.contains('popup-btn')) {
			if (!animateStart) {
				cancelAnimationFrame(flyInterval);
				animateStart = false;
			} else {
				flyInterval = requestAnimationFrame(startAnimate);
				animateStart = true;
			}
		}

		if (target.classList.contains('popup-close')) {
			popup.style.display = 'none';
		} else {
			target = target.closest('.popup-content');

			if (!target) {
				popup.style.display = 'none';
			}
		}
	});
};

export default togglePopUp;
