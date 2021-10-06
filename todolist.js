onload = () => {
	const addTodo = document.getElementById("addTodo");
	const listTasks = document.getElementById("list-tasks");
	let tasks = [];

	addTodo.addEventListener("keyup", event => {
		if (event.keyCode == 13) {
			tasks.push(addTodo.value);
			newTask();
			addTodo.value = "";
		};
	});

	const newTask = () => {
		listTasks.innerHTML += `
			<li>
				<label class="container-checked" id="checked">
					<input type="checkbox" id="checkbox">
					<span class="checkmark"></span>
				</label>
			</li>
		`;
		const checked = document.getElementById("checked");
		const checkbox = document.getElementById("checkbox");
		for(task in tasks){
			checked.innerText = tasks[task];
		};
	};
};