var signinForm = document.getElementById('signin__form');
var welcome = document.getElementById('welcome');
// console.log(signinForm); 
// console.log(welcome);
var signin = document.getElementById('signin');
var user = document.getElementById('user_id');

// localStorage.removeItem('user');

	if (localStorage.getItem('user') !== null) {
		//console.log(localStorage.getItem('user'));
					
		welcome.className = "welcome welcome_active";
		signin.className = "signin";
		user.insertAdjacentHTML('afterBegin', `${localStorage.getItem('user')}`);
	};
 
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

		    let id = object.user_id;
            console.log(id);
		    console.log(typeof(id));
            let success = object.success;
		    console.log(success);
		    console.log(typeof(success));

			if (success === true) {
				localStorage.setItem('user', id);
				
		        welcome.className = "welcome welcome_active";
		        signin.className = "signin";
		        user.insertAdjacentHTML('afterBegin', `${localStorage.getItem('user')}`);
	
			} else {
				alert('Неверный логин/пароль');
			};
		}
	});
	request.send(formData);
	e.preventDefault();
});    



