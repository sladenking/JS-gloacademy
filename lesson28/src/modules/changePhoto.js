const changePhoto = () => {
	const photosContainer = document.querySelector('.command>.container>.row');

	photosContainer.addEventListener('mouseover', event => {
		const target = event.target;

		if (target.classList.contains('command__photo')) {
			target.src = target.dataset.img;
		}
	});

	photosContainer.addEventListener('mouseout', event => {
		const target = event.target;

		if (target.classList.contains('command__photo')) {
			target.src = `${target.currentSrc.slice(0, -5)}.jpg`;
		}
	});

};

export default changePhoto;
