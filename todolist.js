const newTask = document.getElementById("newTask");
const tasks = document.getElementById("tasks");

const addTask = (e) => {
    if (e.keyCode == 13) {
        const taskEl = document.createElement("li");
        const taskElContainer = document.createElement("label");
        const checkbox = document.createElement("input");
        const checkboxSpan = document.createElement("span");
        const remove = document.createElement("button");
        const imgButton = document.createElement("img");
        tasks.appendChild(taskEl);
        taskElContainer.setAttribute("id", "checked");
        taskElContainer.classList.add("container-checked")
        taskElContainer.textContent = newTask.value;
        taskEl.appendChild(taskElContainer);
        checkbox.setAttribute("type","checkbox");
        checkboxSpan.classList.add("checkmark");
        taskElContainer.appendChild(checkbox);
        taskElContainer.appendChild(checkboxSpan);
        remove.classList.add("button-remove");
        taskElContainer.appendChild(remove);
        imgButton.setAttribute("src","./assets/remove.png");
        remove.appendChild(imgButton);
        checkbox.addEventListener("click", () => {
            if (checkbox.checked == true) {
                taskElContainer.classList.add("removido");
            } else {
                taskElContainer.classList.remove("removido");
            }
        })
        remove.addEventListener("click", () => {
            tasks.removeChild(taskEl);
        })
        newTask.value = "";
        
    }
};