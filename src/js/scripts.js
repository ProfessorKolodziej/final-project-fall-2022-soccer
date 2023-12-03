// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

document.addEventListener('DOMContentLoaded', () => {
	const modals = document.querySelectorAll('.modal');
	const modalContents = document.querySelectorAll('.modal-content');
	const footers = document.querySelectorAll('.player-footer');

	function openModal(modalId) {
		document.getElementById(modalId).style.display = 'flex';
	}


	function closeModal() {
		modals.forEach(modal => {
			modal.style.display = 'none';
		});
	}

	footers.forEach(footer => {
		footer.addEventListener('click', function (event) {
			event.stopPropagation();
			const modalId = 'modal' + this.dataset.player;
			openModal(modalId);
		});
	});

	window.addEventListener('click', closeModal);


	modalContents.forEach(content => {
		content.addEventListener('click', (event) => {
			event.stopPropagation();
		});
	});
});
