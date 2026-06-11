function addTask(){
    const input = document.getElementById("display");
    if(input.value.trim() === "") return;
    const newTask = document.createElement('li');
    const taskList = document.getElementById("task");
    taskList.appendChild(newTask);
    newTask.textContent = input.value;
    input.value = "";
    deleteTask(newTask);
}

function deleteTask(newTask){
    const btn = document.createElement('button');
    btn.textContent = 'Delete';
    newTask.appendChild(btn);
    btn.onclick = function(){
        newTask.remove();
    }
}