const scrollHead = () => {

	const scroll = elem => {
		event.preventDefault();
		const link = elem.href.split('#')[1];
		document.getElementById(link).scrollIntoView({
			behavior: 'smooth',
			block: 'start',
			inline: 'center'
		});
	};

	const btnScrolling = document.querySelector('a[href="#service-block"]');
	btnScrolling.addEventListener('click', event => {
		event.preventDefault();
		scroll(btnScrolling);
	});
};

export default scrollHead;
