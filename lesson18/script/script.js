'use strict';

window.addEventListener('DOMContentLoaded', () => {
	//Timer
	function countTimer(deadline) {
		const timerHours = document.querySelector('#timer-hours'),
			timerMinutes = document.querySelector('#timer-minutes'),
			timerSeconds = document.querySelector('#timer-seconds');

		function getTimeRemaining() {
			const dateStop = new Date(deadline).getTime(),
				dateNow = new Date().getTime(),
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

		const updateClock = setInterval(() => {

			const timer = getTimeRemaining();

			timerHours.textContent = formatTime(timer.hours);
			timerMinutes.textContent = formatTime(timer.minutes);
			timerSeconds.textContent = formatTime(timer.seconds);

			if (timer.timeRemaining < 0) {
				clearInterval(updateClock);
				timerHours.textContent = '00';
				timerMinutes.textContent = '00';
				timerSeconds.textContent = '00';
			}
		}, 1000);
	}

	countTimer('21 April 2020');
});
