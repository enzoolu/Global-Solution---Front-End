document.addEventListener('DOMContentLoaded', function () {
	var btn = document.getElementById('btn');
	var mobileMenu = document.querySelector('.mobile-menu');

	btn.addEventListener('click', function () {
		mobileMenu.classList.toggle('open');
	});
});