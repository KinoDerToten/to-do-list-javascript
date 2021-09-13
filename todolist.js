let res = []

function newTask(e) {
	if (e.keyCode == 13) {
		let novaTask = document.getElementById('addTask').value;
		res.push(novaTask)
		console.log(res);
	}
}


