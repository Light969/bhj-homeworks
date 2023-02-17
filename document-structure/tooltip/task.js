const hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'));
hasTooltip[0].insertAdjacentHTML('afterBegin', '<div class="tooltip" style="left: 10; top: 10">Что бы вы хотели?</div>');
hasTooltip[0].onclick = function() {
	const tooltip = hasTooltip[0].querySelector('.tooltip');
	//console.log(tooltip);
	tooltip.classList.toggle('tooltip_active');
	return false;
}

hasTooltip[1].insertAdjacentHTML('afterBegin', '<div class="tooltip" style="left: 50; top: 10">Устройтесь на работу!</div>');
hasTooltip[1].onclick = function() {
	const tooltip = hasTooltip[1].querySelector('.tooltip');
	tooltip.classList.toggle('tooltip_active');
	return false;
}