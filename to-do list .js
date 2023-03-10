
const input = document.querySelector('#input');
const submit = document.querySelector('#submit');
const list = document.querySelector('#list');

submit.addEventListener('click', function(e) {
	e.preventDefault();
	if (input.value !== '') {
		const task = document.createElement('li');
		task.innerHTML = `<div class="task">${input.value}</div><button class="delete">Delete</button>`;
		list.appendChild(task);
		input.value = '';
	}

	const deleteButtons = document.querySelectorAll('.delete');
	for (const button of deleteButtons) {
		button.addEventListener('click', function() {
			button.parentElement.remove();
		});
	}
});