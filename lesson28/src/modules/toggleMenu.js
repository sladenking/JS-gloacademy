const toggleMenu = () => {

	const scroll = elem => {
		event.preventDefault();
		console.log(elem);
		const link = elem.href.split('#')[1];
		document.querySelector('#' + link).scrollIntoView({
			behavior: 'smooth',
			block: 'start',
			inline: 'center'
		});
	};

	const menu = document.querySelector('menu');

	document.body.addEventListener('click', event => {
		const target = event.target;

		if (target.matches('.menu, #menu__img, #menu__name')) {
			menu.classList.add('active-menu');
		} else if (target.tagName === 'A' && target.className !== 'close-btn') {
			scroll(target);
			menu.classList.remove('active-menu');
		} else if (target.classList.contains('close-btn') || target !== menu && target.tagName !== 'LI') {
			menu.classList.remove('active-menu');
		}
	});
};

export default toggleMenu;