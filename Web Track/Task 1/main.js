/**
 * create the scripting logic here ... 
 * 
 * Define the initial tasks
 * Good Idea to incorporate a small dashboard to show stats
 * Incorporate a dropdown feature or a way to update the status of each tasks
 * 
 */

// Define the initial tasks
let tasks = [
    {
        id: 1,
        task: 'This is the first task',
        status: 'In Progress'
    },
    {
        id: 2,
        task: 'This is the second task',
        status: 'Completed'
    },
    {
        id: 3,
        task: 'This is the third task',
        status: 'Not Started'
    }
];

function loadTask(task) {
    return `<div class="task-tile">
                <h3><strong>Task ID: </strong>${task.id}</h3>
                <p><strong>Task: </strong>${task.task}</p>
                <p><strong>Status: </strong>${task.status}</p>
            </div>`;
}

function loadAllTasks(tasks) {
    if (tasks.length === 0) {
        return `<p>No tasks to track</p>`;
    }
    return tasks.map(loadTask).join('');
}

// Load all tasks and insert them into the task-list div
document.addEventListener('DOMContentLoaded', () => {
    const taskListDiv = document.getElementById('task-list');
    taskListDiv.innerHTML = loadAllTasks(tasks);
});

// Add a new task
const addTaskForm = document.getElementById('task-form');
addTaskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const taskName = document.getElementById('task-name').value;
    const taskStatus = document.getElementById('task-status').value;

    if (taskName && taskStatus) {
        const newTask = {
            id: tasks.length + 1,
            task: taskName,
            status: taskStatus
        };
        tasks.push(newTask);
        document.getElementById('task-list').innerHTML = loadAllTasks(tasks);
    }
});

// Update a task
const updateTaskForm = document.getElementById('update-task-form');
updateTaskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const updateTaskId = document.getElementById('update-task-id').value;
    const updateTaskName = document.getElementById('update-task-name').value;
    const updateTaskStatus = document.getElementById('update-task-status').value;

    if (updateTaskId && updateTaskName && updateTaskStatus) {
        const taskId = parseInt(updateTaskId);
        const task = tasks.find(t => t.id === taskId);
        if (task) {
            task.task = updateTaskName;
            task.status = updateTaskStatus;
            document.getElementById('task-list').innerHTML = loadAllTasks(tasks);
        }
    }
});

// Delete a task
const deleteTaskForm = document.getElementById('delete-task-form');
deleteTaskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const deleteTaskId = document.getElementById('delete-task-id').value;

    if (deleteTaskId) {
        const taskId = parseInt(deleteTaskId);
        tasks = tasks.filter(t => t.id !== taskId);
        document.getElementById('task-list').innerHTML = loadAllTasks(tasks);
    }
});