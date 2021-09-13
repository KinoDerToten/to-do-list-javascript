function newTask(e) {
	if (e.keyCode == 13) {
		let task = document.getElementById("addTask").value;
		let novaTask = document.getElementById("newTask");
		let aTask = document.createTextNode(task);
		novaTask.appendChild(aTask);
	};
}