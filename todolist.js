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
        taskElContainer.textContent = newTask.value;
        taskEl.appendChild(taskElContainer);
        checkbox.setAttribute("type","checkbox");
        checkboxSpan.classList.add("checkmark");
        taskElContainer.appendChild(checkbox);
        taskElContainer.appendChild(checkboxSpan);
        checkbox.addEventListener("click", () => {
            if (checkbox.checked == true) {
                taskElContainer.classList.add("removido");
            } else {
                taskElContainer.classList.remove("removido");
            }
        })
        newTask.value = "";
        
    }
};