const hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'));
hasTooltip.forEach(tool => tool.insertAdjacentHTML('afterend', '<div class="tooltip" style="left: 0; top: 0">Проверка</div>'));

hasTooltip.forEach(tool => {tool.onclick = function() {
	const coordinates = tool.getBoundingClientRect();
	let x = coordinates.x;
	let y = coordinates.y;
	// console.log(x);
	// console.log(y);
	const title = tool.getAttribute('title');
	// console.log(title);
	const tooltip = tool.nextElementSibling;
	// console.log(tooltip);
	tooltip.classList.toggle('tooltip_active');
	tooltip.setAttribute('style', `left: ${x}px; top: ${y + 20}px`);
	tooltip.textContent = `${title}`;
	// console.log(hasTooltip[0]);
	return false;}});
	
