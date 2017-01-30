var menuElements = document.querySelectorAll('nav ul li a');

function clearMenuItemsActive() {
	for (var index = 0, size = menuElements.length; index < size; index++) {
		menuElements[index].parentElement.className = '';
	}
}

function setMenuItemActive (index) {
	clearMenuItemsActive();
	menuElements[index].parentElement.className = 'active';
}
