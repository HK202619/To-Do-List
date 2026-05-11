console.log("JS connected");
const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("taskList");
button.addEventListener("click", function () {

    console.log("Add Button clicked");
    
    const taskText = input.value.trim();
    if(taskText === "") {
        alert("Please enter a task");
        return;
    }
    addTask(taskText);

    input.value = "";
});

function addTask(taskText) {
    
    console.log("Task to add:", taskText);

    const li = document.createElement("li");
    li.textContent = taskText;   
    li.addEventListener("click", function () {        
        console.log("Task clicked:", taskText);
        li.classList.toggle("completed");
    })

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function (event) {
        event.stopPropagation();
        console.log("Delete button clicked for task:", taskText);
        li.remove();
    })

    list.appendChild(li);
    li.appendChild(deleteBtn);     
}