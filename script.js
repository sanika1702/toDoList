


document.getElementById('addTask').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task-item');

        
        taskDiv.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        taskDiv.appendChild(removeButton);

        document.getElementById('taskList').appendChild(taskDiv);

        taskInput.value = "";

        removeButton.addEventListener('click', function() {
            taskDiv.remove();
        });
    } 
});

document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('addTask').click();
    }
});
