class Task {
    constructor(title, completed = false) {
        this.title = title;
        this.completed = completed;
    }

    markAsCompleted() {
        this.completed = true;
    }

    getTaskInfo() {
        return { title: this.title, completed: this.completed };
    }
}

const taskForm = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');
let tasks = [];
let filter = 'all'; // Valor inicial para mostrar todas las tareas

taskForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const taskTitle = document.getElementById('taskTitle').value;
    const task = new Task(taskTitle);
    tasks.push(task);

    renderTasks();
    taskForm.reset();
});

function renderTasks() {
    taskList.innerHTML = '';

    const filteredTasks = tasks.filter(task => {
        const taskInfo = task.getTaskInfo();
        if (filter === 'completed') return taskInfo.completed;
        if (filter === 'incomplete') return !taskInfo.completed;
        return true; // 'all' or any other case
    });

    filteredTasks.forEach((task, index) => {
        const taskInfo = task.getTaskInfo();
        const taskItem = document.createElement('li');
        taskItem.className = `list-group-item d-flex justify-content-between align-items-center ${taskInfo.completed ? 'list-group-item-success' : ''}`;
        taskItem.innerHTML = `
            ${taskInfo.title}
            ${taskInfo.completed 
                ? `<button class="btn btn-sm btn-danger" onclick="deleteTask(${index})">Eliminar</button>`
                : `<button class="btn btn-sm btn-success" onclick="completeTask(${index})">Completar</button>`
            }
        `;

        taskList.appendChild(taskItem);
    });
}

function completeTask(index) {
    tasks[index].markAsCompleted();
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function filterTasks(type) {
    filter = type;
    renderTasks();
}
