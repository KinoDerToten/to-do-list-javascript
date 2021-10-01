let addTask = document.getElementById("addTask");
let tasks = document.getElementById("tasks");

const taskList = (e) => {
    if (e.keyCode == 13) {
        let task = document.createElement("li");
        task.innerText = addTask.value;
        tasks.appendChild(task);

        addTask.value = "";
    }
};