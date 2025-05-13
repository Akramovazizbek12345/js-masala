const button = document.getElementById('button')
button.style.backgroundColor ='red'
button.style.padding ='10px'
button.style.cursor ='pointer'
const box = document.getElementById('box')
const container = document.getElementById('container')
container.style.border = '3px solid black'
box.style.padding = '10px'
box.style.backgroundColor = 'green'


button.onclick = function () {
	if (box.style.backgroundColor === 'green') {
		box.style.backgroundColor = 'yellow'
		button.style.border = '2px dashed black'
		container.style.border = '3px solid red'
	} else {
		if (!button.style.border || button.style.border === 'none') {
			button.style.border = '2px dashed black'
		} else {
			button.style.border = 'none'
		}
	}
}
