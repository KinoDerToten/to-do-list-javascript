onload = () => {
	const addTodo = document.getElementById("addTodo");
	const listTasks = document.getElementById("list-tasks");
	const filter = document.getElementById("filter");
	let tasks = [];

	addTodo.addEventListener("keyup", event => {
		if (event.keyCode == 13) {
			tasks.push(addTodo.value);
			newTask();
			addTodo.value = "";
		};
	});

	const newTask = () => {
		const li = document.createElement("li");
		const label = document.createElement("label")
		const span = document.createElement("span");
		const checkbox = document.createElement("input");
		const qtdTask = document.getElementById("qtd-tasks");
		const allTasks = document.getElementById("all-tasks");
		const tasksActive = document.getElementById("tasks-active");
		const tasksCompleted = document.getElementById("tasks-completed");
		const clearCompletedTasks = document.getElementById("clear-completed-tasks");
		checkbox.type = "checkbox";
		checkbox.setAttribute("id", "checkbox")
		span.classList.add("checkmark");
		label.setAttribute("id", "checked");
		label.classList.add("container-checked");
		for(i = 0; i < tasks.length; i++){
			label.innerText = tasks[i];
		};
		li.appendChild(label);
		label.appendChild(checkbox);
		label.appendChild(span);
		listTasks.insertBefore(li, filter);
		if(filter.style.display == ""){
			filter.style.display = "block";
		};
		checkbox.addEventListener("click", () => {
            label.classList.toggle("removido");
		});
		
		qtdTask.innerText = tasks.length;
	};
};