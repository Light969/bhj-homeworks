const textarea = document.getElementById('editor');
const storedText = localStorage.getItem('text');

textarea.addEventListener('keyup', onKey);
function onKey(event) {
  let text = textarea.value;
  localStorage.setItem('text', text); 
}

if (storedText) {
	textarea.value = storedText;
};