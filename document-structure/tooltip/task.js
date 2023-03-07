const hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'));
hasTooltip.forEach(tool => tool.insertAdjacentHTML('afterBegin', '<div class="tooltip" style="left: 0; top: 0">Проверка</div>'));

hasTooltip.forEach(tool => {tool.onclick = function() {
	const coordinates = tool.getBoundingClientRect();
	let x = coordinates.x;
	let y = coordinates.y;
	// console.log(x);
	// console.log(y);
	const title = tool.getAttribute('title');
	// console.log(title);
	const tooltip = tool.querySelector('.tooltip');
	// console.log(tooltip);
	tooltip.classList.toggle('tooltip_active');
	// const style = tooltip.getAttribute('style');
    // console.log(style);
	tooltip.setAttribute('style', `left: ${x}, top: ${y}`);
	//style.left = x;
	//style.top = y;
	tooltip.textContent = `${title}`;
    console.log(tooltip);
	return false;}});