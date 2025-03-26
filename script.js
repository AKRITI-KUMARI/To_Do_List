document.getElementById("addTaskBtn").addEventListener("click", () => {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    
    if (taskInput.value.trim() !== "") 
    {
      const li = document.createElement("li");
      const left = document.createElement("div");
      const right = document.createElement("div");
      const taskSpan = document.createElement("span");
      taskSpan.textContent = taskInput.value;
      taskSpan.className = "task";
      
      const completeBtn = document.createElement("input");
      completeBtn.type = "checkbox";
      completeBtn.addEventListener("click", () => {
        taskSpan.classList.toggle("task-completed");
      });
  
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", () => {
        li.remove();
      });
  
      left.appendChild(completeBtn);
      left.appendChild(taskSpan);
      right.appendChild(deleteBtn);
      li.appendChild(left);
      li.appendChild(right);
      taskList.appendChild(li);
  
      taskInput.value = "";
    } 
    else 
    {
      alert("Please enter a task!");
    }
}); 