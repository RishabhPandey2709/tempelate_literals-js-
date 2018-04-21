const  name = 'jack';
const age = 32;
const job = 'web design';
const city = 'varanasi';
let html;

//without template string (ES5)

//html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + ' </li><li>Job: '+ job+ ' </li><li>City: '+ city +' </li></ul>';

/*html = '<ul>' +
  	   '<li>Name: ' + name + '</li>' +
  	   '<li>Age: ' + age + '</li>' +
  	   '<li>job: ' + job + '</li>' +
  	   '<li>city: ' + city + '</li>' +
  	   '</ul>'; */


//with template (ES6)


function hello(){

                 return 'hel'
                }

html = ` <ul>
		<li>Name: ${name}</li>
		<li>Age: ${age}</li>
		<li>Job: ${job}</li>
		<li>City: ${city}</li>
		<li>${hello()}</li>
		<li>${2+2}</li>
		<li>${age > 31 ? 'Over 32' : 'Under 32'}<li>
		</ul>
		`;

		document.body.innerHTML = html;