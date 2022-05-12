let color_input = document.querySelector('.color_input');
let color = 'black';

color_input.addEventListener('change', e => {
	if (color === e.target.value) {
		return;
	}
	color = e.target.value;
})

let grid = document.querySelector('.grid')

function clearAll() {
	let cell = document.querySelectorAll('.cell');
	cell.forEach(element => {
		element.style.backgroundColor = 'white';
	})
}



function createGrid(x, y) {
	grid.replaceChildren()
	for (i = 0; i < x; i++) {
		const row = document.createElement('div');
		for (j = 0; j < y; j++) {
			const column = document.createElement('div');
			column.className = 'cell';
			column.addEventListener('mouseover', (e) => {
				if (e.ctrlKey === true) {
					if (e.target.style.backgroundColor !== color) {
						e.target.style.backgroundColor = color;
					}
				}
			})
			row.appendChild(column);
		}
		grid.appendChild(row);
	}
}
