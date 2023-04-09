const textarea = document.getElementById('editor');
// console.log(textarea);

const storedText = localStorage.getItem('text');

if (storedText) {
	textarea.value = storedText;
} else {
	let text = textarea.value;
	localStorage.setItem('text', text);
}

