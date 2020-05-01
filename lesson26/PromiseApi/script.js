'use strict';

const output = document.getElementById('output');

const getData = url => new Promise((resolve, reject) => {
	const request = new XMLHttpRequest();
	request.open('GET', url);
	request.addEventListener('readystatechange', () => {
		if (request.readyState !== 4) {
			return;
		}
		if (request.status === 200) {
			const response = JSON.parse(request.responseText);
			resolve(response);
		} else {
			reject(request.statusText);
		}
	});
	request.send();
});

const outputPhoto = data => {

	data.forEach(item => {
		output.insertAdjacentHTML('beforebegin',
			`<h4>${item.title}</h4>
			<img src="${item.thumbnailUrl}">`);
	});

};

const urlPhoto = 'https://jsonplaceholder.typicode.com/photos';

const oneImg = getData(`${urlPhoto}/1`),
	twoImg = getData(`${urlPhoto}/2`);

Promise.all([oneImg, twoImg])
	.then(outputPhoto)
	.catch(error => console.error(error));

// getData(urlPhoto)
// 	.then(outputPhoto)
// 	.catch(error => console.error(error));
