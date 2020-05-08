const slider = () => {
	const slide = document.querySelectorAll('.portfolio-item'),
		dots = document.querySelector('.portfolio-dots'),
		slider = document.querySelector('.portfolio-content');

	for (let i = 0; i < slide.length; i++) {
		dots.insertAdjacentHTML('beforeend',
			`<li class="dot ${i === 0 ? 'dot-active' : ''}"></li>`);
	}

	const dot = document.querySelectorAll('.dot');

	let currentSlide = 0,
		interval;

	const prevSlide = (elem, i, strClass) => {
		elem[i].classList.remove(strClass);
	};

	const nextSlide = (elem, i, strClass) => {
		elem[i].classList.add(strClass);
	};

	const autoPlaySlide = () => {

		prevSlide(slide, currentSlide, 'portfolio-item-active');
		prevSlide(dot, currentSlide, 'dot-active');
		currentSlide++;
		if (currentSlide >= slide.length) {
			currentSlide = 0;
		}
		nextSlide(slide, currentSlide, 'portfolio-item-active');
		nextSlide(dot, currentSlide, 'dot-active');

	};

	const startSlide = (time = 3000) => {
		interval = setInterval(autoPlaySlide, time);
	};

	const stopSlide = () => {
		clearInterval(interval);
	};

	slider.addEventListener('click', event => {
		event.preventDefault();

		const target = event.target;

		if (!target.matches('.portfolio-btn, .dot')) {
			return;
		}

		prevSlide(slide, currentSlide, 'portfolio-item-active');
		prevSlide(dot, currentSlide, 'dot-active');

		if (target.matches('.next')) {
			currentSlide++;
		} else if (target.matches('.prev')) {
			currentSlide--;
		} else if (target.matches('.dot')) {
			dot.forEach((elem, i) => {
				if (elem === target) {
					currentSlide = i;
				}
			});
		}

		if (currentSlide >= slide.length) {
			currentSlide = 0;
		} else if (currentSlide < 0) {
			currentSlide = slide.length - 1;
		}

		nextSlide(slide, currentSlide, 'portfolio-item-active');
		nextSlide(dot, currentSlide, 'dot-active');

	});

	slider.addEventListener('mouseover', event => {
		if (event.target.matches('.portfolio-btn') ||
		event.target.matches('.dot')) {
			stopSlide();
		}
	});

	slider.addEventListener('mouseout', event => {
		if (event.target.matches('.portfolio-btn') ||
		event.target.matches('.dot')) {
			startSlide();
		}
	});

	startSlide();
};

export default slider;
