'use strict';

const doUni = docs => new Promise((resolve, reject) => {
	if (docs) {
		console.log('Рассмотрение документов...');
		setTimeout(() => {
			if (Math.random() > 0.3) {
				resolve('Принят');
			} else {
				reject('Отказано');
			}
		}, 3000);
	} else {
		reject('Отказано, не хватает документов');
	}
});

const documents = ['Паспорт', 'Аттестат'];

const doArmy = docs => new Promise((resolve, reject) => {
	if (docs) {
		console.log('Военком думает...');
		setTimeout(() => {
			if (docs === 'Принят') {
				resolve('Отсрочка');
				console.log('Отсрочка');
			} else {
				reject('Повестка');
			}
		}, 3000);
	} else {
		reject('Повестка');
	}
});

const doParty = docs => {
	console.log('Отпраздновали отсрочку');
	return Promise.resolve(docs);
};

const doWork = () => new Promise((resolve, reject) => {
	console.log('Директор думает...');

	setTimeout(() => {
		if (Math.random() > 0.3) {
			resolve('Приглашен на собеседование');
			console.log('Приглашен на собеседование');
		} else {
			reject('Отказано, иди гуляй');
		}
	}, 3000);
});


doUni(documents)
	.then(result => {
		console.log(result);
		return result;
	}, reason => console.log(reason))
	.then(doArmy)
	.then(doParty)
	.then(doWork)
	.catch(reason => console.error(reason))
	.finally(() => console.warn('anyway'));

// const doWorking = company => new Promise((resolve, reject) => {
// 	const time = Math.ceil(Math.random() * 5000);
// 	setTimeout(() => {
// 		if (time % 5) {
// 			resolve(company);
// 		} else {
// 			reject(company);
// 		}
// 	}, time);
// });

// const hh = doWorking('HH'),
// 	yandex = doWorking('yandex'),
// 	ozone = doWorking('ozone'),
// 	google = doWorking('google');

// Promise.race([hh, yandex, ozone, google])
// 	.then(result => console.log(`Пригласили в ${result}`))
// 	.catch(result => console.error(`отказано от ${result}`));
