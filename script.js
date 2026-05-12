console.log("JS connected");

const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("taskList");

let tasks = [];

button.addEventListener("click", function () {

    console.log("Add Button clicked");
    
    const taskText = input.value.trim();
    if(taskText === "") {
        alert("Please enter a task");
        return;
    }
    tasks.push({
        id:Date.now(),
        text: taskText,
        completed:false
    })
    renderTasks();

    input.value = "";
});

function renderTasks() {
    list.innerHTML = "";
    tasks.forEach(function (task) {
        const li = document.createElement("li");
        li.textContent = task.text;

        if (task.completed) {
            li.classList.add("completed")
        }

        li.addEventListener("click", function () {
            console.log("Task clicked:", task.text);
            task.completed = !task.completed;

            renderTasks()
        })
        
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", function (event) {
            event.stopPropagation();
            console.log("Delete button clicked for task:", task.text);

            tasks = tasks.filter(function (taskItem) {
                return taskItem.id !== task.id;
            });

            renderTasks()
        })
        li.appendChild(deleteBtn);
        list.appendChild(li);
    })
}