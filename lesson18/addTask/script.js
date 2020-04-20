'use strict';

const newDays = document.querySelector('.days'),
	newDay = document.querySelector('.day'),
	newTime = document.querySelector('.time'),
	newYear = document.querySelector('.new-year'),
	newDate = new Date(),
	hours = newDate.getHours();

let ampm;

if (hours >= 5 && hours < 12) {
	ampm = 'AM';
	newDays.textContent = "Доброе утро";
} else if (hours >= 12 && hours < 18) {
	ampm = 'PM';
	newDays.textContent = "Добрый день";
} else if (hours >= 18 && hours < 24) {
	ampm = 'PM';
	newDays.textContent = "Добрый вечер";
} else if (hours >= 0 && hours < 5) {
	newDays.textContent = "Доброй ночи";
	ampm = 'AM';
}

const weekday = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
newDay.textContent = `Сегодня: ${weekday[newDate.getDay()]}`;

function format(data) {
	if (data < 10) {
		data = '0' + data;
	}
	return data;
}

newTime.textContent =
`Текущее время: ${format(newDate.getHours())}:${format(newDate.getMinutes())}:${format(newDate.getSeconds())} ${ampm}`;

const dateStop = new Date('01, 01, 2021').getTime();
const dateNow = new Date().getTime();
const timeRemaining = (dateStop - dateNow) / 1000;
const res =  Math.floor(timeRemaining / 60 / 60 / 24);
newYear.textContent = `До нового года осталось ${res} дней`;
