function addTask() {
    const input = document.getElementById('todo-input');
    const taskText = input.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.classList.add('todo-item');

    const taskInput = document.createElement('input');
    taskInput.type = 'text';
    taskInput.value = taskText;
    taskInput.disabled = true;

    const actionsDiv = document.createElement('div');
    actionsDiv.classList.add('actions');

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('action-btn');
    editButton.onclick = function() {
        if (taskInput.disabled) {
            taskInput.disabled = false;
            editButton.textContent = 'Save';
        } else {
            taskInput.disabled = true;
            editButton.textContent = 'Edit';
        }
    };

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('action-btn');
    deleteButton.onclick = function() {
        taskItem.remove();
    };

    actionsDiv.appendChild(editButton);
    actionsDiv.appendChild(deleteButton);
    
    taskItem.appendChild(taskInput);
    taskItem.appendChild(actionsDiv);

    document.getElementById('todo-list').appendChild(taskItem);
    input.value = '';
}
