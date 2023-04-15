var signinForm = document.getElementById('signin__form');
// console.log(signinForm); 
signinForm.addEventListener('submit', (e) => {
	var formData = new FormData(signinForm);
	var request = new XMLHttpRequest();
	request.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
	request.addEventListener('readystatechange', function() {
		if (request.readyState === request.DONE) {
			
			function restoreObject() {
              return JSON.parse(request.responseText);
            }
            console.log(restoreObject());
			const object = restoreObject();
            console.log(object);
			
			
			
		
		}
	});
	request.send(formData);
	e.preventDefault();
});  



//Пример из лекции 9

//signinForm.addEventListener('submit', (e) => {
//	var formData = new FormData(signinForm);
//	var request = new XMLHttpRequest();
//	request.open('POST', 'process.php');
//	request.addEventListener('readystatechange', function() {
//		if (this.readyState === request.DONE) {
//			
//			var data = JSON.parse(this.responseText);
//			var output = '<ul>';
//			for (var key in data) {
//				output += '<li><b>' + key + "</b>" + data[key] + '</li>';
//			}
//			output += '</ul>';
//			document.getElementById('result').innerHTML = output;
//		}
//	});
//	request.send(formData);
//	e.preventDefault();
//});  