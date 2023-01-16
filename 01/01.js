const h1DOM = document.getElementsByTagName('h1')[0];
const text = h1DOM.textContent;
const newH1 = text.trim().replace('Labas', 'Labas vakaras');
h1DOM.innerText = newH1;

const pDOM = document.getElementsByTagName('p')[0];
const text2 = pDOM.textContent;
pDOM.innerHTML = 'Šiandien gražus oras!';

const bDOM = document.getElementsByTagName('a')[0];
const text3 = bDOM.textContent;
bDOM.innerHTML = 'Spausk mane';
