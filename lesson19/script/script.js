'use strict';

window.addEventListener('DOMContentLoaded', () => {

	//Timer
	const countTimer = () => {
		const timerHours = document.querySelector('#timer-hours'),
			timerMinutes = document.querySelector('#timer-minutes'),
			timerSeconds = document.querySelector('#timer-seconds');

		function getTimeRemaining() {
			const dateNow = new Date(),
				dateStop = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate() + 1),
				timeRemaining = (dateStop - dateNow) / 1000,
				seconds = Math.floor(timeRemaining % 60),
				minutes = Math.floor((timeRemaining / 60) % 60),
				hours = Math.floor(timeRemaining / 60 / 60);
			return { timeRemaining, hours, minutes, seconds };
		}

		function formatTime(data) {
			if (data < 10) {
				data = '0' + data;
			}
			return data;
		}

		setInterval(() => {

			const timer = getTimeRemaining();

			timerHours.textContent = formatTime(timer.hours);
			timerMinutes.textContent = formatTime(timer.minutes);
			timerSeconds.textContent = formatTime(timer.seconds);

		}, 1000);
	};

	countTimer();

	//Menu
	const toggleMenu = () => {

		const btnMenu = document.querySelector('.menu'),
			menu = document.querySelector('menu'),
			closeBtn = document.querySelector('.close-btn'),
			menuItems = menu.querySelectorAll('ul>li');

		const handlerMenu = () => {
			menu.classList.toggle('active-menu');
			// if (!menu.style.transform || menu.style.transform === `translate(-100%)`) {
			// 	menu.style.transform = `translate(0)`;
			// } else {
			// 	menu.style.transform = `translate(-100%)`;
			// }
		};

		btnMenu.addEventListener('click', handlerMenu);

		closeBtn.addEventListener('click', handlerMenu);

		menuItems.forEach(elem => elem.addEventListener('click', handlerMenu));
	};

	toggleMenu();

	//PopUp
	const popUp = () => {
		const popup = document.querySelector('.popup'),
			popupContent = popup.querySelector('.popup-content'),
			popUpBtn = document.querySelectorAll('.popup-btn'),
			popUpClose = document.querySelector('.popup-close');

		let flyInterval,
			count = -40,
			animateStart = false;

		const startAnimate = function() {
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

		popUpBtn.forEach(elem => elem.addEventListener('click', () => {
			if (animateStart) {
				animateStart = false;
				cancelAnimationFrame(flyInterval);
			} else {
				animateStart = true;
				flyInterval = requestAnimationFrame(startAnimate);
			}
		}));

		popUpClose.addEventListener('click', () => popup.style.display = 'none');
	};

	popUp();
});
