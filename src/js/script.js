document.addEventListener('DOMContentLoaded', function () {
	initBurger();

	const body = document.querySelector('body');
	function initBurger(){
		const menuToggle = document.querySelector('.menu-toggle');
		const menuClose = document.querySelector('.menu-close');

		menuToggle.addEventListener('click', function () {
			body.classList.add('header-active');
		});

		menuClose.addEventListener('click', function () {
			body.classList.remove('header-active');
		});
	}
});