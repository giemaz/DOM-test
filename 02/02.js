let list = document.getElementsByTagName('li');

for (const item of list) {
	const print = item.textContent.toUpperCase();
	console.log(print);
}
