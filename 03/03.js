const h1DOM = document.getElementsByTagName('h1')[0];
const liDOM = document.querySelectorAll('li');
const lion = h1DOM.classList.add('simba');
// h1DOM.classList.toggle('limba');
// h1DOM.className = 'kimba';

for (const item of liDOM) {
	item.classList.add('darzove');
}
