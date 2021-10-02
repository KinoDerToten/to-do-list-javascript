const newTask = document.getElementById("newTask");
const tasks = document.getElementById("tasks");

const addTask = (e) => {
    if (e.keyCode == 13) {
        let taskEl = document.createElement("li");
        let taskElContainer = document.createElement("label");
        let checkbox = document.createElement("input");
        let checkboxSpan = document.createElement("span");
        tasks.appendChild(taskEl);
        taskElContainer.setAttribute("id", "checked");
        taskElContainer.classList.add("container-checked")
        taskEl.appendChild(taskElContainer);
        checkbox.setAttribute("type","checkbox");
        checkboxSpan.classList.add("checkmark");
        taskElContainer.appendChild(checkbox);
        taskElContainer.appendChild(checkboxSpan);
        taskElContainer.innerHTML = newTask.value;
        newTask.value = "";
        
    }
};