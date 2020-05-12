'use strict';

class SliderCarousel {
	constructor({ main, wrap, next, prev, position = 0, slidesToShow = 3, infinity = false, responsive = [] }) {
		this.main = document.querySelector(main);
		this.wrap = document.querySelector(wrap);
		this.slides = document.querySelector(wrap).children;
		this.next = document.querySelector(next);
		this.prev = document.querySelector(prev);
		this.slidesToShow = slidesToShow;
		this.options = {
			position,
			infinity,
			widthSlide: Math.floor(100 / this.slidesToShow),
			maxPosition: this.slides.length - this.slidesToShow
		};
		this.responsive = responsive;
	}

	init() {
		this.addClass();
		this.addStyle();

		if (this.prev && this.next) {
			this.controlSlider();
		} else {
			this.addArrow();
			this.controlSlider();
		}

		if (this.responsive) {
			this.responseInit();
		}
	}

	responseInit() {
		const slidesToShowDefault = this.slidesToShow;
		const allResponse = this.responsive.map(item => item.breakpoint);
		const maxResponse = Math.max(...allResponse);

		const checkResponse = () => {
			const widthWindow = document.documentElement.clientWidth;
			if (widthWindow <  maxResponse) {
				for (let i = 0; i < allResponse.length; i++) {
					if (widthWindow < allResponse[i]) {
						this.slidesToShow = this.responsive[i].slidesToShow;
						this.options.widthSlide = Math.floor(100 / this.slidesToShow);
						this.addStyle();
					} else {
						this.slidesToShow = slidesToShowDefault;
						this.options.widthSlide = Math.floor(100 / this.slidesToShow);
						this.addStyle();
					}
				}
			}
		};
		checkResponse();

		window.addEventListener('resize', checkResponse);
	}

	addClass() {
		this.main.classList.add('slider');
		this.wrap.classList.add('slider__wrap');
		for (const item of this.slides) {
			item.classList.add('slider__item');
		}
	}

	addStyle() {
		let style = document.getElementById('sliderCarousel-style');
		if (!style) {
			style = document.createElement('style');
			style.id = 'sliderCarousel-style';
		}

		style.textContent = `
			.slider {
				overflow: hidden !important;
				display: flex !important;
				justify-content: space-around !important;
				align-items: center !important;
			}
			.slider__wrap {
				display: flex !important;
				transition: transform 0.5s !important;
				will-change: transform !important;
				align-items: center !important;
			}
			.slider__item {
				flex: 0 0 ${this.options.widthSlide}% !important;
				margin: auto 0 !important;
			}
			.slider-button {
				z-index: 10;
				height: 85px;
				cursor: pointer;
				background: transparent;
				border: 20px solid transparent;
			}
			.slider__next {
				border-right-color: #19b5fe
			}
			.slider__prev {
				border-left-color: #19b5fe
			}
			.slider-button:focus,
			.slider-button:hover {
				background: transparent !important
			}
		`;

		document.head.appendChild(style);
	}

	controlSlider() {
		this.prev.addEventListener('click', this.prevSlider.bind(this));
		this.next.addEventListener('click', this.nextSlider.bind(this));
	}

	prevSlider() {
		if (this.options.infinity || this.options.position > 0) {
			--this.options.position;
			if (this.options.position < 0) {
				this.options.position = this.options.maxPosition;
			}
			this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
		}
		console.log(this.options.position);
	}

	nextSlider() {
		if (this.options.infinity || this.options.position < this.options.maxPosition) {
			++this.options.position;
			if (this.options.position > this.options.maxPosition) {
				this.options.position = 0;
			}
			this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
		}
		console.log(this.options.position);
	}

	addArrow() {
		this.prev = document.createElement('button');
		this.next = document.createElement('button');

		this.prev.className = 'slider__prev slider-button';
		this.next.className = 'slider__next slider-button';

		this.main.insertAdjacentElement('afterbegin', this.prev);
		this.main.insertAdjacentElement('beforeend', this.next);
	}

}

const carousel = new SliderCarousel({
	main: '.companies-slider-structure',
	wrap: '.companies-hor',
	slidesToShow: 3,
	infinity: true,
	responsive: [
		{
			breakpoint: 1024,
			slidesToShow: 3
		},
		{
			breakpoint: 768,
			slidesToShow: 2
		},
		{
			breakpoint: 576,
			slidesToShow: 1
		}
	]
});

carousel.init();


